import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Restaurants from '../views/Restaurants.vue'
import AdminRestaurants from '../views/Admin/Restaurants.vue'
import Plats from '../views/Plats.vue'
import Checkout from '../views/Checkout.vue'
import ListePlat from '../views/ListePlat.vue'
import AdminFeedbacks from '../views/Admin/Feedbacks.vue'
import AdminCommandes from '../views/Admin/Commandes.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/plats',
    name: 'Plats',
    component: Plats
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/plat-liste',
    name: 'ListePlat',
    component: ListePlat
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/admin/restaurants',
    name: 'AdminRestaurants',
    component: AdminRestaurants
  },
  {
    path: '/admin/feedbacks',
    name: 'AdminFeedbacks',
    component: AdminFeedbacks
  },
  {
    path: '/admin/commandes',
    name: 'AdminCommandes',
    component: AdminCommandes
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
