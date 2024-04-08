<template>
  <header>
    <the-header />
  </header>

  <main>
    <router-view />
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import ProductsCatalog from "./components/ProductsCatalog.vue";
import SingleProductArticle from "@/components/SingleProductArticle.vue";
import {defineComponent} from "vue";

export default {
  components: {ProductsCatalog, TheHeader, SingleProductArticle},

  data() {
    return {
      flowers: [
        {
          id: 1,
          name: 'AfganAuto',
          thc: 20,
          cbd: 2,
          indica: 60,
          sativa: 20,
          ruderalis: 20,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
            "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " +
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
            "mollit anim id est laborum."
        },
        {
          id: 2,
          name: 'Scunk',
          thc: 20,
          cbd: 2,
          indica: 10,
          sativa: 90,
          ruderalis: 0,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
            "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " +
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
            "mollit anim id est laborum."
        },
        {
          id: 3,
          name: 'Blueberry',
          thc: 25,
          cbd: 0,
          indica: 80,
          sativa: 20,
          ruderalis: 0,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
            "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " +
            "\ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
            "mollit anim id est laborum."
        },
        {
          id: 4,
          name: 'BadGuy',
          thc: 25,
          cbd: 2,
          indica: 50,
          sativa: 50,
          ruderalis: 0,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
            "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " +
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
            "mollit anim id est laborum."
        },
      ],
    };
  },

  provide() {
    return {
      flowers: this.flowers
    }
  },
}

</script>

<style>

</style>
