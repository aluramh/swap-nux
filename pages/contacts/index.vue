<template>
  <div>
    <b-row align-h="end"> 
      <b-col cols="6" >
        <no-ssr>
          <SearchContact/>
        </no-ssr>
      </b-col>
    </b-row>
    <CardsGrid :contacts="contactsToDisplay" />
    <b-row  v-if="totalCount>perPage" class="pt-3" align-h="center">
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
export default {
  components: {
    CardsGrid,
    SearchContact
  },
  created() {
    this.$store.dispatch('loadAllContacts')
  },
  methods: {
    changePage(newPage) {
      this.$store.dispatch('changePage', newPage)
    }
      
  },
  computed: {
    contactsToDisplay() {
      let from = this.perPage * this.currentPage - this.perPage
      let to   = this.perPage
      return this.$store.state.loadedContacts.slice().splice(from, to)
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
