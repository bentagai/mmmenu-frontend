<template>
  <v-app>
    <v-content class="grey lighten-5">
      <Menu />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
import Menu from './components/Menu';

export default {
  name: 'App',
  components: {
    Menu
  },
  data: () => ({
    //
  }),
};
</script>
