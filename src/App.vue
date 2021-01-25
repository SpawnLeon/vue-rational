<template>
  <div class="rational-form">
    <div class="rational-form__inner">
      <app-rational
        @removeRational="removeRational"
        v-for="(rat, index) in rationals"
        :key="rat"
        :index="index"
        :count="count"
        :rat="rat"></app-rational>
      <app-result :result="result"></app-result>
    </div>

    <app-button @action="addNewRational">add new element</app-button>
  </div>

</template>

<script>
import AppRational from '@/components/AppRational.vue';
import AppResult from '@/components/AppResult.vue';
import AppButton from '@/components/AppButton.vue';
import Rational from '../api/rational';

export default {
  name: 'App',
  components: { AppButton, AppResult, AppRational },
  data() {
    return {
      rationals: [
        new Rational(),
        new Rational(),
      ],
    };
  },
  methods: {
    addNewRational() {
      if (this.rationals.length > 4) {
        return;
      }
      this.rationals.push(new Rational());
    },
    removeRational(idx) {
      this.rationals = this.rationals.filter((el, index) => index !== idx);
    },
  },
  computed: {
    result() {
      const result = this.rationals
        .reduce((acc, item) => (acc == null ? item : acc.add(item)), null);

      return result.ratToReal().toFixed(4);
    },
    count() {
      return this.rationals.length;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family             : Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing  : antialiased;
  -moz-osx-font-smoothing : grayscale;
  color                   : #2c3e50;
  margin-top              : 60px;
  display                 : flex;
  align-items             : center;
  justify-content         : center;
}

.container {
  max-width : 768px;
  padding   : 0 15px;
  margin    : 0 auto;
}

.rational-form {

  // .rational-form__inner
  &__inner {
    display     : flex;
    align-items : center;
  }

}
</style>
