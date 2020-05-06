import Vuex from "vuex" 
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    list:[]
  },
  mutations:{
    inc(state,item){
    state.list=item.list
    }
  }
})
export default store