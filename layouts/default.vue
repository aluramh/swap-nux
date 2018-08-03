<template>
  <div>
    <Header />
    <div class="App__background py-4">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/TheHeader";
import Footer from "@/components/TheFooter";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.App__background {
  background-color: #fafafa;
}
</style>
