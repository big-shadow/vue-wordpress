<template>
  <div>
    <div class="navbar">
      <router-link to="/">Blogroll</router-link>
      <div class="dropdown">
        <button class="dropbtn">External Links &darr;</button>
        <div class="dropdown-content">
          <a href="https://wp.raywinkelman.com">Wordpress Site</a>
          <a href="https://linkedin.com/in/raywinkelman">LinkedIn</a>
          <a href="https://github.com/ray-winkelman">GitHub</a>
        </div>
      </div> 
    </div>
    <div id="header">
      <img id="site-avatar" src="/static/img/monkey1-square-grayscale.jpg" alt="Avatar">
      <h1 id="site-title" class="link" @click="$router.push('/')">{{ title }}</h1>
      <h4 id="site-subtitle" v-html="quote"></h4>
    </div>
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
  padding: 1.4rem 0;
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

/* Navbar container */
.navbar {
  overflow: hidden;
}
  
/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px; 
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: #2ecc71;
  color: black;
  font-weight: bold;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
