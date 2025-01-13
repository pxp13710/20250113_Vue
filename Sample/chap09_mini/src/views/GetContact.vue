<script>
export default {
  props: [],
  computed: { },
  methods: { },
  mounted() { },
}
</script>

<template>
  <div class="container-fluid">
    <h3>Get Contact</h3>

    <div class="mb-3">
      Name: <input type="text" class="form-control" disabled /><br />
      Tel: <input type="text" class="form-control" disabled /><br />
      Address: <input type="text" class="form-control" disabled /><br />
    </div>
    
    <div>
      <button class="btn btn-outline-primary">수정</button>
      <button class="btn btn-outline-primary">삭제</button>
    </div>
  </div>
</template>
