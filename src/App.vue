<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple accent-1"
      dark
    >
      <div class="d-flex align-center">
        <span class="flip-me-x">&#127853; </span>  &#127872;   𝒻𝓇𝒾𝑒𝓃𝒹𝓁𝓎 𝓇𝑒𝓂𝒾𝓃𝒹𝑒𝓇    &#127872; &#127853;
      </div>
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.flip-me-x {
  display: inline-block;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  margin-right: 7px;

}

</style>
