<template>
  <div class="productsCatalog">
    <SingleProductCard v-for="flower of flowers" :flower="flower"/>
  </div>
</template>

<script>
import SingleProductCard from "./SingleProductCard.vue";

export default {
  components: {SingleProductCard},
  inject: ["flowers"],
}
</script>

<style lang="scss">
  .productsCatalog {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>