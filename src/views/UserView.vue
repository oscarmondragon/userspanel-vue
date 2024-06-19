<template>
  <h1>View details</h1>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: null,
    }
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url += this.url
    this.getUser();
  },
  methods: {
    async getUser() {
      const response = await axios.get("user/" + this.$route.params.id).then(
        res => {

          console.log(res.data);
        });
    }
  }
}

</script>