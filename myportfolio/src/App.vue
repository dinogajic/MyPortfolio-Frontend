<template>
  <div class="app">
    <v-app-bar app color="#089965" flat>
      <v-toolbar-title
        ><a href="/home"
          ><img
            src="@/assets/MyPortfolioTextWhitepng.png"
            alt=""
            class="logo" /></a
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn elevation="0" color="#089965" to="/portfolio">
        <span>PORTFOLIO</span>
      </v-btn>
      <v-btn elevation="0" color="#089965" to="/profile">
        <span>PROFILE</span>
      </v-btn>
      <v-btn elevation="0" color="#089965" to="">
        <span>LOG OUT</span>
      </v-btn>
      <!--         <router-link elevation="0" color="#089965" to="/portfolio">
          <span>PORTFOLIO</span>
        </router-link>
        <router-link elevation="0" color="#089965" to="/profile">
          <span>PROFILE</span>
        </router-link>
        <router-link elevation="0" color="#089965" to="">
          <span>LOG OUT</span>
        </router-link> -->
    </v-app-bar>
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
