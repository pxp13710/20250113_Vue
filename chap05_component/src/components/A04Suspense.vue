<script>
// npm i p-min-delay
import { defineAsyncComponent } from 'vue';
import pMinDelay from 'p-min-delay';

// 불러올 컴포넌트가 어떠한 이유(크기, ajax)로 늦게 표시되는 경우 대체 컴포넌트를 표시
const A01About = defineAsyncComponent(() => {
  return pMinDelay( import('./children/A01BannerAbout.vue'), 2000 );
});

export default {
  components: { A01About },
}
</script>

<template>
  <h3>A04 Suspense - Vue3</h3>

  <div class="mb-5">
    <Suspense>
      <template #default>
        <A01About></A01About>
      </template>
      <template #fallback>
        <h5>Loading...</h5>
      </template>
    </Suspense>
  </div>
</template>


<style scoped>
.dialog { 
  position: fixed; top: 50px; left: 30%; width: 600px;
  height: 200px; z-index: 99999; border: 1px solid gray;
  background-color: white; padding: 10px;
}
</style>