<template>
    <h1>Home</h1>
    
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          #
        </th>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Email
        </th>
        <th class="text-left">
          Updated at
        </th>
        <th class="text-left">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.updated_at }}</td>
      </tr>
    </tbody>
  </v-table>

</template>
<script>
import axios from 'axios';

</script>