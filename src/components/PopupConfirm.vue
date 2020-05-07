<template>
  <div>
    <v-dialog v-model="dialog" max-width="290">
      <v-card color="amber lighten-5">
        <v-card-title class="title font-weight-regular d-flex justify-center">{{ text }}</v-card-title>
        <v-card-actions class="d-flex justify-center">
          <v-btn text small color="accent-4" @click="close">No</v-btn>
          <v-btn text small color="accent-4" @click="event(id)">Si</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  props: {
    text: String,
    dialog: Boolean,
    close: Function,
    event: Function,
    id: String
  }
}
</script>

<style lang="scss" scoped>

</style>
