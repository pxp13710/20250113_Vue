<script>
export default {
  props: ['no'],
  computed: {
    contact() {
      return this.$store.state.contactStore.contact;
    }
  },
  methods: {
    deleteContact() {
      this.$store.dispatch('contactStore/deleteContactAction', this.no);
      this.$router.push({name: 'list'});
    }
  },
  mounted() {
    this.$store.dispatch('contactStore/getContactAction', this.no);
  },
}
</script>

<template>
  <div class="container-fluid">
    <h3>Get Contact</h3>

    <div class="mb-3">
      Name: <input type="text" class="form-control" disabled  :value="contact.name" /><br />
      Tel: <input type="text" class="form-control" disabled   :value="contact.tel" /><br />
      Address: <input type="text" class="form-control" disabled   :value="contact.address" /><br />
    </div>
    
    <div>
      <button class="btn btn-outline-primary" @click="$router.push({name: 'update'})">수정</button>
      <button class="btn btn-outline-primary"
        @click="deleteContact">삭제</button>
    </div>
  </div>
</template>
