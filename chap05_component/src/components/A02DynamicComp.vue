<script>
import A01BannerHome from './children/A01BannerHome.vue'
import A01BannerAbout from './children/A01BannerAbout.vue'
import A01BannerNews from './children/A01BannerNews.vue'

export default {
  components: { A01BannerHome, A01BannerAbout, A01BannerNews },
  data() {
    return {
      current: 'A01BannerHome',
      keys: ['Home', 'About', 'News'],
    }
  },
  methods: {
    changeCurrent(name) {
      this.current = `A01Banner${name}`;
    }
  }
}
</script>

<template>
  <div id="container">
    <h3>A02 Keep Alive</h3>
    <ul>
      <li v-for="item in keys" :key="item">
        <a href="#" @click="() => changeCurrent(item)">{{ item.toUpperCase() }}</a>
      </li>
    </ul>

    <div class="mb-5">
      <!-- 
        KeepAlive는 동적으로 표시되는 컴포넌트를 캐시화 한다
        include 명령을 통해 cache화 할 컴포넌트를 지정할 수 있다
        exclude 명령을 통해 cache화에서 제외 할 컴포넌트를 지정할 수 있다
        max cache화 할 컴포넌트의 개수를 지정

        include, exclude는 컴포넌트 파일명이 아닌 name 속성값을 스페이스 없이 ,로 기술
      -->
      <KeepAlive include="homeComp,aboutComp" max="2">
        <component :is="current"></component>
      </KeepAlive>
    </div>
  </div>
</template>

<style scoped>
#container { width: 900px; }
#container>ul { margin: 0px; padding: 0px; }
#container>ul li { list-style-type: none; float: left; line-height: 160%;
  width: 300px; height: 40px; }
#container>ul li a { display: block; text-align: center; text-decoration: none;
  background-color: lightgray; color: #000; border: solid 1px Black; }
#container>div { border: 1px solid #c0c0c0; border-top: none; padding: 15px; font-size: smaller; }
</style>
