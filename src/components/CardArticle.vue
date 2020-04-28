<template>
  <div>
    <v-card
      class="card"
      outlined 
      tile 
      @click="ToArticle(card._id)"
    >
    <v-card-title>{{ card.title }}</v-card-title>
    <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
    <v-card-text>
      <p class="title text--primary font-weight-regular">
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
        @click="erase(card._id)"
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
.card {
  padding: 12px;
}
</style>