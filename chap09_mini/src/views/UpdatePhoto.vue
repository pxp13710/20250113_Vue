<script>
export default {
  props: ['no'],
  computed: {
    contact() {
      return this.$store.state.contactStore.contact
    }
  },
  methods: {
    updatePhoto() {
      const file = this.$refs.photofile.files[0];
      this.$store.dispatch('contactStore/updatePhotoAction', {no: this.no, file});
      this.$router.push({name: 'list'});
    }
  },
  created() {
    this.$store.dispatch('contactStore/getContactAction', this.no)
  }
}
</script>

<template>
  <div class="card" style="width: 50rem;">
    
    <div class="card-body">
      <h3 class="heading">사진 변경</h3>
      <p class="card-text">변경 할 사진을 선택해 주세요</p>

      <form method="post" enctype="multipart/form-data">
        <div>
          현재 사진: {{ contact.photo }}<br>
          <img :src="contact.photo" class="thumb" width="100"/>
        </div>
        <br>

        <div>
          사진 파일 선택: <br>
          <input type="file" name="photo" class="form-control" ref="photofile">
        </div>
        <div>
          <div>&nbsp;</div>
          <input type="button" class="btn btn-danger" value="변경"
            @click="updatePhoto">
          <input type="button" class="btn btn-primary" value="취소"
            @click="() => $router.push({name: 'list'})">
        </div>
      </form>
    </div>
  </div>
</template>
