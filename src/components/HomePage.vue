<template>
  <HeaderPage />
  <h1>Hello user, welcome to the homepage</h1>
</template>


<script>
import HeaderPage from './HeaderPage.vue'

export default {
  name: 'HomePage',
  components: {
    HeaderPage,
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(!user) {
      this.$router.push({name:'SignUp'})
    }
  }
}

</script>