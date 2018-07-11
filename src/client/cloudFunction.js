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
      data = response.data.data.resStudentList
    }).catch((err) => {
      console.log('err = ', err)
    })
    return data
  }
}
