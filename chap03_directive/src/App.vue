<script>
// const exteranl = 100;    // template에서 참조 불가능

import A01Component from './components/A01Component.vue'

// svg 파일 참조
import logo from './assets/logo.svg'

// Vue Model
export default {
  // 외부 View(컴포넌트)를 등록할 목적으로 사용. 
  // Vue는 Key를 사용자 정의 태그로 변환해 준다 
  components: {
    A01Component: A01Component
  },
  // 1. 상태(state) 변수를 정의한다. 
  // 이 상태 변수가 변경되면 변경된 값 기반으로 화면을 즉각 재 구성한다
  data() {
    return {
      title: 'Chap03 Directive',
      count: 0,
    }
  },
  methods: {
    // 2. 화면에서 발생하는 이벤트를 처리하는 메서드를 정의한다. 일반적인 함수도 여기에 정의
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
}
</script>

<template>
  <!-- 이 내부는 HTML과 동일한 방식으로 기술한다. => View
    export default { } 객체에 내부에 기술된 값만 참조 가능하다 
  -->
  <div class="m-3">
    <h1 class="orange">{{ title }} / {{ count }}</h1>

    <!-- 외부 컴포넌트를 사용한다. 사용자 정의 태그는 반드시 종료태그가 있어야 한다.
      "v-"가 붙은 속성의 값은 변수명 또는 실질적인 JavaScript 표현식이다. 
    -->
    <A01Component title="Component A" v-bind:num="1" :count="count" />
    <A01Component title="Component B" v-bind:num="2" :count="count"></A01Component>

    <div class="mb-3">
      <button v-on:click="increment">증가</button>
      <button @click="decrement">감소</button>
    </div>

    <div>
      <!-- 정적파일. build하면 dist 폴더에 복사된다 -->
      <img src="/images/tree.jpg" alt="tree" />
      
      <!-- vue가 관리하는 이미지 파일. hash 값이 붙는다. -->
      <img src="./assets/images/one.jpg" alt="one" />


    </div>
  </div>
</template>

<!-- 모든 view에서 사용할 수 있는 전역 CSS 파일로 등록된다 -->
<style>
  .orange {
    color: orange;
  }
</style>

<!-- 
compostion API 기반
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> 
-->
