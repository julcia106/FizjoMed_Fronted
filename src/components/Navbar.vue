<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand v-if="isAdminTest === false" href="#">Fizjoterapia</b-navbar-brand>
    <b-navbar-brand v-if="isAdminTest === true" href="#">Panel Administratora</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-if="isAdminTest === false"><router-link to="/">Start</router-link></b-nav-item>
        <b-nav-item v-if="isAdminTest === false"><router-link to="/about">O nas</router-link></b-nav-item>
        <b-nav-item v-if="isAdminTest === false"><router-link to="/oferta">Oferta</router-link></b-nav-item>
        <b-nav-item v-if="isAdminTest === false"><router-link to="/cennik">Cennik</router-link></b-nav-item>
        <b-nav-item v-if="isAdminTest === false"><router-link to="/rezerwacjazabiegu">Rezerwacja</router-link></b-nav-item>
        <b-nav-item v-if="isAdminTest === false"><router-link to="/kontakt">Kontakt</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Szukaj</b-button>
        </b-nav-form>

        <b-nav-item-dropdown class="pl-3 pr-3" right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em> Administrator </em>
          </template>
          <b-dropdown-item v-if="isAdminTest === false"><router-link to="/adminlogin">Logowanie</router-link></b-dropdown-item>
          <b-dropdown-item v-if="isAdminTest === true"><router-link to="/admin">Kalendarz</router-link></b-dropdown-item>
          <b-dropdown-item v-if="isAdminTest === true"><router-link to="/zabiegi">Zarządzaj zabiegami</router-link></b-dropdown-item>
          <b-dropdown-item v-if="isAdminTest === true"><router-link to="/user">Użytkownicy</router-link></b-dropdown-item>
          <b-dropdown-item v-if="isAdminTest === true" @click="logout">Wyloguj</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import store from '@/store/index.js';
import router from '../router/index.js'

export default {
  data(){
    return{
      isAdminTest,
    }
  },
  computed: {
    isAdminTest() {return store.state.isAdmin}
  },
  methods: {
    logout(){
      store.state.isAdmin = false;
      router.push({name: 'home'}) 
    }
  },
}
</script>

<style scoped>
li a {
    text-decoration: none;
    color: inherit;
}
</style>