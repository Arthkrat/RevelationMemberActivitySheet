import Vue from 'vue'
import VueRouter from 'vue-router'
import Activity from '../components/Pages/Activity'
import Centaur from '../components/Pages/Centaur'
import Agate from '../components/Pages/Agate'
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
    path: '/centaur',
    name: 'centaur',
    component: Centaur
  },
  {
    path: '/agate',
    name: 'agate',
    component: Agate
  },
  {
    path: '/activity',
    name: 'activity',
    component: Activity
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
