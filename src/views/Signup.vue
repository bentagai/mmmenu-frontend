<template>
  <div>
    <v-card outlined tile width="50%" min-width="400px" class="grey lighten-5">
      <v-card-title class="pb-0">
        <h1>Crea tu cuenta</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            v-model="userName"
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
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
      <v-card-actions>
        <v-btn depressed tile color="#3B2929" width="50%" @click="signup">Signup</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import Api from "../services/Api";
export default {
  data() {
    return {
      userName: "",
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
    signup() {
      const newUser = {
        name: this.userName,
        email: this.email,
        password: this.userPassword
      };
      Api.signup(newUser)
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
<style lang="scss" scoped>
</style>