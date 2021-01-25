<template>
  <div class="rat-result">{{ result }}</div>
</template>

<script>
export default {
  props: {
    result: {
      type: Number,
      default: 0,
    },
  },
  name: 'AppResult',
};
</script>

<style scoped
       lang="scss">
.rat-result {
  font-size   : 30px;
  font-weight : 700;
  margin      : 0 30px;
  position    : relative;

  &::after {
    position    : absolute;
    font-size   : 30px;
    font-weight : 700;
    top         : 50%;
    transform   : translateY(-50%);
    left        : -40px;
  }

  &:last-child::after {
    content : '=';
  }

}

</style>
