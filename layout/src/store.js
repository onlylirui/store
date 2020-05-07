import Vuex from "vuex" 
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    list:[],
    listNode:[]
  },
  mutations:{
    inc(state,item){
    state.list=item.list
    },
    add(state,item){
     state.listNode=item.listNode
    }
  }
})
export default store