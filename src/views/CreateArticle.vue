<template>
  <div>
    <div class="card mt-2">
      <v-card outlined tile width="100%" class="grey lighten-5">
        <v-card-title class="title font-weight-regular d-flex justify-center">Crear artículo</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field counter label="Title" v-model="title" :rules="titleRule" class="mb-1"></v-text-field>
            <v-text-field
              counter
              label="Subtitle"
              v-model="subtitle"
              :rules="subtitleRule"
              class="mb-10"
            ></v-text-field>
            <ckeditor :editor="editor" v-model="text" :config="editorConfig" counter></ckeditor>
          </v-form>
        </v-card-text>
        <v-card-actions class="d-block">
          <div class="text-center">
            <div d-block>
              <v-btn depressed tile small color="#3B2929" block @click="create">
                <span class="grey--text text--lighten-5">Publicar</span>
              </v-btn>
            </div>
            <v-dialog v-model="dialog" hide-overlay persistent width="300">
              <v-card color="#3B2929" dark>
                <v-card-text
                  class="subtitle-2 font-weight-regular d-flex justify-center grey--text text--lighten-5 pt-5"
                  height="100px"
                >Publicado</v-card-text>
              </v-card>
            </v-dialog>
          </div>
          <div d-block class="mt-1">
            <v-btn depressed tile small color="#3B2929" block @click="toAdmin"> 
              <span class="grey--text text--lighten-5">Ver</span>
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </div>
  </div>

  <!-- <div d-block>
    <v-btn depressed tile small color="#3B2929" block @click="create">
      <span class="grey--text text--lighten-5">Publicar</span>
    </v-btn>
  </div>-->
</template>

<script>
import Api from "../services/Api";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      title: "",
      titleRule: [v => !!v || "Title is required"],
      subtitle: "",
      subtitleRule: [v => !!v || "Subtitle is required"],
      editor: ClassicEditor,
      text: "<p>Type...</p>",
      editorConfig: {},
      textRule: [v => !!v || "Main text is required"],
      dialog: false
    };
  },
  watch: {
    dialog(val) {
      if (!val) return;
      setTimeout(() => (this.dialog = false), 1500);
    }
  },
  methods: {
    create() {
      const article = {
        title: this.title,
        subtitle: this.subtitle,
        text: this.text
      };
      console.log(article);
      Api.createArticle(article).then(response => {
        this.dialog = true;
        this.title = "";
        this.subtitle = "";
        this.text = "";
      });
    },
    toAdmin() {
      this.$router.push("/admin");
    }
  }
};
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