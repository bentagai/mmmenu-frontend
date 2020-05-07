<template>
  <div>
    <div class="header">
      <v-btn fixed depressed tile small color="#3B2929" block @click="$router.go(-1)">
        <span class="grey--text text--lighten-5">Atrás</span>
      </v-btn>
    </div>
    <v-container class="pb-10">
      <v-img :src="article.img_url" />
      <h1 class="display-1 font-regular mb-2 mt-10">{{article.title}}</h1>
      <h2 class="headline font-weight-regular mb-2">{{article.subtitle}}</h2>
      <h2 class="subtitle-2 font-weight-regular mb-10">{{formatDate}}</h2>
      <span class="title font-weight-regular" v-html="article.text"></span>
    </v-container>
  </div>
</template>

<script>
import Api from '../services/Api'
export default {
  data () {
    return {
      article: {}
    }
  },

  computed: {
    formatDate () {
      if (this.article && this.article.created_at) {
        return this.article.created_at.split('T')[0]
      } else {
        return 'no-date'
      }
    }
  },

  created () {
    Api.getArticleById(this.$route.params.id).then(
      article => (this.article = article)
    )
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 1;
}
</style>
