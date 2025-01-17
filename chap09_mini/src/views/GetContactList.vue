<script>
// npm i vuejs-paginate-next
import paginate from 'vuejs-paginate-next';

export default {
  components: { paginate },
  computed: {
    contactList() {
      return this.$store.state.contactStore.contactList
    },
    page() {
      // 101 / 5 => 21
      return Math.ceil(this.contactList.totalcount / this.contactList.pagesize)
    }
  },
  methods: {
    clickCallback(no) {
      this.$store.dispatch('contactStore/getContactListAction', {no, size: 5})
    }
  },
  mounted() {
    this.$store.dispatch('contactStore/getContactListAction', {no: 1, size: 5})
  },
}
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>No</th><th>Name</th><th>Tel</th><th>Address</th><th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contactList.contacts" :key="contact.no">
          <td>{{ contact.no }}</td>
          <td><RouterLink :to="{name: 'contact', params: {no: contact.no}}"> {{ contact.name }} </RouterLink></td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
          <td>
            <RouterLink :to="{name: 'photo', params: {no: contact.no}}">
              <img :src="contact.photo" alt="Photo" width="70" />
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      <paginate
        :page-count="page"
        :page-range="10"
        :margin-pages="0"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      >
      </paginate>
    </p>
  </div>
</template>
