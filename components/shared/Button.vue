<template>
  <button 
    v-on="inputListeners" 
    class="button__sidebar"
    :class="variantClass"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      // Options: ["flat"]
      default: ""
    }
  },
  computed: {
    variantClass() {
      const { variant } = this;
      return variant ? `button__sidebar--${variant}` : "";
    },
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
  height: 40px;
  cursor: pointer;
  transition: all 250ms;
  outline: none !important;

  &--flat {
    color: gray;
    background-color: transparent;
    padding: 0.3rem 0.4rem;
    border: none;
    border-radius: 4px;
    &:hover,
    &:focus {
      background-color: lightgrey;
    }
  }
}
</style>
