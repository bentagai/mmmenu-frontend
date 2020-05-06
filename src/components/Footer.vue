<template>
  <v-footer padless color="#202020" tile>
    <v-col
      class="text-center"
      cols="12"
    >
      <span class="grey--text text--lighten-5">{{ new Date().getFullYear() }} — Mmmenu</span>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
