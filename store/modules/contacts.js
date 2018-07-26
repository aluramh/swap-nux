const state = {
  contacts: [],
  count: 0
};

const getters = {
  getContacts: state => state.contacts,
  getContactsCount: state => state.count
};

const mutations = {
  setContacts(state, data) {
    state.contacts = data;
  },
  setContactsCount(state, data) {
    state.count = data;
  }
};

const actions = {
  // nuxtServerInit() is executed once the app server is initialized.
  // nuxtServerInit({ commit }, { app }) {},
  async fetchContacts({ commit }) {
    const { contacts, total } = await this.$axios.$get("/contacts");

    commit("setContacts", contacts);
    commit("setContactsCount", total);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
