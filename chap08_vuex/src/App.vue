<script>
import CounterComp from './components/CounterComp.vue';
import TodoTemplate from './components/TodoTemplate.vue';

export default {
  components: { CounterComp, TodoTemplate }
}
</script>

<template>
  <div class="m-3">
    <!-- <h1>Chap07 Vuex TodoList / {{ this.$store.state.count }}</h1> -->
    <h1>Chap07 Vuex TodoList / {{ this.$store.state.countStore.count }}</h1>

    <TodoTemplate></TodoTemplate>
    <CounterComp></CounterComp>
  </div>
</template>