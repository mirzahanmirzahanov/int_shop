<template>
  <div class="v-popup-wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{ popupTitle }}</span>
        <i class="material-icons" @click="closePopup"> close </i>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button class="btn" @click="rightBtnAction">{{ rightBtnTitle }}</button>
        <button class="btn close-btn" @click="closePopup">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  data: () => ({}),
  props: {
    rightBtnTitle: {
      type: String,
      default: "ok",
    },
    popupTitle: {
      type: String,
      default: "Popup name",
    },
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    rightBtnAction() {
      this.$emit("rightBtnAction");
    },
  },
  mounted() {
    document.addEventListener("click", (item) => {
      if (item.target === this.$refs["popup_wrapper"]) {
        this.closePopup();
      }
    });
  },
};
</script>

<style lang="scss">
.v-popup-wrapper {
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.v-popup {
  padding: 16px;
  // position: fixed;
  // top: 400px;
  // width: 400px;
  left: 40%;
  background: #fff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 11;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close-btn {
      background: #c90000;
    }
    i {
      cursor: pointer;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>