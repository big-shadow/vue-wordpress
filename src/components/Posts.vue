<template>
  <div id="posts">
    <div class="post-nav-links-wrapper">
      <button @click="backPage" class="post-nav-links">Back</button>
      <button @click="nextPage" class="post-nav-links">Next</button>
    </div>
    <hr>
    <div v-for="(post, i) in posts" :key="post.id" :id="post.id" v-if="post.title">
      <h1 class="link" v-html="post.title.rendered" @click="$router.push(`post/${post.slug}`)"/>
      <span class="timestamp" v-html="post.modified"/>
      <div v-html="post.content.rendered"/>
      <hr>
      <div class="post-nav-links-wrapper">
        <button @click="backPage" class="post-nav-links">Back</button>
        <button @click="nextPage" class="post-nav-links">Next</button>
      </div>
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
      totalPages: Number(), 
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
            per_page: 1,
            author:1,
            search: this.search
          }
      }).then(d => {
        this.posts = d.data;
        this.totalPages = Number(d.headers['x-wp-totalpages'])
      }).catch(e => {
        console.log(e);
      });
    },
    nextPage(){
      if(this.page < this.totalPages){
        this.page++;
        this.getPosts();
      }
    },
    backPage(){
      if(this.page > 1){
        this.page--;
        this.getPosts();
      }
    }
  }
}
</script>

<style scoped>
button.post-nav-links {
  width: 60px;
  height: 60px;
  background: none;
  border-radius: 50%;
  border: #27ae60 1px solid;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: #ccc;
  margin: 0 6px;
}
button.post-nav-links:visited, button.post-nav-links:active, button.post-nav-links:hover{
    color: #2ecc71;
    border: #2ecc71 1px solid;
}

div.post-nav-links-wrapper {
  width: 100%;
  text-align: center;
  margin: auto;
}
</style>
