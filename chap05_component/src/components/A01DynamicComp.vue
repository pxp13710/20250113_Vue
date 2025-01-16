<script>
import A01BannerHome from './children/A01BannerHome.vue'
import A01BannerAbout from './children/A01BannerAbout.vue'
import A01BannerNews from './children/A01BannerNews.vue'

export default {
  components: { A01BannerHome, A01BannerAbout, A01BannerNews },
  data() {
    return {
      current: 'A01BannerHome'
    }
  }
}
</script>

<template>
  <!-- A03Teleport의 popup이 표시될 위치 -->
  <portal-target name="dest"></portal-target>


  <h3>A01 Dynamic Component</h3>

  <div class="mb-3">
    <!-- component는 빌드인 태그. 사용자 정의 컴포넌트를 지정해서 표시할 목적 -->
    <component :is="current"></component>
  </div>
  
  <div class="mb-5">
    <button @click="current = 'A01BannerHome'">HOME</button>
    <button @click="current = 'A01BannerAbout'">ABOUT</button>
    <button @click="current = 'A01BannerNews'">PRODUCT</button>
  </div>
</template>

<style scoped>
.banner { width: 700px; padding: 10px; border: 2px solid #CCC;
  border-radius: 5px; background-color: white; font-size: smaller; }
h5 { font-size: 150%; color: gray; }
</style>
