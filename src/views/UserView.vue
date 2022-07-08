<template>
  <div class="user">
      <h1 class="mt-5">Zarządzanie użytkownikami</h1>
      <User></User>
  </div>
</template>

<script>
import User from '@/components/User.vue'

export default {
  name: 'UserView',
  components: {
    User,
}
}
</script>