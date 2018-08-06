<template>
  <div class="login__container container py-3">
    <Jumbotron class="mb-3">
      <h2 class="text-center">Swap</h2>
      
      <div class="text-center">
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </div>
      
      <form @submit.prevent="handleSignup">
        <InputField v-model="firstname" placeholder="First name(s)" type="email" class="w-100 mb-2" />
        <InputField v-model="lastname" placeholder="Last name(s)" type="email" class="w-100 mb-2" />
        <InputField v-model="username" placeholder="Email" type="email" class="w-100 mb-2" />
        <InputField v-model="password" placeholder="Password" type="password" class="w-100 mb-2" />
        <InputField v-model="passwordConfirm" placeholder="Confirm password" type="password" class="w-100 mb-2" />

        <Button class="w-100">
          Sign up
        </Button>
      </form>
    </Jumbotron>

    <Jumbotron class="text-center py-3">
      Already have an account? <nuxt-link to="/login">Sign in</nuxt-link>
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
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    handleSignup() {}
  }
};
</script>
