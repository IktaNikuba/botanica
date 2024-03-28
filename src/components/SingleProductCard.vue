<template>
  <a class="plant">
    <img class="plant__image" src="/img/plant.jpeg" alt="">
    <template v-if="hasValidData(flower)">
      <template v-for="(value, key) in flower" :key="key">
        <span v-if="key !== 'text'">
          <span>{{ toUpperCase(key) }}:</span> <span>{{ numberWithPercentSymbol(value) }}</span>
        </span>
      </template>
    </template>
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
    },

    numberWithPercentSymbol(value) {
      if ((value instanceof Number || typeof value === 'number') && !isNaN(value)) {
        return value = value.toString() + '%';
      } else {
        return value;
      }
    },

    hasValidData(flower) {
      for (const key in flower) {
        if (flower.hasOwnProperty(key) && flower[key] !== 0 && key !== 'text') {
          return true;
        }
      }
      return false;
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

  h2, span {
    display: flex;
    justify-content: space-between;
  }
}

</style>