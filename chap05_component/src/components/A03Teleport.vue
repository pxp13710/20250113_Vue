<script>
import A03TeleportChild from './children/A03TeleportChild.vue'

export default {
  components: { A03TeleportChild },
}
</script>


<template>
  <h3>A03 Teleport - Vue3.X</h3>

  <p>
    Vue is a framework and ecosystem that covers most of the common features needed in frontend development.
    But the web is extremely diverse - the things we build on the web may vary drastically in form and scale.
    With that in mind, Vue is designed to be flexible and incrementally adoptable.
    Depending on your use case, Vue can be used in different ways:<br>
  </p>

  <div class="mb-5">
    <A03TeleportChild></A03TeleportChild>
  </div>
</template>
