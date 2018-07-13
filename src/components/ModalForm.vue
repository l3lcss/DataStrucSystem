<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Define your password</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Password">
          <b-input
            type="password"
            password-reveal
            placeholder="Your password"
            required>
          </b-input>
        </b-field>

        <b-field label="Re-Password">
          <b-input
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
export default {
  name: 'ModalForm',
  methods: {
    setData () {
      console.log('setData()')
      // this.$parent.close()
    }
  }
}
</script>
