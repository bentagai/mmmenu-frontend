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
  }
  // async addNotes (texto) {
  //   const response = await API.post('/me/notes', {
  //     editorData: texto
  //   },
  //   {
  //     headers: {
  //       token: localStorage.getItem('token')
  //     }
  //   })
  //   return response.data
  // },
  // async showNotes () {
  //   const response = await API.get('/me/notes', {
  //     headers: {
  //       token: localStorage.getItem('token')
  //     }
  //   })
  //   return response.data
  // },
  // async deleteNotes (note) {
  //   const response = await API.delete(`/me/notes/${note}`, {
  //     headers: {
  //       token: localStorage.getItem('token')
  //     }
  //   })
  //   return response.data
  // }
}