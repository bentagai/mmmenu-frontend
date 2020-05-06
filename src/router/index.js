import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import CreateArticle from '../views/CreateArticle.vue'
import Article from '../views/Article.vue'
import UpdateArticle from '../views/UpdateArticle.vue'
import UserAccount from '../views/UserAccount.vue'
import Category from '../views/Category.vue'
import Search from '../views/Search'
import Favourites from '../views/Favourites'

Vue.use(VueRouter)

<<<<<<< HEAD
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
=======
const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter (to, from, next) {
      if (localStorage.getItem('userType') === 'false') {
        next({
          name: 'Login'
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
    beforeEnter(to, from, next) {
      if (localStorage.getItem('userType') === 'false') {
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
    path: '/categories/:category',
    name: 'Category',
    component: Category
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: Search
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
    beforeEnter(to, from, next) {
      if (localStorage.getItem('userType') === 'false') {
        next({
          name: 'Login'
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: UserAccount,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("token")) {
        next({
          name: 'Login'
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("token")) {
        next({
          name: 'Login'
        })
      } else {
        next()
      }
    }
  }
]
>>>>>>> eee943872ec38b8ffa3d82a6d371d754e2d05faf

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
