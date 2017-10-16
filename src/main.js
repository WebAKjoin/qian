// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import element from 'element-ui'
import store from "./store/store.js"
import loading from "./components/loading.vue"
import sode from "./components/sode.vue"
import 'element-ui/lib/theme-default/index.css'

Vue.use(element)
Vue.use(vueAxios, axios)
var router = new Router({
	routes: [
        { path:'/',redirect:"/loading" },
        { name: "loading", path: "/loading", component:loading},
        { name: "sode", path: "/sode", component:sode},
    ]
})
Vue.use(Router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
