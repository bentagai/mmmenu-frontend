<template>
  <div>
    <v-card
      class="card"
      outlined 
      tile 
      color="#fafafa"
    >
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-subtitle>{{ article.subtitle }}</v-card-subtitle>
      <!-- <v-card-text>{{ article.text }}</v-card-text> -->
    </v-card>
    <div class="text"><p>{{ article.text }}</p></div>
  </div>
</template>

<script>
import Api from "../services/Api"
 export default {
    data () {
      return {
        article: {}
      }
    },
    mounted() {
      Api.getArticleById(this.$route.params.id)
        .then(article => this.article = article)
    }

  }
</script>

<style lang="scss" scoped>
.card {
  width: 85%;
  margin: auto;
}
.text {
  width: 60%;
  margin-left: 115px;
}
</style>