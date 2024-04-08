<template>
  <router-link :to="`/flower/${flower.name.toLowerCase()}`" class="plant">
    <img class="plant__image" src="/img/plant.jpeg" alt="">
    <flower-data :flower = "flower" />
    <hybrid-type :flower = "flower" />
  </router-link>
</template>

<script>
import FlowerData from "@/components/FlowerData.vue";
import HybridType from "@/components/HybridType.vue";
export default {
  components: {FlowerData, HybridType},
  props: {
    flower: Object,
  },
};
</script>

<style lang="scss">

.plant {
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 310px;
  max-height: 500px;
  cursor: pointer;

  &__image {
    max-width: 300px;
  }
}

</style>