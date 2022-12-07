<template>
  <div class="login">
    <c-box-center>{{ message }}</c-box-center>
    {{ $store.state.name }}
    <button @click="handleClick">handleClick</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import request from '@/service'
const message = ref('hello login')
const handleClick = () => {
  request.get('/api/order/list').then((res) => {
    console.log(res)
  })
}
</script>

<style scoped>
/* prettier-ignore */
.login {
  }
</style>
