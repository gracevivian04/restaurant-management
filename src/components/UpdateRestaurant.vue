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
import axios from 'axios';

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
    async updateRestaurant() {
      console.warn(this.restaurant)
      const result = axios.put('http://localhost:3000/restaurant', + this.$route.params.id, {
        name: this.restaurant.name,
        contact: this.restaurant.contact,
        address: this.restaurant.address
      });
      if(result.status == 200) {
        this.$router.push({name:"HomePage"})
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name
    if(!user) {
      this.$router.push({name: 'SignUp'})
    }
    const result = await axios.get('http://localhost:3000/restaurant' + this.$route.params.id)
    console.warn(result.data)
    this.restaurant =  result.data
  }
}

</script>