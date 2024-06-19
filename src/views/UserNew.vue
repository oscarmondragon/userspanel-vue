<template>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent="handleSubmit">
      <v-text-field v-model="name" :rules="nameRules" label="Name"></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="Email"></v-text-field>
      <v-text-field v-model="password" :rules="passwordRules" label="Password"></v-text-field>
      <v-text-field v-model="confirmPassword" label="Confirm assword"></v-text-field>



      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import axios from 'axios';

export default {
  props: {
  },
  methods: {
    async handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      const response = await axios.post("users", data).then(
        res => {
          console.log(res)
        }
      ).catch(
        err => {
          console.error(err)
        }
      );




    }
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',


    nameRules: [
      value => {
        if (value?.length > 3) return true

        return 'First name must be at least 3 characters.'
      },
    ],
    emailRules: [
      value => {
        if (value?.length > 3) return true

        return 'Email has to be a valid email'
      },
    ],
    passwordRules: [
      value => {
        if (value?.length > 8) return true

        return 'Password must be at least 3 characters.'
      },
    ],
  }),
}
</script>