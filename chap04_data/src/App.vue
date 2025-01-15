<script>
import A01Component from '@components/A01Component.vue';
import A02Props from './components/A02Props.vue';
import A03Emits from './components/A03Emits.vue';

export default {
  components: { 
    A01Component, A02Props, A03Emits, 
  },
  data() {
    return {}
  }
}
</script>

<template>
  <div class="m-3">
    <h1>Chapter04 Data</h1>

    <A03Emits></A03Emits>
    <A02Props></A02Props>
    <A01Component></A01Component>
  </div>
</template>
