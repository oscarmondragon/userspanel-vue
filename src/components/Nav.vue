<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer floating permanent>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" >
            <router-link to="/home">Home</router-link>
          </v-list-item>
          <v-list-item prepend-icon="mdi-view-dashboard" >
            <v-col cols="auto">
        <v-btn @click="logout()" density="default" icon="mdi-open-in-new"></v-btn> <label for="">log out</label>
      </v-col>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>

</template>

<script >

import axios from 'axios';
import router from '@/router'; 

  export default {
   
    methods: {
      async logout(){
            
        try {
      const response = await axios.post('logout');

      // save token at local storage
      localStorage.setItem('token', response.data.access_token);      
      router.push('/');
    } catch (error) {
      console.error('Error sign out:', error);
     
    }
        }

  }
}

</script>
