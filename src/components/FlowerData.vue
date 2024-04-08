<template>
    <template v-for="(value, key) in flower" :key="key">
      <template v-if="hasValidData(flower, key)">
        <span>
          <span>{{ toUpperCase(key) }}:</span> <span>{{ numberWithPercentSymbol(value) }}</span>
        </span>
      </template>
    </template>
</template>

<script>
export default {
  props: {
    flower: Object,
  },
  methods: {
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

    hasValidData(flower, key) {
      return flower[key] !== 0 && key !== 'text' && key !== "id";
    },
  }
};
</script>

<style lang="scss">
h2, span {
  display: flex;
  justify-content: space-between;
}
</style>
