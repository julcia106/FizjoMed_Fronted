<template>
  <div class="about">
    <Pracownicy></Pracownicy>
    <Footer></Footer>
  </div>
</template>

<script>
import Pracownicy from '@/components/Pracownicy.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'AboutView',
  components: {
    Pracownicy,
    Footer
}
}
</script>