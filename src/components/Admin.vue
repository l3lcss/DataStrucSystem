<template>
  <div>
    <div class="columns is-mobile is-centered header">
      <div class="column is-10 load is-size-5 has-text-weight-bold" style="color: rgb(247, 165, 203);">
        STUDENTS MANAGEMENT
      </div>
    </div>
    <div class="columns is-mobile is-centered">
      <div class="column is-10 load">
        <div style="width:90%;">
          <b-table
            :data="getAllStudents"
            :paginated="isPaginated"
            :loading="isLoading"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :default-sort-direction="defaultSortDirection"
            hoverable
            class="load"
          >
            <template slot-scope="props">
              <b-table-column field="id" label="id" sortable centered>
                {{ props.row.ID }}
              </b-table-column>
              <b-table-column field="name" label="name" sortable centered>
                {{ props.row.name }}
              </b-table-column>
              <b-table-column field="password" label="password" sortable centered>
                {{ props.row.password }}
              </b-table-column>
              <b-table-column field="identity" label="identity" sortable centered>
                {{ props.row.identity }}
              </b-table-column>
              <b-table-column centered>
                <div class="button is-danger is-small" @click="confirmCustomDelete(props.row.ID)">Delete</div>
              </b-table-column>
            </template>
          </b-table>
        </div>
      </div>
    </div>
    <fab
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      @add="add"
    ></fab>
    <b-modal :active.sync="isComponentModalActive">
      <modal-create-user />
    </b-modal>
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
import { mapActions, mapGetters } from 'vuex'
import fab from 'vue-fab'
import ModalCreateUser from './ModalCreateUser'
export default {
  name: 'Admin',
  data () {
    return {
      isLoading: false,
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 10,
      isStriped: true,
      bgColor: '#c9788c',
      position: 'button-right',
      mainIcon: 'add_circle',
      fabActions: [
        {
          name: 'add',
          icon: 'add_circle_outline'
        }
      ],
      isComponentModalActive: false
    }
  },
  components: {
    fab,
    ModalCreateUser
  },
  methods: {
    ...mapActions([
      'fetchAllStudents',
      'removeStudent'
    ]),
    confirmCustomDelete (ID) {
      this.$dialog.confirm({
        title: 'Deleting Student',
        message: `Are you sure you want to <strong>delete</strong> this <br />Student: ID : <strong>${ID}</strong> ? This action cannot be undo.`,
        confirmText: 'Delete Account',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: async () => {
          this.isLoading = true
          if (await this.removeStudent(ID)) {
            this.$alert('remove successful.', 'is-success')
          }
          await this.fetchAllStudents()
          this.isLoading = false
        }
      })
    },
    add () {
      console.log('add')
      this.isComponentModalActive = true
    }
  },
  computed: {
    ...mapGetters([
      'getAllStudents'
    ])
  },
  async mounted () {
    const sr = ScrollReveal({
      duration: 400,
      delay: 200
    })
    sr.reveal('.load', { delay: 0, origin: 'top' }, 200)
    await this.fetchAllStudents()
    console.log(this.getAllStudents, 'this.getAllStudents')
  }
}
</script>

<style scoped>
.header {
  margin-top:5%;
  background-color: rgba(255, 255, 255, 0.3);
  color: rgb(247, 165, 203);
}
.pagination-link{
  color: red !important;
}
</style>
