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
            <b-button pill size="sm" variant="info" v-b-modal.modal-1>
              Umów
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
    <b-modal id="modal-1" title="Wybierz datę i godzinę">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      treatments: [],
      TreatmentName: "",
      TreatmentId: 0,
      treatment_price: 0,
      duration_minutes: 0,
    }
  },
  methods: {
    refreshData() {
      axios.get('http://localhost:5868/api/' + "treatment")
        .then((response) => {
          this.treatments = response.data;
        });
    },
  },
  mounted: function () {
    this.refreshData();
  }
}
</script>

<style scoped>
.container {
  display: inline-block;
}
</style>