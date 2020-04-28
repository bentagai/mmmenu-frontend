<template>
  <div>
    <v-app>
      <v-btn @click="ToCreate">Crear artículo</v-btn>
      <CardArticle v-for="(article, idx) in articles" 
        :key="idx" 
        :card="article" 
        @deleteArticle="deleteArticle(idx)" 
        @click="ToArticle(article._id)"
      />
    </v-app>
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
    ToArticle(id) {
      this.$router.push('/article')
      this.$root.$emit('readArticle', id)
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