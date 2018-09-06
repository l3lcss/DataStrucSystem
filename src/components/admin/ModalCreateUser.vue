<template>
  <div class="modal-card" style="width:auto;">
    <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Create</p>
      </header>
      <section class="modal-card-body">
        <b-field label="ID">
          <b-input
            v-model="id"
            placeholder="id"
            required>
          </b-input>
        </b-field>

        <b-field label="Name">
          <b-input
            v-model="name"
            placeholder="name"
            required>
          </b-input>
        </b-field>

        <b-field label="Identity">
          <b-select
            v-model="identity"
            :expanded = true
            placeholder="Identity"
            icon="user"
            icon-pack="fas">
            <option value="TA">TA</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </b-select>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Close</button>
        <button class="button is-primary" @click="confirm()">Confirm</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ModalCreateUser',
  data () {
    return {
      id: '',
      name: '',
      isLoading: false,
      identity: null
    }
  },
  methods: {
    ...mapActions([
      'createUser',
      'fetchAllUsers'
    ]),
    async confirm () {
      this.isLoading = true
      let res = await this.createUser({ id: this.id, name: this.name, identity: this.identity })
      if (res.success) {
        this.$alert(res.message, 'is-success')
      } else {
        this.$alert(res.message, 'is-danger')
      }
      await this.fetchAllUsers()
      this.$parent.close()
      this.isLoading = false
    }
  }
}
</script>

<style scoped>
.header {
  background-color: rgb(255, 255, 255);
  color: rgb(247, 165, 203);
}
</style>
