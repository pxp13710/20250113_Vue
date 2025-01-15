<script>
import A01ChildComp from './children/A01ChildComp.vue';

export default {
  components: { A01ChildComp, },
  data() {
    return {};
  },
};
</script>

<template>
  <h3>A01 Component</h3>

  <div class="mb-5">
    <A01ChildComp></A01ChildComp>
  </div>
</template>
