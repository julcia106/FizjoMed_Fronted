<template>
  <div class="about">
    <Oferta></Oferta>
    <Footer></Footer>
  </div>
</template>

<script>
import Oferta from '@/components/Oferta.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'OfertaView',
  components: {
    Oferta,
    Footer
}
}
</script>