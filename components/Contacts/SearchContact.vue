<template>
  <div>

    <v-search
      :list="list"
      :custom-text="customText"
      :selected-item="selectedContact"
      option-text="name"
      option-value="_id"
      placeholder="Search contact by name, position or company"
      @select="selectContact"
      @searchchange="searchContacts"
    />
  </div>
    

</template>


<script>
export default {
  data() {
    return {
      selectedContact: {}
    };
  },
  computed: {
    list() {
      return this.$store.state.loadedContacts;
    }
  },
  methods: {
    customText(item) {
      return `${item.name} - ${item.position} (${item.company})`;
    },
    searchContacts(term) {
      if (term.length === 0) {
        return;
      }
      this.$store.dispatch("searchContacts", term);
    },
    selectContact(item) {
      if (item.id) {
        this.selectedContact = item;
        this.$store.dispatch("loadOneById", item.id);
      } else {
        this.$store.dispatch("loadAllContacts");
      }
    }
  }
};
</script>
