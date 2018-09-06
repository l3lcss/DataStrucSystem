import db from '../config/firebase'

export default {
  async verifyUserLogin (params) {
    let prepareResults = {}
    const userGet = await db.collection('member').doc(params.id).get()
    if (userGet.exists) {
      const userData = userGet.data()
      if (userData.FIRST_LOGIN) {
        prepareResults = {
          results: {
            success: 1,
            message: 'Student is First Login.',
            data: {
              ...userData
            }
          }
        }
      } else if (params.pass === userData.password) {
        prepareResults = {
          results: {
            success: 1,
            message: `Welcome <b>${params.id}</b> EIEI :)`,
            data: {
              ...userData
            }
          }
        }
      } else {
        prepareResults = {
          results: {
            success: 0,
            message: 'Invalid password.',
            data: {
              ...userData
            }
          }
        }
      }
    } else {
      prepareResults = {
        results: {
          success: 0,
          message: `haven't Username <b>${params.id}</b>`
        }
      }
    }
    return prepareResults
  },
  async setPassword (params) {
    await db.collection('member').doc(params.id).update({
      FIRST_LOGIN: false,
      password: params.pass
    })
  },
  async fetchAllUsers () {
    let users = []
    let usersList = await db.collection('member').orderBy('ID', 'asc').get()
    usersList.forEach(async doc => {
      await users.push({
        ...doc.data()
      })
    })
    return users
  },
  async createUser (params) {
    let prepareResults = {}
    const userGet = await db.collection('member').doc(params.id).get()
    if (userGet.exists) {
      prepareResults = {
        results: {
          success: 0,
          message: 'User ID are exists.'
        }
      }
    } else {
      let newUser = {}
      if (params.identity === 'TA') {
        newUser = {
          FIRST_LOGIN: true,
          ID: parseInt(params.id),
          anotherName: '',
          identity: params.identity,
          name: params.name,
          schedules: []
        }
      } else {
        newUser = {
          ID: parseInt(params.id),
          name: params.name,
          FIRST_LOGIN: true,
          identity: params.identity
        }
      }
      await db.collection('member').doc(params.id).set(newUser)
      prepareResults = {
        results: {
          success: 1,
          message: 'create User completed.'
        },
        status: 200
      }
    }
    return prepareResults
  },
  async removeUser (id) {
    await db.collection('member').doc(id.toString()).delete()
    return {
      success: 1,
      message: 'success!'
    }
  },
  async getUserDetails (id) {
    const dataRef = await db.collection('member').doc(id).get()
    const data = dataRef.data()
    return data
  },
  async setReservTime (params, userLogin) {
    await db.collection('member').doc(userLogin.ID.toString()).update({
      schedule: {
        TA: params.TA,
        time: params.time
      }
    })
    const taRef = await db.collection('member').doc(params.TA).get()
    let taData = taRef.data()

    console.log(taData, 'taData')
    console.log(taData.schedules, 'taData.schedules')

    let index = taData.schedules.findIndex(obj => obj.time === params.time)
    taData.schedules[index] = {
      ID: userLogin.ID,
      name: userLogin.name,
      time: params.time
    }

    await db.collection('member').doc(params.TA).update({schedules: taData.schedules})
    return {
      TA: params.TA,
      time: params.time
    }
  }
}
