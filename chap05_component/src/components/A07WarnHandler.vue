<script>
import A07WarnChild from './children/A07WarnChild.vue'

export default {
  components: { A07WarnChild },
  data() {
    return {
      isChecked: false
    }
  },
  // 경고에 관련된 처리는 모두 main.js에서 처리한다
}
</script>

<template>
  <h3>A07 Warn</h3>

  <div class="mb-5">
    <A07WarnChild></A07WarnChild>
  </div>
</template>
