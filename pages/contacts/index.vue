<template>
  <b-row>
    <b-col cols md="4" sm="6" xs="12" v-for="contact in contacts" :key="contact.email">
      <Card :contact="contact"/>
    </b-col>
  </b-row>
</template>


<script>
import Card from '@/components/cards/Card.vue'
import axios from 'axios'
export default {
  
  asyncData(context){
    return axios.get('http://35.192.139.25:3000/contacts')
    .then((response) => {
      console.log('contacts fetched!')
      return {
        contacts: response.data.splice(0,12)
      }
    })
    .catch((err) => new Error(err))
  },
  components: {
    Card
  }
}
</script>
