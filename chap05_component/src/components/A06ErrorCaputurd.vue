<script>
import A06ErrorChild from './children/A06ErrorChild.vue'

export default {
  components: { A06ErrorChild },
  // 자신의 에러는 처리할 수 없음. 하위 컴포넌트의 에러를 일괄로 잡아 처리 
  errorCaptured(err, errComp, info) {
    console.log('----------- A06Error -----------');
    console.log(err);
    console.log(errComp);
    console.log(info);

    errComp.isError = false;

    // A06ErrorCapuiturd 컴포넌트는 App의 자식 컴포넌트다
    // 따라서 A06ErrorChild에서 발생된 에러를 App도 처리
    // 상위 컴포넌트에서 에러 처리를 하지 않도록 방지
    // return false;

    return true;
  }
}
</script>

<template>
  <h3>A06 Error</h3>

  <hr>

  <div class="mb-5">
    <A06ErrorChild></A06ErrorChild>
  </div>
</template>
