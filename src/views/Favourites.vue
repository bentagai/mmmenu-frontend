<template>
  <div>
    <div class="title font-weight-regular d-flex justify-center">Mis Favoritos</div>
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
  name: 'Favourites',
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
    Api.getAllFavourites()
      .then(articles => this.articles = articles.reverse())
  }
}
</script>
