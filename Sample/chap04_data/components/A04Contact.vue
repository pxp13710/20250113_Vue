<script>
import A04ContactForm from './children/A04ContactForm.vue';
import A04ContactList from './children/A04ContactList.vue';

// const baseURL = 'https://sample.bmaster.kro.kr/contacts_long/search/'
const baseURL = 'http://localhost:8000/contacts_long/search/';

export default {
  components: { A04ContactForm, A04ContactList },
  data() {
    return {};
  },
};
</script>

<template>
  <h3>A04 ContactList</h3>

  <div class="mb-5">
    <A04ContactForm></A04ContactForm>
    <A04ContactList></A04ContactList>
  </div>
</template>
