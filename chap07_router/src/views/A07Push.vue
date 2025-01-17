<!-- eslint-disable no-unused-vars -->
<script>
export default {
  methods: {
    back: function(){
      // this.$router.back();
      this.$router.go(-1);
    },
    forward: function() {
      // this.$router.forward();
      this.$router.go(1);
    },
    goHome: function() {
      this.$router.push('/');
    },
    goURL: function(url) {
      // this.$router.replace(url);       // history에 저장되지 않음
      this.$router.push(url);
    },
  },
  created() {
    // console.log(this.$router);
  },
  // guard
  beforeRouteEnter(to, from) {        // => composition API에서는 없음
    console.log('------- beforeRouteEnter component guard -------');
    // console.log(to);
    const session = globalThis.sessionStorage;
    if (session.getItem('address')) return true;
    else return false;
  },
  // 진입 후 다른 view로 이동 안됨
  beforeRouteLeave(to, from) { 
    console.log('------- beforeRouteLeave component guard -------');
    // console.log(to);
    const session = globalThis.sessionStorage;
    if (session.getItem('tel')) return true;
    else return false;
  },
  beforeRouteUpdate(to, from) {
    console.log('------- beforeRouteUpdate component guard -------');
    // console.log(to);
    const session = globalThis.sessionStorage;
    if (session.getItem('address')) return true;
    else return false;
  }
}
</script>

<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button   @click="back">BACK</button>
      <button   @click="forward">FORWARD</button>
      <button   @click="goHome">HOME</button>
      <button   @click="goURL('/A02Attr')">A02Attr</button>

      <!-- 객체 형태의 데이터 전달은 name 사용 -->
      <button   @click="goURL({name: 'attrs'})">A02Attr</button>
      <button   @click="goURL({name: 'props', params: {no: 1001, name: 'ABC', id: 20}})">Params</button>
      <button   @click="goURL({name: 'query', query: {no: 1002, name: '향단', address: '전주'}, hash: '#MID'})">Query</button>
    </div>
  </div>
</template>
