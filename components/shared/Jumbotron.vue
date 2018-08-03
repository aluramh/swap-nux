<template>
  <div class="login__jumbotron">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Jumbotron"
};
</script>

<style lang="scss">
.login__jumbotron {
  max-width: 350px;
  margin-left: auto !important;
  margin-right: auto !important;
  border: 1px solid rgb(230, 230, 230);
  background-color: white;
  padding: 1.5rem 2rem 4rem 2rem;
  border-radius: 2px;
}
</style>
