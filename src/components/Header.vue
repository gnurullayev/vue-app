<template>
    <header class="header ">
        <div class="container">
           <div class="header-inner d-flex justify-content-between align-items-center">
               <div class="logo">
                    <router-link to="/">
                        <img src="../assets/logo.svg" alt="" class="logo-img" >
                    </router-link>
                </div>

                <template v-if="isLoged">
                    <p class="mb-0">{{user.username}}</p>
                </template>

                <template v-else-if="!isLoged">
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
import { mapState } from 'vuex'
export default {
    name: "Heafder",
    computed: {
        ...mapState({
            user:state => state.auth.user,
            isLoged: state => state.auth.isLoged,
        })
    }
}
</script>

<style scoped>
    .logo-img {
        width: 100px;
        height: 60px;
    }
</style>