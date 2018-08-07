<template>
  <div class="container-fluid">
    <h2>{{ contact.name }}</h2>
    <pre>{{ contact }}</pre>
    <pre>{{ `/api/contacts/${this.$route.params.id}` }}</pre>
  </div>
</template>

<script>
import Card from "@/components/Cards/Card.vue";

export default {
  middleware: ["auth"],
  components: {
    Card
  },
  validate({ params }) {
    // Check if the requested Contact ID is a number.
    const isNumber = /^\d+$/.test(params.id);
    // Also check if it has leading "0". (Leading zeroes = doesn't exist).
    const leadingZero = /^0/.test(params.id);

    if (!isNumber || leadingZero) {
      return false;
    }
    return true;
  },
  async asyncData({ params, app, error }) {
    try {
      const response = await app.$axios.get(
        `/api/contacts/${Number(params.id)}`
      );

      return { contact: response.data };
    } catch (e) {
      // If the error was because the requested user was not found
      // redirect to 404 error page.
      if (e.response.status === 404) {
        return error({ statusCode: 404, message: "User not found." });
      }
      // Else it was (probably) an internal server error.
      error({ statusCode: 500, message: "Internal server error" });
    }
  }
};
</script>
