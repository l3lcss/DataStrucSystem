import axios from 'axios'

const cloudFunctionClient = axios.create({
  baseURL: 'https://us-central1-vuex-firebase-58fb5.cloudfunctions.net/app/'
})

export default {
  async getstudentDetails () {
    let data = []
    await cloudFunctionClient.get('/getstudentDetails')
      .then(function (response) {
        data = response.data.data.students
      })
    return data
  }
}
