<template>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent="handleSubmit">
      <v-text-field v-model="name" :rules="nameRules" label="Name"></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="Email"></v-text-field>
      <v-text-field v-model="password" :rules="passwordRules" label="Password"></v-text-field>
      <v-text-field v-model="confirmPassword"  label="Confirm assword"></v-text-field>


      <v-btn class="mt-2" to="/home" block>Back</v-btn>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import axios from 'axios';
import router from '@/router'; 

export default {
  props: {
  },
  methods: {
    async handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      }

      const response = await axios.post("users", data).then(
        res => {
          console.log(res);
      router.push('/home');

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
     v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      value => {
        if (value?.length >= 8) return true

        return 'Password must be at least 8 characters.'
      },
    ]
  }),
}
</script>