import Vue from 'vue'
import VueRouter from 'vue-router'
import Activity from '../components/Activity/Activity'
import Centaur from '../components/Centaur/Centaur'
import Agate from '../components/Agate/Agate'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/activity',
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
