import SeekAndDestroy from 'pages/SeekAndDestroy'
import Posts from 'pages/Posts'
import Post from 'pages/Post'

export default [
  {
    path: '*',
    component: Posts
  },
  {
    path: '/post/:slug',
    component: Post
  },
  {
    path: '/seek-and-destroy',
    component: SeekAndDestroy
  }
]
