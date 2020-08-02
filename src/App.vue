<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Nav,
    Footer
  }
})
export default class App extends Vue {}
</script>

<template>
  <div>
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>
