<template>
  <button 
    :class="variantClass" 
    class="button__sidebar"
    v-on="inputListeners"
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
@import "@/assets/css/variables.scss";

.button__sidebar {
  height: 40px;
  cursor: pointer;
  transition: all 250ms;
  outline: none !important;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: $primary;
  &:hover,
  &:focus {
    background-color: $primary-dark;
  }

  &--flat {
    color: gray;
    background-color: transparent;
    padding: 0.3rem 0.4rem;
    border: none;
    &:hover,
    &:focus {
      background-color: lightgrey;
    }
  }
}
</style>
