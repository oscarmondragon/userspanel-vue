<template>
    <h1>Home</h1>
    <v-col cols="auto">
        <label> New user </label>
        <v-btn to="/create" density="compact" icon="mdi-plus"></v-btn>
    </v-col>
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
            <tr v-if="this.loading">
                <td>Loading... data</td>
            </tr>
            <tr v-else v-for="item, i in users" :key="item.id">
                <td>{{ i + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.updated_at }}</td>
                <td></td>

            </tr>
        </tbody>
    </v-table>

</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            users: null,
            loading: false
        }
    },
    /* async created() {
        const response = await axios.get('users', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem(token)
            }
        });
        console.log(response);
    }, */
    mounted() {
        this.getUsers();
    },
    methods: {
        async getUsers() {
            this.loading = true;
            const response = await axios.get("users").then(
                res => {
                    this.users = res.data;
                    this.loading = false;
                }

            );

        }
    }
}
</script>