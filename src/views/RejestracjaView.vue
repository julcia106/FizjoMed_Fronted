<template>
  <div class="rejestracja">
      <h1 class="mt-5">Zarządzanie zabiegami</h1>
      <Rejestracja></Rejestracja>
  </div>
</template>

<script>
import Rejestracja from '@/components/Rejestracja.vue'

export default {
  name: 'RejestracjaView',
  components: {
    Rejestracja,
}
}
</script>