<template>
  <div class="container">
    <b-container class="bv-example-row">
      <b-row>

        <b-card-group deck>
          <b-card title="Głowa"
            img-src="https://images.unsplash.com/photo-1542848284-8afa78a08ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            img-alt="Image" img-top>
            <b-card-text>
              Bóle głowy<br>
              Bóle karku<br>
              Zawroty głowy<br>
              Ograniczenie ruchomości<br>
            </b-card-text>

            <!-- <b-button href="#" variant="primary">Zarejestruj</b-button> -->
          </b-card>

          <b-card title="Kręgosłup"
            img-src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            img-alt="Image" img-top>
            <b-card-text>
              Bóle kręgosłupa<br>
Wady postawy<br>
Ograniczenie ruchomości<br>
Zaburzenia czucia<br>
            </b-card-text>

            <!-- <b-button href="#" variant="primary">Zarejestruj</b-button> -->
          </b-card>

          <b-card title="Kończyna górna"
            img-src="https://images.unsplash.com/photo-1591302974398-10cb8ccb44c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            img-alt="Image" img-top>
            <b-card-text>
              Staw barkowy<br>
Staw łokciowy<br>
Nadgarstek i dłoń<br>
Zaburzenia czucia<br>
            </b-card-text>

            <!-- <b-button href="#" variant="primary">Zarejestruj</b-button> -->
          </b-card>
        </b-card-group>
      </b-row>
      <b-row class="pt-5">
        <b-card-group deck>
          <b-card title="Kończyna dolna"
            img-src="https://images.unsplash.com/photo-1540206276207-3af25c08abc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            img-alt="Image" img-top>
            <b-card-text>
              Staw biodrowy<br>
Staw kolanowy<br>
Staw skokowy i stopa<br>
Wady postawy<br>
            </b-card-text>

            <!-- <b-button href="#" variant="primary">Zarejestruj</b-button> -->
          </b-card>
          <b-card title="Kontuzje, urazy"
            img-src="https://images.unsplash.com/photo-1615798580793-e96188b628b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            img-alt="Image" img-top>
            <b-card-text>
              Stany pourazowe<br>
Stany pooperacyjne<br>
            </b-card-text>

            <!-- <b-button href="#" variant="primary">Zarejestruj</b-button> -->
          </b-card>
          <b-card title="Dla przyszłych mam"
            img-src="https://images.unsplash.com/photo-1538678867871-8a43e7487746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
            img-alt="Image" img-top>
            <b-card-text>
              Bóle kręgosłupa<br>
Przygotowanie do porodu<br>
Bóle kończyn<br>
Nietrzymanie moczu<br>
Mobilizacja blizny poporodowej<br>
Powrót do formy po porodzie<br>
            </b-card-text>

            <!-- <b-button href="#" variant="primary">Zarejestruj</b-button> -->
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Oferta',
}
</script>

<style scoped>
.container {
  padding: 2%;
}
</style>