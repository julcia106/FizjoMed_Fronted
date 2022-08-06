<template>
  <div class="kontakt">
    <Kontakt></Kontakt>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Kontakt from '@/components/Kontakt.vue'

export default {
  name: 'KontaktView',
  components: {
    Footer,
    Kontakt,
  }
}
</script>