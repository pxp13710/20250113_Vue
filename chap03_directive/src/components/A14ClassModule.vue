<script>
export default {
  data() {
    return {
      msg: 'Hello World!!',
      isChecked: true,
      num: 0,
    };
  },
  computed: {
    classOne() {
      return '';
    },
  },
  mounted() {},
};
</script>

<template>
  <h3>Class Module</h3>

  <div class="mb-3">
    <div class="one">{{ msg }}</div>
    <div class="one">{{ msg }}</div>
    <div class="one">{{ msg }}</div>
  </div>

  <div class="mb-3">
    <div class="one">{{ msg }}</div>
    <div class="one">{{ msg }}</div>

    <div>
      <input type="checkbox" class="form-check-input" id="check" v-model="isChecked" />{{ ' ' }}
      <label class="form-check-label" for="check">CHECK</label>
    </div>
  </div>

  <div class="mb-5"></div>
</template>

<style scoped>
.one { color: orange; }
.two { font-size: 24pt; }
.three { font-weight: bold; }
</style>
