<script>
export default {
  props: ['todo'],
  methods: {
    
  }
}
</script>

<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td><span :class="{[$style.done]: todo.done}">{{ todo.text }}</span></td>
    <td>
      <button class="btn btn-primary">Complete</button>
    </td>
    <td>
      <button class="btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<style module>
  .done { text-decoration: line-through; }
</style>