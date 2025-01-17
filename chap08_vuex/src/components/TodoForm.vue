<script>
export default {
  computed: {
    text() {
      return this.$store.state.todoStore.text;
    }
  },
  methods: {
    sendData() {
      if(this.text.trim() !== '') {
        this.$store.commit('todoStore/addTodo', this.text);
        this.$store.commit('todoStore/changeText', '');
        document.querySelector('input').focus();
      }
    }
  }
}
</script>

<template>
  <form>
    <div class="input-group">
      <!-- store의 값은 모두 readOnly 값이다 -->
      <input type="text" class="form-control" 
        :value="text" @input="(evt) => $store.commit('todoStore/changeText', evt.target.value)" />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">SEND</button>
      </div>
    </div>  
  </form>
</template>
