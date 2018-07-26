import { chunk } from "../../utilities";

// All the types of state mutations that this module can perform.
const types = {
  SET_CONTACTS: "contacts/SET_CONTACTS",
  SET_CONTACTS_COUNT: "contacts/SET_CONTACTS_COUNT",
  SET_PAGE_SIZE: "contacts/SET_PAGE_SIZE",
  SET_CURRENT_PAGE: "contacts/SET_CURRENT_PAGE"
};

const state = {
  contacts: [],
  count: 0,
  // State for the pagination
  // contactsPage: [], // Dynamically calculated for now.
  currentPageData: [],
  pageSize: 5,
  currentPage: 1
};

const getters = {
  getContacts: state => state.contacts,
  getContactsCount: state => state.count,
  getPageSize: state => state.pageSize,
  getContactsPage: state => {
    return state.contacts.slice(0, state.pageSize);
  },
  getCurrentPage: state => state.currentPage
};

const mutations = {
  [types.SET_CONTACTS](state, data) {
    state.contacts = data;
  },
  [types.SET_CONTACTS_COUNT](state, data) {
    state.count = data;
  },
  [types.SET_PAGE_SIZE](state, data) {
    state.pageSize = data;
  },
  [types.SET_CURRENT_PAGE](state, data) {
    state.currentPage = data;
  }
};

const actions = {
  // nuxtServerInit() is executed once the app server is initialized.
  // nuxtServerInit({ commit }, { app }) {},
  async fetchContacts({ commit }) {
    const { data, count } = await this.$axios.$get("/contacts");

    commit(types.SET_CONTACTS, data);
    commit(types.SET_CONTACTS_COUNT, count);
  },
  setPageSize({ commit }, pageSize) {
    commit(types.SET_PAGE_SIZE, pageSize);
  },
  setCurrentPage({ commit }, pageNo) {
    commit(types.SET_CURRENT_PAGE, pageNo);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
