<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
       <!-- <p>&#127853; &#127872;   𝒻𝓇𝒾𝑒𝓃𝒹𝓁𝓎 𝓇𝑒𝓂𝒾𝓃𝒹𝑒𝓇    &#127872; &#127853;</p> -->
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          <span class="flip-me-x">&#127853;</span> &#127872; 𝔀𝓮𝓵𝓬𝓸𝓶𝓮 &#127872; &#127853;
        </h1>

        <h2 class="subheading font-weight-regular">
         invest in yourself
        </h2>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
       <WordsForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import WordsForm from './WordsForm.vue';

  export default {
    name: 'HomePage',
    components: {
      WordsForm,
    },
    data: () => ({
      userText: ''
    }),
  }
</script>

<style scoped>
.flip-me-x {
  display: inline-block;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

</style>