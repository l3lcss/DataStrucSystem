<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Define your password</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Password">
          <b-input
            v-model="pass"
            type="password"
            password-reveal
            placeholder="Your password"
            required>
          </b-input>
        </b-field>

        <b-field label="Re-Password">
          <b-input
            v-model="re_pass"
            type="password"
            password-reveal
            placeholder="Your password"
            required>
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Close</button>
        <button class="button is-primary" @click="setData()">Confirm</button>
      </footer>
    </div>
  </div>
</template>

<script>
import cloudFunction from '@/client/cloudFunction'
import { mapGetters } from 'vuex'
export default {
  name: 'ModalForm',
  data () {
    return {
      pass: '',
      re_pass: ''
    }
  },
  methods: {
    async setData () {
      if (this.pass === this.re_pass) {
        await cloudFunction.setPassword(this.studentDetails.studentID, this.pass)
        await cloudFunction.setFirstLogin(this.studentDetails.studentID)
        this.$parent.close()
      } else {
        this.$alertError('รหัสผ่านไม่เหมือนกัน')
      }
    }
  },
  computed: {
    ...mapGetters({
      studentDetails: 'getstudentDetails'
    })
  }
}
</script>
