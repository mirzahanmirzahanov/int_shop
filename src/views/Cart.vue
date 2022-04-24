<template>
  <div class="container">
    <router-link :to="{ name: 'catalog' }">
      <p class="container__link-to-card">Catalog</p>
    </router-link>
    <h2 v-if="!CART.length">No products..</h2>
    <div v-else>
      <h1>Cart</h1>
      <div class="cart-list">
        <v-cart-item
          v-for="(cart, index) in CART"
          :key="cart.article"
          :cart_item_data="cart"
          @deleteFromCart="deleteFromCart(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VCartItem from "@/components/VCartItem.vue";

export default {
  components: { VCartItem },
  name: "cart",
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  h1 {
    font-size: 20px;
  }
  h2{
    margin: 30px 0 0 0;
    font-size: 20px;
    }
}
</style>