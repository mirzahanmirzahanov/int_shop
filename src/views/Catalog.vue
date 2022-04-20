<template>
  <div class="container">
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
    ...mapGetters(["PRODUCTS"]),
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

<style lang="scss" scoped>
.container {
  h1 {
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