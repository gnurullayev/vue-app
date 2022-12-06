<template>

  <form class="form w-25 mx-auto" @submit.prevent="loginPost">
    <h2 class="login">Login</h2>
    <my-input class="my-2" type="email" placeholder="Email" v-model="email"/>
    <div
      class="text-start text-danger"
      v-if="errors !== null && errors.emailOrPassword"
    >
      Email or Password invalid 
    </div>

    <my-input class="my-2" type="password" placeholder="Password" v-model="password"/>
    <div
      class="text-start text-danger"
      v-if="errors !== null && errors.emailOrPassword"
    >
      Email or Password invalid 
    </div>

    <my-button class="btn-primary w-75" type="submit" :disabled="isLoading">Submit</my-button>
  </form>


</template>

<script>
  import store from '@/store'
  import MyButton from '@/ui-comonents/MyButton.vue'
  import { mapState } from 'vuex'

  export default {
  components: { MyButton },
    name:"Login",
    data() {
      return {
        email: "",
        password:""
      }
    },
    computed: {
      ...mapState({
        isLoading: state => state.auth.isLoading,
        errors: state => state.auth.errors,
      }),
    },
    methods: {
      loginPost() {
        store.dispatch("login", {email:this.email, password: this.password})
      }
    }
    
  }
</script>

<style>

</style>