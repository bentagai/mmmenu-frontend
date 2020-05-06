import axios from 'axios'
const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  async signup (newUser) {
    const response = await API.post('/auth/signup', {
      ...newUser
    })
    return response.data
  },
  async login (user) {
    const response = await API.post('/auth/login', {
      ...user
    })
    return response.data
  },
  async createArticle (article) {
    const response = await API.post('/article', article, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },
  async getAllArticles () {
    const response = await API.get('/article')
    return response.data
  },
  async getArticlesByCategory (query) {
    const response = await API.get(`/article?search=${query}`)
    return response.data
  },
  async deleteArticleById (article) {
    const response = await API.delete(`/article/${article}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },
  async getArticleById (article) {
    const response = await API.get(`/article/${article}`)
    return response.data
  },
  async updateArticle (id, article) {
    const response = await API.put(`/article/${id}`, article, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },
  async getUserById () {
    const response = await API.get('/users/me', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },
  async updateUser(updUser) {
    const response = await API.put('users/me', {
      ...updUser
    },
    {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },
  async updateUserPassword (newPassword) {
    const response = await API.put('users/me/password', newPassword, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },
  async deleteUserById () {
    const response = await API.delete('users/me', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },
  async getAllFavourites() {
    const response = await API.get('users/me/favourites', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  }
}