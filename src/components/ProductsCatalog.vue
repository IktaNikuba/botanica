<template>
  <div class="productsCatalog">
    <SingleProductCard v-for="(flower, index) of flowers" :key="index" :flower="flower" />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import SingleProductCard from "./SingleProductCard.vue";

export default defineComponent({
  components: {SingleProductCard},
  data() {
    return {
      flowers: [
        {
          name: 'Afgan',
          thc: 20,
          cbd: 2,
          indica: 30,
          sativa: 50,
          ruderalis: 20,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
            "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " +
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
            "mollit anim id est laborum."
        },
        {
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
})
</script>

<style lang="scss">
  .productsCatalog {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>