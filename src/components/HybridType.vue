<template>
  <span>Hybrid: <span>{{ calculateHybridType(flower) }}</span></span>
</template>

<script>
export default {
  name: "HybridType",
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

<style>

span {
  display: flex;
  justify-content: space-between;
}
</style>