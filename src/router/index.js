import Vue from 'vue'
import VueRouter from 'vue-router'
import Tournament from '../components/Pages/Tournament'
import Orz from '../components/Pages/Orz'
import Siege from '../components/Pages/Siege'
import MainPage from '../components/Pages/MainPage'
import AddOrz from '../components/Pages/AddOrz'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/mainpage',
  },
  {
    path: '/addorz',
    component: AddOrz
  },
  {
    path: '/orz',
    name: 'centaur',
    component: Orz
  },
  {
    path: '/siege',
    name: 'siege',
    component: Siege
  },
  {
    path: '/tournament',
    name: 'tournament',
    component: Tournament
  },
  {
    path: '/mainpage',
    component: MainPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
