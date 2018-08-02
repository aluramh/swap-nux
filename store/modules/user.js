import { setLocalStorage, getLocalStorage } from "@/utilities";

const types = {
  SET_TOKEN: "user/SET_TOKEN",
  SET_USER: "user/SET_USER"
};

const state = {
  user: {},
  token: ""
};

const getters = {
  getUser: state => state.user,
  isLogged: state => !!state.user,
  getToken: state => state.token
};

const mutations = {
  [types.SET_TOKEN](state, token) {
    state.token = token;
  },
  [types.SET_USER](state, user) {
    state.user = user;
  }
};

const actions = {
  async handleLogin({ commit }, { username, password }) {
    try {
      console.log(username, password);
      const response = await this.$axios.post("/api/auth/login", {
        username,
        password
      });

      // eslint-disable-next-line
      const {
        data: { user, token }
      } = response;

      // Save the token for use in the localStorage.
      setLocalStorage("token", token, false);
      commit(types.SET_TOKEN, token);

      // Set the user session in the Vuex "user" module in the store.
      commit(types.SET_USER, user);

      // Redirect user to [page] for successful login.
      // ...
    } catch (e) {
      console.error(e);
    }
  },
  handleSignup() {}
};

export default {
  state,
  getters,
  mutations,
  actions
};
