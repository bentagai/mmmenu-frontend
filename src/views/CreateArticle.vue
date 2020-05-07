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
              class="mb-1"
            ></v-text-field>
            <input type="file" accept="image/*" @change="onFileSelected" />
            <v-select :items="items" v-model="category" label="Category" class="mb-10"></v-select>
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
            <PopupTime :text="'Publicando'" :dialog="dialog" />
          </div>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import Api from "../services/Api";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PopupTime from "../components/PopupTime";
import firebase from 'firebase'

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
      dialog: false,
      items: ["comer", "hacer", "comprar"],
      category: "",
      file: null,
      picture: ''
    };
  },
  components: {
    PopupTime
  },
  watch: {
    dialog (val) {
      if (!val) return
      setTimeout(() => (this.dialog = false), 1500)
    }
  },
  methods: {
    onFileSelected(event) {
      this.file = event.target.files[0];
    },
    uploadImage() {
      return new Promise(resolve => {
        var storageRef = firebase.storage().ref();
        var metadata = {
          contentType: "image/jpeg"
        };
        var uploadTask = storageRef
          .child("images/" + this.file.name)
          .put(this.file, metadata);
        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          () => {},
          error => console.log(error),
          async function() {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            resolve(downloadURL);
          }
        );
      });
    },
    async create() {
      let imgURL = await this.uploadImage();
      this.picture = imgURL;
      const article = {
        title: this.title,
        subtitle: this.subtitle,
        category: this.category,
        img_url: this.picture,
        text: this.text
      }
      Api.createArticle(article).then(response => {
        this.dialog = true
        setTimeout(() => this.$router.push('/admin'), 1500)
      })
    }
  },
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
