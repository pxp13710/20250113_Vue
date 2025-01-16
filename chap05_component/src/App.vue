<script>
import A01DynamicComp from './components/A01DynamicComp.vue';
import A02DynamicComp from './components/A02DynamicComp.vue';
import A03Teleport from './components/A03Teleport.vue';
import A04Suspense from './components/A04Suspense.vue';
import A05Suspense from './components/A05Suspense.vue';
import A06ErrorCaputurd from './components/A06ErrorCaputurd.vue';
import A07WarnHandler from './components/A07WarnHandler.vue';

export default {
  components: { 
    A01DynamicComp, A02DynamicComp, A03Teleport, A04Suspense, A05Suspense,
    A06ErrorCaputurd, A07WarnHandler
  },
  errorCaptured(err, errComp, info) {
    // 자신 App 컴포넌트를 제외한 모든 컴포넌트의 Error 처리
    console.log('----------- App -----------');
    console.log(err);
    console.log(errComp);
    console.log(info);

    // App는 main.js의 자식 컴포넌트. main.js에서 처리하도록 설정 => true
    return true;
  }
}
</script>

<template>
  <div class="m-3">
    <h1>Chap04 Component</h1>

    <A07WarnHandler></A07WarnHandler>
    <A06ErrorCaputurd></A06ErrorCaputurd>
    <A05Suspense></A05Suspense>
    <A04Suspense></A04Suspense>
    <A03Teleport></A03Teleport>
    <A02DynamicComp></A02DynamicComp>
    <A01DynamicComp></A01DynamicComp>
  </div>
</template>
