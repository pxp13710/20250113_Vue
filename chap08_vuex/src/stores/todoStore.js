const todoStore = {
  namespaced: true,
  state: {
    todoList: [
      { id: 1, text: '첫 번째 할 일', done: true },
      { id: 2, text: '두 번째 할 일', done: false },
      { id: 3, text: '세 번째 할 일', done: false },
    ],
    text: '',
  },
  mutations: {
    updateTodo(state, payload) {
      const idx = state.todoList.findIndex(todo => todo.id === payload);
      state.todoList[idx].done = !state.todoList[idx].done;
    },
    deleteTodo(state, payload) {
      const idx = state.todoList.findIndex(todo => todo.id === payload);
      state.todoList.splice(idx, 1);
    },
    addTodo(state, payload) {
      const cnt = state.todoList.at(-1) ? state.todoList.at(-1).id + 1 : 1;
      const todo = { id: cnt, text: payload, done: false };
      state.todoList.push(todo);
    },
    changeText(state, payload) {
      state.text = payload;
    }
  }
}
export default todoStore;
