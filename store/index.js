import Vuex from "vuex";
import contacts from "./modules/contacts";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      contacts
    }
  });
};

export default createStore;
