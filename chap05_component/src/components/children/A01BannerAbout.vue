<script>
export default {
  name: 'aboutComp',
  data() {
    return {
      today: new Date(),
      now: new Date(),
    }
  },
  created() { },
  mounted() { },
  activated() {
    console.log('About activated');
    this.now = new Date();
  },
  deactivated() {
    console.log('About deactivated');
  }
}
</script>

<template>
  <div class="banner">
    <h5>About Component</h5>
    <p>Vue is a framework and ecosystem that covers most of the common features needed in frontend development. 
      But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. 
      With that in mind, Vue is designed to be flexible and incrementally adoptable. 
      Depending on your use case, Vue can be used in different ways:<br>
      <br>

      Today: {{today.toLocaleString()}}<br />
      Now: {{now.toLocaleString()}}<br />
    </p>
  </div>
</template>
