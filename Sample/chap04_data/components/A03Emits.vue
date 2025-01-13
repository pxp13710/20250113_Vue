<script>
import A03EmitChild from './children/A03EmitChild.vue';
export default {
  components: { A03EmitChild },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <h3>A03 Emits</h3>

  <div class="mb-3">
    Number: <br />
    Number: <br />
    Name: <br />
    Array: <br />
    User: <br />
  </div>

  <hr />

  <div class="mb-5">
    <A03EmitChild></A03EmitChild>
  </div>
</template>
