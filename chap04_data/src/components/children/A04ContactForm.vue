<script>
export default {
  emits: ['searchEvent'],
  data() {
    return {
      // keyword: '',
    };
  },
  methods: {
    /*
    // 제어 컴포넌트
    sendData() {
      if(this.keyword.trim().length >= 2) {
        this.$emit('searchEvent', this.keyword);
        this.keyword = '';
        // document.querySelector('input').focus();
        this.$refs.searchRef.focus();
      }
    }
    */
   // 비 제어 컴포넌트
   sendData() {
      const elem = this.$refs.searchRef;

      if(elem.value.trim().length >= 2) {
        this.$emit('searchEvent', elem.value);
        elem.value = '';
        // document.querySelector('input').focus();
        elem.focus();
      }
    }
  }
};
</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" ref="searchRef" />
      <!-- <input type="text" class="form-control" ref="searchRef"   v-model="keyword" /> -->
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
      </div>
    </div>
  </form>
</template>
