<template>
  <div class="app">
    <v-toolbar color="#089965" app flat>
      <v-toolbar-title
        ><img src="@/assets/MyPortfolioTextWhitepng.png" alt="" class="logo"
      /></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn elevation="0" color="#089965" to="/portfolio">
        <span>LOG OUT</span>
      </v-btn>
      <v-btn elevation="0" color="#089965" to="/home">
        <span>LOG OUT</span>
      </v-btn>
    </v-toolbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
* {
  font-family: "Oswald", sans-serif;
}

.logo {
  height: 50px;
  margin-right: 50px;
}
</style>
