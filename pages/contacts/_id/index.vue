<template>
    <b-row class="justify-content-center"> 
        
        <Card :contact="contact" />
        
    </b-row>
</template>

<script>
import Card from '@/components/cards/Card'
export default {
  components: {
    Card
  },
  data() {
      return {
          contact: Object
      }
  },
  created() {
      this.contact = this.$store.getters.contactById(this.$route.params.id)
  }
}
</script>
