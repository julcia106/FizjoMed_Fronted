<template>
  <div class="cennik">
      <h1>Cennik</h1>
      <CTA></CTA>
      <Footer></Footer>
  </div>
</template>

<script>
import CTA from '@/components/CTA.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'CennikView',
  components: {
    CTA,
    Footer
}
}
</script>

<style scoped>
.cennik {
  padding-top: 20px;
}
</style>

