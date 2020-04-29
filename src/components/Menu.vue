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
        <v-icon @click="logout">mdi-logout</v-icon>
      </v-app-bar>
    </div>
    <v-navigation-drawer xs v-model="drawer" fixed temporary :width="windowWidth">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item @click="toAdmin">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item>
              <v-list-item-title>Qué Hacer</v-list-item-title>
              <v-list-item-icon>
                <v-icon>mdi-arrow</v-icon>
              </v-list-item-icon>
       
              <v-list-item-title>Qué Comer</v-list-item-title>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
          
              <v-list-item-title>Qué Comprar</v-list-item-title>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
          </v-list-item>-->
          <div v-if="!status">
            <v-list-item>
              <v-list-item-title @click="toSignup">Registrarse</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="toLogin">Iniciar sesión</v-list-item-title>
            </v-list-item>
          </div>
          <div v-else>
            <v-list-item>
              <v-list-item-title @click="toCreate">Crear artículo</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="logout">Cerrar sesión</v-list-item-title>

            </v-list-item>
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
    status: false,
    windowWidth: '' 
  }),
  computed: {
    status() {
      return this.status;
    },
  },
  methods: {
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
    logout() {
      localStorage.removeItem("token");
      this.status = false;
      this.$router.push("/");
    }
  },
  mounted: function() {
    this.$root.$on("log", status => {
      this.status = status;
    });
    this.windowWidth = window.innerWidth < 600 ? '75%' : '50%' ;
    window.onresize = () => {
      this.windowWidth = window.innerWidth < 600 ? '75%' : '50%' ;
    };
  }
};
</script>
<style lang="css" scoped>
</style>
