import { createStore } from 'vuex'
import auth from "@/modles/auth"
import articles from '@/modles/articles'
import articleHandler from '@/modles/articleHaandler'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {auth,articles,articleHandler}
})
