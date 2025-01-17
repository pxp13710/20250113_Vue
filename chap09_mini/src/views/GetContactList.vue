<script>
export default {
  computed: {
    contactList() {
      return this.$store.state.contactStore.contactList
    }
  },
  methods: { },
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
          <td><img :src="contact.photo" alt="Photo" width="70" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
