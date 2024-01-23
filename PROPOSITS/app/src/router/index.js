import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'inici',
    component: HomeView
  },
  
  {
    path: '/nosaltres',
    name: 'nosaltres',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  } ,
  {
    path: '/fotos',
    name: 'fotos',
    component: () => import('../views/FotosView.vue')
  },

  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
