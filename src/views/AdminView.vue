<template>
  <div class="container">
    <Kalendarz></Kalendarz>
  </div>
</template>

<script>
import Kalendarz from '@/components/Kalendarz.vue'

export default {
  name: 'AdminView',
  components: {
    Kalendarz,
}
}
</script>