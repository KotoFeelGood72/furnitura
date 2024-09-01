<template>
  <div class="home">
    <HeroSlider :slides="slides" />
    <Hits />
    <RecomendedBlock />
    <ActionBlock />
  </div>
</template>

<script setup lang="ts">
import Hits from "~/components/blocks/Hits.vue";
import ActionBlock from "~/components/blocks/ActionBlock.vue";
import RecomendedBlock from "~/components/blocks/RecomendedBlock.vue";
import HeroSlider from "~/components/blocks/HeroSlider.vue";

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
