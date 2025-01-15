<script>
  export default {
    data() {
      return {
        msg: 'Hello World!!',
        isChecked: true,
        num: 0,
      };
    },
    computed: {
      classOne() {
        return `${this.$style.one} ${this.$style.two} ${this.$style.three}`;
      },
    },
    mounted() {
      console.log(this.$style);
    },
  };
</script>

<template>
  <h3>Class Module</h3>

  <div class="mb-3">
    <div :class="$style.one">{{ msg }}</div>
    <div :class="[$style.one, $style.two].join(' ')">{{ msg }}</div>
    <div :class="`${$style.one} ${$style.two} ${$style.three}`">{{ msg }}</div>
  </div>

  <div class="mb-3">
    <div :class="{ [$style.one]: true, [$style.two]: true, [$style.three]: isChecked }">
      {{ msg }}
    </div>
    <div :class="{ [classOne]: isChecked }">{{ msg }}</div>

    <div>
      <input type="checkbox" class="form-check-input" id="check" v-model="isChecked" />{{ ' ' }}
      <label class="form-check-label" for="check">CHECK</label>
    </div>
  </div>

  <div class="mb-5"></div>
</template>

<!-- 
  module => CSS 파일을 모듈화하여 사용한다. 변경된 이름은 this.$style.클래스명 형태로 사용한다.  
  따라서 class 이름이 모두 변수화 된다
-->
<style module>
  .one {
    color: orange;
  }
  .two {
    font-size: 24pt;
  }
  .three {
    font-weight: bold;
  }
</style>
