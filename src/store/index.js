import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import nav_items from './navItems'

Vue.use(Vuex)

const state = {
  crumbs: [],
  nav_items: nav_items,
  gyms: [],
  gym: {}
}

const store = new Vuex.Store({
  state,
  getters,
})

export default store
