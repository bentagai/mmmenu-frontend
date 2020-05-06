<template>
  <div>
    <v-card outlined tile color="#fafafa" @click="ToArticle(card._id)">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
      <v-card-title class="headline font-weight-regular">{{ card.title }}</v-card-title>
      <v-card-subtitle
        class="title font-weight-regular text-truncate pb-2"
        style="max-width: 2000px block"
      >{{ card.subtitle }}</v-card-subtitle>
      <v-card-text class="pb-0">
        <p class="subtitle-2 font-weight-regular">{{ formatDate }}</p>
      </v-card-text>
      <v-card-actions v-if="user === true">
        <v-btn text small color="accent-4" @click.stop.prevent="update(card._id)">Actualizar</v-btn>
        <v-btn text small color="accent-4" @click.stop.prevent="dialog = true">Eliminar</v-btn>

        <v-row justify="center">
          <PopupConfirm :text="'Eliminar'" :dialog="dialog" :event="erase" :id="card._id" :close="close"/>
        </v-row>

      </v-card-actions>
      <v-card-actions v-else>
        <v-icon>mdi-heart</v-icon>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Api from '../services/Api'
import PopupConfirm from '../components/PopupConfirm'

export default {
  data () {
    return {
      dialog: false
    }
  },
  props: {
    card: Object,
    user: Boolean
  },
  components: {
    PopupConfirm
  },
  computed: {
    formatDate () {
      const date = this.card.created_at
      return date.split('T')[0]
    }
  },
  methods: {
    erase (article) {
      Api.deleteArticleById(article).then(response => {
        this.$emit('deleteArticle')
        this.dialog = false
      })
    },
    update (id) {
      this.$router.push(`/update/${id}`)
    },
    ToArticle (id) {
      this.$router.push(`/article/${id}`)
    },
    close () {
      this.dialog = false
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
