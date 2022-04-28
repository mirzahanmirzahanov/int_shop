<template>
  <div class="container">
    <router-link :to="{ name: 'catalog' }">
      <p class="container__link-to-card">Catalog</p>
    </router-link>
    <h2 v-if="!CART.length">No products..</h2>
    <div v-else class="cart-items">
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
    <div class="v-cart__total">
      <p>Total: {{ cartTotalCost }}</p>
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
    cartTotalCost() {
      let result = [];

      for (let item of this.CART) {
        result.push(item.price * item.quantity);
      }

      result = result.reduce((sum, el) => {
        return sum + el;
      }, 0);

      return result;
    },
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
  .cart-items {
    margin: 0 0 120px 0;
  }
  h1 {
    font-size: 20px;
  }
  h2 {
    margin: 30px 0 0 0;
    font-size: 20px;
  }
}

.v-cart__total {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 212, 50);
  // padding: 40px 0;
  height: 100px;
  p {
    font-size: 23px;
  }
}
</style>