<script>
import A09ScopeSlotChild from './children/A09ScopeSlotChild.vue';

export default {
  components: { A09ScopeSlotChild },
  data() {
    return {};
  },
};
</script>

<template>
  <h3>A09 Scoped Slot</h3>

  <div class="mb-5">
    <A09ScopeSlotChild>
      <!-- one은 전달한 값을 받아 참조할 수 있는 변수명이다 -->
      <template v-slot:default="one">
        <div class="mb-3">
          부모 {{ one.nickname}}에서 전달하는 View<br />
          AGE: {{ one.age }}<br />
          KOR: {{ one.kor }}<br />
          ENG: {{ one.eng }}<br />
          USER: {{ one.user.name }} / {{ one.user.age }}<br />
          <button @click="() => one.changeKor(2000)">KOR</button>
        </div>
      </template>

      <!-- <template></template> 사이에는 태그가 포함되면 에러 -->
      <!-- <br /> -->

      <template v-slot:jumsu="one">
        <div class="mb-3">
          부모 {{ one.nickname}}에서 전달하는 View<br />
          AGE: {{ one.age }}<br />
          KOR: {{ one.kor }}<br />
          ENG: {{ one.eng }}<br />
          USER: {{ one.user.name }} / {{ one.user.age }}<br />
          <button @click="() => one.changeKor(2000)">KOR</button>
        </div>
      </template>
    </A09ScopeSlotChild>
  </div>
</template>
