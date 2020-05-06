<template>
  <div>
    <div class="card mt-2">
      <v-card outlined tile width="100%" class="grey lighten-5">
        <v-card-title class="title font-weight-regular d-flex justify-center">Modificar artículo</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field counter label="Title" v-model="title" :rules="titleRule" class="mb-1"></v-text-field>
            <v-text-field counter label="Subtitle" v-model="subtitle" :rules="subtitleRule" class="mb-10"></v-text-field>
            <ckeditor :editor="editor" v-model="text" :config="editorConfig" counter></ckeditor>
          </v-form>
        </v-card-text>
        <v-card-actions class="d-block">
          <div class="text-center">
            <div d-block>
              <v-btn depressed tile small color="#3B2929" block @click="update">
                <span class="grey--text text--lighten-5">Publicar</span>
              </v-btn>
            </div>
            <v-dialog v-model="dialog" hide-overlay persistent width="300">
              <v-card color="#3B2929" dark>
                <v-card-text
                  class="subtitle-2 font-weight-regular text-center grey--text text--lighten-5 pt-2"
                  height="100px"
                >
                  Actualizando
                  <v-progress-linear
                    indeterminate
                    class="mt-2"
                    background-color="brown darken-1"
                    color="amber lighten-5"
                  ></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import Api from '../services/Api'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
export default {
  data () {
    return {
      title: '',
      titleRule: [v => !!v || 'Title is required'],
      subtitle: '',
      subtitleRule: [v => !!v || 'Subtitle is required'],
      editor: ClassicEditor,
      text: '<p></p>',
      editorConfig: {},
      textRule: [v => !!v || 'Main text is required'],
      dialog: false
    }
  },
  watch: {
    dialog (val) {
      if (!val) return
      setTimeout(() => (this.dialog = false), 1500)
    }
  },
  methods: {
    update () {
      const article = {
        title: this.title,
        subtitle: this.subtitle,
        text: this.text
      }
      Api.updateArticle(this.$route.params.id, article).then(response => {
        this.dialog = true
        setTimeout(() => this.$router.push('/admin'), 1500)
      })
    }
  },
  mounted () {
    Api.getArticleById(this.$route.params.id).then(article => {
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
