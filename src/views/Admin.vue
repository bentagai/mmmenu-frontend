<template>
  <div>
    <v-btn
      depressed 
      tile 
      small 
      color="#3B2929" 
      block
      @click="toCreate"><span class="white--text">Crear artículo</span>
    </v-btn>
    <v-container class="container">
      <v-row dense>
        <v-col
          md="6"
          sm="6"
          xs="12"
          v-for="(article, idx) in articles"   
          :key="idx"
        >
          <CardArticle
           :card="article" 
           @deleteArticle="deleteArticle(idx)" 
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Api from "../services/Api"
import CardArticle from "../components/CardArticle"

export default {
  data() {
    return {
      articles: []
    }
  },
  components: {
    CardArticle
  },
  methods: {
    toCreate() {
      this.$router.push('/create')
    },
    deleteArticle(idx) {
      this.articles.splice(idx, 1)
    }
  },
  mounted() {
    Api.getAllArticles()
      .then(articles => this.articles = articles)   
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding: 12px 6px 0 6px;
}
</style>