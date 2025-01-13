<script>
export default {
  data() {
    return {
      message: 'Hello World',
    };
  },
  methods: {},
};
</script>

<template>
  <h3>A11 Refs</h3>
  
  <form class="mb-3">
    <div class="input-group">
      <input type="text" class="form-control" name="msg" />
      <button type="submit" class="btn btn-danger">ADD</button>
    </div>
  </form>

  <div class="mb-5">
    Message: {{ message }}
  </div>
</template>
