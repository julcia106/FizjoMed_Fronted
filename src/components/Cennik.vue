<template>

<div class="container">
<table class="table table-striped">
  <thead>
    <tr>
      <th>
        Zabieg
      </th>
      <th style="width: 60%">
        Opis zabiegu
      </th>
      <th style="width:  8.33%">
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
      <td>{{ treatment.treatment_description }}</td>
      <td>{{ treatment.treatment_price }} zł</td>
      <td >{{ treatment.duration_minutes }} min</td>
    </tr>
  </tbody>
</table>
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
      treatment_description: "",
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