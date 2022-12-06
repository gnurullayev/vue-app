<template>
  <form class="form w-25 mx-auto" @submit.prevent="registerPost">
    <h2 class="login">Register</h2>
    <my-input
      v-model="username"
      type="text"
      placeholder="Name"
    />
    <div
      class="text-start text-danger"
      v-if="errors !== null && errors.username"
    >
      {{ errors !== null ? errors.username[0] : "" }}
    </div>

    <my-input v-model="email" type="email " placeholder="Email" />
    <div class="text-start text-danger" v-if="errors !== null && errors.email">
      {{ errors !== null ? errors.email[0] : "" }}
    </div>

    <my-input v-model="password" type="password" placeholder="Password" />
    <div
      class="text-start text-danger"
      v-if="errors !== null && errors.password"
    >
      {{ errors !== null ? errors.password[0] : "" }}
    </div>

    <my-button class="btn-primary w-75" type="submit" :disabled="isLoading"
      >Submit</my-button
    >
  </form>
</template>

<script>
import MyButton from "@/ui-comonents/MyButton.vue";
import MyInput from "@/ui-comonents/MyInput.vue";

export default {
  components: { MyButton, MyInput },
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
    errors() {
      return this.$store.state.auth.errors;
    },
  },
  methods: {
    registerPost() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("register", user);
      // .then(res => console.log(res))
      // .catch(e => console.log(e))
      // console.log(this.$store.state.auth.isLoading);
    },
  },
};
</script>

<style>
</style>