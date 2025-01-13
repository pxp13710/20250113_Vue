<script>
export default {
  computed: { },
  methods: { }
}
</script>

<template>
  <div class="card" style="width: 50rem;">
    
    <div class="card-body">
      <h3 class="heading">사진 변경</h3>
      <p class="card-text">변경 할 사진을 선택해 주세요</p>

      <form method="post" enctype="multipart/form-data">
        <div>
          현재 사진:<br>
          <img class="thumb" width="100"/>
        </div>
        <br>

        <div>
          사진 파일 선택: <br>
          <input type="file" name="photo" class="form-control" ref="photofile">
        </div>
        <div>
          <div>&nbsp;</div>
          <input type="button" class="btn btn-danger" value="변경">
          <input type="button" class="btn btn-primary" value="취소">
        </div>
      </form>
    </div>
  </div>
</template>
