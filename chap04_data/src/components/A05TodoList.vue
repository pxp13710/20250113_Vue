<script>
import A05TodoForm from './children/A05TodoForm.vue';
import A05TodoTable from './children/A05TodoTable.vue';

const todoList = [
  { id: 1, text: '첫 번째 할 일', done: true },
  { id: 2, text: '두 번째 할 일', done: false },
  { id: 3, text: '세 번째 할 일', done: false },
];

export default {
  components: { A05TodoForm, A05TodoTable },
  data() {
    return {
      todoList,
      id: 4,
    };
  },
};
</script>

<template>
  <h3>A05 TodoList</h3>

  <div class="mb-5">
    <A05TodoForm></A05TodoForm>
    <A05TodoTable></A05TodoTable>
  </div>
</template>
