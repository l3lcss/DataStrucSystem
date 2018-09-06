// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMouseParallax from 'vue-mouse-parallax'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import store from './store'
import VueCarousel from 'vue-carousel'
import Firestore from 'vue-firestore'

Vue.use(Firestore)
Vue.use(VueCarousel)
Vue.use(Buefy)
Vue.use(VueMouseParallax)
Vue.config.productionTip = false

Vue.prototype.$alert = (message, type) => {
  Vue.prototype.$toast.open({
    queue: false,
    duration: 3000,
    message,
    position: 'is-top-right',
    type
  })
}

Vue.prototype.$dialogAlert = (type, title, message) => {
  Vue.prototype.$dialog.confirm({
    type,
    title,
    message
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
