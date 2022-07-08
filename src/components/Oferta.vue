<template>
<div class="container">
  <b-card title="Głowa" body-class="text-center" header-tag="nav">
    <template #header>
      <b-nav card-header tabs>
        <b-nav-item active>Głowa</b-nav-item>
        <b-nav-item>Kręgosłup</b-nav-item>
        <b-nav-item>Kończyna górna</b-nav-item>
        <b-nav-item>Kończyna dolna</b-nav-item>
        <b-nav-item>Kontuzje, urazy</b-nav-item>
      </b-nav>
    </template>

    <b-card-text>
      <p>Bóle głowy</p>
      <p>Bóle karku</p>
      <p>Zawroty głowy</p>
      <p>Zawroty głowy</p>
<p>Ograniczenie ruchomości</p>
    </b-card-text>

    <b-button variant="primary">Zarejestruj</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'Oferta',
}
</script>

<style scoped>
.container{
  padding: 5%;
}
</style>