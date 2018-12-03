/* eslint-disable handle-callback-err */

import PouchDB from 'pouchdb-browser'

let databases = {}
let databaseName = ''
let moduleName = ''
let ongoingCachePromises = {}
let publicCacheRoute = true

const getDatabase = (name = null) => {
  if (!databases[name]) {
    databases[name] = new PouchDB(`${databaseName}${name ? `_${name}` : ''}`, {
      adapter: 'idb',
      revs_limit: 1
    })
  }

  return databases[name]
}

/**
 * This function returns a promise(which refreshes cache) if ongoingCachePromise is not set
 * or else(when ongoingCachePromise is set), it returns the same in-progress promise
 */
function getCachePromise (axios, store, cacheRoute, dbVersionHeaderKey, userId) {
  if (!ongoingCachePromises[userId]) {
    let cachePromise = fetchCacheData(axios, store, cacheRoute, dbVersionHeaderKey, userId)

    ongoingCachePromises[userId] = cachePromise
      .then(() => {
        resetOngoingCachePromise(userId)
      })
      .catch((error) => {
        resetOngoingCachePromise(userId)

        throw error
      })
  }

  return ongoingCachePromises[userId]
}

function resetOngoingCachePromise (userId) {
  ongoingCachePromises[userId] = null
}

function createModule (dbVersion, cacheData, userId, store, axios, dbVersionHeaderKey, cacheRoute) {
  return {
    state: {
      cache: cacheData,
      db_version: dbVersion,
      updating_cache: false,
      user_id: userId
    },
    actions: {
      reset: ({getters}) => {
        return getCachePromise(axios, store, cacheRoute, dbVersionHeaderKey, getters.userId)
      },
      updateCachedUserId: ({commit}, id) => {
        commit(`UPDATE_CACHED_USER_ID`, id)
      }
    },
    getters: {
      cacheData: state => (key) => {
        return state.cache[key]
      },
      cachedUserId: state => state.user_id,
      dbVersion: state => state.db_version,
      updatingCache: state => state.updating_cache,
      userId: state => state.user_id
    },
    mutations: {
      'UPDATE_DB_VERSION' (state, version) {
        state.db_version = version
      },
      'UPDATE_CACHE' (state, cache) {
        state.cache = cache
        state.updating_cache = false
      },
      'UPDATE_CACHE_START' (state) {
        state.updating_cache = true
      },
      'UPDATE_CACHED_USER_ID' (state, userId) {
        if (state.user_id !== userId) {
          state.user_id = userId

          if (publicCacheRoute || userId) {
            getDatabase(userId).allDocs({
              include_docs: true,
              keys: ['db_version', 'cache']
            })
              .then(result => {
                let dbVersion = !result.rows[0].error ? result.rows[0].doc.data : null
                let cacheData = !result.rows[1].error ? result.rows[1].doc.data : {}

                state.cache = cacheData

                if (dbVersion !== state.db_version) {
                  state.db_version = dbVersion
                  getCachePromise(axios, store, cacheRoute, dbVersionHeaderKey, userId)
                }
              })
          } else {
            state.cache = {}
          }
        }
      }
    },
    namespaced: true
  }
}

function fetchCacheData (axios, store, cacheRoute, dbVersionHeaderKey, userId) {
  return new Promise((resolve, reject) => {
    if (publicCacheRoute || userId) {
      store.commit(`${moduleName}/UPDATE_CACHE_START`)

      axios.get(cacheRoute)
        .then(response => {
          let dbVersion = response.headers[dbVersionHeaderKey]

          store.commit(`${moduleName}/UPDATE_DB_VERSION`, dbVersion)

          store.commit(`${moduleName}/UPDATE_CACHE`, response.data)

          getDatabase(userId).get('cache')
            .then(doc => {
              doc.data = response.data

              getDatabase(userId).put(doc)
            })
            .catch(error => {
              getDatabase(userId).put({
                _id: 'cache',
                data: response.data
              })
            })

          getDatabase(userId).get('db_version')
            .then(doc => {
              doc.data = dbVersion
              getDatabase(userId).put(doc)
            })
            .catch(error => {
              getDatabase(userId).put({
                _id: 'db_version',
                data: dbVersion
              })
            })

          resolve()
        })
        .catch(error => {
          reject(error)
        })
    } else {
      resolve()
    }
  })
}

function initAxiosInterceptor (store, axios, dbVersionHeaderKey, cacheRoute) {
  axios.interceptors.response.use((response) => {
    let userId = store.getters[`${moduleName}/userId`]

    if (publicCacheRoute || userId) {
      let parser = document.createElement('a')
      let regex = `^/?${cacheRoute}$`

      parser.href = response.config.url

      if (!parser.pathname.match(regex)) {
        let dbVersion = response.headers[dbVersionHeaderKey]

        if (store.getters[`${moduleName}/dbVersion`] !== dbVersion) {
          getCachePromise(axios, store, cacheRoute, dbVersionHeaderKey, userId)
        }
      }
    }

    return response
  })
}

export function initCacheModule (store, axios, dbVersionHeaderKey, cacheRoute, userId, dbName, storeModuleName, isCacheRoutePublic) {
  databaseName = dbName
  moduleName = storeModuleName
  publicCacheRoute = isCacheRoutePublic

  return new Promise((resolve) => {
    if (isCacheRoutePublic || userId) {
      getDatabase(userId).allDocs({
        include_docs: true,
        keys: ['db_version', 'cache']
      })
        .then(result => {
          let dbVersion = !result.rows[0].error ? result.rows[0].doc.data : ''
          let cacheData = !result.rows[1].error ? result.rows[1].doc.data : {}

          let module = createModule(dbVersion, cacheData, userId, store, axios, dbVersionHeaderKey, cacheRoute)

          store.registerModule(moduleName, module)

          initAxiosInterceptor(store, axios, dbVersionHeaderKey, cacheRoute)

          resolve(module)
        })
    } else {
      let module = createModule('', {}, userId, store, axios, dbVersionHeaderKey, cacheRoute)

      store.registerModule(moduleName, module)

      initAxiosInterceptor(store, axios, dbVersionHeaderKey, cacheRoute)

      resolve(module)
    }
  })
}
