<template>
  <div class="vCard">
    <v-card outlined tile width="100%" class="grey lighten-3">
      <v-card-title class="title font-weight-regular d-flex justify-center">Registrarse</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username" v-model="userName"></v-text-field>
          <v-text-field label="E-mail" v-model="email" :rules="emailRules"></v-text-field>
          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            @keyup.enter="signup"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn depressed tile small color="#3B2929" block @click="signup">
          <span class="grey--text text--lighten-5">Signup</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>