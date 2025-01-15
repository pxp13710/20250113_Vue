<script>
import A03EmitChild from './children/A03EmitChild.vue';

export default {
  components: { A03EmitChild },
  data() {
    return {
      num: '',
      // obj: { arr: [], user: {} }
      obj: {}
    };
  },
  methods: {
    getNumber(evt) {
      // console.log(evt);
      this.num = evt;
    },
    getObject(evt) {
      // console.log(evt);
      this.obj = evt;
    }
  },
};
</script>

<template>
  <h3>A03 Emits</h3>

  <div class="mb-3">
    Number: {{ num }}<br />
    Number: {{ obj.num }}<br />
    Name: {{ obj.name }}<br />
    <!-- ? => ES2021 표준. ? 앞이 undefined, null 이면 .뒤를 평가하지 않고 undefined, null을 반환 -->
    Array: {{ obj.arr?.[0] }}<br />
    User: {{ obj.user?.name }}<br />
  </div>

  <hr />

  <div class="mb-5">
    <A03EmitChild @numEvent="getNumber" @objEvent="getObject"></A03EmitChild>
  </div>
</template>
