import {initCacheModule} from './utils'

const VueCachePlugin = {
  /**
   * Install cache plugin
   *
   * @param {Vue} Vue
   * @param {Object} options
   */
  install: (Vue, options = {}) => {
    if (Vue._uam_vuejs_cache_installed) {
      return
    }

    let axios = options.axios
    let cacheRoute = options.cacheRoute
    let databaseName = options.databaseName || '_uam_vuejs_cache'
    let dbVersionHeaderKey = options.dbVersionHeaderKey
    let isCacheRoutePublic = options.isCacheRoutePublic
    let store = options.store
    let storeModuleName = options.storeModuleName || 'uam_cache'
    let userId = options.userId || null

    Vue._cacheInitialized = initCacheModule(store, axios, dbVersionHeaderKey, cacheRoute, userId, databaseName, storeModuleName, isCacheRoutePublic)

    Vue._uam_vuejs_cache_installed = true
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueCachePlugin)
}

export default VueCachePlugin
