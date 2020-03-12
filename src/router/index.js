import Vue from 'vue'
import VueRouter from 'vue-router'
import Tournament from '../components/Pages/Tournament'
import Orz from '../components/Pages/Orz'
import Siege from '../components/Pages/Siege'
import MainPage from '../components/Pages/MainPage'
import FillOrz from '../components/Pages/FillOrz'
import FillTournament from '../components/Pages/FillTournament'
import FillSiege from '../components/Pages/FillSiege'
import FillCentaur from '../components/Pages/FillCentaur'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/mainpage',
  },
  {
    path: '/fillorz',
    component: FillOrz
  },
  {
    path: '/fillsiege',
    component: FillSiege
  },
  {
    path: '/fillcentaur',
    component: FillCentaur
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
  },
  {
    path: '/filltournament',
    component: FillTournament
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
{/* 

     */}