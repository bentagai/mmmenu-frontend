<template>
  <div>
    <v-app>
      <v-btn @click="ToCreate">Crear artículo</v-btn>
      <Card v-for="(article, idx) in articles" :key="idx" :card="article" />
    </v-app>
  </div>
</template>

<script>
import Api from "../services/Api"
import Card from "../components/CardArticle"

export default {
  data() {
    return {
      articles: []
    }
  },
  components: {
    Card
  },
  methods: {
    ToCreate() {
      this.$router.push('/create')
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