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
        },
        {
          name: 'Scunk',
          thc: 20,
          cbd: 2,
          indica: 10,
          sativa: 90,
          ruderalis: 0,
        },
      ],
    };
  },
})
</script>

<template>
 <div class="productsCatalog">
   <SingleProductCard v-for="(flower, index) of flowers" :key="index" :flower="flower" />
 </div>
</template>

<style lang="scss">
  .productsCatalog {
    display: flex;
    gap: 16px;
  }
</style>