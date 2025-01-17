<script>
export default {
  computed: {
    contact() {
      return this.$store.state.contactStore.contact;
    }
  },
  methods: {
    addContact() {
      if(this.contact.name.trim() !== '' && this.contact.tel.trim() !== '') {
        this.$store.dispatch('contactStore/addContactAction', this.contact);
      }
      this.$router.push({name: 'list'});
    }
  },
  created() {
    this.$store.commit('contactStore/clearContact');
  }
}
</script>

<template>
  <div class="container-fluid">
    <h3>Add Contact</h3>

    <div class="mb-3">
      Name: {{ contact.name }} 
      <input type="text" class="form-control" name="name" 
        :value="contact.name" 
        @input="(evt) => $store.commit('contactStore/changeContact', evt.target)" /><br />
      Tel: {{ contact.tel }}
      <input type="text" class="form-control" name="tel"
        :value="contact.tel" 
        @input="(evt) => $store.commit('contactStore/changeContact', evt.target)" /><br />
      Address: {{ contact.address }}
      <input type="text" class="form-control" name="address"
        :value="contact.address" 
        @input="(evt) => $store.commit('contactStore/changeContact', evt.target)" /><br />
    </div>
    
    <button class="btn btn-outline-primary" @click="addContact">ADD</button>
  </div>
</template>
