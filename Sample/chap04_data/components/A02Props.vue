<script>
import A02PropsOne from './children/A02PropsOne.vue';
import A02PropsTwo from './children/A02PropsTwo.vue';

export default {
  components: { A02PropsOne, A02PropsTwo },
  data() {
    return {
      address: 'Seoul',
      arr: [10, 20],
      user: { name: 'HungBu', age: 30 },
    };
  },
  methods: {
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y}`;
    },
  },
};
</script>

<template>
  <h3>A02 Props</h3>

  <div class="mb-5">
    <A02PropsOne></A02PropsOne>
    <A02PropsOne></A02PropsOne>

    <A02PropsTwo></A02PropsTwo>
  </div>
</template>
