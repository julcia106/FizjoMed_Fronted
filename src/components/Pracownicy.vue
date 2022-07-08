<template>
  <div class="container">
    <b-container>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="8">
          <div class="text">
            <h1 class="font-weight-light pb-3">O nas</h1>
            <p>Fizjomed to starannie dobrana grupa specjalistów z dr n. med. Filipem Piętą na czele.
              Wszystkich z nas cechuje rozległa wiedza i doświadczenie w zakresie leczenia różnorodnych dolegliwości.
              Tysiące godzin szkoleń, a następnie wspólnej praktyki pozwoliły nam wypracować zgrany zespół i skuteczne
              techniki leczenia.
              Stawiamy silny akcent na dobrą komunikację, wspólne myślenie i szybkość reagowania. </p>

            <p></p>Jesteśmy przekonani,
            że nie
            tylko fachowe podejście, ale także ciepła atmosfera, szacunek i pełne zrozumienie dla Pacjenta wpierają
            proces terapeutyczny.
            Stwarzamy jak najlepsze warunki powrotu do zdrowia i każdej z przyjmowanych osób dostarczamy życzliwego
            wsparcia.
            Dużą wagę przykładamy do precyzyjnej diagnostyki, jasnego informowania Pacjentów o przebiegu terapii,
            rzetelnego
            monitorowania jej postępów, a także umiejętnego zwiększania motywacji do zdrowienia.</p>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="8">
          <div class="text">
          <h1 class="font-weight-light pb-2">Poznaj nasz zaspół</h1>
          </div>
        </b-col>
        <b-col></b-col>
        </b-row>
        <b-row>
        <b-card-group deck>
          <b-card title="Katarzyna Sokół"
            img-src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            img-alt="Image" img-top>
              <b-card-text>
                Lekarz medycyny, neonatolog. W Fizjomed Prywatne Centrum Osteopatii i Fizjoterapii wykonuje USG bioderek dzieci.
              </b-card-text>
          </b-card>
          <b-card title="Alicja Markocka"
            img-src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            img-alt="Image" img-top>
            <b-card-text>
              Neurologopeda. W Fizjomed prowadzi konsultacje diagnostyczne i indywidualne terapie dzieci do 2-go roku
              życia,
              u których obserwuje się trudności w zakresie nabywania mowy i komunikacji.
            </b-card-text>
          </b-card>
          <b-card title="Michał Szpak"
            img-src="https://images.unsplash.com/photo-1618088129969-bcb0c051985e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            img-alt="Image" img-top>
              <b-card-text>
                Ortopeda, traumatolog. Specjalizuje się w schorzeniach ortopedycznych w szczególności stawów kolanowych, biodrowych, barkowych i stopy, schorzeniach kręgosłupa i traumatologii narządu ruchu oraz badaniu USG układu kostno – stawowego.
              </b-card-text>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Pracownicy',
}
</script>

<style scoped>
.container {
  padding-top: 3%;
}

.text {
  text-align: justify;
  text-justify: inter-word;
  padding-bottom: 3%;
}
</style>