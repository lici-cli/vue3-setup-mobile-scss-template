<template>
  <header class="c-header" :class="{ 'c-header--fixed': fixed }">
    <slot></slot>
  </header>
</template>

<script>
export default { name: 'CHeader' }
</script>

<script setup>
import { defineProps } from 'vue'
defineProps({
  fixed: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
@include b(c-header) {
  @include m(fixed) {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
}
</style>
