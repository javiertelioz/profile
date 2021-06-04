<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
