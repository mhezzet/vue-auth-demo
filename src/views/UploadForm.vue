<template>
  <div class="dropper">
    <input type="file" multiple accept="image/*" @change="uploadImages($event.target.files)">
    <span>Drag files here</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages'])
}
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
.dropper:hover {
  background: aliceblue;
}
</style>
