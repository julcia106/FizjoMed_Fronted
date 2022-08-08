<template>
  <div class="rejestracja">
      <h1 class="mt-5">Rezerwacja zabiegu</h1>
      <RezerwacjaZabiegu></RezerwacjaZabiegu>
  </div>
</template>

<script>
import RezerwacjaZabiegu from '@/components/RezerwacjaZabiegu.vue'

export default {
  name: 'RezerwacjaZabieguView',
  components: {
    RezerwacjaZabiegu,
}
}
</script>