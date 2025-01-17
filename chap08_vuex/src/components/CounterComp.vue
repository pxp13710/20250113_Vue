<script>
export default {
  created() {
    // console.log(this.$store);
  },
  computed: {
    first() {
      // return this.$store.getters.firstItem;
      return this.$store.getters['countStore/firstItem'];
    },
    second() {
      // return this.$store.getters.getItem(1002);
      return this.$store.getters['countStore/getItem'](1002);
    }
  }
}
</script>

<template>
  <div>
    <!-- <h3>{{ this.$store.state.storeName }}</h3> -->
    <h3>{{ this.$store.state.countStore.storeName }}</h3>

    <div class="mb-3">
      <!-- Size: {{ this.$store.getters.contactSize }}<br /> -->
      Size: {{ this.$store.getters['countStore/contactSize'] }}<br />
      First: {{ first.no }} / {{ first.name }}<br />
      Second: {{ second.no }} / {{ second.name }}<br />
    </div>

    <div>
      Num: {{ this.$store.state.countStore.count }}<br>
      <!-- 
        <button @click="() => this.$store.commit('increase', 2)">+</button>
        <button @click="() => this.$store.dispatch('increaseAction', 3)">+</button>
        <button @click="() => this.$store.commit('decrease')">-</button> 
      -->

      <button @click="() => this.$store.commit('countStore/increase', 2)">+</button>
      <button @click="() => this.$store.dispatch('countStore/increaseAction', 3)">+</button>
      <button @click="() => this.$store.commit('countStore/decrease')">-</button>
    </div>
</div>
</template>
