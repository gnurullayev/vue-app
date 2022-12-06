import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/HomeView.vue"
import Login from "../views/LoginView.vue"
import Register from "../views/RegisterView.vue"

const routes = [
  {
    path:"/",
    name:"home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:"/login",
    name: "login",
    component: Login
  },
  {
    path:"/register",
    name:"register",
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router