<script>
import A01Axios from './components/A01Axios.vue';
import A02Modal from './components/A02Modal.vue';

export default {
  components: { A01Axios, A02Modal }
}
</script>

<template>
  <div class="m-3">
    <h1>Chap06 Axios</h1>

    <A02Modal></A02Modal>
    <A01Axios></A01Axios>
  </div>
</template>
