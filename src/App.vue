<template>
  <main class="main">
    <router-view></router-view>
  </main>
  <cart />
</template>

<script>
import Cart from "./views/Cart.vue";
export default {
  components: { Cart },
};
</script>

<style lang="scss">
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
