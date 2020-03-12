import Vue from 'vue'
import Vuex from 'vuex'
import siege from './siege'
import mainPage from './mainPage'
import orz from './orz'
import tournament from './tournament'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mainPage,
    siege,
    orz,
    tournament
  }
})
