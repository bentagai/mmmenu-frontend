<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-title>ejemplo</v-card-title>
      <v-card-subtitle>ejemplo</v-card-subtitle>
      <v-card-text>lkfjhasfkljashf lksfh sdljhf sdlkfhs d</v-card-text>
    </v-card>

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
          }
        ],
        article: {}
      }
    },
    mounted() {
      this.$root.$on('readArticle', id => {})

    }

  }
</script>

<style lang="scss" scoped>

</style>