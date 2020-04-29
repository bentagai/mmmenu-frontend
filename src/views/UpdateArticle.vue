<template>
  <div>
    <div class="card mt-2">
      <v-card outlined tile width="100%" class="grey lighten-5">
        <v-card-title 
          class="title font-weight-regular d-flex justify-center"
        >
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
          <div d-block><v-btn depressed tile small color="#3B2929" block @click="update"><span class="white--text">Publicar</span></v-btn></div>
          <div d-block class="mt-1"><v-btn depressed tile small color="#3B2929" block @click="toAdmin"><span class="white--text">Ver</span></v-btn></div>
        </v-card-actions>
      </v-card>
    </div>
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
    update() {
      const article = {
        title: this.title,
        subtitle: this.subtitle,
        text: this.text
      }
      Api.updateArticle(this.$route.params.id, article)
        .then(() => {
          alert('Artículo actualizado')
        })
    },
    toAdmin() {
      this.$router.push('/admin')
    }
  },
  mounted() {
    Api.getArticleById(this.$route.params.id)
      .then(article => {
        this.title = article.title
        this.subtitle = article.subtitle
        this.text = article.text
      })
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 75%;
  margin: 0 auto;
  padding: 0 6px 0 6px;
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>