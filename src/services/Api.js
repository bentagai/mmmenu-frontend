import axios from 'axios'
const API = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
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
  }
}
