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
  components: {
    Card
  },
  validate({ params, store }) {
    return /^\d+$/.test(params.id);
  },
  // This logic of fetching the specific ID should be in asyncData()
  // when it is moved to an API call.
  async asyncData({ params, app }) {
    try {
      const { data } = await app.$axios.get(`/api/contacts/${params.id}`);
      return { contact: data };
    } catch (e) {
      console.error(e);
      return { contact: {} };
    }
  }
};
</script>
