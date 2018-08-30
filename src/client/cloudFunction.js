import axios from 'axios'

const cloudFunctionClient = axios.create({
  baseURL: 'https://us-central1-vuex-firebase-58fb5.cloudfunctions.net/app/',
  timeout: 10000,
  headers: { 'Authorization': 'iUYU4l60Ai3ZU2KtTL13wvsGwjKUVEIU' }
})

export default {
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
  }
}
