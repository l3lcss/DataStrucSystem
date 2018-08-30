import cloudFunction from '@/client/cloudFunction'

const state = {
  studentDetails: {}
}
const actions = {
  async verifyUserLogin ({ commit }, params) {
    const res = await cloudFunction.verifyUserLogin(params)
    commit('SET_STUDENT_DETAILS', res.data)
    return res
  },
  async setPassword ({ commit }, params) {
    await cloudFunction.setPassword(params)
  }
}
const mutations = {
  SET_STUDENT_DETAILS: (state, payload) => {
    state.studentDetails = payload
  }
}
const getters = {
  getStudentDetails: (state) => state.studentDetails
}
export default {
  state,
  actions,
  mutations,
  getters
}
