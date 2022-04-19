<template>
  <div class="container">
    <h1>Cart</h1>
    <div class="cart-list">
      <v-cart-item 
        v-for="cart in cart_data"
        :key="cart.article"
      :cart_item_data="cart" />
    </div>
  </div>
</template>

<script>
import VCartItem from "@/components/VCartItem.vue";

export default {
  components: { VCartItem },
  name: "cart",
  props: {
    cart_data: {
      type: Array,
    },
  },
};
</script>
<style lang="scss">
.container {
  h1 {
    font-size: 20px;
  }
  .cart-list {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
    // align-items: center;
  }
}
</style>