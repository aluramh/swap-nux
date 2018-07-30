<template>
  <div>
    <b-navbar toggleable="md" class="App__header">
      <b-navbar-toggle target="nav_collapse" />

      <b-navbar-brand to="/">Swap</b-navbar-brand>

      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav class="App__navbar">
          <b-nav-item to="/contacts">Contacts</b-nav-item>
          <b-nav-item href="#">Link #2</b-nav-item>
          <b-nav-item href="#">Link #3</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item-dropdown right>

            <!-- Using button-content slot -->
            <template slot="button-content">
              User
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
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

<style lang="scss">
@import "@/assets/css/variables.scss";

.App__header {
  border-bottom: 1px solid $primary;
  & > * {
    color: $primary !important;
  }
  // color: $primary !important;
}

.App__navbar {
  & > * {
    transition: color 250ms;
  }
}
</style>
