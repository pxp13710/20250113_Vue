<script>
export default {
  data() {
    return {
      num: 0,
      name: 'Guest',
      msg: '',
    };
  },
  methods: {
    incTwo() {

    },
    incThree(x) {

    },
    incFour(x, color, evt) {

    },
    
    decOne() {

    },
    decTwo(evt) {

    },
    decThree(x) {

    },
    decFour(x, evt){

    },

    outer(evt) {
      console.log(evt.target, evt.currentTarget);
    },
    one(evt) {
      console.log(evt.target, evt.currentTarget);
    },
    two(evt) {
      console.log(evt.target, evt.currentTarget);
    },

    daum(evt) {
      console.log('daum');
    },
    naver() {
      console.log('naver');
    },

    keyEventOne(evt) {

    },
    keyEventTwo(evt) {

    },
    escEvent() {

    },
    enterEvent(){

    },
  },
};
</script>

<template>
  <h3>A09 Event</h3>

  <div class="mb-3">
    Num: {{ num }}<br />

    <button>+1</button>
    <button>+2</button>
    <button>+3</button>
    <button>+4</button>

    <button>-1</button>
    <button>-2</button>
    <button>-3</button>
    <button>-4</button>

    <button @click="decOne">once</button>
    <button @click="decOne">Key</button>
  </div>

  <div id="container" class="mb-3" @click="outer">
    <div id="inner" @click="one">ONE</div>
    <div id="inner" @click="two">TWO</div>
  </div>

  <div class="mb-3">
    <a href="http://www.daum.net" @click="daum">DAUM</a><br />
    <a href="http://www.naver.com" @click="naver">NAVER</a>
  </div>

  <div class="mb-5">
    JS: <input type="text" class="form-control" @keyup="keyEventOne" /><br />
    Vue: <input type="text" class="form-control" @keyup="keyEventTwo" /><br />
    esc: <input type="text" class="form-control" v-model="name" @keydown="escEvent" /><br />
    Enter: <input type="text" class="form-control" v-model="msg" @keydown="enterEvent" /><br />
  </div>

</template>

<style scoped>
#container {
  width: 300px;
  height: 150px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
#inner {
  width: 100px;
  height: 100px;
  background: orange;
  padding: 10px;
  margin: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
