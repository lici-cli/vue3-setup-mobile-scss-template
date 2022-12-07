<template>
  <div class="c-box-center" font-tertinary>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CBoxCenter'
}
</script>
<script setup>
import { defineProps } from 'vue'
defineProps({
  text: {
    type: String,
    require: true
  }
})
</script>

<style scoped lang="scss">
@include b(c-box-center) {
  color: $color-text-tertiary;
  @include box-center;
}
</style>
