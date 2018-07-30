<template>
  <input 
    :value="value" 
    class="swap__input" 
    v-on="inputListeners"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: undefined
    },
    color: {
      type: String,
      default: "#09edce"
    }
  },
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
.swap__input {
  background-color: #fafafa;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;
  outline: none !important;
  height: 40px;
  padding: 8px;
  padding-right: 0px;

  &:focus {
    border-color: rgb(170, 170, 170);
  }
}
</style>
