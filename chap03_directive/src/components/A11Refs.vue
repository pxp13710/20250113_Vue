<script>
  export default {
    data() {
      return {
        message: 'Hello World',
      };
    },
    methods: {
      changeMessage() {
        /*
      // console.log(evt.target);      // button
      evt.target.style.backgroundColor = 'orange';

      const elem = document.querySelector('input[name=msg]');
      this.message = elem.value;
      */

        // 참조하고자 하는 DOM 요소에 ref="참조명"을 추가
        // console.log(this.$refs);    // ref로 설정된 요소 관리 객체 { msgRef: input, btnRef: button }
        // this.$refs.msgRef => document.querySelector('input[name=msg]');
        this.message = this.$refs.msgRef.value;
        // this.$refs.btnRef => evt.target
        this.$refs.btnRef.style.backgroundColor = 'orange';
      },
    },
  };
</script>

<template>
  <h3>A11 Refs</h3>

  <form class="mb-3">
    <div class="input-group">
      <input type="text" class="form-control" name="msg" ref="msgRef" />
      <button type="submit" class="btn btn-danger" ref="btnRef" @click.prevent="changeMessage">
        ADD
      </button>
    </div>
  </form>

  <div class="mb-5">Message: {{ message }}</div>
</template>
