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
            <!-- <input class="my-2" type="file" @change="photo"> -->
            <v-select :items="items" v-model="category" label="Category" class="mb-10"></v-select>
            {{category}}
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
import Api from '../services/Api'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import PopupTime from '../components/PopupTime'
// import firebase from 'firebase'

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
      items: ['comer', 'hacer', 'comprar'],
      category: ''
      // file: null,
      // picture: ''
    }
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
    //  photo (event) {
    //   this.file = event.target.files[0]
    //   this.upload()
    // },
    // upload () {
    //   const storageRef = firebase.storage().ref(`imagenes/${this.file.name}`)
    //   const task = storageRef.put(this.file)

    //   task.on('state_changed', () => {
    //     task.snapshot.ref.getDownloadURL().then((url) => {
    //       this.picture = url
    //     })
    //   })
    // },
    create () {
      // this.upload()
      const article = {
        title: this.title,
        subtitle: this.subtitle,
        category: this.category,
        // img_url: this.picture,
        text: this.text
      }
      Api.createArticle(article).then(response => {
        this.dialog = true
        setTimeout(() => this.$router.push('/admin'), 1500)
      })
    }
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
