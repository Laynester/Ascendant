<script>
import "./assets/scss/theme.scss";
import Header from "./assets/components/static/Header";
import Navbar from "./assets/components/static/navbar";
import Footer from "./assets/components/static/Footer";
import Modals from "./assets/components/modals/modal";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    Modals,
  },
};
</script>
<template>
  <div class="app h-100 d-flex flex-column bg-horizon-2">
    <Header />
    <Navbar />
    <b-container class="py-4">
      <router-view />
    </b-container>
    <Footer />
    <Modals />
  </div>
</template>
