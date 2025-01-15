<script>
export default {
  props: ['title', 'today', 'age', 'add', 'changeAddress', 'arr', 'user', 'onAdd'],
  data() {
    return {};
  },
  computed: {
    now() {
      const dateTime = new Date();
      switch(this.today) {
        case 'date':
          return dateTime.toLocaleDateString();
        case 'time':
          return dateTime.toLocaleTimeString();
        default:
          return dateTime.toLocaleString();
      }
    }
  }
};
</script>


<template>
  <h5>A02 Props Child TWO</h5>

  <div class="mb-5">
    Title: {{ title }}<br />
    NOW: {{ now }}<br />
    Age: {{ age + 1 }}<br />
    Address: {{ add }}<br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    onAdd: {{ onAdd(10, 20) }}
    
    <hr>

    <button @click="() => changeAddress('광주')">광주</button>
  </div>
</template>
