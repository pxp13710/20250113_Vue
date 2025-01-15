<script>
import A05TodoForm from './TodoForm.vue';
import A05TodoTable from './TodoTable.vue';
import { computed } from 'vue';

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
    };
  },
  methods: {
    addTodo(text) {
      const cnt = this.todoList.at(-1) ? this.todoList.at(-1).id + 1 : 1
      const todo = { id: cnt, text: text, done: false };
      this.todoList.push(todo);
    },
    updateTodo(id) {
      const idx = this.todoList.findIndex((todo) => todo.id === id);
      this.todoList[idx].done = !this.todoList[idx].done;
    },
    deleteTodo(id) {
      const idx = this.todoList.findIndex((todo) => todo.id === id);
      this.todoList.splice(idx, 1);
    },
  },
  provide() {
    return {
      todoList: computed(() => this.todoList),
      updateTodo: this.updateTodo,
      deleteTodo: this.deleteTodo,
      addTodo: this.addTodo
    }
  }
};
</script>

<template>
  <h3>A05 TodoList</h3>

  <div class="mb-5">
    <A05TodoForm></A05TodoForm>
    <A05TodoTable></A05TodoTable>
  </div>
</template>
