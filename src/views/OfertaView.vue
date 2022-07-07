<template>
  <div class="oferta">
    <Cards></Cards>
    <Footer></Footer>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'OfertaView',
  components: {
    Cards,
    Footer
}
}
</script>

<style scoped>
.container {
  padding-top: 30px;
}
</style>