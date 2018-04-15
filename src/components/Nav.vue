<template>
  <div id="header">
    <img id="site-avatar" src="/static/img/monkey1-square.jpg" alt="Avatar">
    <h1 id="site-title" class="link" @click="$router.push('/')">{{ title }}</h1>
    <h4 id="site-subtitle" v-html="quote"></h4>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'site-nav',
  data () {
    return {
      title: 'Ray Winkelman'
    }
  },
  computed: {
    quote() { return this.$quotes.getRandomQuote(); }
  }
}
</script>

<style scoped>
div#header {
  padding-top: 1rem;
}
img#site-avatar {
  border-radius: 50%;
  width: 100%;
  max-width: 100px;
  height: auto;
  display: block;
  margin: auto;
}
#site-title {
  font-size: 38px;
  font-size: 3.8rem;
  text-align: center;
  text-decoration: none;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}
#site-subtitle {
  padding-top: 0.4rem;
  text-align: center;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}
nav {
  padding-top: 3.6rem;
}
</style>
