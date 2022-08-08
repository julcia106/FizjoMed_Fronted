<template>
  <b-container class="pt-5 pb-5">
    <b-row>
      <b-col class="pl-0"><img
          src="https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80">
      </b-col>
      <b-col cols="7">
        <h1 class="font-weight-light">Witamy w Fizjomedzie</h1>
        <h4>Prywatnym Centrum Rehabilitacji</h4>
        <p class="mt-4">
          Fizjomed to miejsce, w którym nieprzerwanie od 2003 roku otaczamy troskliwą opieką całe pokolenia rodzin.
          Naszymi pacjentami są osoby w różnym wieku od niemowląt po seniorów.
          Lata doświadczeń i praktyki pozwoliły nam wyspecjalizować się w przywracaniu organizmowi utraconej równowagi,
          wykorzystując techniki z zakresu osteopatii i fizjoterapii. </p>

        <p>Chcąc zapewnić jak najbardziej kompleksową opiekę naszym pacjentom umożliwiamy skorzystanie z dodatkowych
          usług
          specjalistów z zakresu neurochirurgii, ortopedii czy diagnostyki obrazowej USG (USG ortopedyczne, tarczycy,
          jamy brzusznej).
          Dzięki wsparciu z ich strony mamy możliwość szybkiego reagowania i wspierania procesu leczenia. Aktualnie w
          naszym centrum pacjenci
          mogą skorzystać z masażu jako formy wspierającej powrót do zdrowia i sprawności lub działającej
          profilaktycznie.</p>

        <p>Nie zapominamy również o najmłodszych podopiecznych. Oprócz osteopatii i fizjoterapii dziecięcej metodą
          NDT-Bobath,
          w naszym centrum rodzice mogą wykonać badanie USG bioderek niemowląt. Od 2020 roku prowadzimy rehabilitację
          domową w
          ramach wizyt domowych dla niemowląt i małych dzieci. Stworzyliśmy koncepcję FIZJOMED EAT, która zakłada
          kompleksową opiekę i
          wsparcie dla rodzin i dzieci mających trudności w przyjmowaniu pokarmów.</p>

        <b-button variant="info">
          <router-link style="text-decoration: none;
          color: inherit" to="/rezerwacjazabiegu">Zarezerwuj termin
          </router-link>
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'Jumbotron',
}
</script>

<style scoped>
</style>