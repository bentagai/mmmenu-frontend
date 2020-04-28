<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-subtitle>{{ article.subtitle }}</v-card-subtitle>
      <v-card-text>{{ article.text }}</v-card-text>
    </v-card>

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

</style>