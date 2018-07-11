import Vue from 'vue'
import Vuex from 'vuex'
import checkFirstLogin from './modules/checkFirstLogin'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      checkFirstLogin
    }
  })
}

export default store
