import Vue from 'vue'
import Vuex from 'vuex'
import agate from './agate'
import mainPage from './mainPage'
import centaur from './centaur'
import activity from './activity'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mainPage,
    agate,
    centaur,
    activity
  }
})
