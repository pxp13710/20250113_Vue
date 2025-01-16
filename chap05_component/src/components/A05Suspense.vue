<script>
import { defineAsyncComponent } from 'vue';
// import pMinDelay from 'p-min-delay';

import LoadComp from './children/LoadComp.vue';
import ErrorComp from './children/ErrorComp.vue';

const A01About = defineAsyncComponent({
  loader() {
    // return pMinDelay(import('./children/A01BannerHome.vue'), 3000);

    return new Promise((resolve, reject) => {
      setTimeout((check) => {
        if(check) resolve(import('./children/A01BannerHome.vue'))
        else reject(new Error('파일을 로드할 수 없습니다...'))
      }, 2000, true)
    })
  },
  onError(err, retry, fail, attempts) {
    console.log(attempts);                // 재 시도 횟수
    if(err && attempts < 2) retry();      // 재 시도
    else fail();                          // 최종 에러 처리
  },
  errorComponent: ErrorComp,
  loadingComponent: LoadComp,
  delay: 500,                     // loading 컴포넌트 표시 지연시간
  timeout: 5000,                  // 지정시간 5초가 지나면 에러 처리
  suspensible: false,             // false => loadingComponent이용, true => fallback의 텍스트 또는 컴포넌트 이용
});

export default {
  components: { A01About },
}
</script>

<template>
  <h3>A05 Suspense - Vue3</h3>

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