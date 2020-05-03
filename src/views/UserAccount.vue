<template>
  <div class="vCard">
    <v-card outlined tile width="100%" class="grey lighten-3">
      <v-card-title class="title font-weight-regular d-flex justify-center">Tu Datos</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username" v-model="userName"></v-text-field>
          <v-text-field label="E-mail" v-model="email" :rules="emailRules"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn depressed tile small color="#3B2929" block @click="updateUser">
          <span class="grey--text text--lighten-5">Actualizar</span>
        </v-btn>

        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="#3B2929" dark>
            <v-card-text
              class="subtitle-2 font-weight-regular text-center grey--text text--lighten-5 pt-2"
              height="100px"
            >
              Actualizando
              <v-progress-linear
                indeterminate
                class="mt-2"
                background-color="brown darken-1"
                color="amber lighten-5"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>

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
        v => v.length >= 6 || "Password must be more than 5 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
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
    updateUser() {
      const updUser = {
        name: this.userName,
        email: this.email
      };
      Api.updateUser(updUser).then(response => {
        this.dialog = true;
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    Api.getUserById().then(user => {
      this.userName = user.name;
      this.email = user.email;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>