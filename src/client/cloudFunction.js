import axios from 'axios'

const cloudFunctionClient = axios.create({
  baseURL: 'https://us-central1-vuex-firebase-58fb5.cloudfunctions.net/app/'
})

export default {
  async getstudentDetails (id) {
    let data = {}
    await cloudFunctionClient.get('/getstudentDetails', {
      params: {
        id
      }
    }).then((response) => {
      data = response.data.data
    }).catch((err) => {
      console.log('err = ', err)
      data = {
        err: err.message
      }
    })
    console.log('data before return')
    console.log(data)
    return data
  },
  async setPassword (id, pass) {
    await cloudFunctionClient.get('/setPassword', {
      params: {
        id,
        pass
      }
    }).then((response) => {
      console.log('res = ', response)
    }).catch((err) => {
      console.log('err = ', err)
    })
  },
  async setFirstLogin (id) {
    await cloudFunctionClient.get('/setFirstLogin', {
      params: {
        id
      }
    }).then((response) => {
      console.log('res = ', response)
    }).catch((err) => {
      console.log('err = ', err)
    })
  }
}
