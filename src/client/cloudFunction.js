import axios from 'axios'

const cloudFunctionClient = axios.create({
  baseURL: 'https://us-central1-vuex-firebase-58fb5.cloudfunctions.net/app',
  timeout: 30000,
  headers: { 'Authorization': 'iUYU4l60Ai3ZU2KtTL13wvsGwjKUVEIU' }
})

export default {
  async getUserDetails (params) {
    try {
      const { data: { results } } = await cloudFunctionClient.get('/getUserDetails', {
        params: {
          id: params
        }
      })
      return results
    } catch (error) {
      console.log(error)
      return error
    }
  },
  async verifyUserLogin (params) {
    try {
      const { data: { results } } = await cloudFunctionClient.get('/verifyUserLogin', {
        params: {
          id: params.id,
          pass: params.pass
        }
      })
      return results
    } catch (error) {
      console.log(error)
      return error
    }
  },
  async setPassword (params) {
    try {
      await cloudFunctionClient.post('/setPassword', {}, {
        data: {
          id: params.id,
          pass: params.pass
        }
      })
    } catch (error) {
      console.log(error)
      return error
    }
  },
  async getAllStudents () {
    try {
      let { data: { results: { data: { students } } } } = await cloudFunctionClient.get('/getAllStudents')
      return students
    } catch (error) {
      console.log(error)
      return error
    }
  },
  async createStudent (params) {
    try {
      const { data: { results } } = await cloudFunctionClient.post('/createStudent', {}, {
        data: {
          id: params.id,
          name: params.name,
          identity: params.identity
        }
      })
      return results
    } catch (error) {
      console.log(error)
      return error
    }
  },
  async removeStudent (id) {
    try {
      const { data: { results } } = await cloudFunctionClient.delete('/removeStudent', {
        params: {
          id
        }
      })
      return results
    } catch (error) {
      console.log(error)
      return error
    }
  },
  async setReservTime (params, studentID) {
    try {
      const { data: { results } } = await cloudFunctionClient.post('/setReservTime', {}, {
        data: {
          time: params.time,
          TA: params.TA,
          studentID: studentID.toString()
        }
      })
      return results
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
