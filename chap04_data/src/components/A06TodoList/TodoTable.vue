<script>
import A05TodoItem from './TodoItem.vue';

export default {
  inject: ['todoList'],
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
        <A05TodoItem :todo="todo"/>
      </template>
    </tbody>
  </table>
</template>

