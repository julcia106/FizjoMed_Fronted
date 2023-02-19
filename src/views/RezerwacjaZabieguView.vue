<template>
  <div class="rejestracja">
      <h1 class="mt-5">Rezerwacja zabiegu</h1>
      <RezerwacjaZabiegu></RezerwacjaZabiegu>
      <Footer></Footer>
  </div>
</template>

<script>
import RezerwacjaZabiegu from '@/components/RezerwacjaZabiegu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'RezerwacjaZabieguView',
  components: {
    RezerwacjaZabiegu,
    Footer,
}
}
</script>