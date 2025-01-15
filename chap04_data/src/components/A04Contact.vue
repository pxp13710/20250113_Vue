<script>
import A04ContactForm from './children/A04ContactForm.vue';
import A04ContactList from './children/A04ContactTable.vue';

// const baseURL = 'https://sample.bmaster.kro.kr/contacts_long/search/'
const baseURL = 'http://localhost:8000/contacts_long/search/';

export default {
  components: { A04ContactForm, A04ContactList },
  data() {
    return {
      contactList: [],
    };
  },
  methods: {
    getContactList(evt) {
      fetch(baseURL + evt)
        .then((resp) => resp.json())
        .then((data) => this.contactList = data)
        .catch((error) => console.error(error))
    }
  }
};
</script>

<template>
  <h3>A04 ContactList</h3>

  <div class="mb-5">
    <A04ContactForm @searchEvent="getContactList"></A04ContactForm>
    <A04ContactList :contactList="contactList"></A04ContactList>
  </div>
</template>
