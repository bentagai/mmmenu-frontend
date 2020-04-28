<template>
  <div>
    <v-card outlined tile width="100%" class="grey lighten-5">
      <v-card-title class="title font-weight-regular d-flex justify-center">
        Crear artículo
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            counter
            label="Title"
            v-model="title"
            :rules="titleRule"
          ></v-text-field>
          <v-text-field
            counter
            label="Subtitle"
            v-model="subtitle"
            :rules="subtitleRule"
          ></v-text-field>
          <v-textarea
            counter
            label="Text"
            v-model="text"
            :rules="textRule"
          >
          </v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-block">
        <div d-block><v-btn depressed tile small color="#3B2929" block @click="create"><span class="white--text">Publicar</span></v-btn></div>
        <div d-block class="mt-1"><v-btn depressed tile small color="#3B2929" block @click="toAdmin"><span class="white--text">Ver</span></v-btn></div>
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
      titleRule: [
        v => !!v || "Title is required",
      ],
      subtitle: "",
      subtitleRule: [
        v => !!v || "Subtitle is required"
      ],
      text: "",
      textRule: [
        v => !!v || "Main text is required"
      ]
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
    },
    toAdmin() {
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>