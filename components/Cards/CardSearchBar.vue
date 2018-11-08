<template>
    <v-autocomplete
        v-model="selected"
        :loading="isLoading"
        :items="items"
        :search-input.sync="search"
        item-text="Name"
        return-object
        label="Search"
        prepend-icon="search"
        append-icon=""
        
    />
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      entries: [],
      isLoading: false,
      search: null
    };
  },
  computed: {
    items() {
      return this.entries.map(entry => {
        return Object.assign({}, entry);
      });
    }
  },
  watch: {
    search(val) {
      if (!val) {
        this.selected = null;
        this.$emit("nosearch");
        return;
      }
      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      this.$axios
        .$get("/api/cards/search/" + val)
        .then(res => {
          const { cards, resultCount } = res;
          this.entries = cards;
          this.$emit("searching", cards);
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>
