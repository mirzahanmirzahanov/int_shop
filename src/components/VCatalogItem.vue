<template>
  <div class="v-catalog-item">
    <div class="v-catalog-item__image">
      <img :src="require('../assets/images/' + productData.image)" alt="" />
    </div>
    <div class="v-catalog-item__price">
      <p>{{ productData.price }}</p>
    </div>
    <div class="v-catalog-item__name">
      <p>{{ productData.name }}</p>
    </div>
    <!-- <div class="v-catalog-item__article">
      <p>{{ productData.article }}</p>
    </div> -->
    <div class="v-catalog-item__category">
      <p>{{ productData.category }}</p>
    </div>
    <button @click="addToCart" class="btn">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    productData: {
      type: Object,
    },
  },
  methods: {
    addToCart(){
      this.$emit('addToCart', this.productData)
    }
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  margin: 15px;
  &__image {
    max-width: 300px;
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