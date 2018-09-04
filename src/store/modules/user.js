import cloudFunction from '@/client/cloudFunction'

const state = {
  studentDetails: {},
  students: [],
  currentTA: ''
}
const actions = {
  async verifyUserLogin ({ commit }, params) {
    const res = await cloudFunction.verifyUserLogin(params)
    commit('SET_STUDENT_DETAILS', res.data)
    return res
  },
  async setPassword ({ commit }, params) {
    await cloudFunction.setPassword(params)
  },
  async fetchAllStudents ({ commit }) {
    commit('SET_ALL_STUDENT', await cloudFunction.getAllStudents())
  },
  async createStudent ({ commit }, params) {
    let res = await cloudFunction.createStudent(params)
    return res
  },
  async removeStudent ({ commit }, params) {
    let res = await cloudFunction.removeStudent(params)
    return res.success
  },
  async setCurrentTA ({ commit }, params) {
    commit('SET_CURRENT_TA', params)
  },
  async getUserDetails ({ commit }, params) {
    let res = await cloudFunction.getUserDetails(params)
    return res
  }
}
const mutations = {
  SET_STUDENT_DETAILS: (state, payload) => {
    state.studentDetails = payload
  },
  SET_ALL_STUDENT: (state, payload) => {
    state.students = payload
  },
  SET_CURRENT_TA: (state, payload) => {
    state.currentTA = payload
  }
}
const getters = {
  getStudentDetails: (state) => state.studentDetails,
  getAllStudents: (state) => state.students,
  getCurrentTA: (state) => state.students.find((std) => std.ID === state.currentTA)
}
export default {
  state,
  actions,
  mutations,
  getters
}
