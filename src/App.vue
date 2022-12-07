<template>
  <div class="app">
    <h2>欢迎使用模版</h2>
    <router-link to="/home">home</router-link>
    <router-link to="/login">login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'App',
  components: {},
  setup() {
    onMounted(() => {
      window.document.documentElement.setAttribute('data-theme', 'cool')
    })
  }
}
</script>

<style lang="scss"></style>
