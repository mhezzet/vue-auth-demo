<template>
  <div>please wait ...</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AuthHandler',
  methods: mapActions(['login']),
  created() {
    this.login(window.location.hash.replace('#', ''))
  }
}
</script>

