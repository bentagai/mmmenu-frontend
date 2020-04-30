<template>
  <div>
    <v-container>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
      <h1 class="display-1 font-regular mb-2 mt-10">{{article.title}}</h1>
      <h2 class="headline font-weight-regular mb-2">{{article.subtitle}}</h2>
      <h2 class="subtitle-2 font-weight-regular mb-10">{{formatDate}}</h2>
      <span class="title font-weight-regular" v-html="article.text"></span>
    </v-container>
  </div>
</template>

<script>
import Api from "../services/Api"
 export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
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
.card {
  width: 60%;
  margin: 0 auto;
  padding: 6px 12px 0 12px;

}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>