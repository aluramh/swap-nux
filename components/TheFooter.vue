<template>
  <div class="App__footer">
    <b-container>
      <p class="text-center">
        © Property of Jonajo Consulting LLC
      </p>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "@/assets/css/variables.scss";

.App__footer {
  padding: 38px 0;
  color: $secondary;
  border-top: 1px solid $primary;
  // opacity: 0.6;

  & > p {
    margin: 0 !important;
  }
}
</style>
