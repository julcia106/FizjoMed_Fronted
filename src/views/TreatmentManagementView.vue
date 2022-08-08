<template>
  <div class="rejestracja">
      <h1 class="mt-5">Zarządzanie zabiegami</h1>
      <TreatmentManagement></TreatmentManagement>
  </div>
</template>

<script>
import TreatmentManagement from '@/components/TreatmentManagement.vue'

export default {
  name: 'TreatmentManagementView',
  components: {
    TreatmentManagement,
}
}
</script>