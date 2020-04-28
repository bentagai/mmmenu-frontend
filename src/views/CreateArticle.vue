<template>
  <div>
    <v-card outlined tile width="100%" class="grey lighten-5">
      <v-card-title class="title font-weight-regular d-flex justify-center">
        Crear artículo
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Title"
            v-model="title"
          ></v-text-field>
          <v-text-field
            label="Subtitle"
            v-model="subtitle"
          ></v-text-field>
          <v-textarea
            counter
            label="Text"
            v-model="text"
          >
          </v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn depressed text tile small color="#3B2929" block @click="create">Publicar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Api from "../services/Api"
export default {
  data() {
    return {
      title: "",
      subtitle: "",
      text: ""
    }
  },
  methods: {
    create() {
      const article = {
        title: this.title,
        subtitle: this.subtitle,
        text: this.text
      }
      console.log(article)
      Api.createArticle(article)
        .then(() => {
          alert('Artículo creado')
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>