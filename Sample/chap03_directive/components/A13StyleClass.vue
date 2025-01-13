<script>
export default {
  data() {
    return {
      msg: 'Good Morning',
    };
  },
};
</script>

<template>
  <div class="mb-3">
    <h3>A13 Style & Class</h3>

    <div style="color: orange; font-size: 20pt; font-weight: bold">{{ msg }}</div>
    <div>{{ msg }}</div>
    <div>{{ msg }}</div>
    <div>{{ msg }}</div>
  </div>

  <div class="mb-3">
    <h3>Class Binding</h3>

    <div class="one">{{ msg }}</div>
    <div class="one">{{ msg }}</div>
    <div class="one">{{ msg }}</div>
    <br />

    <div class="one">{{ msg }}</div>
    <div class="one">{{ msg }}</div>

    <div>
      <input type="checkbox" class="form-check-input" id="check" />{{ ' ' }}
      <label class="form-check-label" for="check">CHECK</label>
    </div>
  </div>

  <div class="mb-5">
    <input type="number" class="form-control" />
  </div>
</template>

<style scoped>
.one { color: orange; }
.two { font-size: 24pt; }
.three { font-weight: bold; }
.warning {
  background-color: orange;
  color: gray;
}
</style>
