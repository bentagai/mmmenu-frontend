<template>
  <div class="vCard">
    <v-card outlined tile width="100%" class="grey lighten-3">
      <v-card-title class="title font-weight-regular d-flex justify-center">Tus Datos</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username" v-model="userName"></v-text-field>
          <v-text-field label="E-mail" v-model="email" :rules="emailRules"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-block">
        <div d-block>
          <v-btn depressed tile small color="#3B2929" block @click="updateUser">
            <span class="grey--text text--lighten-5">Actualizar Datos</span>
          </v-btn>
        </div>
        <PopupTime :text="'Actualiando datos'" :dialog="dialog" />
      </v-card-actions>
    </v-card>
    <v-card outlined tile width="100%" class="grey lighten-3 mt-10">
      <v-card-title class="title font-weight-regular d-flex justify-center">Modificar Contraseña</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Current password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"></v-text-field>
          <v-text-field
            label="New password"
            v-model="newPassword"
            :type="showNewPassword ? 'text' : 'password'"
            :rules="passwordRule"
            :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showNewPassword = !showNewPassword"></v-text-field>
          <v-text-field
            label="Repeat new password"
            v-model="copiedPassword"
            :type="showCopiedPassword ? 'text' : 'password'"
            :rules="passwordRule"
            :append-icon="showCopiedPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showCopiedPassword = !showCopiedPassword"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-block">
        <div d-block>
          <v-btn depressed tile small color="#3B2929" block @click="updatePassword">
            <span class="grey--text text--lighten-5">Actualizar Contraseña</span>
          </v-btn>
        </div>
        <div d-block class="mt-1">
          <v-btn depressed tile small color="#3B2929" block @click="userDeleted = true">
            <span class="grey--text text--lighten-5">Eliminar cuenta</span>
          </v-btn>
        </div>
        <PopupConfirm :text="'Eliminar'" :dialog="userDeleted" :event="deleteUserById" :close="close"/>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Api from '../services/Api'
import PopupTime from '../components/PopupTime'
import PopupConfirm from '../components/PopupConfirm'

export default {
  data () {
    return {
      userName: '',
      showPassword: false,
      showNewPassword: false,
      shoewCopiedPassword: false,
      password: '',
      newPassword: '',
      copiedPassword: '',
      passwordRule: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be more than 5 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      dialog: false,
      userDeleted: false
    }
  },
  components: {
    PopupTime,
    PopupConfirm
  },
  watch: {
    dialog (val) {
      if (!val) return
      setTimeout(() => (this.dialog = false), 1500)
      setTimeout(() => (this.userDeleted = false), 1500)
    }
  },
  methods: {
    updateUser () {
      const updUser = {
        name: this.userName,
        email: this.email
      }
      Api.updateUser(updUser)
        .then(response => {
          this.dialog = true
          if (response.token) {
            localStorage.setItem('token', response.token)
          }
        })
        .catch(err => console.log(err))
    },
    updatePassword () {
      if (this.newPassword === this.copiedPassword) {
        const userPassword = {
          current: this.password,
          new: this.newPassword
        }
        Api.updateUserPassword(userPassword).then(response => {
          alert('Contraseña modificada')
        })
      } else {
        alert('contraseñas distintas')
        this.newPassword = ''
        this.copiedPassword = ''
      }
    },
    deleteUserById () {
      Api.deleteUserById()
        .then(response => {
          localStorage.removeItem('token')
          localStorage.removeItem('userType')
          this.$root.$emit('deleted', false)
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    },
    close () {
      this.userDeleted = false
    }
  },
  created () {
    Api.getUserById().then(user => {
      this.userName = user.name
      this.email = user.email
    })
  }
}
</script>

<style lang="css" scoped>
.vCard {
  width: 50%;
  margin: 12px auto;
}

@media screen and (max-width: 600px) {
  .vCard {
    width: 100%;
  }
}
</style>
