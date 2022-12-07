<template>
  <footer class="c-footer" :class="{ 'c-footer--fixed': fixed }">
    <slot></slot>
  </footer>
</template>

<script>
export default { name: 'CFooter' }
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
@include b(c-footer) {
  @include m(fixed) {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }
}
</style>
