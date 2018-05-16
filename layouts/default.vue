<template>
  <div>
    <Header/>
    <b-container fluid>
        <b-row>
          <b-col cols="2"></b-col>
          <b-col>
            <b-container class="main-container">
              <nuxt/>
            </b-container>
          </b-col>
        </b-row>
    </b-container>
    <Footer/>
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.main-container{
  padding: 1rem;
}
</style>
