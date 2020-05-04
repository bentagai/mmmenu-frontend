<template>
  <div>
    <v-dialog v-model="dialog" hide-overlay persistent width="300">
      <v-card color="#3B2929" dark>
        <v-card-text
          class="subtitle-2 font-weight-regular text-center grey--text text--lighten-5 pt-2"
          height="100px"
        >
          {{ text }}
          <v-progress-linear
            indeterminate
            class="mt-2"
            background-color="brown darken-1"
            color="amber lighten-5"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    dialog: Boolean
  }
}
</script>

<style lang="scss" scoped>

</style>