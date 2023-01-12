<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}

.logo {
  width: 200px;
}

.register input .add-form input{
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

.register button .add-form button {
  width: 325px;
  height: 40px;
  border: 2px solid darkseagreen;
  border-radius: 5px;
  background-color: rgb(217, 236, 217);
  color: black;
  cursor: pointer;
}

.register button:hover {
  transition: 2ms;
  background-color: darkseagreen;
  border: 2px solid  rgb(217, 236, 217);
  color:  rgb(217, 236, 217);
  border-radius: 5px;
}

</style>
