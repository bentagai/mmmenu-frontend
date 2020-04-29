<template>
  <div>
    <v-card
      height="100%"
      class="text-truncate"
      outlined 
      tile 
      color="#fafafa"
      @click="ToArticle(card._id)"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>
      <v-card-title class="headline font-weight-regular mb-2">{{ card.title }}</v-card-title>
      <v-card-subtitle class="subtitle-2 font-weight-regular mb-10">{{ card.subtitle }}</v-card-subtitle>
      <v-card-text>
        <p class="title font-weight-regular mb-5">
          {{ formatDate }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          small
          color=" accent-4"
        >
          Actualizar
        </v-btn>
        <v-btn
          text
          small
          color=" accent-4"
          @click.prevent="erase(card._id)"
        >
          Eliminar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Api from "../services/Api"
export default {
  computed: {
    formatDate() {
      let date = this.card.created_at
      return date.split('T')[0]
    }
  },
  props: {
    card: Object,
  },
  methods: {
    erase(article) {
      Api.deleteArticleById(article)
        .then(() => {
          this.$emit("deleteArticle")
        })
    },
    ToArticle(id) {
      this.$router.push(`/article/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  background-color: #fafafa;
  padding-bottom: 5px;
}
</style>