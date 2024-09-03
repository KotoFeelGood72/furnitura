<template>
  <div class="home" v-if="home">
    <HeroSlider :slides="home.slider" />
    <Hits :title="home.title_hit" :products="featuredProducts"/>
    <RecomendedBlock />
    <ActionBlock />
  </div>
</template>

<script setup lang="ts">
import Hits from "~/components/blocks/Hits.vue";
import ActionBlock from "~/components/blocks/ActionBlock.vue";
import RecomendedBlock from "~/components/blocks/RecomendedBlock.vue";
import HeroSlider from "~/components/blocks/HeroSlider.vue";
import { useProductsStoreRefs } from "~/stores/useProductsStore";
const home = ref<any>(null);
const { products } = useProductsStoreRefs()

const featuredProducts = computed(() => {
  if(products.value) {

    return products.value.filter((product: any) => product.is_featured === true);
  }
});

async function fetchHome() {
  try {
    const { $main } = useNuxtApp();
    const response = await $main.get("/home.json");
    home.value = response.data.acf;
  } catch (error) {
  } finally {
  }
}

onMounted(async () => {
  await fetchHome();
});

const slides = ref<any>([
  {
    headtitle: "23-28 мая",
    title: "Супер комфортная мебель только для Вас",
    subtitle: "Дополнительная скидка только по промокоду",
    img: "/img/hero.png",
  },
  {
    headtitle: "23-28 мая",
    title: "Супер комфортная мебель только для Вас",
    subtitle: "Дополнительная скидка только по промокоду",
    img: "/img/hero.png",
  },
  {
    headtitle: "23-28 мая",
    title: "Супер комфортная мебель только для Вас",
    subtitle: "Дополнительная скидка только по промокоду",
    img: "/img/hero.png",
  },
  {
    headtitle: "23-28 мая",
    title: "Супер комфортная мебель только для Вас",
    subtitle: "Дополнительная скидка только по промокоду",
    img: "/img/hero.png",
  },
]);
</script>

<style scoped lang="scss"></style>
