<script>
  export default {
    data() {
      return {
        msg: 'Good Morning',
        myStyle: { color: 'orange', fontSize: '20pt', fontWeight: 'bold' },
        myClass: 'one two three',
        isChecked: true,
        num: 0,
      };
    },
    computed: {
      yourStyle: () => ({ color: 'orange', fontSize: '20pt', fontWeight: 'bold' }),
      yourClass: () => 'one two three',
      warn() {
        if (this.num < 0 || this.num > 100) return { warning: true };
        else return { warning: false };
      },
    },
    methods: {
      enterEvent() {
        this.myStyle.color = 'green';
      },
      leaveEvent() {
        this.myStyle.color = 'orange';
      },
      enterCSSEvent() {
        this.myClass = 'one two';
      },
      leaveCSSEvent() {
        this.myClass = 'one two three';
      },
    },
  };
</script>

<template>
  <div class="mb-3">
    <h3>A13 Style & Class</h3>

    <div style="color: orange; font-size: 20pt; font-weight: bold">{{ msg }}</div>
    <div v-bind:style="{ color: 'orange', fontSize: '20pt', fontWeight: 'bold' }">{{ msg }}</div>
    <div v-bind:style="myStyle" @mouseenter="enterEvent" @mouseleave="leaveEvent">{{ msg }}</div>
    <div v-bind:style="yourStyle">{{ msg }}</div>
  </div>

  <div class="mb-3">
    <h3>Class Binding</h3>

    <div class="one two three">{{ msg }}</div>
    <div class="one" v-bind:class="'two three'">{{ msg }}</div>
    <div v-bind:class="myClass" @mouseenter="enterCSSEvent" @mouseleave="leaveCSSEvent">
      {{ msg }}
    </div>
    <div v-bind:class="yourClass">{{ msg }}</div>
    <br />

    <!-- one, two, three는 CSS 클래스명이다. -->
    <div :class="{ one: true, two: true, three: isChecked }">{{ msg }}</div>
    <div :class="{ [yourClass]: isChecked }">{{ msg }}</div>

    <div>
      <input type="checkbox" class="form-check-input" id="check" v-model="isChecked" />{{ ' ' }}
      <label class="form-check-label" for="check">CHECK</label>
    </div>
  </div>

  <div class="mb-5">
    <input type="number" class="form-control" v-model.number="num" :class="warn" />
  </div>
</template>

<!-- 
  scoped => DOM 요소에 data-hash 형태의 속성을 부여하고 CSS class에 해당 hash 값을 추가하여 스타일을 적용한다. 
  module => CSS 파일을 모듈화하여 사용한다. 변경된 이름은 this.$style.클래스명 형태로 사용한다.  
-->
<style scoped>
  .one {
    color: orange;
  }
  .two {
    font-size: 24pt;
  }
  .three {
    font-weight: bold;
  }
  .warning {
    background-color: orange;
    color: gray;
  }
</style>
