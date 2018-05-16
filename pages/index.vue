<template>
  <b-row>
    <b-col cols md="4" sm="6" xs="12" v-for="contact in contacts" :key="contact">
      <Card :contact="contact"/>
    </b-col>
  </b-row>
</template>


<script>
import Card from '@/components/cards/Card.vue'
export default {
  asyncData() {
    return {
      contacts: ['Orlando']
    }
  },
  components: {
    Card
  }
}
</script>
