<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="4" md="4">
                <h3>words</h3>
                <v-text-field
                  v-model="words"
                  :rules="wordRules"
                  label="Enter some words"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="4"
                md="4"
                class="d-flex justify-center align-center flex-column"
              >
                <h3>flavor</h3>
                <v-radio-group v-model="radios" mandatory @change="resetFormResult">
                  <v-radio :label="spongeLabel" value="sponge">
                    <template v-slot:label>
                      <div class="sponge-label">
                        <v-img
                          class="flip-me-x"
                          height="30"
                          width="30"
                          src="../assets/spongebob.svg"
                        />
                        {{ spongeLabel }}
                        <v-img
                          class="flip-me"
                          height="30"
                          width="30"
                          src="../assets/spongebob.svg"
                        />
                      </div>
                    </template>
                  </v-radio>
                  <v-radio :label="cuteLabel" value="cute"> </v-radio>
                  <v-radio :label="spacesLabel" value="enhance"></v-radio>
                  <v-radio
                    :label="abominationLabel"
                    value="abomination"
                  ></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="4" class="d-flex justify-center align-center flex-column">
                <v-btn
                  :disabled="!valid"
                  color="deep-purple accent-1"
                  class="mr-4"
                  @click="submitForm"
                >
                  {{ buttonLabel }}
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>

      <v-col class="mb-5 mt-6" cols="12" v-if="formResult">
        <h2 class="headline font-weight-bold mb-3">
          &#128293; result &#128293;
        </h2>

        <v-row justify="center" class="mb-6 mt-6">
          <div v-if="radios === 'sponge'">
            {{ formResult }} <v-img height="100" width="100" src="../assets/spongebob.svg" />
          </div>
          <div v-else>{{ formResult }}</div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import {
  abominationTransform,
  sparkleSpaceTransform,
  spongebobTransform,
  cuteTransform,
  transformInput,
} from "../utils";

export default {
  data: () => ({
    radios: null,
    valid: false,
    words: "",
    wordRules: [
      (v) => !!v || "Words are required",
      (v) => v.length > 0 || "You must use words.",
      (v) => {
          const pattern = /^[a-zA-Z\s]*$/;
          return pattern.test(v) || 'Letters only please, this is a budget service'
      },
    ],
    spongeLabel: spongebobTransform("mocking spongebob"),
    spacesLabel: sparkleSpaceTransform("enhance"),
    abominationLabel: abominationTransform("abomination"),
    cuteLabel: cuteTransform("cute label lets go"),
    buttonLabel: sparkleSpaceTransform("invest"),
    formResult: '',
  }),
  methods: {
    submitForm() {
      this.formResult = transformInput(this.words, this.radios);
    },
    resetFormResult() {
      this.formResult = '';
    }
  },
};
</script>

<style lang="scss" scoped>
.sponge-label {
  display: flex;
}
.flip-me {
  display: inline-block;

  &-x {
    display: inline-block;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
}
</style>