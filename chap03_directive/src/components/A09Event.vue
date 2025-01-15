<!-- eslint-disable no-constant-condition -->
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
        this.num = this.num + 2;
      },
      incThree(x) {
        this.num = this.num + x;
      },
      incFour(x, color, evt) {
        this.num = this.num + x;
        evt.target.style.backgroundColor = color;
      },

      decOne() {
        this.num--;
      },
      decTwo(evt) {
        this.num = this.num - 2;
        evt.target.style.backgroundColor = 'orange';
      },
      decThree(x) {
        this.num = this.num - x;
      },
      decFour(x, evt, color) {
        this.num = this.num - x;
        evt.target.style.backgroundColor = color;
      },

      outer(evt) {
        console.log(evt.target, evt.currentTarget);
      },
      one(evt) {
        console.log(evt.target, evt.currentTarget);
        if (true) {
          evt.stopPropagation();
        }
      },
      two(evt) {
        console.log(evt.target, evt.currentTarget);
      },

      daum(evt) {
        evt.preventDefault(); // 빌드인 자바스크립트를 실행하지 않도록 취소
        if (confirm('Go to Daum?')) {
          location.assign(evt.target.href);
        }
        console.log('daum');
      },
      naver() {
        console.log('naver');
      },

      keyEventOne(evt) {
        const code = evt.code;
        const key = evt.key;
        const keyCode = evt.keyCode;
        console.log(code, key, keyCode);
        console.log(evt.shiftKey, evt.ctrlKey, evt.altKey, evt.metaKey);

        if (keyCode === 65 && evt.shiftKey) {
          location.href = 'http://www.naver.com';
        }
      },
      keyEventTwo() {
        location.href = 'http://www.naver.com';
      },
      escEvent() {
        this.name = '';
      },
      enterEvent() {
        alert(this.msg);
      },
    },
  };
</script>

<template>
  <h3>A09 Event</h3>

  <div class="mb-3">
    Num: {{ num }}<br />

    <!-- inline 방식이라면 -->
    <button v-on:click="num++">+1</button>
    <button v-on:click="incTwo()">+2</button>
    <button v-on:click="incThree(3)">+3</button>
    <button v-on:click="incFour(4, 'orange', $event)">+4</button>

    <!-- addEventListener 방식이라면, 매개변수가 없거나 event 객체 1개만 존재하면 () 없이 호출 -->
    <button @click="decOne">-1</button>
    <button @click="decTwo">-2</button>

    <!-- 매개변수가 event이외의 값이라면 반드시 "(evt) => 실행할 함수(매개변수)" 형태로 실행 -->
    <button @click="evt => decThree(3)">-3</button>
    <button @click="evt => decFour(4, evt, 'green')">-4</button>

    <!-- Vue가 제공해 주는 Event 기능. @event.속성="이벤트 핸들러" -->
    <button @click.once="decOne">once</button>
    <!-- once => 한번만 실행 -->
    <button @click.shift="decOne">Key</button>
    <!-- ctrl, alt, shift, meta, left, middle, right-->
  </div>

  <div id="container" class="mb-3" @click="outer">
    <div id="inner" @click="one">ONE</div>
    <div id="inner" @click.stop="two">TWO</div>
    <!-- evt.stopPropagation() -->
  </div>

  <div class="mb-3">
    <a href="http://www.daum.net" @click="daum">DAUM</a><br />
    <a href="http://www.naver.com" @click.prevent="naver">NAVER</a>
    <!-- evt.preventDefault() -->
  </div>

  <div class="mb-5">
    <!-- keyboard 관련 이벤트는 keyup, keydown, keypress 3개 존재 -->
    JS: <input type="text" class="form-control" @keyup="keyEventOne" /><br />
    Vue: <input type="text" class="form-control" @keyup.shift.a.b="keyEventTwo" /><br />
    esc: <input type="text" class="form-control" v-model="name" @keydown.esc="escEvent" /><br />
    Enter:
    <input type="text" class="form-control" v-model="msg" @keydown.enter="enterEvent" /><br />
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
