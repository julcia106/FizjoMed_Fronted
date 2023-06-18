<template>
  <div class="priceList">
    <h1>Cennik</h1>
    <PriceList></PriceList>
    <Footer></Footer>
  </div>
</template>

<script>
import PriceList from '@/components/PriceList.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PriceListView',
  components: {
    PriceList,
    Footer
  }
}
</script>

<style scoped>
.priceList {
  padding-top: 20px;
}
</style>

