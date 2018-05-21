<template>
  <div>
    <Header/>
    <b-container fluid>
        <b-row>
          <Sidebar/>
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
import Header from '@/components/TheHeader'
import Footer from '@/components/TheFooter'
import Sidebar from '@/components/TheSidebar'
export default {
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>

<style scoped>
.main-container{
  padding: 1rem;
}
</style>
