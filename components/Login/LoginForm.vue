<template>
    <v-card>
        <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-form ref="form" lazy-validation>
                <v-text-field 
                v-model="user.username"
                prepend-icon="person" 
                label="Username" 
                type="text"
                />
                <v-text-field 
                v-model="user.password"
                prepend-icon="lock"  
                label="Password" 
                type="password"  
                />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submit">Login</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "encrypt3@test.com",
        password: "whatever"
      }
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.user)
    }
  }
};
</script>
