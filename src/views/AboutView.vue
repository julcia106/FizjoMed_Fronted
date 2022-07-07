<template>
  <div class="about">
    <h1>Strona o nas</h1>
    <Cards></Cards>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'

export default {
  name: 'AboutView',
  components: {
    Cards,
}
}
</script>