import cloudFunction from '@/client/cloudFunction'
const state = {
  studentDetails: []
}
const actions = {
  async getstudentDetails ({ commit }) {
    commit('SET_STUDENT_DETAILS', await cloudFunction.getstudentDetails())
  }
}
const mutations = {
  SET_STUDENT_DETAILS (state, payload) {
    state.studentDetails = payload
  }
}
const getters = {
  getstudentDetails: state => state.studentDetails
}
export default {
  state,
  actions,
  mutations,
  getters
}
