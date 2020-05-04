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

        <div d-block class="mt-1">
          <v-btn depressed tile small color="#3B2929" block @click="userDeleted = true">
            <span class="grey--text text--lighten-5">Eliminar cuenta</span>
          </v-btn>
        </div>
        <v-dialog v-model="userDeleted" max-width="290">
            <v-card color="amber lighten-5">
              <v-card-title class="title font-weight-regular d-flex justify-center">Eliminar</v-card-title>
              <v-card-actions class="d-flex justify-center">
                <v-btn text small color="accent-4" @click="dialog = false">No</v-btn>
                <v-btn text small color="accent-4" @click="deleteUserById">Si</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Api from "../services/Api";
import PopupTime from "../components/PopupTime"

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
      dialog: false,
      userDeleted:false
    };
  },
  components: {
    PopupTime
  },
  watch: {
    dialog(val) {
      if (!val) return;
      setTimeout(() => (this.dialog = false), 1500);
      setTimeout(() => (this.userDeleted = false), 1500);

    }
  },
  methods: {
    updateUser() {
      const updUser = {
        name: this.userName,
        email: this.email
      };
      Api.updateUser(updUser)
        .then(response => {
          this.dialog = true;
        })
        .catch(err => console.log(err));
    },
    deleteUserById() {
      Api.deleteUserById()
        .then(response => {
          localStorage.removeItem("token");
          localStorage.removeItem("userType");
          this.$root.$emit("deleted", false)
          this.$router.push('/');
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