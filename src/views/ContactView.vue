<template>
  <div class="contact">
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'ContactView',
  components: {
    Footer,
    Contact,
  }
}
</script>