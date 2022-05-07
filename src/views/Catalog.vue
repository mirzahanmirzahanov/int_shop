<template>
  <div class="container">
    <router-link :to="{ name: 'cart' }">
      <p class="container__link-to-card">cart: {{ CART.length }}</p>
    </router-link>
    <h1>Catalog</h1>
    <v-select
      :productCategories="categories"
      @selectedCategory="sortByCategories"
      :selected="selected"
    />
    <div class="catalog-list">
      <v-catalog-item
        v-for="product in filterProducts"
        :key="product.article"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VSelect from "@/components/VSelect.vue";
import VCatalogItem from "@/components/VCatalogItem.vue";

export default {
  components: { VCatalogItem, VSelect },
  name: "catalog",
  data: () => ({
    categories: [
      { name: "Все", value: "ALL" },
      { name: "Мужские", value: "м" },
      { name: "Женские", value: "ж" },
    ],
    selected: "Все",
    sortedProducts: [],
  }),
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filterProducts(){
      if(this.sortedProducts.length){
        return this.sortedProducts
      } else{
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      this.selected = category.name;
      this.sortedProducts = []
      // vm - изменение контекста на уровень выше для .map
      // (.map имеет свой собственный контекст,
      // поэтому нужно его поднять до data(), чтобы получить 
      // доступ к массиву sortedProducts)
      let vm = this
      this.PRODUCTS.map(function (item) {
        if (item.category === category.name) {
          vm.sortedProducts.push(item)
        }
      });
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