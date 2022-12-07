<template>
    <header class="header ">
        <div class="container">
           <div class="header-inner d-flex justify-content-between align-items-center">
               <div class="logo">
                    <router-link to="/">
                        <img src="../assets/logo.svg" alt="" class="logo-img" >
                    </router-link>
                </div>

                <template v-if="isLogedIn">
                    <div class="d-flex align-items-center gap-2">
                        <p class="mb-0">{{currentUser.username}}</p>
                        <my-button class="btn-outline-primary" type="button" @click="logout">Logout</my-button>
                    </div>
                </template>

                <template v-else-if="isAnonimus">
                    <nav class="" >
                        <router-link :to="{name:'login'}">Login</router-link> |
                        <router-link :to="{name: 'register'}">Register</router-link>
                    </nav>
                </template>
           </div>
        </div>
    </header>
</template>

<script>
import { gettersTypes } from '@/modles/types'
import { mapState,mapGetters } from 'vuex'
import MyButton from '@/ui-comonents/MyButton.vue'

export default {
  components: { MyButton },
    name: "Heafder",
    computed: {
        ...mapGetters( {
            currentUser: [gettersTypes.currentUser],
            isLogedIn: [gettersTypes.isLogedIn],
            isAnonimus: [gettersTypes.isAnonimus]
        }),
    },
    methods: {
        logout() {
            this.$store.commit("logout")
        }  
    }
}
</script>

<style scoped>
    .logo-img {
        width: 100px;
        height: 60px;
    }
</style>