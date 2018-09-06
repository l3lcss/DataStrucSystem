import user from '@/resources/user'
const state = {
  userLogin: {},
  allUsers: [],
  currentTA: ''
}
const actions = {
  async verifyUserLogin ({ commit }, params) {
    const { results } = await user.verifyUserLogin(params)
    if (results.success) {
      commit('SET_USER_LOGIN', results.data)
    }
    return results
  },
  async setPassword ({ commit }, params) {
    await user.setPassword(params)
  },
  async fetchAllUsers ({ commit }) {
    commit('SET_ALL_USERS', await user.fetchAllUsers())
  },
  async createUser ({ commit }, params) {
    let { results } = await user.createUser(params)
    return results
  },
  async removeUser ({ commit }, params) {
    let { success } = await user.removeUser(params)
    return success
  },
  async setCurrentTA ({ commit }, params) {
    commit('SET_CURRENT_TA', params)
  },
  async getUserDetails ({ commit }, ID) {
    let results = await user.getUserDetails(ID)
    return results
  },
  async setReservTime ({commit}, params) {
    let newSchedule = await user.setReservTime(params, state.userLogin)
    commit('SET_NEW_SCHEDULE', newSchedule)
  }
}
const mutations = {
  SET_USER_LOGIN: (state, payload) => {
    state.userLogin = payload
  },
  SET_ALL_USERS: (state, payload) => {
    state.allUsers = payload
  },
  SET_CURRENT_TA: (state, payload) => {
    state.currentTA = payload
  },
  SET_NEW_SCHEDULE: (state, payload) => {
    state.userLogin.schedule = payload
  }
}
const getters = {
  getUserLogin: (state) => state.userLogin,
  getAllUsers: (state) => state.allUsers,
  getCurrentTA: (state) => state.allUsers.find((std) => std.ID === state.currentTA)
}
export default {
  state,
  actions,
  mutations,
  getters
}
