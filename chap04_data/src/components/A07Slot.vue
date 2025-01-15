<script>
import A07SlotChild from './children/A07SlotChild.vue';

export default {
  components: { A07SlotChild },
  data() {
    return {
      name: '놀부'
    };
  },
};
</script>

<template>
  <h3>A07 Slot</h3>

  <div class="mb-5">
    <!-- 커스텀 컴포넌트 내부의 View는 자식 컴포넌트의 <slot> 태그 위치에 표시된다 -->
    <A07SlotChild>
      <h5>ONE</h5>
      <div>Good Morning {{ name }}</div>
    </A07SlotChild>

    <A07SlotChild>
      <h5>TWO</h5>
      <div>Good Afternoon {{ name }}</div>
    </A07SlotChild>

    <A07SlotChild></A07SlotChild>
  </div>
</template>
