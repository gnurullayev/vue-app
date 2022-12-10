import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/HomeView.vue"
import Login from "../views/LoginView.vue"
import Register from "../views/RegisterView.vue"
import ArticleDetail from "../views/ArticleDetailView.vue"
import CreateArticle from "../views/CreateArticleView.vue"
import UpdateArticle from "../views/UpdateArticleView.vue"

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
  },
  {
    path:"/article/:id",
    name:"articleDetail",
    component: ArticleDetail
  },
  {
    path:"/create-article",
    name:"create-article",
    component: CreateArticle
  },
  {
    path:"/articles/:id/update-article",
    name:"update-article",
    component: UpdateArticle
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router