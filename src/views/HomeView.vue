<template>
  <div class="home">
    <Jumbotron></Jumbotron>
    <Cards></Cards>
    <Footer></Footer>
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron.vue'
import Footer from '@/components/Footer.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'HomeView',
  components: {
    Jumbotron,
    Footer,
    Cards
}
}
</script>

<style scoped>
.home {
}
</style>