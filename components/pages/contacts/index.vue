<template>
  <div>
    <h1>Contacts</h1>

    <b-row align-h="end"> 
      <b-col cols="6" >
        <no-ssr>
          <div>
            <!-- <pre>{{pageSize}}</pre> -->
            <!-- <SearchContact /> -->
          </div>
        </no-ssr>
      </b-col>
    </b-row>

    <CardsGrid v-if="contactsPage" :contacts="contactsPage"/>

    <!-- Pagination -->
    <div class="d-flex flex-row justify-content-end">
      <div class="align-self-center">Page size:</div>

      <select 
        :value="pageSize" 
        class="ml-2" 
        @change="onPageSizeChange"
      >
        <option 
          v-for="i in 7" 
          :value="i * 5" 
          :key="i"
        >
          {{ i * 5 }}
        </option>
      </select>

      <b-pagination
        :value="currentPage"
        :total-rows="count"
        :per-page="pageSize" 
        :limit="3"
        class="m-0 ml-3"
        size="md"
        hide-ellipsis 
        hide-goto-end-buttons
        @change="onPageChange"
      />
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
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
    ...mapGetters({
      contacts: "getContacts",
      contactsCount: "getContactsCount",
      contactsPage: "getContactsPage",
      pageSize: "getPageSize",
      currentPage: "getCurrentPage",
      count: "getContactsCount"
    })
  },
  methods: {
    onPageSizeChange(e) {
      const newVal = Number(e.target.value);
      this.$store.dispatch("setPageSize", newVal);
    },
    onPageChange(pageNo) {
      this.$store.dispatch("setCurrentPage", pageNo);
    }
  }
};
</script>
