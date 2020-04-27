<template>
  <div>
    <v-card outlined tile width="400px" class="ml-5 mt-5 mx-a grey lighten-5">
      <v-card-title class="pb-0">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            label="Email"
            prepend-icon="mdi-account-circle"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="login" color="info">Login</v-btn>
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
        v => v.length >= 6 || "Password must be more than 10 characters"
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
          this.$router.push("/home");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style lang="scss" scoped></style>