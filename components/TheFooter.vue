<template>
  <div>
    <div class="App__background">
      <b-container class="App__footer">
        <p class="text-center">
          © Property of Jonajo Consulting LLC
        </p>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/css/variables.scss";

.App__footer {
  padding: 38px 0;
  color: $secondary;
  // opacity: 0.6;

  & > p {
    margin: 0 !important;
  }
}
</style>
