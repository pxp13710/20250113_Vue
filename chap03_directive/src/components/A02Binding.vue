<!-- eslint-disable no-unused-vars -->
<script>
  const count = 10;

  export default {
    data() {
      return {
        name: 'NolBu',
        age: 20,
        check: true,
        arr: [10, 11],
        user: { name: 'A', age: 30 },
        message: '<b>Good Morning</b>',
      };
    },
    // method에서 data의 값이나 다른 method를 참조하는 경우는 반드시 this를 사용해야 한다
    methods: {
      onAdd(x) {
        // console.log(this);       // Vue Model
        return `${x} + ${this.age} = ${x + this.age}`;
      },
      // this를 사용하지 않는다면 Arrow 함수도 사용 가능. this를 사용하면 에러 발생
      onMin: (x, y) => {
        // console.log(this);       // undefined
        // return `${x} - ${this.age} = ${x - this.age}`
        return `${x} - ${y} = ${x - y}`;
      },
      changeMessage() {
        this.message = '<i><b>Good Afternoon</b></i>';
      },
    },
  };
</script>

<template>
  <h3>A02 Binding</h3>
  바인딩 식 내부에서는 식만 사용 가능<br />
  <br />

  <div>
    <h5>1. 일반적 바인딩</h5>
    일반적인 단방향 바인딩: <br />

    Name: {{ name }}<br />
    Age: {{ age }}<br />
    Check: {{ check ? '동의' : '동의 안함' }}<br />

    undefined, null 값은 화면에 표시되지 않는다<br />
    배열: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    객체: {{ user.name }} / {{ user.age }} / {{ user.address }} <br />

    함수의 리턴값: {{ onAdd(5) }}<br />
    함수의 리턴값: {{ onMin(5, 2) }}<br />
  </div>
  <br />

  <div>
    <h5>2. 바인딩 연산 - 표현식은 바인딩 구문에서 사용 가능</h5>
    일반적 연산: {{ 10 * 2 }}<br />
    속성 참조: {{ arr.length }}<br />
    속성 참조 연산: {{ arr.length * 2 }}<br />
    비교 연산: {{ arr[0] > 0 }}<br />
    비교 연산: {{ arr[0] > 0 && arr[1] > 0 }}<br />
    삼항 연산: {{ name === 'NolBu' ? '관리자' : '일반 유저' }}<br />
  </div>
  <br />

  <div>
    <h5>3. 바인딩 관련 지시자</h5>
    <!-- v-로 시작하는 속성을 지시자라 한다. v-로 시작한 값 정의는 자바스크립트 표현식이다
      즉 변수명 또는 실질적인 표현식의 값이 된다 
    -->
    바인딩: {{ message }}<br />
    v-text: <span v-text="message"></span><br />
    <!-- innerText -->
    v-html: <span v-html="message"></span><br />
    <!-- innerHTML -->
    <!-- v-once: <span v-once>{{ message }}</span><br /> -->

    <!-- {{ 가 바인딩의 표현식이 아닌 일반 문자로 취급 -->
    v-pre: <span v-pre>{{ message }}</span> <br />
    <br />
    <button v-on:click="changeMessage()">Change</button>
    <button @click="changeMessage">Change</button>
    <br />
  </div>

  <div class="mb-5">
    <!-- Data에 존재하지 않는 변수: {{ num }}<br /> -->
    <!-- Data에 존재하지 않는 객체: {{ obj?.name }}<br /> -->

    <!-- export default 외부 변수: {{ count }}<br /> -->
  </div>
</template>
