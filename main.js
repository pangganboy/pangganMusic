import App from './App'
import uView from '@/uni_modules/uview-ui'
import Cache from 'utils/cache.js'
import store from './store'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$Cache = Cache;
Vue.use(uView)
App.mpType = 'app'
const app = new Vue({
    ...App,
	Cache,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif