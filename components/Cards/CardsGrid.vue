<template>
    <b-row>
      <b-col 
       v-if="contacts.length > 0"
       cols 
       md="4" 
       sm="6" 
       xs="12" 
       v-for="contact in contacts" :key="contact._id">
        <Card :contact="contact"/>
      </b-col>
      <b-col v-else>
            <h3>No contacts found</h3>
        </b-col>
    </b-row>
</template>


<script>
import Card from '@/components/cards/Card'
export default {
    components: {
        Card
    },
    props: {
        contacts: {
            type: Array,
            required: true
        }
    }
}
</script>
