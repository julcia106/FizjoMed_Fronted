<template>
  <div class="container">
    <Calendar></Calendar>
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue'

export default {
  name: 'AdminView',
  components: {
    Calendar,
}
}
</script>