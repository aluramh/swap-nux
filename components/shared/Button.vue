<template>
  <button v-on="inputListeners" class="button__sidebar">
    <slot />
  </button>
</template>

<script>
export default {
  computed: {
    inputListeners() {
      return {
        // We add all the listeners from the parent
        ...this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        // -->
        // This ensures that the component works with v-model
        input: event => {
          this.$emit("input", event.target.value);
        }
      };
    }
  }
};
</script>

<style lang="scss">
.button__sidebar {
  color: gray;
  background-color: transparent;
  cursor: pointer;
  padding: 0.3rem 0.4rem;
  outline: none !important;
  border: none;
  border-radius: 4px;
  transition: all 250ms;
  &:hover,
  &:focus {
    background-color: lightgrey;
  }
}
</style>
