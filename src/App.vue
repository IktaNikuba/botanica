<template>
  <header>
    <TheHeader />
  </header>

  <main>
    <ProductsCatalog />
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import ProductsCatalog from "./components/ProductsCatalog.vue";
import SingleProductArticle from "@/components/SingleProductArticle.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {ProductsCatalog, TheHeader, SingleProductArticle}
})
</script>

<style>

</style>
