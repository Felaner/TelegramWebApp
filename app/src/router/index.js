import { createRouter, createWebHistory } from 'vue-router'
import AuctionView from '../views/AuctionView.vue'

const routes = [
  {
    path: '/',
    name: 'auction',
    component: AuctionView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
