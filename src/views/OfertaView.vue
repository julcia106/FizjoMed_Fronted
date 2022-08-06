<template>
  <div class="about">
    <h1 class="font-weight-light pt-5">Nasza oferta</h1>
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