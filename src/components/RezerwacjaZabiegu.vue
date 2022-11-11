<template>

  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            Zabieg
          </th>
          <th>
            Cena
          </th>
          <th>
            Czas trwania
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="treatment in treatments">
          <td>{{ treatment.TreatmentName }}</td>
          <td>{{ treatment.treatment_price }} zł</td>
          <td>{{ treatment.duration_minutes }} min</td>
          <td>
            <b-button pill size="sm" variant="info" v-b-modal.modal-lg>
              Umów
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <b-modal id="modal-lg" size="lg" title="Wybierz datę i godzinę">
      <b-row class="pt-2">
        <b-col md="auto" class="my-4">
          <b-calendar v-model="day" @context="onContext" :date-disabled-fn="dateDisabled" :initial-date="today"
            locale="en-US"></b-calendar>
        </b-col>

        <b-col class="my-4 mx-4">
          <b-row class="pt-5"></b-row>
          <b-row class="pt-3">
            <b-form-group label="Wybierz godzinę:" label-for="hourSelector" description="" class="mr-4">
              <b-form-select id="hourSelector" v-model="selectedHour" :options="options"></b-form-select>
            </b-form-group>
          </b-row>
          <b-row class="pt-3">
            <b-form-group label="Wybierz pracownika:" label-for="workerSelector" description="" class="mr-4">
              <b-form-select id="workerSelector" v-model="selectedWorker" :options="worker"></b-form-select>
            </b-form-group>
          </b-row>
          <b-row>
            <div>
              <p>Elektroterapia, dnia: <b>{{ day }}</b></p>
              <p>O godzinie : <b>{{ selectedHour }}</b></p>
              <p>Wykonana przez : <b>{{ selectedWorker }}</b></p>
            </div>

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
                </tr>
              </thead>
              <tbody>
                <tr v-if="day == res.startDate && res.TreatmentName == 'puste'" v-for="res in newReservations">
                  <td>{{ res.startTime }} - {{ res.endTime }}</td>
                  <td>{{ res.TreatmentName }}</td>
                  <td>{{ res.FirstName }} {{ res.LastName }}</td>
                </tr>
              </tbody>
            </table>
          </b-row>
        </b-col>
        <b-button class="mx-3" block variant="info">Rezerwuj</b-button>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      day: new Date().toISOString().slice(0, 10),
      today: '',
      newReservations: [],
      treatments: [],
      TreatmentName: "",
      TreatmentId: 0,
      treatment_price: 0,
      duration_minutes: 0,
      // day: '',
      selectedHour: '',
      selectedWorker: '',
      options: [
        { value: '8:00', text: '8:00' },
        { value: '9:00', text: '9:00' },
        { value: '10:00', text: '10:00' },
        { value: '11:00', text: '11:00' },
        { value: '12:00', text: '12:00' },
        { value: '13:00', text: '13:00' },
        { value: '14:00', text: '14:00' },
        { value: { C: '15:00' }, text: '15:00' },
        { value: '16:00', text: '16:00', disabled: true }
      ],
      worker: [
        { value: 1, text: 'Katarzyna Sokół' },
        { value: 2, text: 'Alicja Markocka' },
        { value: 'Michał Szpak', text: 'Michał Szpak' },
      ]
    }
  },
  methods: {
    refreshData() {
      axios.get('http://localhost:5868/api/' + "treatment")
        .then((response) => {
          this.treatments = response.data;
        });
    },
    newReservation() {
      axios.get('http://localhost:5868/api/Treatment/NewReservation')
        .then((response) => {
          this.newReservations = response.data;
        })
    },
    dateDisabled(ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`) and
      // disable days that fall on the 13th of the month
      const weekday = date.getDay()
      const day = date.getDate()

      let temp = this.newReservation.startDate;
      // Return `true` if the date should be disabled
      return day === 13
    }
  },
  mounted: function () {
    this.refreshData();
    this.newReservation();
    this.today = new Date().toISOString().slice(0, 10);
  }
}
</script>

<style scoped>
.container {
  display: inline-block;
}
</style>