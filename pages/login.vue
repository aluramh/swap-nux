<template>
  <div class="login__container container py-3">
    <Jumbotron>
      <h2 class="text-center">Swap</h2>

      <div class="text-center">
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </div>

      <form @submit.prevent="handleFormSubmission">
        <InputField v-model="username" placeholder="Email or username" type="email" class="w-100 mb-2" />
        <InputField v-model="password" placeholder="Password" type="password" class="w-100 mb-2" />

        <Button class="w-100">
          Log in
        </Button>
      </form>
    </Jumbotron>
  </div>
</template>

<script>
import InputField from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import Jumbotron from "@/components/shared/Jumbotron";

export default {
  middleware: ["login-redirect"],
  components: {
    InputField,
    Button,
    Jumbotron
  },
  data() {
    return {
      username: "swaptest@email.com",
      password: "swap123",
      token: ""
    };
  },
  methods: {
    handleFormSubmission(e) {
      this.$auth.loginWith("local", {
        data: {
          username: this.username,
          password: this.password
        }
      });
    }
  }
};
</script>

<style>
.login__container {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
</style>
