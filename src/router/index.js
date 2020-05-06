import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import CreateArticle from '../views/CreateArticle.vue'
import Article from '../views/Article.vue'
import UpdateArticle from '../views/UpdateArticle.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/admin',
  name: 'Admin',
  component: Admin,
  beforeEnter (to, from, next) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
},
{
  path: '/create',
  name: 'Create',
  component: CreateArticle,
  beforeEnter (to, from, next) {
    if (!localStorage.getItem('token')) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  }
},
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/signup',
  name: 'Signup',
  component: Signup
},
{
  path: '/article/:id',
  name: 'Article',
  component: Article
},
{
  path: '/update/:id',
  name: 'Update',
  component: UpdateArticle,
  beforeEnter (to, from, next) {
    if (!localStorage.getItem('token')) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  }
},

{
  path: '*',
  component: Home
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
