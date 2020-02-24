import Vue from 'vue'
import VueRouter from 'vue-router'
import Tournament from '../components/Pages/Tournament'
import Orz from '../components/Pages/Orz'
import Agate from '../components/Pages/Agate'
import MainPage from '../components/Pages/MainPage'
import AddOrz from '../components/Pages/AddOrz'
import FillFights from '../components/Pages/fillFights'
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
    path: '/agate',
    name: 'agate',
    component: Agate
  },
  {
    path: '/tournament',
    name: 'activity',
    component: Tournament
  },
  {
    path: '/mainpage',
    component: MainPage
  },
  {
    path: '/fillFights',
    component: FillFights
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
