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
                <td v-if="schedule.name">
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
                      native-value = 1
                      type="is-success"
                      @input="reservEventYes(schedule.time)">
                      <b-icon icon="check"></b-icon>
                      <span>Yes</span>
                    </b-radio-button>

                    <b-radio-button
                      v-model="schedule.nativeValue"
                      native-value = 0
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
import { mapActions } from 'vuex'
export default {
  name: 'TA3',
  data () {
    return {
      userDetails: []
    }
  },
  methods: {
    ...mapActions([
      'getUserDetails',
      'setReservTime'
    ]),
    reservEventYes (value) {
      this.$dialog.confirm({
        type: 'is-primary',
        title: 'Infomation',
        message: `ต้องการจองเวลา <strong>${value}</strong> ใช่หรือไม่`,
        onConfirm: () => {
          this.setReservTime({time: value, TA: '888'})
        }
      })
    },
    reservEventNo (value) {
      console.log('reservEventNo', value)
    }
  },
  async mounted () {
    const res = await this.getUserDetails('888')
    this.userDetails = res.schedules.map((time) => {
      return {
        ...time,
        nativeValue: 0
      }
    })
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
