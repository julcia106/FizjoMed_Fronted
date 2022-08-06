<template>

  <div class="container">
    <b-table sticky-header :items="items" head-variant="light"></b-table>
  </div>
</template>

<script>
export default {
  name: 'CTA',
  data() {
      return {
        items: [
          { Usługa: 'Wizyta u fizjoterapeuty', Cena: '180 zł' },
          { Usługa: 'Wizyta u osteopaty', Cena: '230 – 320 zł' },
          { Usługa: 'Trening personalny', Cena: '140 zł' },
          { Usługa: 'Taping medyczny', Cena: '50 zł' },
          { Usługa: 'Konsultacja ortopedyczna', Cena: '250 zł' },
          { Usługa: 'Konsultacja ortopedyczna + USG/USG (podwójne)', Cena: '300 zł/280 zł' },
          { Usługa: 'Neurologopeda wizyta (diagnostyczna)', Cena: '210 – 230 zł' },
          { Usługa: 'USG tarczycy, jamy brzusznej, ortopedyczne', Cena: '150 zł' },
          { Usługa: 'Fizykoterapia', Cena: '50 zł' },
          { Usługa: 'Suche igłowanie', Cena: '150 zł' },
          { Usługa: 'Elektrostymulacja', Cena: '50 zł' },
        ]
      }
  }
}
</script>

<style scoped>
.container {
  display: inline-block;
}
</style>