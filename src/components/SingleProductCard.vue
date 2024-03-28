<template>
  <a class="plant">
    <img class="plant__image" src="/img/plant.jpeg" alt="">
    <FlowerData :flower = "flower" />
    <span>Hybrid: <span>{{ calculateHybridType(flower) }}</span></span>
  </a>
</template>

<script>
import FlowerData from "@/components/FlowerData.vue";
export default {
  components: {FlowerData},

  props: {
    flower: Object,
  },

  methods: {
    calculateHybridType(flower) {
      if (flower.ruderalis > 0) {
        return 'Autoflower';
      } else if (flower.sativa > flower.indica) {
        return 'Sativa-dominant';
      } else if (flower.indica > flower.sativa) {
        return 'Indica-dominant';
      } else {
        return 'Balanced';
      }
    },
  }
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