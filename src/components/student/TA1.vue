<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-4" style="margin:auto;">
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
                  <div class="field">
                    <b-switch
                    type="is-success"
                    disabled>
                    </b-switch>
                  </div>
                </td>
                <td v-else>
                  <div class="field">
                    <b-switch
                    type="is-success"
                    @input="reservEvent(schedule.time)">
                    </b-switch>
                  </div>
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
  name: 'TA1',
  data () {
    return {
      userDetails: []
    }
  },
  methods: {
    ...mapActions([
      'getUserDetails'
    ]),
    reservEvent (value) {
      console.log('reserv', value)
    }
  },
  async mounted () {
    const res = await this.getUserDetails(999)
    this.userDetails = res.data.schedules
    console.log(this.userDetails, 'userDetails')
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
.tableHead {
  font-family: 'Kanit', sans-serif;
  font-size: 100%;
  color:#fff;
  padding-bottom: 5%;
}
</style>
