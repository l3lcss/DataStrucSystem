// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMouseParallax from 'vue-mouse-parallax'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import store from './store'

Vue.use(Buefy)
Vue.use(VueMouseParallax)
Vue.config.productionTip = false

Vue.prototype.$alertError = (message) => {
  Vue.prototype.$toast.open({
    duration: 5000,
    message,
    position: 'is-top-right',
    type: 'is-danger'
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
