<template>
  <c-box-skin mt10 class="c-foot-nav" style="top">
    <c-row>
      <c-col v-for="item in list" :key="item" :span="24 / list.length">
        <router-link :to="item.path">
          <c-box-center
            class="c-foot-nav__text"
            :class="{ 'c-foot-nav__text--active': item.active }"
            >{{ item.text }}</c-box-center
          >
        </router-link>
      </c-col>
    </c-row>
  </c-box-skin>
</template>

<script>
export default {
  name: 'CFootNav'
}
</script>

<script setup>
import { defineProps } from 'vue'
defineProps({
  list: {
    type: Object,
    default: () => {
      return [
        { path: '/', text: '首页', active: true },
        { path: '/', text: '商城' },
        { path: '/', text: '直播' },
        { path: '/', text: '我' }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
@include b(c-foot-nav) {
  @include e(text) {
    color: $color-text-primary;
    @include m(active) {
      color: $color-text-quaternary;
    }
  }
}
</style>
