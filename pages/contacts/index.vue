<template>
  <b-row>
    <b-col col xs="12" sm="1" md="2">
      <Sidebar :hideSidebarHandler="hideSidebar" />
    </b-col>
    <b-col>
      <ContactsPage class="container-fluid"/>
    </b-col>
  </b-row>
</template>

<script>
import ContactsPage from "@/components/pages/contacts";
import Sidebar from "@/components/pages/contacts/Sidebar";

export default {
  components: {
    ContactsPage,
    Sidebar
  },
  // This fetch() executes each time the page is reloaded. This is to make sure you always
  // get the latest information.
  async fetch({ store }) {
    await store.dispatch("fetchContacts");
  },
  methods: {
    hideSidebar() {
      console.log("hideSidebar");
    }
  }
};
</script>
