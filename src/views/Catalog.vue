<template>
  <div class="container">

    <router-link :to="{name: 'cart'}">
      <p class="container__link-to-card">cart: {{ CART.length }}</p>
    </router-link>
    <h1>Catalog</h1>
    <div class="catalog-list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import VCatalogItem from "@/components/VCatalogItem.vue";

export default {
  components: { VCatalogItem },
  name: "catalog",
  data: () => ({}),
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_API();
  },
};
</script>

<style lang="scss">
.container {
  &__link-to-card {
    display: inline-block;
    padding: 20px;
    background: #00d432;
    border-radius: 5px;
    color: #ffffff;
  }
  h1 {
    margin: 30px 0 0 0;
    font-size: 20px;
  }
  .catalog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>