<template>
    <v-list dense>
      <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>
