import Vuex from "vuex";
import contacts from "./modules/contacts";
import user from "./modules/user";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      contacts,
      user
    }
  });
};

export default createStore;
