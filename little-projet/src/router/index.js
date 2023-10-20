import { createRouter, createWebHistory } from 'vue-router'
import Accueil from './../views/AccueilView.vue'
import Pokemon from './../views/PokemonView.vue'
import ToDoList from './../views/ToDoListView.vue'
import Card from './../views/CardView.vue'
import Calculate from './../views/CalculateView.vue'
import Progress from './../views/ProgressView.vue'
import FAQ from './../views/FAQView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/Pokemon',
      name: 'Pokemon',
      component: Pokemon
    },
    {
      path: '/ToDoList',
      name: 'ToDolist',
      component: ToDoList
    },
    {
      path: '/Card',
      name: 'Card',
      component: Card
    },
    {
      path: '/Calculate',
      name: 'Calculate',
      component: Calculate
    },
    {
      path: '/Progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    },
  ]
})

export default router
