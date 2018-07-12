import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FirstLogin from '@/components/FirstLogin'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/first-login',
      name: 'FirstLogin',
      component: FirstLogin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
