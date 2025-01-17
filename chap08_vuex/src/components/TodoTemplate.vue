<script>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

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
