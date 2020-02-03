import Vue from 'vue'
import Vuex from 'vuex'
import agate from './agate'
import activity from './activity'
import centaur from './centaur'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activity,
    agate,
    centaur
  }
})
