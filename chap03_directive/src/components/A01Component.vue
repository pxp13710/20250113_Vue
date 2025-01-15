<script>
  export default {
    // 읽기 전용 값이다
    props: ['title', 'num', 'count'],
    data() {
      return {
        cnt: 10,
      };
    },
    methods: {
      increment() {
        this.cnt++;
      },
      decrement() {
        this.cnt--;
      },
    },
  };
</script>

<template>
  <h3>{{ title }} / {{ cnt }} / {{ count }}</h3>

  <div class="mb-3">
    <button v-on:click="increment">증가</button>
    <button @click="decrement">감소</button>
  </div>

  <div class="mb-3">This is A01Component {{ num < 10 ? '0' + num : num }}.</div>
</template>
