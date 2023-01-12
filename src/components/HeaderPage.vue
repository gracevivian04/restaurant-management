<template>
  <div class="nav">
    <router-link to="/home">Home</router-link>
    <router-link to="/add-restaurant">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <a href="#" v-on:click="logout" >Logout</a>
  </div>
</template>


<script>

export default {
  name: 'HeaderPage',
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({name: 'LogIn'})
    }
  }
}

</script>


<style scoped>
.nav {
  background-color: rgb(217, 236, 217);
  text-decoration: none;
  overflow: hidden;
}

.nav a {
  text-decoration: none;
  text-align: center;
  padding: 14px 16px;
  margin-right: 5px;
  color: black;
}

.nav a:hover {
  color: darkseagreen;
  background: #5f7a5d;
}
</style>