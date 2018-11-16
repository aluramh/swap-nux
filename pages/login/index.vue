<template>
    <v-flex xs12 sm8 md4>
        <LoginForm @submit="login" />
            <v-alert 
            class="mt-3"
            :value="error"
            type="warning" 
            transition="scale-transition"
            >
            {{ error }}
          </v-alert>
          
    </v-flex>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm";
export default {
  components: { LoginForm },
  layout: "centered",
  data() {
    return {
      error: null
    }
  },
  methods: {
    login(userCredentials) {
      this.$auth.loginWith("local", {
        data: { ...userCredentials }
      })
      .catch(err => {
        console.error(err)
        this.error = "Please verify your credentials."
        })
    }
  }
};
</script>
