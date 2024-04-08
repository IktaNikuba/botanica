  <template>
    <div class="article">
      <img class="article__image" @click="getConsoleLog" src="/img/plant.jpeg" alt="Plant image">
      <flower-data :flower="flower"/>
      <hybrid-type :flower="flower"/>
      <router-link to="/" class="article__button-back">Back</router-link>
    </div>
  </template>

  <script>
  import FlowerData from "@/components/FlowerData.vue";
  import HybridType from "@/components/HybridType.vue";
  export default {
    name: "SingleProductArticle",
    components: {FlowerData, HybridType},
    inject: ["flowers"],
    props: {
      id: String,
    },
    data() {
      return {
        flower: this.flowers[parseInt(this.id - 1)],
      }
    },
    methods: {
      getConsoleLog() {
        console.log(this.$route.params)
      }
    }
  }
  </script>

  <style scoped lang="scss">
  .article {
    background-color: #1b4008;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__button-back {
      margin-top: 30px;
      font-size: 30px;
    }
  }
  </style>