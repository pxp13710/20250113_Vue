<script>
import A02PropsOne from './children/A02PropsOne.vue';
import A02PropsTwo from './children/A02PropsTwo.vue';

export default {
  components: { A02PropsOne, A02PropsTwo },
  data() {
    return {
      address: 'Seoul',
      arr: [10, 20],
      user: { name: 'HungBu', age: 30 },
    };
  },
  methods: {
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y}`;
    },
    changeAddress(x) {
      this.address = x;
    }
  },
};
</script>

<template>
  <h3>A02 Props</h3>

  <div class="mb-5">
    <!-- 하위 컴포넌트에 값 전달은 속성을 사용한다. 따라서 사용자정의 컴포넌트에 HTML 속성은 사용 안함 -->
    <A02PropsOne title="CARD 01" today="date" v-bind:age="10" :add="address" 
      :changeAddress="changeAddress" :arr="arr" :user="user" :onAdd="onAdd">
    </A02PropsOne>
    <A02PropsOne title="CARD 02" :add="address"></A02PropsOne>
    <div class="mb-5">
      <button @click="() => changeAddress('Busan')">Busan</button>
      <button @click="() => changeAddress('Seoul')">Seoul</button>
    </div>

    <A02PropsTwo  title="CARD 03" today="all" v-bind:age="10" :add="address" 
      :changeAddress="changeAddress" :arr="arr" :user="user" :onAdd="onAdd"></A02PropsTwo>
  </div>
</template>
