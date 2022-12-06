<template>
    <header class="header ">
        <div class="container">
           <div class="header-inner d-flex justify-content-between align-items-center">
               <div class="logo">
                    <router-link to="/">
                        <img src="../assets/logo.svg" alt="" class="logo-img" >
                    </router-link>
                </div>

                <nav class="" >
                    <router-link :to="{name:'home'}">Home</router-link> |
                    <router-link :to="{name:'login'}">Login</router-link> |
                    <router-link :to="{name: 'register'}">Register</router-link>
                </nav>
           </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Heafder",
}
</script>

<style scoped>
    .logo-img {
        width: 100px;
        height: 60px;
    }
</style>