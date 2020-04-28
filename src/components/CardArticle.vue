<template>
  <div>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-title>{{ card.title }}</v-card-title>
    <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
    <v-card-text>
      <p class="title text--primary font-weight-regular">
        {{ card.created_at }}
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
  props: {
    card: Object
  },
  methods: {
    erase(article) {
      Api.deleteArticleById(article)
        .then(() => {
          alert('artículo eliminado')
          this.$emit("deleteArticle", article)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>