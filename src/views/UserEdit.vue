<template>
  <h1>Edit a user</h1>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent="handleSubmit">
      <v-text-field v-model="name" :rules="nameRules" label="Name"></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="Email"></v-text-field>
      <v-btn class="mt-2" to="/" block>Back</v-btn>
      <v-btn class="mt-2" type="submit" block>Save changes</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
export default {
  data: () => ({
    id: 0,
    name: '',
    email: '',


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
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/' + this.id;
    this.getUser();

  },
  methods: {
    async getUser() {
      const response = await axios.get("user/" + this.$route.params.id).then(
        res => {
          this.name = res.data.data.name;
          this.email = res.data.data.email;
        });
    },
    async handleSubmit() {

      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      const response = await axios.put("user/" + this.$route.params.id, data).then(
        res => {
          alert("Edit user success!")
          this.$router.push('/home')

        });
    }
  },

}

</script>