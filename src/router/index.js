import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Backoffice from '../views/Backoffice.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import CreateArticle from '../views/CreateArticle.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/admin', name: 'Admin', component: Backoffice },
  { path: '/create', name: 'Create', component: CreateArticle },
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/article', name: 'Article', component: Article }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
