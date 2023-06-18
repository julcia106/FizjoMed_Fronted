<template>
  <div class="about">
    <Workers></Workers>
    <Footer></Footer>
  </div>
</template>

<script>
import Workers from '@/components/Workers.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'AboutView',
  components: {
    Workers,
    Footer
}
}
</script>