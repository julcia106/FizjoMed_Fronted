<template>
  <div class="about">
    <h1 class="font-weight-light pt-5">Nasza oferta</h1>
    <Offer></Offer>
    <Footer></Footer>
  </div>
</template>

<script>
import Offer from '@/components/Offer.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'OfferView',
  components: {
    Offer,
    Footer
}
}
</script>