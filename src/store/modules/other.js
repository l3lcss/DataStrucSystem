const state = {
  isloadingDashboard: false
}
const actions = {
  async setIsloadingDashboard ({ commit }, params) {
    commit('SET_IS_LOADING_DASHBOARD', params)
  }
}
const mutations = {
  SET_IS_LOADING_DASHBOARD: (state, payload) => {
    state.isloadingDashboard = payload
  }
}
const getters = {
  getIsloadingDashboard: (state) => state.isloadingDashboard
}
export default {
  state,
  actions,
  mutations,
  getters
}
