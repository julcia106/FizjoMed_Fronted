import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: false,
  },
  watch :{
    isAdmin(newValue, oldValue){
      console.log(newValue);
    }
  },
  getters: {
    getAdminInfo: (state) => {
      return state.isAdmin;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
