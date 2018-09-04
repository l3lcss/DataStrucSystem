<template>
  <div class="Card">
    <div class="header load is-size-4 has-text-weight-bold">
      SCHEDULES
    </div>

    <center>
      <table class="table">
        <thead>
          <th>Time</th>
          <th>ID</th>
          <th>Name</th>
        </thead>
        <tbody>
          <tr v-for="(schedule, key) in TADetails.schedules" :key="key">
            <th>{{schedule.time}}</th>
            <td>{{schedule.ID}}</td>
            <td>{{schedule.name}}</td>
          </tr>
        </tbody>
      </table>
    </center>
    <div style="margin-top:5%;">&nbsp;</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ModalDetailsTA',
  data () {
    return {
      TADetails: {}
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentTA'
    ])
  },
  mounted () {
    this.TADetails = this.getCurrentTA
    console.log(this.TADetails, 'this.TADetails')
  }
}
</script>

<style scoped>
.Card {
  background-color: aliceblue;
}
.table {
  box-shadow: 0px 1px 6px 0px rgb(66, 66, 66);
  margin-top: 5%;
}
.header {
  padding: 3% 0px 3% 10%;
  border-bottom: 2px solid rgb(66, 66, 66);
  width: 50%;
}
</style>
