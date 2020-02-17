import Vue from 'vue'
import Vuex from 'vuex'
import agate from './agate'
import mainPage from './mainPage'
import orz from './orz'
import activity from './activity'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mainPage,
    agate,
    orz,
    activity
  }
})
