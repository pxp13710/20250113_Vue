<script>
import A01BannerHome from './children/A01BannerHome.vue'
import A01BannerAbout from './children/A01BannerAbout.vue'
import A01BannerNews from './children/A01BannerNews.vue'

export default {
  components: { A01BannerHome, A01BannerAbout, A01BannerNews },
}
</script>

<template>
  <h3>A01 Dynamic Component</h3>

  <div class="mb-3">

  </div>
  
  <div class="mb-5">
    <button>HOME</button>
    <button>ABOUT</button>
    <button>PRODUCT</button>
  </div>
</template>

<style scoped>
.banner { width: 700px; padding: 10px; border: 2px solid #CCC;
  border-radius: 5px; background-color: white; font-size: smaller; }
h5 { font-size: 150%; color: gray; }
</style>
