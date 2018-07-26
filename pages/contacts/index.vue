<template>
  <div>
    <h2>Contacts:</h2>
    <h1>{{ contactsCount }}</h1>
    <pre>{{ contacts }}</pre>
    <!-- <pre>{{ $data }}</pre> -->
    <!-- <b-row align-h="end"> 
      <b-col cols="6" >
        <no-ssr>
          <SearchContact/>
        </no-ssr>
      </b-col>
    </b-row> -->

    <!-- <CardsGrid :contacts="contactsToDisplay" /> -->

    <!-- <b-row 
      v-if="totalCount > perPage" 
      class="pt-3" 
      align-h="center"
    >
      <b-pagination 
        :total-rows="totalCount" 
        :value="currentPage" 
        :per-page="perPage"
        @input="changePage" 
        hide-ellipsis
      />
    </b-row> -->
  </div>
</template>


<script>
import CardsGrid from "@/components/Cards/CardsGrid";
import SearchContact from "@/components/Contacts/SearchContact";
import axios from "axios";

export default {
  components: {
    CardsGrid,
    SearchContact
  },
  // This fetch() executes each time the page is reloaded. This is to make sure you always
  // get the latest information.
  async fetch({ store }) {
    await store.dispatch("fetchContacts");
  },
  computed: {
    contacts() {
      return this.$store.getters.getContacts;
    },
    contactsCount() {
      return this.$store.getters.getContactsCount;
    }
  }
};
</script>
