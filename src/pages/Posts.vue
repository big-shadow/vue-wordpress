<template>
  <div id="posts">
    <transition name="fade">
      <div v-for="post in posts" :key="post.id" :id="post.id" v-if="post.title">
        <h1
          class="post-title link"
          v-html="post.title.rendered"
          @click="$router.push(`post/${post.slug}`)"
        />
        <span v-html="post.modified" />
        <div v-html="post.content.rendered" />
        <hr />
      </div>
    </transition>

    <div class="post-nav-links-wrapper">
      <button @click="backPage" class="post-nav-links">
        <span>&#171;</span>
      </button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button @click="nextPage" class="post-nav-links">
        <span>&#187;</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'packages/axios'

export default {
  data() {
    return {
      posts: Array(0),
      page: 1,
      totalPages: Number(),
      search: String()
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      axios
        .get('posts', {
          params: {
            page: this.page,
            per_page: 1,
            author: 1,
            search: this.search
          }
        })
        .then(d => {
          this.posts = d.data
          this.totalPages = Number(d.headers['x-wp-totalpages'])
        })
        .catch(e => {
          console.log(e)
        })
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++
        this.getPosts()
        this.scrollToTop()
      }
    },
    backPage() {
      if (this.page > 1) {
        this.page--
        this.getPosts()
        this.scrollToTop()
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
