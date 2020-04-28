<template>
  <div class="appBar">
    <v-app-bar
      class="mx-auto overflow-hidden grey lighten-3"
      flat
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title><span class="display-1 font-weight-light">Mmmenu</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon @click="logout">mdi-logout</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      xs
      width="75%"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
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
          </v-list-item> -->
          <!-- <v-list-item>
            <v-list-item-title>Qué Comer</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
          </v-list-item> -->
          <!-- <v-list-item>
            <v-list-item-title>Qué Comprar</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
          </v-list-item> -->
          <v-list-item>
            <v-list-item-title @click="toSignup">Registrarse</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="toLogin">Iniciar sesión</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  export default {
    name: 'Menu',
    data: () => ({
      drawer: false,
    }),
    methods: {
      toLogin() {
        this.$router.push('/login')
      },
      toSignup() {
        this.$router.push('/signup')
      },
      toAdmin() {
        this.$router.push('/admin')
      },
      logout() {
        localStorage.removeItem("token")
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="css" scoped>
.appBar {
  border-bottom: 1px solid black;
}
</style>