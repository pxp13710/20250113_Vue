<script>
export default {
  data() {
    return {
      name: 'NolBu',
      num: 10,
    };
  },
  methods: {},
  // 계산된 속성이라한다. 기존의 data에 변수를 이용해서 새로운 값을 산출하는 경우 사용
  // 작성은 메서드 방식. 사용은 getter (속성) 방식으로 이용
  // 함수 내부에서 사용된 this 변수, 메서드가 변경된 경우만 새롭게 호출된다

  // 함수가 View에서 사용되는 경우. 매개변수가 없고 리턴값이 있는 경우
};
</script>

<template>
  <h3>A05 Method</h3>

  <div>
    <h5>1. Method</h5>

    onAdd: <br />
    <br />

    Name: {{ name }}
    <input type="text" name="name" class="form-control" :value="name" />
    Num: {{ num }}
    <input type="text" name="num" class="form-control" :value="num" />
  </div>
  <br />

  <div class="mb-5">
    <h5>2. Computed</h5>
    Methods: <br />
    Computed: <br />
  </div>
</template>
