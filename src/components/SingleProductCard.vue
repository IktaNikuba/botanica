<template>
  <a class="plant">
    <img class="plant__image" src="/public/img/plant.jpeg" alt="">
    <span v-for="(value, key) in flower" :key="key">
      <template v-if="value !== 0">
        <span>{{ toUpperCase(key) }}:</span> <span>{{ value }}</span>
      </template>
    </span>
    <span>Hybrid: <span>{{ calculateHybridType(flower) }}</span></span>
  </a>
</template>

<script>
export default {
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

    toUpperCase(str) {
      return str.toUpperCase();
    }
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

  h2, span {
    display: flex;
    justify-content: space-between;
  }
}

</style>