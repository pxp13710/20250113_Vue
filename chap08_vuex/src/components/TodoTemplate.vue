<script>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

const sampleTodos = [
  { id: 1, text: '첫 번째 할 일', done: true },
  { id: 2, text: '두 번째 할 일', done: false },
  { id: 3, text: '세 번째 할 일', done: false },
];

export default {
  components: { TodoForm, TodoList }
}
</script>

<template>
  <div>
    <h3>Todo List</h3>

    <TodoForm></TodoForm>
    <TodoList></TodoList>
  </div>

  <div class="mb-5"></div>
</template>
