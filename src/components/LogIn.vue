<template>
  <img class="logo" src="../assets/knifefork.jpg"/>
  <h1>Login Page</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="text" v-model="password" placeholder="Enter Password" />
    <button> Login </button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: "LogIn",
}

</script>

<style scoped>

.logo {
  width: 200px;
}

.login input {
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

.login button {
  width: 325px;
  height: 40px;
  border: 2px solid darkseagreen;
  border-radius: 5px;
  background-color: rgb(217, 236, 217);
  color: black;
  cursor: pointer;
}

.login button:hover {
  transition: 2ms;
  background-color: darkseagreen;
  border: 2px solid  rgb(217, 236, 217);
  color:  rgb(217, 236, 217);
  border-radius: 5px;
}
</style>