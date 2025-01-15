<script>
export default {
  // custom event 등록
  emits: ['numEvent', 'objEvent'],
  data() {
    return {
      num: 10,
      name: 'NolBu',
      arr: [10, 20],
      user: { name: 'HungBu', age: 20 },
    };
  },
  methods: {
    // 상위 컴포넌트에 데이터 전달은 Event를 이용한다
    sendNumber() {
      // 커스텀 이벤트 발생
      this.$emit('numEvent', this.num);
    },
    sendObject() {
      const sendData = {
        num: this.num,
        name: this.name,
        arr: this.arr,
        user: this.user,
      }
      this.$emit('objEvent', sendData);
    }
  }
};
</script>

<template>
  <h5>A03 Emits Child Component</h5>

  <div class="mb-3">
    Num: {{ num }}<br />
    Name: {{ name }}<br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
  </div>

  <div class="mb-5">
    <button @click="sendNumber">Num</button>
    <button @click="sendObject">Data</button>
  </div>
</template>

