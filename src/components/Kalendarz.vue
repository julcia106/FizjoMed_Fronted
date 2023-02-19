<template>
  <b-container class="container">
    <b-row>
      <b-col cols="4"><b-calendar v-model="value" :date-disabled-fn="dateDisabled" :initial-date="today"
          locale="en"></b-calendar></b-col>
      <b-col cols="8">
        <h1>Zabiegi w dniu {{ value }}</h1>

        <table class="table small table-striped">
          <thead>
            <tr>
              <th></th>
              <th>
                Zabieg
              </th>
              <th>
                Imię i nazwisko
              </th>
              <th>
                Email
              </th>
              <th>
                Numer telefonu
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="value == res.startDate && res.TreatmentName != 'puste'" v-for="res in reservations">
              <td>{{ res.startTime }} - {{ res.endTime }}</td>
              <td>{{ res.TreatmentName }}</td>
              <td>{{ res.client_Name }} {{ res.client_Surname }}</td>
              <td>{{ res.client_Email }}</td>
              <td>{{ res.client_Phone }}</td>
            </tr>
          </tbody>
        </table>
      </b-col>

    </b-row>
  </b-container>

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      reservations: [],
      today: '',
      value: new Date().toISOString().slice(0, 10),
    }
  },
  methods: {
    dateDisabled(ymd, date) {
      const weekday = date.getDay()
      const day = date.getDate()
      return weekday === 0 || weekday === 6 || day === 13
    },
    refreshData() {
      axios.get('http://localhost:5868/api/Reservation')
        .then((response) => {
          this.reservations = response.data;
        })
    }
  },
  mounted: function () {
    this.refreshData();
    this.today = new Date().toISOString().slice(0, 10);
  }
}
</script>

<style scoped>
.container {
  padding-top: 10%;
}
</style>