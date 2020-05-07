<template>
  <div>
    <div class="title font-weight-regular d-flex justify-center">{{ mainTitle }}</div>
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
  name: 'Category',
  data () {
    return {
      articles: [],
      status: false,
      mainTitle: ''
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
    this.$root.$on('mySearch', category => {
      const searchQuery = category.split('_')
      this.mainTitle = `${searchQuery[0]} ${searchQuery[1]}`
      this.search(searchQuery[1])
    })
    const word = this.$route.params.category.split('_')
    this.mainTitle = `${word[0]} ${word[1]}`
    this.search(word[1])
  },
  methods: {
    search (query) {
      Api.getArticlesByCategory(query)
        // eslint-disable-next-line no-return-assign
        .then(articles => {
          // eslint-disable-next-line no-return-assign
          articles.forEach(article => article.isFavourite = false)
          this.articles = articles.reverse()
          Api.getAllFavourites()
            .then(favourites => {
              favourites = favourites.map(e => e._id)
              this.articles.forEach(article => {
                if (favourites.includes(article._id)) {
                  article.isFavourite = true
                }
              })
            })
        })
    },
    deleteFavourite (idx) {
      this.articles[idx].isFavourite = false
    },
    added (idx) {
      this.articles[idx].isFavourite = true
    }
  }
}
</script>
