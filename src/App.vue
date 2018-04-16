<template>
  <div id="app" class="content">
    <SiteNav/>
    <router-view/>
  </div>
</template>

<script>
import SiteNav from '@/components/Nav'

export default {
  name: 'App',
  components:{
    SiteNav
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Maven+Pro');

html {
    background-color: black;
    color: #ccc;
    font-size: 62.5%;
}

body {
    margin: 0;
    font-family: 'Maven Pro', sans-serif;
    font-size: 14px;
    font-size: 1.4rem;
    background-image: url('/static/img/monkey1-square-inverted.jpg');
}

.content {
    background-color: #0C0C0C;
    margin: 0 auto;
    max-width: 768px;
    padding: 0 3.6rem;
    border-right: #2ecc71 1px solid;
    border-left: #2ecc71 1px solid;
}
@media only screen and (max-width: 768px) {
    .content {
        padding: 0 1.4rem;
    }
}

.content img {
    width: 100%;
    max-width: 260px;
    height: auto;
    display: block;
    margin: auto;
}

hr {
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, transparent, #2ecc71, transparent);
}

.link, .link:link, a:link {
    cursor:pointer;
    color: #27ae60;
    text-decoration: underline;
}

.link:visited, a:visited, .link:active, a:active, .link:hover , a:hover {
    color: #2ecc71;
}

.post-title{
  margin-bottom: 0;
}
</style>