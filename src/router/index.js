import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ArticleView from '@/views/ArticleView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path:'/blog/:id',
    component: ArticleView,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
