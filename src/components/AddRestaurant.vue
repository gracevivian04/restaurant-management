<template>
  <HeaderPage />
  <h1>Hello {{name}}, welcome to the Add Restaurant page</h1>
  <form class="add-form">
    <input type="text" name="name" v-model="restaurant.name" placeholder="Enter restaurant name" />
    <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter contact number" />
    <input type="text" name="address" v-model="restaurant.address" placeholder="Enter address" />
    <button v-on:click="addRestaurant">Add New Restaurant</button>
  </form>
</template>


<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios';

export default {
  name: 'AddRestaurant',
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
    addRestaurant() {
      console.warn(this.restaurant)
      const result = axios.post('http://localhost:3000/restaurant', {
        name: this.restaurant.name,
        contact: this.restaurant.contact,
        address: this.restaurant.address
      });
      if(result.status == 201) {
        this.$router.push({name:"HomePage"})
      }
      console.warn("result", result)
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

<style>
.add-form input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid darkseagreen;
  border-radius: 5px;
}

.add-form button  {
  width: 325px;
  height: 40px;
  border: 2px solid darkseagreen;
  border-radius: 5px;
  background-color: rgb(217, 236, 217);
  color: black;
  cursor: pointer;
}

.add-form button:hover {
  transition: 2ms;
  background-color: darkseagreen;
  border: 2px solid  rgb(217, 236, 217);
  color:  rgb(217, 236, 217);
  border-radius: 5px;
}
</style>