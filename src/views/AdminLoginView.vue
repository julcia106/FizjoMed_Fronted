<template>
  <div class="container">
      <h1>Logowanie Administratora</h1>
      <AdminLogin></AdminLogin>
      <Footer></Footer>
  </div>
</template>

<script>
import AdminLogin from '@/components/AdminLogin.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'AdminLoginView',
  components: {
    AdminLogin,
    Footer,
}
}
</script>

<style scoped>
.container {
  padding-top: 20px;
}
</style>
