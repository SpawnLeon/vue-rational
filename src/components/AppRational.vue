<template>
  <div class="rational">
    <button
      class="rational__close"
      @click="$emit('removeRational', index)"
      v-if="count > 2">&times;
    </button>
    <input v-model="numer"
           @input="rationalInputHandler"
           type="text"
           class="rational__input rational__input--numer">
    <div class="rational__delimiter"></div>
    <input v-model="denom"
           @input="rationalInputHandler"
           type="text"
           class="rational__input rational__input--denom">
  </div>
</template>

<script>
import Rational from '../../api/rational';

export default {
  name: 'AppRational',
  props: {
    rat: {
      type: Rational,
      required: true,
    },
    index: {
      type: Number,
    },
    count: {
      type: Number,
    },
  },
  data() {
    return {
      numer: this.rat.getNumer(),
      denom: this.rat.getDenom(),
    };
  },
  methods: {
    rationalInputHandler() {
      this.numer = this.normalizeNumber(this.numer);
      this.denom = this.normalizeNumber(this.denom);

      this.rat.setNumer(this.numer);
      this.rat.setDenom(this.denom);
    },
    normalizeNumber(number) {
      let result = number;
      if (typeof value !== 'number') {
        result = parseInt(result, 10);
      }
      if (Number.isNaN(result)) {
        result = 1;
      }
      if (result > 99) {
        result = 99;
      }

      if (result < 1) {
        result = 1;
      }

      return result;
    },

  },
};
</script>

<style scoped
       lang="scss">
.rational {
  display        : inline-flex;
  flex-direction : column;
  margin         : 0 30px;
  position       : relative;

  // .rational__close
  &__close {
    position        : absolute;
    width           : 15px;
    height          : 15px;
    font-size       : 10px;
    top             : -10px;
    right           : -10px;
    border-radius   : 50%;
    text-align      : center;
    display         : inline-flex;
    justify-content : center;
    align-items     : center;
    border          : 1px solid grey;
    cursor          : pointer;
    outline         : none;

  }

  &::after {
    position    : absolute;
    font-size   : 30px;
    font-weight : 700;
    top         : 50%;
    transform   : translateY(-50%);
    left        : -40px;
  }

  &:not(:first-child)::after {
    content : '+';
  }

  &:last-child::after {
    content : '=';
  }

  // .rational__input
  &__input {
    width       : 50px;
    height      : 50px;
    font-size   : 30px;
    font-weight : 700;
    padding     : 5px;
    text-align  : center;

    // .rational__input--numer
    &--numer {
    }

    // .rational__input--denom
    &--denom {
    }

  }

  // .rational__delimiter
  &__delimiter {
    height           : 2px;
    background-color : #101010;
    margin           : 5px 0;
  }
}

</style>
