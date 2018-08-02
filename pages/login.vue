<template>
  <div class="App__background">
    <h3>Response</h3>
    <div>{{ $store.getters.getToken }}</div>
    <pre>{{ this.$auth.$state }}</pre>

    <div class="login__container container py-3">
      <div class="login__jumbotron">
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
      </div>
    </div>
  </div>
</template>

<script>
import { setLocalStorage, getLocalStorage } from "@/utilities";
import InputField from "@/components/shared/Input";
import Button from "@/components/shared/Button";

export default {
  components: {
    InputField,
    Button
  },
  data() {
    return {
      username: "swaptest@email.com",
      password: "swap123",
      token: ""
    };
  },
  created() {
    if (process.browser) {
      const storageToken = getLocalStorage("token", false);
      if (storageToken) this.token = storageToken;
    }
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
.App__background {
  background-color: #fafafa;
}

.login__jumbotron {
  max-width: 350px;
  margin-left: auto !important;
  margin-right: auto !important;
  border: 1px solid rgb(230, 230, 230);
  background-color: white;
  padding: 1.5rem 2rem 4rem 2rem;
  border-radius: 2px;
}

.login__container {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
</style>
