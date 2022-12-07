<template>
  <div
    class="c-box-skin"
    bg-secondary
    :class="type ? 'c-box-skin--' + type : ''"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CBoxSkin'
}
</script>
<script setup>
import { defineProps } from 'vue'
defineProps({
  type: {
    validator: function (value) {
      // 这个值必须匹配下列字符串中的一个
      return ['top', 'bottom'].indexOf(value) !== -1
    }
  }
})
</script>

<style scoped lang="scss">
@include b(c-box-skin) {
  @include m(top) {
    border-top: $border-base;
  }
  @include m(bottom) {
    border-bottom: $border-base;
  }
}
</style>
