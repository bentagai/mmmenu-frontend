<template>
  <div class="appBar">
    <v-app-bar
      class="mx-auto overflow-hidden"
      dense
      flat
      color="#FAFAFA"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Mmmenu</v-toolbar-title>
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
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Close</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Qué Hacer</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-arrow</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Qué Comer</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Qué Comprar</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
          </v-list-item>
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
      }
    }
  }
</script>
<style lang="css" scoped>
.appBar {
  border-bottom: 1px solid black;
}
</style>