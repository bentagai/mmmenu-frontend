<template>
  <div class="vCard">
    <v-card outlined tile width="100%" class="grey lighten-3">
      <v-card-title class="title font-weight-regular d-flex justify-center">Iniciar sesión</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="email" label="Email" :rules="emailRules"></v-text-field>
          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            @keyup.enter="login"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-block">
        <div d-block>
          <v-btn depressed tile small color="#3B2929" block @click="login">
            <span class="grey--text text--lighten-5">Login</span>
          </v-btn>
        </div>
        <div d-block class="mt-1">
          <v-btn depressed tile small color="#3B2929" block @click="toSignup">
            <span class="grey--text text--lighten-5">Regístrate</span>
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import Api from '../services/Api'
export default {
  data () {
    return {
      showPassword: false,
      userPassword: '',
      passwordRule: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be more than 6 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    login () {
      const user = {
        name: this.userName,
        email: this.email,
        password: this.userPassword
      }
      Api.login(user)
        .then(response => {
          if (response.token) {
            localStorage.setItem('token', response.token)
            localStorage.setItem('userType', response.is_admin)
            if (response.is_admin === true) {
              this.$router.push('/admin')
            } else {
              this.$router.push('/')
            }
            this.$root.$emit('log', response.is_admin)
          } else {
            this.emailRules = ['Wrong e-mail']
            this.passwordRule = ['Wrong password']
          }
        })
        .catch(err => console.log(err))
    },
    toSignup () {
      this.$router.push('/signup')
    }
  }
}
</script>
<style lang="scss" scoped>
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
