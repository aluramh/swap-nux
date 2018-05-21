<template>
  <div>
    <b-row align-h="end"> 
      <b-col cols="4" >
        <no-ssr>

          <SearchContact :searchAction="searchContacts" />
        </no-ssr>
     
      </b-col>
    </b-row>
    <CardsGrid :contacts="contactsToDisplay" />
    <b-row class="pt-3" align-h="center">
        <b-pagination 
          :total-rows="totalCount" 
          :value="currentPage" 
          :per-page="perPage"
          @input="changePage" 
          hide-ellipsis
          />
     
    </b-row>
  </div>
</template>


<script>
import CardsGrid from '@/components/cards/CardsGrid'
import SearchContact from '@/components/Contacts/SearchContact'
import axios from 'axios'
export default {
  components: {
    CardsGrid,
    SearchContact
  },
  methods: {
    selectContact(id) {
      alert('Selected contact with id ' + id)
    },
    searchContacts(term) {
      return this.$store.dispatch('searchContacts', term)
    },
    changePage(newPage) {
      this.$store.dispatch('changePage', newPage)
    }
      
  },
  computed: {
    contactsToDisplay() {
      return this.$store.state.loadedContacts
    },
    totalCount() {
      return this.$store.getters.totalContacts
    },
    perPage() {
      return this.$store.state.perPage
    },
    currentPage() {
      return this.$store.state.page
    }
  }
  
}
</script>
