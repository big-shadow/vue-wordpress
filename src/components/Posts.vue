<template>
  <div id="posts">
    <div v-for="post in posts" :key="post.id" :id="post.id" v-if="post.title">
      <h1 class="link" v-html="post.title.rendered" @click="$router.push(`post/${post.slug}`)"/>
      <div v-html="post.content.rendered"/>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'posts',
  data () {
    return {
      posts: Array(0),
      page: 1,
      search: String()
    }
  },
  created(){
    this.getPosts();
  },
  methods:{
    getPosts(){
      this.$axios.get('posts', {
        params: {
            page: this.page,
            per_page: 50,
            author:1,
            search: this.search
          }
      }).then(d => {
        this.posts = d.data;
      }).catch(e => {
        console.log(e);
      });
    }
  }
}
</script>

<style scoped>

</style>
