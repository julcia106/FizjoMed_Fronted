<template>
  <div class="container">
      <h1>Logowanie Administratora</h1>
      <AdminLogin></AdminLogin>
  </div>
</template>

<script>
import AdminLogin from '@/components/AdminLogin.vue'

export default {
  name: 'AdminLoginView',
  components: {
    AdminLogin,
}
}
</script>

<style scoped>
.container {
  padding-top: 20px;
}
</style>
