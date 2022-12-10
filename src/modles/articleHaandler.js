import { ArticlesService } from "@/service/articles";

const state = {
    isLoading: false,
    error:""
}

const mutations = {
    articleHandlerStart (state) {
        state.isLoading = true;
    },
    articleHandlerSuccess (state) {
        state.isLoading = false;
    },
    articleHandlerFailure (state,payload) {
        state.isLoading = false;
        state.error = payload
    }
}

const actions = {
    async createArticle ({commit},payload) {
        try {
            commit("articleHandlerStart")
            const res = await ArticlesService.createArticle(payload)
            commit("articleHandlerSuccess")
        }catch(e) {
            commit("articleHandlerFailure")
        }
    },
    async updateArticle({commit},payload) {
        console.log(payload);
        try {
            commit("articleHandlerStart")
            const res = await ArticlesService.updateArticle(payload)
            commit("articleHandlerSuccess")
        }catch(e) {
            // alert(e.message)
            commit("articleHandlerFailure",e.messaga)
        }
    },
    deleteArticle({commit},payload) {
        return new Promise((resolve, reject) => {
            commit("articleHandlerStart")
            ArticlesService.deleteArticle(payload)
                .then(res => {
                    commit("articleHandlerSuccess")
                    resolve(res)
                })
                .catch(e => {
                    commit("articleHandlerFailure",e.messaga)
                    reject()
                })
        })
    }
} 

export default {
    state,mutations,actions
}