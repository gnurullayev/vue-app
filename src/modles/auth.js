import { setItem } from "@/helpers/persistaneStorage"
import router from "@/router"
import AuthService from "@/service/auth"

const state = {
    isLoading: false,
    user: null,
    errors: null,
    isLoged: null
}

const mutations = {
    registerStart (state) {
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    registerSuccess(state,payload) {
        state.isLoading = false
        state.user = payload
        state.isLoged = true
    },
    registerFailure(state,payload) {
        state.isLoading = false
        state.errors = payload
        state.isLoged = false
    },
    loginStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    loginSuccess (state,payload) {
        state.isLoading = false
        state.user = payload
        state.isLoged = true
    },
    loginFailure(state,payload) {
        state.isLoading = false
        state.errors = payload
        state.isLoged = false
    }
}

const actions = { 
    register({commit}, user) {
       return new Promise((resolve,reject) => {
           AuthService.register(user)
            .then(res => {
                commit("registerStart")
                commit("registerSuccess", res.data.user)
                setItem("token", res.data.user.token)
                router.push("/")
                resolve(res.data.user)
            }).catch (e => {
                commit("registerFailure", e.response.data.errors)
                reject(e.response.data.errors)
            }) 
        })
    },
    login({commit}, user) {
        return new Promise((resolve,reject) => {
            commit("loginStart")
            AuthService.login(user)
                .then(res => {
                    commit("loginSuccess", res.data.user)
                    setItem("token", res.data.user.token)
                    router.push("/")
                    resolve(res.data.user)
                })
                .catch(e => {
                    commit("loginFailure", e.response.data.errors)
                    reject(e.response.data.errors)
                })
            
        })
    }
}

export default {
    state,
    mutations,
    actions,
}