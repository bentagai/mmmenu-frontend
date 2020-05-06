<template>
  <v-app>
    <Menu />
    <v-content class="grey lighten-3 pb-10">
      <v-container fluid class="pt-0 pr-0 pl-0 ">
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
import Menu from './components/Menu'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },
  data: () => ({
    //
  })
}
</script>
