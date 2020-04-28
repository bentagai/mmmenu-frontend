<template>
  <div class="vCard">
    <v-card outlined tile width="100%" class="grey lighten-3">
      <v-card-title class="title font-weight-regular d-flex justify-center">
        Iniciar sesión
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            label="Email"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn depressed tile small color="#3B2929" block @click="login"><span class="white--text">Login</span></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import Api from '../services/Api'
export default {
  data() {
    return {
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password must be more than 6 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    login(){
      const user = {
        name: this.userName,
        email: this.email,
        password: this.userPassword
      }
      Api.login(user)
        .then(response => {
          localStorage.setItem("token", response.token);
          this.$root.$emit("log", true);
          this.$router.push("/admin");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style lang="scss" scoped>
.vCard {
  width: 50%;
  margin: 12px auto
}

@media screen and (max-width: 600px) {
  .vCard {
    width: 100%;
  }  
}</style>