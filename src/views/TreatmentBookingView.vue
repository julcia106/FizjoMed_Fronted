<template>
  <div class="rejestracja">
      <h1 class="mt-5">Rezerwacja zabiegu</h1>
      <TreatmentBooking></TreatmentBooking>
      <Footer></Footer>
  </div>
</template>

<script>
import TreatmentBooking from '@/components/TreatmentBooking.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'TreatmentBookingView',
  components: {
    TreatmentBooking,
    Footer,
}
}
</script>