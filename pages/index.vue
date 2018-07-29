<template>
  <div></div>
</template>

<script>
// This is the index/landing page.
export default {
  // async fetchSomething() {
  //   const ip = await this.$axios.$get("http://icanhazip.com");
  //   this.ip = ip;
  // },
  beforeCreate() {
    this.$router.push("/contacts");
  }
};
</script>

