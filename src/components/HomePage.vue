<template>
  <HeaderPage />
  <h1>Hello {{name}}, welcome to the homepage</h1>
  <table>
    <tr class="title">
      <td>
        Id
      </td>
      <td>
        Name
      </td>
      <td>
        Contact No.
      </td>
      <td>
        Address
      </td>
      <td>
        Options
      </td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>
        {{ item.id }}
      </td>
      <td>
        {{ item.name }}
      </td>
      <td>
        {{ item.contact }}
      </td>
      <td>
        {{ item.address }}
      </td>
      <td>
        <router-link class="update" :to="'/update/' + item.id">
          Update
        </router-link>
        <button class="btn" v-on:click="deleteRestaurant">Delete</button>
      </td>
    </tr>
  </table>
</template>


<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      name: '',
      restaurant: [],
    }
  },
  components: {
    HeaderPage,
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete('http://localhost:3000/restaurant' + id)
      console.warn('restaurant deleted', result.status)
      if(result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name
    if(!user) {
      this.$router.push({name:'SignUp'})
    }
    let result = await axios.get('http://localhost:3000/restaurant');
    //console.warn(result)
    this.restaurant = result.data;
    }
  },
  async mounted() {
    this.loadData();
  }
}

</script>

<style>
table {
  margin-left: auto;
  margin-right: auto;
  border: 1px solid darkseagreen;
}

td {
  width: 200px;
  height: 40px;

}

tr:hover {
  background-color: rgb(217, 236, 217);
}

.title {
  font-weight: bolder;
}

.update {
  text-decoration: none;
  color: darkseagreen;
  background-color: #fff;
  padding: 1px;
}

.update:hover {
  font-weight:bolder;
  background-color: rgb(217, 236, 217);
  color: #2c3e50;
}

.btn {
  color: darkseagreen;
  background-color: #fff;
  border: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
}

.btn:hover {
  cursor: pointer;
  background-color:  rgb(217, 236, 217);
  font-weight:bolder;
  color: #2c3e50;
}
</style>