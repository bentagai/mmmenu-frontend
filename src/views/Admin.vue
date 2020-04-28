<template>
  <div>
    <v-btn block @click="ToCreate">Crear artículo</v-btn>
    <v-container>
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
    ToCreate() {
      this.$router.push('/create')
    },
    deleteArticle(idx) {
      this.articles.splice(idx, 1)
    }
  },
  mounted() {
    Api.getAllArticles()
      .then(articles => this.articles = articles)
        .then(() => {
          this.$on("deleteArticle", article => {
              this.articles = this.articles.filter(art => art._id !== article)
            })
        })    
  }
}
</script>

<style lang="scss" scoped>

</style>