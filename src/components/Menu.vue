<template>
  <div>
    <div class="appBar">
      <v-app-bar class="overflow-hidden grey lighten-3" flat app>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <span class="display-1 font-weight-light">Mmmenu</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon @click="search = true">mdi-magnify</v-icon>
      </v-app-bar>
    </div>
    <v-navigation-drawer right xs color="amber lighten-5" v-model="search" fixed temporary :width="windowWidth">
      <v-list-item-group>
        <v-list nav dense>
          <v-list-item class="d-flex justify-end" @click="search = false">
            <v-icon>mdi-close</v-icon>
          </v-list-item>
          <v-divider class="grey darken-4"></v-divider>
          <v-text-field @keyup.enter="find" v-model="filter" ></v-text-field>
        </v-list>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-navigation-drawer xs color="amber lighten-5" v-model="drawer" fixed temporary :width="windowWidth">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item @click="drawer = false">
            <v-icon>mdi-close</v-icon>
          </v-list-item>
          <v-divider class="grey darken-4"></v-divider>
          <v-list-item class="mb-0">
            <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="toHome">Home</v-list-item-title>
          </v-list-item>
          <v-divider class="grey darken-4"></v-divider>
          <v-list-item class="mb-0">
            <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="toCategory('Qué_Hacer')">Qué Hacer</v-list-item-title>
            <!-- <v-list-item-icon>
              <v-icon>mdi-arrow</v-icon>
            </v-list-item-icon> -->
          </v-list-item>
          <v-divider class="grey darken-4"></v-divider>
          <v-list-item class="mb-0">
            <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="toCategory('Qué_Comer')">Qué Comer</v-list-item-title>
            <!-- <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon> -->
          </v-list-item>
          <v-divider class="grey darken-4"></v-divider>
            <v-list-item class="mb-0">
            <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="toCategory('Qué_Comprar')">Qué Comprar</v-list-item-title>
            <!-- <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon> -->
          </v-list-item>
          <v-divider class="grey darken-4"></v-divider>
          <div v-if="!status">
            <v-list-item class="mb-0">
              <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="toSignup">Registrarse</v-list-item-title>
            </v-list-item>
            <v-divider class="grey darken-4"></v-divider>
            <v-list-item class="mb-0">
              <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="toLogin">Iniciar Sesión</v-list-item-title>
            </v-list-item>
            <v-divider class="grey darken-4"></v-divider>
          </div>
          <div v-else-if="admin">
            <v-list-item class="mb-0">
              <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="toAdmin">Admin</v-list-item-title>
            </v-list-item>
            <v-divider class="grey darken-4"></v-divider>
            <v-list-item class="mb-0">
              <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="toCreate">Crear Artículo</v-list-item-title>
            </v-list-item>
            <v-divider class="grey darken-4"></v-divider>
            <v-list-item class="mb-0">
              <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="toYourAccount">Tu cuenta</v-list-item-title>
            </v-list-item>
            <v-divider class="grey darken-4"></v-divider>
            <v-list-item class="mb-0">
              <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="logout">Cerrar Sesión</v-list-item-title>
            </v-list-item>
            <v-divider class="grey darken-4"></v-divider>
          </div>
          <div v-else>
            <v-list-item class="mb-0">
              <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="toYourAccount">Tu cuenta</v-list-item-title>
            </v-list-item>
            <v-divider class="grey darken-4"></v-divider>
            <v-list-item class="mb-0">
              <v-list-item-title style="height:50px" class="subtitle-2 font-weight-regular d-flex align-center" @click="logout">Cerrar Sesión</v-list-item-title>
            </v-list-item>
            <v-divider class="grey darken-4"></v-divider>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data: () => ({
    drawer: false,
    search: false,
    status: false,
    windowWidth: "",
    admin: "",
    category: "",
    filter: ""
  }),
  methods: {
    toHome() {
      this.$router.push("/");
    },
    toCategory(query){
      this.category = query;
      this.$router.push(`/categories/${this.category}`);
      this.$root.$emit("mySearch", this.category);
    },
    find() {
      this.$router.push(`/search/${this.filter}`);
      this.$root.$emit("myQuery", this.filter);
      this.filter = "";
    },
    toAdmin() {
      this.$router.push("/admin");
    },
    toLogin() {
      this.$router.push("/login");
    },
    toSignup() {
      this.$router.push("/signup");
    },
    toCreate() {
      this.$router.push("/create");
    },
    toYourAccount() {
      this.$router.push("/account");
    }
    ,
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userType");
      this.status = false;
      this.$router.push("/");
    },
  },
  mounted() {
    this.status = localStorage.getItem("token") ? true : false;
    this.$root.$on("log", status => {
      this.status = true;
      this.admin = status
    });
    this.$root.$on("deleted", status => {
      this.status = status;
    })
    this.windowWidth = window.innerWidth < 600 ? "75%" : "50%";
    window.onresize = () => {
      this.windowWidth = window.innerWidth < 600 ? "75%" : "50%";
    };
  }
};
</script>
<style lang="css" scoped>
</style>
