<template>
  <div>
    <!-- <h1>Welcome to Mmmenu</h1> -->
    <v-container class="container">
      <v-row dense>
        <v-col md="6" sm="6" xs="12" v-for="(article, idx) in articles" :key="idx">
          <CardArticle :card="article" :user="status" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Api from '../services/Api'
import CardArticle from '../components/CardArticle'

export default {
  name: 'Home',
  data () {
    return {
      articles: [],
      status: false
    }
  },
  components: {
    CardArticle
  },
  created () {
    if (localStorage.getItem('userType') === 'true') {
      this.status = true
    } else {
      this.status = false
    }
  },
  mounted () {
    Api.getAllArticles()
      // eslint-disable-next-line no-return-assign
      .then(articles => this.articles = articles.reverse())
  }
}
</script>
