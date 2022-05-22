<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../assets/images/' + cart_item_data.image)"
    />
    <div class="v-cart-item__info">
      <p class="v-cart-item__name">
        {{ cart_item_data.name }}
      </p>
      <p class="v-cart-item__price">
        {{ cart_item_data.price }}
      </p>
    </div>
    <div class="v-cart-item__quantity">
      <p>quantity:</p>
      <p>
        <span @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span @click="incrementItem">+</span>
      </p>
    </div>
    <button class="btn close-btn" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  data: () => [],
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart", this.cart_item_data);
    },
    incrementItem(){
      this.$emit("increment");
    },
    decrementItem(){
      this.$emit("decrement");
    },
  },
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  &__image {
    max-width: 100px;
    img {
      width: 100%;
    }
  }

    .close-btn {
      background: #c90000;
    }
  // &__name {
  // }

  // &__article {
  // }

  // &__category {
    // }

  &__quantity {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>