<script>
export default {
  data() {
    return {
      name: 'NolBu',
      total: 0,
      num: 10, 
    };
  },
  // 일반적인 함수, 이벤트 핸들러 등을 구현한다
  methods: {
    onAdd(x = 0, y = 0) {
      console.log('onAdd...');
      return `${x} + ${y} = ${x + y}`;
    },
    onSum(x = 0, y = 0) {
      this.total = x + y;
    },

    getTotal() {
      console.log('메서드 계산중....');
      let total = 0;
      for(let i = 0; i <= this.num; i++) {
        total += i;
      }
      return total;
    }
  },


  // 계산된 속성이라한다. 읽기 전용 속성이다
  // 기존의 data에 변수를 이용해서 새로운 값을 산출하는 경우 사용
  // 작성은 메서드 방식. 사용은 getter (속성) 방식으로 이용
  // 함수 내부에서 사용된 this 변수, 메서드가 변경된 경우만 새롭게 호출된다

  // 함수가 View에서 사용되는 경우. 매개변수가 없고 리턴값이 있는 경우
  computed: {
    getTotalComp() {
      console.log('Computed 계산중....');
      let total = 0;
      for(let i = 0; i <= this.num; i++) {
        total += i;
      }
      return total;
    },
    once: () => 'Good Morning'
  }
};
</script>

<template>
  <h3>A05 Method</h3>

  <div>
    <h5>1. Method</h5>

    onAdd: {{ onAdd(10, 20) }}<br />
    Total: {{ total }}<br />
    <button @click="onSum(10, 20)">onSum</button>
    <br />

    Name: {{ name }}
    <input type="text" name="name" class="form-control" v-model="name" />
    Num: {{ num }}
    <input type="number" name="num" class="form-control" v-model="num" />
  </div>
  <br />

  <div class="mb-5">
    <h5>2. Computed</h5>
    Methods: {{ getTotal() }}<br />
    Computed: {{ getTotalComp }}<br />
    once: {{ once }}
  </div>
</template>
