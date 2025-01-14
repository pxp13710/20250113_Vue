<script>
// const exteranl = 100;    // template에서 참조 불가능

// export default 내부에 components에 등록 후 사용해야 한다
import A01Component from './components/A01Component.vue'
import A02Bind from './components/A02Binding.vue';
import A03Attribute from './components/A03Attribute.vue';
import A04MakeDOM from './components/A04MakeDOM.vue';
import A05Method from './components/A05Method.vue';
import A06Computed from './components/A06Computed.vue';
import A07Watch from './components/A07Watch.vue';
import A08LifeCycle from './components/A08LifeCycle.vue';
import A09Event from './components/A09Event.vue';
import A10Form from './components/A10Form.vue';
import A11Refs from './components/A11Refs.vue';

import IconComm from './components/icons/IconCommunity.vue';

// Vue Model
export default {
  // 외부 View(컴포넌트)를 등록할 목적으로 사용. 
  // Vue는 Key를 사용자 정의 태그로 변환해 준다 
  components: {
    A01Component: A01Component,
    IconComm, A02Bind, A03Attribute, A04MakeDOM, A05Method, 
    A06Computed, A07Watch, A08LifeCycle, A09Event, A10Form, 
    A11Refs,
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

    <A11Refs></A11Refs>
    <A10Form></A10Form>
    <A09Event></A09Event>
    <A08LifeCycle></A08LifeCycle>
    <A07Watch></A07Watch>
    <A06Computed></A06Computed>
    <A05Method></A05Method>
    <A04MakeDOM></A04MakeDOM>
    <A03Attribute></A03Attribute>
    <A02Bind></A02Bind>

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
      
      <!-- svg 파일은 img로 직접 참조와 Component로 작성해서 태그 형태로 사용 가능 -->
      <img src="./assets/logo.svg" alt="svg" width="100" />
      <IconComm />
    </div>
  </div>
</template>

<!-- 모든 view에서 사용할 수 있는 전역 CSS 파일로 등록된다 -->
<style>
  .orange {
    color: orange;
  }
</style>
