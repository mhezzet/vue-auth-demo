<template>
  <div>
    <Header/>
    <router-view class="ui container"/>
  </div>
</template>

<script>
import Header from './components/layout/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
</style>
