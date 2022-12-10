import { createStore } from 'vuex'
import auth from "@/modles/auth"
import articles from '@/modles/articles'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {auth,articles}
})
