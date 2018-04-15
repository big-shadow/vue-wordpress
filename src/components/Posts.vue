<template>
  <div id="posts">
    <div class="post-nav-links-wrapper">
      <button @click="backPage" class="post-nav-links"><span>&#171;</span></button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button @click="nextPage" class="post-nav-links"><span>&#187;</span></button>
    </div>

    <div v-for="(post, i) in posts" :key="post.id" :id="post.id" v-if="post.title">
      <h1 class="post-title link" v-html="post.title.rendered" @click="$router.push(`post/${post.slug}`)"/>
      <span v-html="post.modified"/>
      <div v-html="post.content.rendered"/>
      <hr>
    </div>

    <div class="post-nav-links-wrapper">
      <button @click="backPage" class="post-nav-links"><span>&#171;</span></button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button @click="nextPage" class="post-nav-links"><span>&#187;</span></button>
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
    nextPage: _.debounce(function () {
      if(this.page < this.totalPages){
        this.page++;
        this.getPosts();
      }
    }, 500, {leading: true, trailing: false}),
    backPage: _.debounce(function () {
      if(this.page > 1){
        this.page--;
        this.getPosts();
      }
    }, 500, {leading: true, trailing: false})
  }
}
</script>

<style scoped>
button.post-nav-links {
  width: 28px;
  height: 28px;
  background: none;
  border-radius: 50%;
  border: #27ae60 1px solid;
  margin: 0 6px;
  padding-bottom: 3px;
    color: #ccc;
}

button.post-nav-links > span {
  text-align: center;
  font-weight: bold;
}

button.post-nav-links:visited, button.post-nav-links:active, button.post-nav-links:hover{
    color: #2ecc71;
    border: #2ecc71 1px solid;
    cursor:pointer;
}

div.post-nav-links-wrapper {
  width: 100%;
  text-align: center;
  margin: 1.4rem auto;
}
</style>
