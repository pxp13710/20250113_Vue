<script>
// npm i axios bootstrap vue-router vuex
import HeaderLink from './views/HeaderLink.vue'

export default {
  components: { HeaderLink }
}
</script>

<template>
  <div class="m-3">
    <h1>Chap08 Vuex Contact</h1>
    
    <HeaderLink></HeaderLink>

    <hr>

    <RouterView />
  </div>
</template>
