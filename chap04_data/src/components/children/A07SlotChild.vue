<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <h5>A07 Slot Child Component</h5>

  <div class="mb-5">
    <!-- 상위 컴포넌트가 전달한 View가 표시되는 위치 -->
    <slot>
      전달되는 View가 없으면 기본으로 표시될 View
    </slot>
  </div>
</template>
