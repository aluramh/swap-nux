<template>
  <div>
    <transition-group
      v-if="contacts.length > 0" 
      tag="div"
      class="row"
      name="list-complete"
    >
      <div
        v-for="contact in contacts" 
        :key="contact._id"
        class="col-md-4 col-sm-6 col-xs-12 list-complete-item my-3"
      >
        <Card :contact="contact"/>
      </div>
    </transition-group>
    <div v-else>
      <b-col class="text-center mt-5">
        <h3>No results</h3>
      </b-col>
    </div>
  </div>
</template>


<script>
import Card from "./Card";
export default {
  components: {
    Card
  },
  props: {
    contacts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.list-complete-item {
  transition: all 1.5s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(1px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
