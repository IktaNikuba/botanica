  <template>
    <div class="article">
      <img class="article__image" @click="getConsoleLog" src="/img/plant.jpeg" alt="Plant image">
      <flower-data :flower="flower"/>
      <hybrid-type :flower="flower"/>
      <div class="article__text" v-if="flower.text">{{ flower.text }}</div>
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
      name: String,
    },
    data() {
      return {
        flower: this.flowers.find(flower => flower.name.toLowerCase() === this.name),
      }
    },
    methods: {
      getConsoleLog() {
        console.log(this.flower.text);
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

    &__text {
      margin-top: 20px;
    }
  }
  </style>