<script>
import A05TodoItem from './A05TodoItem.vue';

export default {
  props: ['todoList', 'updateTodo', 'deleteTodo'],
  components: { A05TodoItem }
};
</script>

<template>
  <table class="table mb-5">
    <thead>
      <tr>
        <th style="width: 10%">ID</th>
        <th>Todo</th>
        <th style="width: 10%">Complete</th>
        <th style="width: 10%">Delete</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="todo in todoList" :key="todo.id">
        <A05TodoItem :todo="todo" :updateTodo="updateTodo" :deleteTodo="deleteTodo"/>
      </template>
    </tbody>
  </table>
</template>

