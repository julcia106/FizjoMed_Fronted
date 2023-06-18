<template>
  <div class="container">
    <div>
      <b-form @submit.prevent="onSubmit" v-if="show">
        <error v-if="error" :error="error"></error>
        <b-form-group id="input-group-1" label="Login:" label-for="input-1">
          <b-form-input id="input-1" type="text" v-model="form.LoginName" placeholder="Login" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Hasło:" label-for="input-2">
          <b-form-input id="input-2" type="password" v-model="form.AdminPassword" placeholder="Hasło"
            required></b-form-input>
        </b-form-group>

        <b-button type="submit" class="button" variant="info">Zaloguj</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import store from '@/store/index.js';
import router from '../router/index.js'
import error from './Error.vue'

export default {
  name: 'Login',
  components: {
    error
  },
  data() {
    return {
      form: {
        LoginName: '',
        AdminPassword: '',
      },
      error: '',
      show: true
    }
  },
  computed: {
    isAdminTest() { return store.state.isAdmin }
  },
  methods: {

    onSubmit() {
      axios.put('http://localhost:5868/api/Auth/Login', {
        LoginName: this.form.LoginName,
        AdminPassword: this.form.AdminPassword
      })
        .then(response => {
          var isAdmin = response.data;

          if (isAdmin === true) {
            alert("Zalogowano!");
            store.state.isAdmin = true;
            //this.isAdminTest = true;
            router.push({ name: 'admin' })
          }
          else if (isAdmin === false) {
            this.error = 'Błędny login lub hasło.'
            this.form.LoginName = ''
            this.form.AdminPassword = ''
          }
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          //console.log(store.state.isAdmin);
        });
    },
  }
}
</script>

<style scoped>
.container {
  width: 40%;
  padding-top: 100px;
  text-align: left;
}

.button {
  width: 100%;
}
</style>


