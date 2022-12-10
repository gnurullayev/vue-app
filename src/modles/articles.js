import { ArticlesService } from "@/service/articles";

const state = {
    isLoading: false,
    articles: null,
    error:null,
    articleDetaile: null,
    isSlug: null
}

const getters = {
    logLoading(state) {
        return state.isLoading
    }
}

const mutations = {
    getArticlesStart(state) {
        state.isLoading = true;
        state.articles = null,
        state.error = null,
        state.articleDetaile = null
    },
    getArticlesSuccess(state, payload) {
        state.isLoading = false;
        state.articles = payload;
    },
    getArticlesFailure(state,payload) {
        state.isLoading = false;
        state.error = payload;
    },
    getArticleDetailStart(state) {
        state.isLoading = true;
        state.articles = null,
        state.error = null,
        state.articleDetaile = null
    },
    getArticleDetailSuccess(state, payload) {
        state.isLoading = false;
        state.articleDetaile = payload;
    },
    getArticleDetailFailure(state,payload) {
        state.isLoading = false;
        state.error = payload;
    },
    changeSlug(state,paylod) {
        state.isSlug = paylod 
    }
}

const actions = {
    getArticles (context) {
        return new Promise((resolve,reject)=> {
            context.commit("getArticlesStart")
            ArticlesService.getArticles()
                .then(res => {
                    context.commit("getArticlesSuccess", res.data.articles)
                    resolve(res.data.articles)
                })
                .catch(e => {
                    context.commit("getArticlesFailure", e.message)
                    reject(e.message)
                })
        })
    },
     getArticleDetail(context,payload) {
        return new Promise ((reslove,reject) => {
            context.commit("getArticleDetailStart");
            ArticlesService.getArticleDetail(payload)
                .then(res => {
                    context.commit("getArticleDetailSuccess", res.data.article)
                    reslove(res.data.article)
                })
                .catch(e => {
                    context.commit("getArticleDetailFailure", e.message)
                    reject()
                })
        })
    },
} 

export default {
    state,
    getters,
    mutations,
    actions,
}