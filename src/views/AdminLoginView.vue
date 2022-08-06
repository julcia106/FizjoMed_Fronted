<template>
  <div class="adminlogin">
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