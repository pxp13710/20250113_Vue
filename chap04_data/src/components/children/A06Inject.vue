<script>
export default {
  inject: ['name', 'user', 'changeName', 'changeUser'],
  data() {
    return {};
  },
};
</script>

<template>
  <h3>A06 Inject</h3>

  <div class="mb-5">
    Name: {{ name }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />

    <button @click="changeName">Name</button>
    <button @click="changeUser">User</button><br />
  </div>
</template>
