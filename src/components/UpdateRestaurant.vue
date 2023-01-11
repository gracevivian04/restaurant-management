<template>
  <HeaderPage />
  <h1>Hello {{name}}, welcome to the Update Restaurant page</h1>
</template>


<script>
import HeaderPage from './HeaderPage.vue';

export default {
  name: 'UpdateRestaurant',
  data() {
    return {
      name: '',
    }
  },
  components: {
    HeaderPage,
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