<template>
  <div class="vCard">
    <v-card outlined tile width="100%" class="grey lighten-3">
      <v-card-title class="title font-weight-regular d-flex justify-center">Registrarse</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username" v-model="userName"></v-text-field>
          <v-text-field label="E-mail" v-model="email" :rules="emailRules"></v-text-field>
          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            @keyup.enter="signup"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn depressed tile small color="#3B2929" block @click="signup">
          <span class="grey--text text--lighten-5">Signup</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import Api from '../services/Api'
export default {
  data () {
    return {
      userName: '',
      showPassword: false,
      userPassword: '',
      passwordRule: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be more than 5 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    signup () {
      const newUser = {
        name: this.userName,
        email: this.email,
        password: this.userPassword
      }
      Api.signup(newUser)
        .then(response => {
          localStorage.setItem('token', response.token)
          localStorage.setItem('userType', response.is_admin)
          this.$root.$emit('log', response.is_admin)
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    }
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
