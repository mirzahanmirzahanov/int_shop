<template>
  <div class="v-catalog-item">
    <v-popup
      v-if="isPopupVisible"
      @closePopup="closeInfoPopup"
      rightBtnTitle="Add to cart"
      :popupTitle="productData.name"
      @rightBtnAction="addToCart"
    >
      <div class="v-catalog-item__image">
        <img :src="require('../assets/images/' + productData.image)" alt="" />
      </div>
      <div>
        <div class="v-catalog-item__price">
          <p>{{ productData.price }}</p>
        </div>
        <div class="v-catalog-item__article">
          <p>{{ productData.article }}</p>
        </div>
        <div class="v-catalog-item__category">
          <p>{{ productData.category }}</p>
        </div>
      </div>
    </v-popup>

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
    <div class="v-catalog-item__buttons">
      <button @click="addToCart" class="btn">Add to cart</button>
      <button class="btn btn-info" @click="showPopupInfo">Show info</button>
    </div>
  </div>
</template>

<script>
import VPopup from "./VPopup.vue";

export default {
  components: { VPopup },
  name: "v-catalog-item",
  data: () => ({
    isPopupVisible: false,
  }),
  props: {
    productData: {
      type: Object,
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.productData);
    },
    showPopupInfo() {
      this.isPopupVisible = true;
    },
    closeInfoPopup() {
      this.isPopupVisible = false;
    },
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

  // &__name {
  // }

  // &__article {
  // }

  &__category {
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    .btn-info {
      background: #c7c7c7;
    }
  }
}
</style>