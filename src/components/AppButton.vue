<template>
  <button class="btn"
          @click="clickHandler">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  methods: {
    clickHandler() {
      this.$emit('action');
    },
  },
};
</script>

<style scoped
       lang="scss">
.btn {
  padding : 15px 30px;
  margin  : 30px;
  cursor  : pointer;
}
</style>
