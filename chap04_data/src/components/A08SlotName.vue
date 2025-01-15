<script>
import A08SlotNameChild from './children/A08SlotNameChild.vue';
import A01ChildComp from './children/A01ChildComp.vue';

export default {
  components: { A08SlotNameChild, A01ChildComp },
  data() {
    return {};
  },
};
</script>

<template>
  <h3>A08 Slot Name</h3>

  <div class="mb-5">
    <A08SlotNameChild>
      <!-- template 이외의 태그로 지정한 View는 default에 통합 표시됨 -->
      <div>ONE</div>

      <!-- name에 지정하는 View는 반드시 template 태그를 이용해야 한다 -->
      <template v-slot:top>
        <h5>TOP</h5>
        <div>This is Top Content</div>
      </template>

      <template v-slot:left>
        <h5>LEFT</h5>
        <div>This is Left Content</div>
      </template>

      <div>TWO</div>

      <template #right>
        <h5>다른 사용자 컴포넌트도 전달 가능</h5>
        <A01ChildComp title="A01 Comp"></A01ChildComp>
      </template>

      <template #bottom>
        <h5>BOTTOM</h5>
        <div>This is Bottom Content</div>
      </template>

      <div>THREE</div>

    </A08SlotNameChild>
  </div>
</template>
