<template>
  <v-app>
    <Menu />
    <v-content class="grey lighten-3">
      <v-container fluid class="pt-0 pr-0 pl-0 ">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    Menu
  },
  data: () => ({
    //
  })
};
</script>
