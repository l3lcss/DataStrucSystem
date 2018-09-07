<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-4" style="margin: auto;">
        <img src="../../assets/ta.png">
      </div>

      <div class="column is-8">
        <center>
          <p class="tableHead"> ตารางเวลา </p>
          <table class="table">
            <thead>
              <th>Time</th>
              <th>Name</th>
              <th>จอง</th>
            </thead>
            <tbody>
              <tr v-for="(schedule, key) in userDetails" :key="key">
                <th>{{schedule.time}}</th>
                <td v-if="schedule.name">{{schedule.name}}</td>
                <td v-else></td>
                <td v-if="schedule.ID && schedule.ID !== getUserLogin.ID">
                  <b-field>
                    <b-radio-button
                      native-value="Disabled"
                      disabled>
                      Disabled
                    </b-radio-button>
                  </b-field>
                </td>
                <td v-else>
                  <b-field>
                    <b-radio-button
                      v-model="schedule.nativeValue"
                      :native-value="true"
                      type="is-success"
                      @input="reservEventYes(schedule.time)">
                      <b-icon icon="check"></b-icon>
                      <span>Yes</span>
                    </b-radio-button>

                    <b-radio-button
                      v-model="schedule.nativeValue"
                      :native-value="false"
                      type="is-danger"
                      @input="reservEventNo(schedule.time)">
                      <b-icon icon="close"></b-icon>
                      <span>No</span>
                    </b-radio-button>
                  </b-field>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TA1',
  data () {
    return {
      userDetails: []
    }
  },
  methods: {
    ...mapActions([
      'getUserDetails',
      'setReservTime',
      'setIsloadingDashboard'
    ]),
    reservEventYes (value) {
      this.$dialog.confirm({
        type: 'is-primary',
        title: 'Infomation',
        message: `ต้องการจองเวลา <strong>${value}</strong> ใช่หรือไม่`,
        onConfirm: async () => {
          this.setIsloadingDashboard(true)
          await this.setReservTime({time: value, TA: '666', status: true})
          await this.initData()
        }
      })
    },
    reservEventNo (value) {
      this.$dialog.confirm({
        type: 'is-primary',
        title: 'Infomation',
        message: `ต้องการยกเลิกการจองเวลา <strong>${value}</strong> ใช่หรือไม่`,
        onConfirm: async () => {
          this.setIsloadingDashboard(true)
          await this.setReservTime({time: value, TA: '666', status: false})
          await this.initData()
        }
      })
    },
    async initData () {
      this.setIsloadingDashboard(true)
      const res = await this.getUserDetails('666')
      const userLogin = await this.getUserLogin
      this.userDetails = res.schedules.map((time) => {
        let schedules = {}
        if (userLogin.hasOwnProperty('schedule') && userLogin.schedule.TA === '666' && userLogin.schedule.time === time.time) {
          schedules = {
            ...time,
            nativeValue: true
          }
        } else {
          schedules = {
            ...time,
            nativeValue: false
          }
        }
        return schedules
      })
      this.setIsloadingDashboard(false)
    }
  },
  computed: {
    ...mapGetters([
      'getUserLogin'
    ])
  },
  async mounted () {
    await this.initData()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kanit');
.imgA {
  border: 1px solid red;
  width: 30%;
}
.table {
  font-family: 'Kanit', sans-serif;
}
th,td {
   text-align:center;
}
.control {
  text-align:center;
}
.tableHead {
  font-family: 'Kanit', sans-serif;
  font-size: 100%;
  color:#fff;
  padding-bottom: 5%;
}
</style>
