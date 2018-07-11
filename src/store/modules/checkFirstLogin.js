import cloudFunction from '@/client/cloudFunction'

const state = {
  studentDetails: {}
}
const actions = {
  async getstudentDetails ({ commit }, id) {
    console.log('id in action = ', id)
    commit('SET_STUDENT_DETAILS', await cloudFunction.getstudentDetails(id))
  }
}
const mutations = {
  SET_STUDENT_DETAILS (state, payload) {
    console.log('payload in mutations = ', payload)
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
