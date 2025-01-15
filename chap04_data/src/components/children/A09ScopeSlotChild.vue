<script>
export default {
  data() {
    return {
      kor: 90,
      eng: 70,
      user: { name: 'HungBu', age: 20, address: 'Busan' },
    };
  },
  methods: {
    changeKor(kor) {
      this.kor = kor;
    },
  },
};
</script>

<template>
  <h3>A09 Scoped Slot</h3>

  <div class="mb-3">자식 컴퍼넌트의 데이터를 부모 컴퍼넌트에서 조작.</div>

  <div class="mb-3">
    자식에서 구현<br />
    KOR: {{ kor }}<br />
    ENG: {{ eng }}<br />
    USER: {{ user.name }} / {{ user.age }}
  </div>

  <div>
    <input type="text" class="form-control" v-model.number="kor" />
    <input type="text" class="form-control" v-model.number="eng" />
  </div>

  <div class="mb-5">
    <!-- slot props라 한다. name이 없으면 기본으로 name="default"가 된다
      속성을 이용해 상위 컴포넌트가 참조할 수 있는 값을 전달할 수 있다 
      name 속성은 slot을 나타내는 이름으로 속성의 값으로 사용하지 않는다
    -->
    <slot nickname="놀부" :age="30" :kor="kor" :eng="eng" :user="user" :changeKor="changeKor"></slot>

    <slot name="jumsu"  nickname="흥부" :age="20" :kor="kor" :eng="eng" :user="user" :changeKor="changeKor"></slot>
  </div>
</template>

