<script>
const baseURL = 'http://localhost:8000/contacts_long/search/';

export default {
  data() {
    return {
      num: 0,
      isLoading: false,
      contactList: [],
    };
  },
  methods: {
    increase () {
      this.num += 1;
    },
    decrease () {
      this.num -= 1;
    },
    searchContact(keyword) {
      if(keyword.trim().length >= 2) {

        this.isLoading = true;
        fetch(baseURL + keyword)
          .then((resp) => resp.json())
          .then((data) => this.contactList = data)
          .catch((error) => console.error(error))
          .finally(() => this.isLoading = false);
      }
    }
  },
  computed: { },
  watch: { },

  // LifeCycle
  // data, event 초기화 전
  beforeCreate () {
    console.log('beforeCreate');
  },
  // data, event 초기화 완료
  created () {
    // 변수의 값이 대입된 후 화면이 렌더링된다
    this.searchContact('ab');
    console.log('created');
  },
  // DOM 생성 전
  beforeMount () {
    console.log('beforeMount');
  },
  // DOM 생성 완료 후 mount
  mounted () {
    // 화면이 렌더링 된 후 데이터 값 가져와서 data 값 변경 => 화면 재 렌더링
    // 화면이 2번 렌더링. created는 View가 1번 렌더링 된다
    // this.searchContact('ab');
    console.log('mounted');
  },
  // state 변경 전
  beforeUpdate () {
    console.log('beforeUpdate');
  },
  // state 변경 후
  updated () {
    console.log('updated');
  },
  beforeUnmount () {
    // beforeDestory
    console.log('beforeUnmount');
  },
  unmounted () {
    console.log('unmounted'); // destoryed
  },
};
</script>

<template>
  <h3>A08 LifeCycle</h3>

  <div class="mb-3">
    Num: {{ num }}
  </div>

  <div class="mb-5">
    <button v-on:click="increase()">+1</button>
    <button v-on:click="decrease()">-1</button>
  </div>

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
</template>
