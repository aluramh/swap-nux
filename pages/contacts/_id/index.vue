<template>
    <b-row class="justify-content-center"> 
        <b-col>
            <h1>{{contact.name}}</h1>
        </b-col>
    </b-row>
</template>

<script>
import Card from "../../../components/Cards/Card.vue";
export default {
  components: {
    Card
  },
  validate({ params, store }) {
    return (
      /^\d+$/.test(params.id) &&
      store.state.allContacts.some(contact => contact.id === params.id)
    );
  },
  data() {
    return {
      contact: Object
    };
  },
  created() {
    let contact = this.$store.getters.contactById(this.$route.params.id);
    this.contact = contact;
  }
};
</script>
