<template>
  <div class="container">
    <router-link :to="{ name: 'cart' }">
      <p class="container__link-to-card">cart: {{ CART.length }}</p>
    </router-link>
    <h1>Catalog</h1>
    <div class="filters">
      <v-select
        :productCategories="categories"
        @selectedCategory="sortByCategories"
        :selected="selected"
      />
      <div class="range-slider">
        <p class="range-slider__title">price</p>
        <div class="range-slider__inputs">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            v-model="minPrice"
            @change="setRangeSlider"
          />
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            v-model="maxPrice"
            @change="setRangeSlider"
          />
        </div>
        <div class="range-slider__values">
          <p>{{ minPrice }}</p>
          <p>{{ maxPrice }}</p>
        </div>
      </div>
    </div>
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
    minPrice: 0,
    maxPrice: 1000,
    selected: "Все",
    sortedProducts: [],
  }),
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filterProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_API", "ADD_TO_CART"]),

    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories();
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      // this.sortedProducts = [];
      // this.PRODUCTS.map(function (item) {
        //   if (item.category === category.name) {
          //     vm.sortedProducts.push(item);
      //   }
      // });
      // let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter((item) => {
        return item.price >= this.minPrice && item.price <= this.maxPrice
      })
      if(category) {
        this.selected = category.name;
        this.sortedProducts = this.sortedProducts.filter((item) => {
          return item.price >= this.minPrice && item.price <= this.maxPrice && item.category === category.name
        })
      }
      // if (category) {
      //   this.selected = category.name;
      //   this.sortedProducts = this.sortedProducts.filter((item) => {
      //     return (
      //       item.price >= vm.minPrice &&
      //       item.price <= vm.maxPrice &&
      //       item.category === category.name
      //     );
      //   });
      // } else {
      //   this.selected = category.name;
      //   this.sortedProducts = this.sortedProducts.filter((item) => {
      //     return (
      //       item.price >= vm.minPrice &&
      //       item.price <= vm.maxPrice &&
      //       item.category === category.name
      //     );
      //   });
      // }
    },
  },
  mounted() {
    this.GET_PRODUCTS_API().then((response) => {
      if (response.data) {
        this.sortByCategories();
      }
    });
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
  .filters {
    display: flex;
    .range-slider {
      &__title {
        text-align: center;
        margin: 0 0 20px 0;
      }
      width: 130px;
      margin: auto 16px;
      text-align: center;
      &__inputs {
        position: relative;
        svg,
        input[type="range"] {
          position: absolute;
          left: 0;
          bottom: 0;
        }
        input[type="range"]::-webkit-slider-thumb {
          z-index: 2;
          position: relative;
          // top: 2px;
          // margin-top: -7px;
        }
      }
      &__values {
        display: flex;
        justify-content: space-between;
        p {
          margin: 5px 0 0 0;
        }
      }
    }
  }
  .catalog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>