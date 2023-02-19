<template>
  <div class="container">

    <div>
      <b-table striped hover :items="items" :fields="fields" :filter="criteriaWord" :filter-function="filterMainTable">
        <template #cell(treatment_price)="data">
          {{ data.item.treatment_price }} zł
        </template>

        <template #cell(duration_minutes)="data">
          {{ data.item.duration_minutes }} min
        </template>

        <template #cell(edit)="data">
          <b-button pill size="sm" variant="info" v-b-modal.modal-lg
            @click="passTreatmentIdAndName(data.item.TreatmentId, data.item.TreatmentName)">
            Umów
          </b-button>
        </template>

      </b-table>
    </div>

    <b-modal id="modal-lg" size="lg" ref="my-modal">
      <template #modal-title>
        Dostępne terminy dla zabiegu: {{ treatmentName }}
      </template>

      <b-row class="pt-2">
        <b-col md="auto" class="my-4">
          <b-calendar v-model="dates.pickedDay" @context="onContext" :initial-date="today" locale="en-US"
            v-on:click="selectFirstRow">
          </b-calendar>
        </b-col>

        <b-col class="mx-4">
          <b-row class="pt-3"></b-row>

          <!-- <b-row class="pt-3">
            <b-form-group label="Wybierz pracownika:" label-for="workerSelector" description="" class="mr-4">
              <b-form-select id="workerSelector" v-model="selectedWorker" :options="worker"></b-form-select>
            </b-form-group>
          </b-row> -->
          <b-row>
            <div style="color: #17a2b8;">
              <h5>Podaj proszę dane kontaktowe: </h5>
            </div>
            <b-form-group class="pr-2">
              <b-form-input v-model="client_Email" type="email" placeholder="Twój Email:" required></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input v-model="client_Phone" placeholder="Twój numer telefonu:" required></b-form-input>
            </b-form-group>
          </b-row>
          <b-row>
            <b-form-group class="pr-2">
              <b-form-input v-model="client_Name" placeholder="Imię" required></b-form-input>
            </b-form-group>

            <b-form-group>
              <b-form-input v-model="client_Surname" placeholder="Nazwisko" required></b-form-input>
            </b-form-group>
          </b-row>
          <b-row>
            <div>

              <div style="color: #17a2b8;">
                <h5>Wybierz godzinę: </h5>
              </div>

            </div>
          </b-row>
          <div>
            <b-table selectable small striped hover :select-mode="selectMode" @row-selected="onRowSelected"
              ref="selectableTable" style="font-size: small;" :items="items_modal" :fields="fields_modal"
              :filter="criteria" :filter-function="filterTable">

              <template #cell(startTime)="data">
                {{ data.item.startTime }} - {{ data.item.endTime }}
              </template>

              <template #cell(selected)="{ rowSelected }">
                <template v-if="rowSelected">
                  <span aria-hidden="true">&check;</span>
                  <span class="sr-only">Selected</span>
                </template>
                <template v-else>
                  <span aria-hidden="true">&nbsp;</span>
                  <span class="sr-only">Not selected</span>
                </template>
              </template>

            </b-table>
            <p>{{ treatmentName }}, dnia: <b>{{ dates.pickedDay }}</b> o godzinie: <b>{{ treatmentStartTime }}</b></p>
          </div>
        </b-col>
        <b-button class="mx-3" block variant="info" @click="createReservation(), hideModal(), showConfirmBox()">
          Rezerwuj
        </b-button>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
  data() {

    const dates = reactive({
      pickedDay: new Date().toISOString().slice(0, 10)
    });

    return {
      today: '',
      client_Email: '',
      client_Name: '',
      client_Surname: '',
      client_Phone: '',
      dates,
      selectedWorker: null,
      criteria: dates,
      criteriaWord: 'puste',
      selectMode: 'single',
      selected: [],
      treatmentId: '',
      treatmentName: '',
      client_id: '',
      worker_id: '',
      treatmentStartTime: '',
      reservation_id: '',
      boxTwo: '',
      confirmBox: '',
      fields: [
        {
          key: 'TreatmentName',
          label: 'Zabieg'
        },
        {
          key: 'treatment_price',
          label: 'Cena'
        },
        {
          key: 'duration_minutes',
          label: 'Czas trwania'
        },
        {
          key: 'edit',
          label: ''
        }

      ],
      items: [],
      fields_modal: [
        {
          key: 'selected',
          label: 'Wybierz godzinę'
        },
        {
          key: 'startTime',
          label: 'Czas'
        }
      ],
      items_modal: [],
      worker: [
        { value: null, text: 'Dowolny pracownik' },
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
          this.items = response.data;
        });
    },
    createReservation() {
      axios.put("http://localhost:5868/api/Reservation", {
        treatment_id: this.treatmentId,
        client_Name: this.client_Name,
        client_Surname: this.client_Surname,
        client_Phone: this.client_Phone,
        client_Email: this.client_Email,
        worker_id: this.worker_id,
        reservation_id: this.reservation_id
      })
        .then((response) => {
          this.refreshData();
        });
    },
    getAvailableReservations() {
      axios.get('http://localhost:5868/api/Reservation/getAvailableReservations')
        .then((response) => {
          this.items_modal = response.data;
        })
    },
    filterTable(row, filter) {
      if (filter.pickedDay == row.startDate && row.treatment_id == '8') {
        return true;
      } else {
        return false;
      }
    },
    filterMainTable(row, filter) {
      if (row.TreatmentName == filter) {
        return false;
      } else {
        return true;
      }
    },
    onRowSelected(items) {
      this.selected = items,

        this.client_id = 1,
        this.worker_id = 2,
        this.reservation_id = this.selected[0].reservation_id,
        this.treatmentStartTime = this.selected[0].startTime
    },
    passTreatmentIdAndName(treatmentId, treatmentName) {
      this.treatmentId = treatmentId,
        this.treatmentName = treatmentName
    },
    selectFirstRow() {
      console.log('123');
      //this.$refs.selectableTable.selectRow(0)
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    showMsgBoxOk() {
      this.boxTwo = ''
      this.$bvModal.msgBoxOk('Gratulacje! Zabieg został zarezerwowany poprawnie. Potwierdzenie zostało wysłane na maila.', {
        title: 'Rezerwacja potwierdzona',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'success',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
        .then(value => {
          this.boxTwo = value
          window.location.reload();
        })
        .catch(err => {
          // An error occurred
        })
    },
    showConfirmBox() {
      this.confirmBox = ''
      const messageVNode = 'Potwierdź proszę czy poniższe dane są poprawne: ' + 'Imie i nazwisko: ' + this.client_Name + ' '+ this.client_Surname + ' ' + 'numer telefonu: ' + this.client_Phone + ' ' + 'adres email: ' + this.client_Email + ' ' + this.treatmentName + ' dnia ' + this.dates.pickedDay + ' o godzinie ' + this.treatmentStartTime
      this.$bvModal.msgBoxConfirm([messageVNode], {
        title: 'Potwierdzenie',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'info',
        okTitle: 'Potwierdzam rezerwację',
        cancelTitle: 'Wróć',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          this.confirmBox = value,
            this.showMsgBoxOk();
        })
        .catch(err => {
          // An error occurred
        })
    }

  },
  mounted: function () {
    this.refreshData();
    this.getAvailableReservations();
    this.today = new Date().toISOString().slice(0, 10);
  }
}
</script>

<style scoped>
.container {
  display: inline-block;
  padding-top: 2%;
  padding-bottom: 7%;
}
</style>