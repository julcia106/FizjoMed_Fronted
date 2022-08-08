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
    isAdmin: (state) => {
      return state.isAdmin;
    }
  },
  mutations: {
    isAdmin(state, isAdmin){
      state.isAdmin = isAdmin;
    }
  },
  actions: {
    isAdmin(context, isAdmin){
      context.commit('isAdmin', isAdmin);
    }
  },
  modules: {
  }
})
