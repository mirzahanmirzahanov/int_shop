<template>
  <main class="main">
    <home-page></home-page>
  </main>
</template>

<script>
import HomePage from "./views/HomePage.vue";

export default {
  components: {
    HomePage,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #929292;
  .main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
}
</style>
