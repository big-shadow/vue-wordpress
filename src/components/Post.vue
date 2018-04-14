<template>
  <div id="post" v-if="post.title">
    <h1 v-html="post.title.rendered"/>
    <span class="timestamp" v-html="post.modified"/>
    <div v-html="post.content.rendered"/>
  </div>
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
      post: { 
        slug: this.$route.params.slug
      }
    }
  },
  created(){
    this.getPost();
  },
  methods:{
    getPost(){
      this.$axios.get('posts', {
        params: {
            slug: this.$route.params.slug
          }
      }).then(d => {
        this.post = d.data[0];
      }).catch(e => {
        console.log(e);
      });
    }
  }
}
</script>

<style scoped>

</style>
