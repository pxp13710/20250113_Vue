<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <h5>A08 Slot Named</h5>

  <div class="row card-body mb-5">
    <div class="col-12 border">
      <slot name="top">TOP Default</slot>
    </div>
    <div class="col-4 border">
      <slot name="left">Left Default</slot>
    </div>
    <div class="col-8 border">
      <slot name="right">Right Default</slot>
    </div>
    <div class="col-12 border">
      <slot name="bottom">Bottom Default</slot>
    </div>

    <div class="col-12">
      <slot>Default</slot>
    </div>
  </div>
</template>

<style scoped>
.border {
  border: 1px solid lightgray;
}
</style>
