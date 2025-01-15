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
        this.getTotal(newVal);
      },
      name(newVal) {
        if (newVal.trim().length >= 2) {
          this.searchContact(newVal);
        }
      },
    },
    methods: {
      getTotal(value) {
        this.total = Number(this.x) + value;
      },
      searchContact(keyword) {
        // if(keyword.trim().length >= 2) {

        this.isLoading = true;
        fetch(baseURL + keyword)
          // 성공하면 then이 정의한 함수가 실행
          .then(resp => {
            // console.log(resp);
            return resp.json(); // JSON 형식으로 변환(JavaScript Object로 변환)
          })
          // 위의 then이 리턴한 값을 처리할 함수를 정의
          .then(data => {
            // console.log(data);
            // this.isLoading = false;
            this.contactList = data;
          })
          // 실패하면 catch가 정의한 함수가 실행된다
          .catch(error => {
            // this.isLoading = false;
            console.error(error);
          })
          .finally(() => {
            this.isLoading = false;
          });
        // }
      },
    },
    // View가 완성된 시점에 실행되는 라이프사이클 메서드
    mounted() {
      // this.searchContact('ab');
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
        <tr v-for="contact in contactList" :key="contact.no">
          <td>{{ contact.no }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
        </tr>
      </tbody>
    </table>
    <div v-show="isLoading">Loading....</div>
  </div>
</template>
