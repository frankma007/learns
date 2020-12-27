import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)
export default new Vuex.Store({

  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
    ,
    subtract (state) {
      
      if(state.count>0){
        state.count --
      }
      else{
        state.count =0
      }
    }
  },
  getters: {
    // optCount: function (state) {
    //   return '当前最新的count值是' + state.count
    // }
  }

}

) 