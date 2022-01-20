<template>
  <div class="header">
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Asks</router-link> |
      <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    color:white;
    background-color: #42b883;
    padding: 8px;
    display: flex;
}

.header .router-link-exact-active {
    color: #35495e;
}

.header a {
   color: white;
}


</style>