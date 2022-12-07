<template>
  <section class="c-layout" :class="{ 'c-layout--horizontal': horizontal }">
    <slot></slot>
  </section>
</template>

<script>
export default { name: 'CLayout' }
</script>

<script setup>
import { defineProps } from 'vue'
defineProps({
  horizontal: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
@include b(c-layout) {
  display: flex;
  flex-direction: column;
  @include m(horizontal) {
    flex-direction: row;
  }
}
</style>
