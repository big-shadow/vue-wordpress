<template>
  <div>
    <div v-pre class="navbar">
      <router-link to="/">Blogroll</router-link>
      <div class="dropdown">
        <button class="dropbtn">External Links</button>
        <div class="dropdown-content">
          <a href="https://wp.raywinkelman.com">Wordpress Site</a>
          <a href="https://linkedin.com/in/raywinkelman">LinkedIn</a>
          <a href="https://github.com/ray-winkelman">GitHub</a>
        </div>
      </div> 
    </div>
    <div class="header">
      <!--<img v-pre class="site-avatar" src="/static/img/monkey1-square-grayscale.jpg" alt="Avatar">-->
      <h1 class="site-title" @click="$router.push('/')">{{ title }}</h1>
      <h4 v-pre class="site-subtitle">monkey with keyboard</h4>
      <h4 v-pre class="site-subtitle">doin' computer stuff</h4>
      <h4 v-pre class="site-subtitle">for long time</h4>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "site-nav",
  data() {
    return {
      title: "Ray Winkelman"
    };
  },
  computed: {
    quote() {
      return this.$quotes.getRandomQuote();
    }
  }
};
</script>
