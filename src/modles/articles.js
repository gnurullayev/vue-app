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
    async getArticleDetail(context,payload) {
        try {
            context.commit("getArticleDetailStart");
            const res = await ArticlesService.getArticleDetail(payload)
            context.commit("getArticleDetailSuccess", res.data.article)
        }catch(e) {
            context.commit("getArticleDetailFailure", e.message)
        }
    },
    async createArticle (context,payload) {
        try {
            const res = await ArticlesService.createArticle(payload)
            console.log(res.data);
        }catch(e) {
            alert(e.messaga);
        }
    },
    async updateArticle(_,payload) {
        console.log(payload);
        try {
            const res = await ArticlesService.updateArticle(payload)
            console.log(res);
        }catch(e) {
            // alert(e.message)
        }
    }

} 

export default {
    state,
    getters,
    mutations,
    actions,
}