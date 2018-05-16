<template>
  <div>
    <Header/>
    <b-container fluid>
        <b-row>
          <b-col cols="2"></b-col>
          <b-col>
            <nuxt/>
          </b-col>
        </b-row>
      <b-row></b-row>
    </b-container>

  </div>
</template>


<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
