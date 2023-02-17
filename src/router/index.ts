import CalcVue from '@/components/Calc.vue'
import AboutViewVue from '@/views/AboutView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/FoodsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/calc',
      name: 'calc',
      component: CalcVue
    },
    {
      path: '/foods',
      name: 'foods',
      component: FoodsView
    }
  ]
})

export default router
