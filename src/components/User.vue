<template>
  <div>
    <div class="container">
      <b-button variant="primary" v-b-modal.addUser class="m-2 button" @click="addClick()">Zarejestruj się</b-button>

      <b-modal id="addUser">
        <div class="input-group mb-3">
          <span class="input-group-text">Imię</span>
          <input type="text" class="form-control" v-model="FirstName">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Nazwisko</span>
          <input type="text" class="form-control" v-model="LastName">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Email</span>
          <input type="text" class="form-control" v-model="EmailAdress">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Numer telefonu</span>
          <input type="text" class="form-control" v-model="PhoneNumber">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Login</span>
          <input type="text" class="form-control" v-model="LoginName">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Hasło</span>
          <input type="text" class="form-control" v-model="PersonalPassword">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Data dołączenia</span>
          <input type="date" class="form-control" v-model="DateOfJoining">
        </div>
        <b-button type="button" @click="createClick()">
          Create
        </b-button>
      </b-modal>

      <b-modal id="editUser">
        <div class="input-group mb-3">
          <span class="input-group-text">Imię</span>
          <input type="text" class="form-control" v-model="FirstName">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Nazwisko</span>
          <input type="text" class="form-control" v-model="LastName">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Email</span>
          <input type="text" class="form-control" v-model="EmailAdress">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Numer telefonu</span>
          <input type="text" class="form-control" v-model="PhoneNumber">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Login</span>
          <input type="text" class="form-control" v-model="LoginName">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Hasło</span>
          <input type="text" class="form-control" v-model="PersonalPassword">
        </div>
        <b-button variant="primary" @click="updateClick()">
          Update
        </b-button>
      </b-modal>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              Imię
            </th>
            <th>
              Nazwisko
            </th>
            <th>
              Email
            </th>
            <th>
              Telefon
            </th>
            <th>
              Hasło
            </th>
            <th>
              Login
            </th>
            <th>
              Data dołączenia
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="dep in clients">
            <td>{{ dep.Id }}</td>
            <td>{{ dep.FirstName }}</td>
            <td>{{ dep.LastName }}</td>
            <td>{{ dep.EmailAdress }}</td>
            <td>{{ dep.PhoneNumber }}</td>
            <td>{{ dep.PersonalPassword }}</td>
            <td>{{ dep.LoginName }}</td>
            <td>{{ dep.DateOfJoining }}</td>
            <td>

              <b-button variant="primary" v-b-modal.editUser class="m-2" @click="editClick(dep)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </b-button>

              <b-button variant="primary" @click="deleteClick(dep.Id)" class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      clients: [],
      Id: 0,
      FirstName: "",
      LastName: "",
      EmailAdress: "",
      PhoneNumber: "",
      PersonalPassword: "",
      LoginName: "",
      DateOfJoining: "",
      FirstNameFilter: "",
      ClientIdFilter: "",
      ClientWithoutFilter: []
    }
  },
  methods: {
    refreshData() {
      axios.get('http://localhost:5868/api/' + "client")
        .then((response) => {
          this.clients = response.data;
        });
    },
    addClick() {
      this.Id = 0;
      this.FirstName = "";
      this.LastName = "";
      this.EmailAdress = "";
      this.PhoneNumber = "";
      this.PersonalPassword = "";
      this.LoginName = "";
      this.DateOfJoining = "";
    },
    editClick(dep) {
      this.Id = dep.Id;
      this.FirstName = dep.FirstName;
      this.LastName = dep.LastName;
      this.EmailAdress = dep.EmailAdress;
      this.PhoneNumber = dep.PhoneNumber;
      this.PersonalPassword = dep.PersonalPassword;
      this.LoginName = dep.LoginName;
      this.DateOfJoining = dep.DateOfJoining;
    },
    createClick() {
      axios.post('http://localhost:5868/api/' + "client", {
        FirstName: this.FirstName,
        LastName: this.LastName,
        EmailAdress: this.EmailAdress,
        PhoneNumber: this.PhoneNumber,
        PersonalPassword: this.PersonalPassword,
        LoginName: this.LoginName,
        DateOfJoining: this.DateOfJoining,
      })
        .then((response) => {
          this.refreshData();
          alert(response.data);
        });
    },
    updateClick() {
      axios.put('http://localhost:5868/api/' + "client", {
        Id: this.Id,
        FirstName: this.FirstName,
        LastName: this.LastName,
        EmailAdress: this.EmailAdress,
        PhoneNumber: this.PhoneNumber,
        PersonalPassword: this.PersonalPassword,
        LoginName: this.LoginName,
        DateOfJoining: this.DateOfJoining,
      })
        .then((response) => {
          this.refreshData();
          alert(response.data);
        });
    },
    deleteClick(id) {
      if (!confirm("Czy na pewno chcesz usunąć użytkownika?")) {
        return;
      }
      axios.delete('http://localhost:5868/api/' + "client/" + id)
        .then((response) => {
          this.refreshData();
          alert(response.data);
        });

    },
    FilterFn() {
      var ClientIdFilter = this.ClientIdFilter;
      var FirstNameFilter = this.FirstNameFilter;

      this.clients = this.ClientWithoutFilter.filter(
        function (el) {
          return el.Id.toString().toLowerCase().includes(
            ClientIdFilter.toString().trim().toLowerCase()
          ) &&
            el.FirstName.toString().toLowerCase().includes(
              FirstNameFilter.toString().trim().toLowerCase()
            )
        });
    },
    sortResult(prop, asc) {
      this.clients = this.ClientWithoutFilter.sort(function (a, b) {
        if (asc) {
          return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        }
        else {
          return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
      })
    }

  },
  mounted: function () {
    this.refreshData();
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
}

.button {
  width: 200px;
  margin: -20px -50px;
  position: relative;
  top: 50%;
  left: 40%;
}
</style>