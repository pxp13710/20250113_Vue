<script>
export default {
  
};
</script>

<template>
  <table class="table mb-5">
    <thead>
      <tr>
        <th style="width: 10%">ID</th>
        <th>Todo</th>
        <th style="width: 10%">Complete</th>
        <th style="width: 10%">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td><span></span></td>
        <td><button class="btn btn-primary">Complete</button></td>
        <td><button class="btn btn-danger">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
