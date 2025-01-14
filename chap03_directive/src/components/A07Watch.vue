<script>
// const baseURL = 'https://sample.bmaster.kro.kr/contacts_long/search/';
const baseURL = 'http://localhost:8000/contacts_long/search/';

export default {
  data() {
    return {
      x: 10,
      y: 20,
      total: 0,
      name: '',
      isLoading: false,
      contactList: [],
    };
  },
  computed: {},
  // 상태변수 즉 data에 정의한 변수가 변경되면 화면 갱신작업 이외의 부수 작업이 필요한 경우 기술
  watch: {
    // 정의는 함수. 함수명을 상태변수 이름과 동일하게 기술
    x(newVal, oldVal) {
      console.log(typeof newVal);
      console.log(`x: ${oldVal} => ${newVal}`);
      this.total = Number(newVal) + Number(this.y);
    },
    y(newVal) {
      this.getTotal(newVal)
    }
  },
  methods: {
    getTotal(value) {
      this.total = Number(this.x) + value;
    }
  },
};
</script>

<template>
  <h3>A07 Watch</h3>

  <div class="mb-5">
    <input type="text" class="form-control" v-model="x" /><br />
    <input type="number" class="form-control" v-model.number="y" /><br />
    Total: {{ total }}<br />
    <br />

    <input type="text" class="form-control" v-model="name" /><br />
    <table class="table">
      <thead>
        <tr>
          <th>NO</th>
          <th>NAME</th>
          <th>TEL</th>
          <th>ADDRESS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <div>Loading....</div>
  </div>
</template>
