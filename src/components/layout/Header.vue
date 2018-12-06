<template>
  <div class="ui secondary pointing menu">
    <div class="ui container">
      <router-link to="/" class="item active">Image Storage</router-link>
      <div class="right menu">
        <div v-if="authenticated" class="horizontal">
          <router-link to="/" class="ui item">GALLERY</router-link>
          <router-link to="/upload" class="ui item">UPLOAD</router-link>
          <a @click="logout" class="ui item">LOGOUT</a>
        </div>
        <a v-else @click="loginPrompt" class="ui item">LOGIN</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  methods: mapActions(['loginPrompt', 'logout']),
  computed: mapGetters(['authenticated'])
}
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
