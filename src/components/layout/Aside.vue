<template>
  <div class="c-aside">
    <slot></slot>
  </div>
</template>

<script>
export default { name: 'CAside' }
</script>
<script setup>
import {} from 'vue'
</script>

<style scoped lang="scss">
@include b(c-aside) {
  overflow: hidden;
  flex-shrink: 0;
}
</style>
