<template>
    <v-card height="180px">
        <v-toolbar dense flat color="primary" height="30px" >
          <v-spacer></v-spacer>
          <v-btn 
            flat 
            icon 
            :style="starIconStyle" 
            @click="isFavorite = !isFavorite">
            <v-icon>star</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ contact.Name }}</div>
            <div>{{ contact.Position }}</div>
          </div>
        </v-card-title>
       </v-card>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFavorite: false
    };
  },
  computed: {
    starIconStyle() {
      return {
        color: this.isFavorite ? "#ffc107" : "rgba(0,0,0,0.25882352941176473)"
      };
    }
  }
};
</script>


