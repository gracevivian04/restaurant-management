<template>
  <HeaderPage />
  <h1>Hello {{name}}, welcome to the Update Restaurant page</h1>
  <form class="add-form">
    <input type="text" name="name" v-model="restaurant.name" placeholder="Enter restaurant name" />
    <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter contact number" />
    <input type="text" name="address" v-model="restaurant.address" placeholder="Enter address" />
    <button v-on:click="updateRestaurant">Update Restaurant</button>
  </form>
</template>


<script>
import HeaderPage from './HeaderPage.vue';

export default {
  name: 'UpdateRestaurant',
  data() {
    return {
      name: '',
      restaurant: {
        name: '',
        contact: '',
        address: '',
      }
    }
  },
  components: {
    HeaderPage,
  },
  methods: {
    updateRestaurant() {

    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name
    if(!user) {
      this.$router.push({name: 'SignUp'})
    }
  }
}

</script>