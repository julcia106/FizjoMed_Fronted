<template>
  <div class="cennik">
      <h1>Cennik</h1>
      <Cennik></Cennik>
      <Footer></Footer>
  </div>
</template>

<script>
import Cennik from '@/components/Cennik.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'CennikView',
  components: {
    Cennik,
    Footer
}
}
</script>

<style scoped>
.cennik {
  padding-top: 20px;
}
</style>

