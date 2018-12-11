import Vue from 'vue'
import Vuex from 'vuex'
import countA from './modules/a'
import countB from './modules/b'

Vue.use(Vuex)

// 全局 modules
export default new Vuex.Store({
  modules: {
    countA,
    countB
  }
})
