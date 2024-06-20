<template>
    <h1>Home</h1>
    <Nav></Nav>
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
                <td>
                    <router-link :to="{ path: 'edit/' + item.id }" icon="mdi-eye">
                        <v-icon icon="mdi-eye"></v-icon>
                    </router-link>


                    <v-btn icon="mdi-delete-outline" @click="deleteUser(item.id)"></v-btn>
                </td>

            </tr>
        </tbody>
    </v-table>

</template>
<script>
import Nav from "../components/Nav.vue";
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

        },
        async deleteUser(id) {
            const response = await axios.delete("user/" + id).then(
                res => {
                    alert('Eliminado exitosamente');
                    window.location.reload();
                });
        },
        viewUser(id) {
            console.log(id);
            this.$router.push({ path: `/user/${id}` });


        }
    }
}
</script>