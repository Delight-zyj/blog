import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 

// 准备actions，用于响应组件中的动作
const actions = {}
// mutations 用于操作数据（state）
const mutations = {}
// state 用于存储数据
const state = {}


export default new Vuex.Store({
  actions,
  mutations,
  state
})