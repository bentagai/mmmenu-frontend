import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import CKEditor from '@ckeditor/ckeditor5-vue'

Vue.use(CKEditor)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyAxFZ-BMSTRBCQ8GOuDnVOZLOQ_qb-QAdc',
  authDomain: 'mmmenu-5e375.firebaseapp.com',
  databaseURL: 'https://mmmenu-5e375.firebaseio.com',
  projectId: 'mmmenu-5e375',
  storageBucket: 'mmmenu-5e375.appspot.com',
  messagingSenderId: '213246032549',
  appId: '1:213246032549:web:dd3f31c387ebee83732b4c'
}

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
