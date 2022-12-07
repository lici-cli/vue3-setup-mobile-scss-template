<template>
  <div class="home">{{ message }}</div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('hello home')
</script>

<style scoped>
/* prettier-ignore */
.home {
  }
</style>
