<script>
export default {};
</script>

<template>
  <h3>A03 Attribute Directive</h3>

  <div>
    <h5>1. 속성 바인딩</h5>
    <!-- 속성은 반드시 v-bind:속성명="변수명 or 값" 형태로 참조. v-bind는 생략 가능 -->
    <input type="text" class="form-control" />
    <input type="text" class="form-control" />
    <input type="text" />
    <input />

    <div>Hello World</div>
  </div>
  <br />

  <div>
    <h5>2. 양방향 바인딩</h5>
    <input type="text" class="form-control" />
    <input type="text" class="form-control" />
    <input type="text" class="form-control" />
  </div>
  <br />

  <div class="row">
    <div class="col-6">
      <select class="form-control">
        <option value="width">Width</option>
        <option value="height">Height</option>
      </select>
    </div>
    <div class="col-6">
      <input type="text" class="form-control" />
    </div>
  </div>
  <br />

  <div class="mb-5">
    <img src="/images/tree.jpg" alt="Tree" />
  </div>
</template>
