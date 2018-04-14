<template>
  <nav>
    <h1 id="site-title" class="link" @click="$router.push('/')">{{ title }}</h1>
    <h4 id="site-subtitle">a very tech bro</h4>
    <hr>
  </nav>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      title: 'Ray Winkelman'
    }
  }
}
</script>

<style scoped>
#site-title {
  font-size: 38px;
  font-size: 3.8rem;
  text-align: center;
  text-decoration: none;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}
#site-subtitle {
  text-align: center;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}
nav {
  padding-top: 3.6rem;
}
</style>
