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
    <div class="v-cart-item__quantity"></div>
    <button class="btn">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
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

  &__name {
  }

  &__article {
  }

  &__category {
  }
}
.btn {

}
</style>