<template>
  <div class="home-page">
    <catalog />
    <cart 
      v-if="CART.length" 
      :cart_data="CART"
    />
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

import Cart from "./Cart.vue";
import Catalog from "./Catalog.vue";

export default {
  components: { Catalog, Cart },
  data:() =>([]),
  computed:{
    ...mapGetters([
      'CART'
    ])
  }
};
</script>

<style>
</style>