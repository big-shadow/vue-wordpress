<template>
  <div id="app" class="content">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'App',
  components:{
    Nav
  }
}
</script>