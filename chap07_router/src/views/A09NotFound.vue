<script>
export default {
  created() {
    console.log(this.$route);
  }
}
</script>
<template>
  <div>
    <h1>요청하신 {{ $route.params.path}}파일이 존재하지 않습니다.</h1>
  </div>
</template>
