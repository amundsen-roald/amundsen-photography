import Vue from 'vue'
import Router from 'vue-router'

import Blog from '@/views/blog/index.vue'
import Photography from '@/views/photography/index.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/blog',
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      meta: { title: 'Amundsen Blog' },
    },
    {
      path: '/photography',
      name: 'Photography',
      component: Photography,
      meta: { title: 'Amundsen Photography' },
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title}` : 'Amundsen'
  next()
})

router.afterEach(async (to, from) => {

})

export default router
