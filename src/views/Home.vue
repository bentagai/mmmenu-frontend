<template>
  <div>
    <!-- <h1>Welcome to Mmmenu</h1> -->
    <v-container class="container">
      <v-row dense>
        <v-col md="6" sm="6" xs="12" v-for="(article, idx) in articles" :key="idx">
          <CardArticle :card="article" :user="status" @deleteFavourite="deleteFavourite(idx)" @added="added(idx)" :add="article.isFavourite"/>
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
  methods: {
    deleteFavourite (idx) {
      this.articles[idx].isFavourite = false;
    },
    added (idx) {
      this.articles[idx].isFavourite = true;
    }
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
      .then(articles => {
        // eslint-disable-next-line no-return-assign
        articles.forEach(article => article.isFavourite = false)
        this.articles = articles.reverse()

        Api.getAllFavourites()
          .then(favourites => {
            favourites = favourites.map(e => e._id)
            this.articles.forEach(article => {
              if(favourites.includes(article._id)) {
                article.isFavourite = true
              }
            })
          })
      });
  }
}
</script>
