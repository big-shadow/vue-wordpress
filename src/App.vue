<template>
  <div id="app" class="content">
    <SiteNav/>
    <router-view/>
  </div>
</template>

<script>
import SiteNav from "@/components/Nav";

export default {
  name: "App",
  components: {
    SiteNav
  }
};
</script>