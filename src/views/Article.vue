<template>
  <div class="main">
    <div class="card">
      <h1 class="display-1 font-regular mb-2">{{article.title}}</h1>
      <h2 class="headline font-weight-regular mb-2">{{article.subtitle}}</h2>
      <h2 class="subtitle-2 font-weight-regular mb-10">{{formatDate}}</h2>
      <p class="title font-weight-regular mb-5">{{ article.text }}</p>
    </div>
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

    computed: {
      formatDate() {
        let date = this.article.created_at
        return date.split('T')[0]
      }
    },

    mounted() {
      Api.getArticleById(this.$route.params.id)
        .then(article => this.article = article)
    }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 6px 6px 0 6px;
}
.card {
  width: 50%;
  margin: 0 auto;
  padding: 6px 12px 0 12px;

}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;

  }
  
}
</style>