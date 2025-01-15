<script>
import { computed } from 'vue';
import A06Inject from './children/A06Inject.vue';

export default {
  components: { A06Inject },
  data() {
    return {
      name: 'NolBu',
      user: { name: '흥부', age: 20 },
    };
  },
  methods: {
    changeName() {
      this.name = 'HungBu';
    },
    changeUser() {
      this.user.name = 'BangJa';
      this.user.age = 100;
    },
  },
  // Vue 3.X에서만 사용 가능
  provide() {
    return {
      name: computed(() => this.name),
      user: computed(() => this.user),
      changeName: this.changeName,
      changeUser: this.changeUser
    }
  }
};
</script>

<template>
  <h3>A06 Provide</h3>

  <div class="mb-3">
    계층과는 상관없이 App 전체에서 공유 할 정보가 있다면 Vuex<br />
    계층 Tree 내부에서만 이용한다면 Provide / Inject<br />
    Component가 특정 계층에서만 사용한다면 Provide / Inject
  </div>

  <div class="mb-3">
    Name: {{ name }}<br />
    User: {{ user.name }} / {{ user.age }}<br />
  </div>

  <div class="mb-3">
    <button @click="changeName">Name</button>
    <button @click="changeUser">User</button><br />
  </div>

  <hr />

  <div class="mb-5">
    <A06Inject></A06Inject>
  </div>
</template>
