<template>
  <div class="foot">
    <Header></Header>
    <main id="main">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.foot {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
  

