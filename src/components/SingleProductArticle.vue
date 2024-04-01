<template>
  <div class="article">
    <img class="article__image" src="/img/plant.jpeg" alt="Plant image">
    <FlowerData :flower="flower" class="article__info" />
    <HybridType :flower="flower" class="article__hybrid-type" />
    <a class="article__button-back">Back</a>
  </div>
</template>

<script>
import FlowerData from "@/components/FlowerData.vue";
import HybridType from "@/components/HybridType.vue";
export default {
  name: "SingleProductArticle",
  components: {HybridType, FlowerData},
  props: {
    flower: Object,
  },
}
</script>

<style scoped lang="scss">
article {
  background: burlywood;
}
</style>