<template>
  <div>
    <b-navbar 
      type="light" 
      variant="light"
    >
      <b-container>
        <nuxt-link to="/contacts">
          <b-navbar-brand>Swap Demo</b-navbar-brand>
        </nuxt-link>

        <!-- <b-nav-text v-if="totalContacts > 0">{{ totalContacts }} contacts</b-nav-text> -->
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    totalContacts() {
      return this.$store.getters.totalContacts;
    }
  }
};
</script>
