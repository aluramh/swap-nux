<template>
  <b-row>
    <b-col v-show="showSidebar" col xs="12" sm="1" md="2">
      <Sidebar :hideSidebarHandler="toggleSidebar" />
    </b-col>

    <b-col>
      <div class="container-fluid">
        <div class="d-flex flex-row">
          <Button variant="flat" class="my-3" @click="toggleSidebar">
            {{ sidebarButtonText }}
          </Button>
        </div>
        <ContactsPage />
      </div>
    </b-col>
  </b-row>
</template>

<script>
import ContactsPage from "@/components/pages/contacts";
import Sidebar from "@/components/pages/contacts/Sidebar";
import Button from "@/components/shared/Button.vue";

export default {
  middleware: ["auth"],
  components: {
    ContactsPage,
    Sidebar,
    Button
  },
  // This fetch() executes each time the page is reloaded. This is to make sure you always
  // get the latest information.
  async fetch({ store }) {
    await store.dispatch("fetchContacts");
  },
  data() {
    return {
      showSidebar: true
    };
  },
  computed: {
    sidebarButtonText() {
      const text = "Toggle sidebar";
      return this.showSidebar ? `<< ${text}` : `${text} >>`;
    }
  },
  methods: {
    setSidebarVisibility(val) {
      this.showSidebar = val;
    },
    toggleSidebar(e) {
      console.log(e);
      // Toggle sidebar
      this.setSidebarVisibility(!this.showSidebar);

      // Timeout before losing focus on element.
      // NOTE: Optional
      setTimeout(() => {
        e.target.blur();
      }, 200);
    }
  }
};
</script>
