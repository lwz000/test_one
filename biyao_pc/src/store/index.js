import { createStore } from 'vuex'

export default createStore({
  state: {
    id:localStorage.getItem('username')
  },
  getters: {
  },
  mutations: {
    
    change_id (state,id) {
      state.id = id
  }

  },
  actions: {
  },
  modules: {
  }
})
