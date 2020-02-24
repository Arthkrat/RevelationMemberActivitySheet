import Vue from 'vue'
import Vuex from 'vuex'
import agate from './agate'
import mainPage from './mainPage'
import orz from './orz'
import tournament from './tournament'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mainPage,
    agate,
    orz,
    tournament
  }
})
