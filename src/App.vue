<template>
  <div class="content">
    <site-nav />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
import SiteNav from 'components/Nav'

export default {
  components: {
    SiteNav
  }
}
</script>
<style lang="scss" scoped>
@import 'styles/variables.scss';
</style>
