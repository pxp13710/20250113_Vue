<script>
import A07WarnChild from './children/A07WarnChild.vue'

export default {
  components: { A07WarnChild },
  data() {
    return {
      isChecked: false
    }
  },
}
</script>

<template>
  <h3>A07 Warn</h3>

  <div class="mb-5">
    <A07WarnChild></A07WarnChild>
  </div>
</template>
