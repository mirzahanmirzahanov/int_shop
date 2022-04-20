<template>
  <div class="container">
    <h1>Cart</h1>
    <div class="cart-list">
      <v-cart-item
        v-for="(cart, index) in cart_data"
        :key="cart.article"
        :cart_item_data="cart"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VCartItem from "@/components/VCartItem.vue";

export default {
  components: { VCartItem },
  name: "cart",
  props: {
    cart_data: {
      type: Array,
    },
  },
  methods:{
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    
    },
  }
};
</script>
<style lang="scss">
.container {
  h1 {
    font-size: 20px;
  }
}
</style>