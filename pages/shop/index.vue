<template>
  <div class="shop">
    <ShopHead />
    <div class="container">
      <ul class="products_list p10">
        <li
          class="products_item"
          v-for="item in products"
          :key="'products-item' + item.id"
        >
          <ProductsCard :products="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShopHead from "~/components/head/ShopHead.vue";
import ProductsCard from "~/components/card/ProductsCard.vue";

const products = ref<any>([
  {
    title: "Бескаркасное кресло Империал",
    txt: "Бескаркасное кресло – это современное решение для комфортного отдыха, которое отличается отсутствием жесткого каркаса. Его конструкция основана на мягком наполнителе, заключенном в прочную обивку.",
    gallery: [
      "/img/products-1.jpg",
      "/img/products-1.jpg",
      "/img/products-1.jpg",
      "/img/products-1.jpg",
    ],
    colors: [
      "Серый",
      "Темный",
      "Бежевый",
      "Молочный",
      "Зеленый",
      "Черный",
      "Темно-Серый",
    ],
    price: "2500",
    slug: "products-212s1",
    id: "pdo213",
  },
  {
    title: "Бескаркасное кресло Ингви",
    txt: "Бескаркасное кресло – это современное решение для комфортного отдыха, которое отличается отсутствием жесткого каркаса. Его конструкция основана на мягком наполнителе, заключенном в прочную обивку.",
    gallery: [
      "/img/products-2.jpg",
      "/img/products-2.jpg",
      "/img/products-2.jpg",
      "/img/products-2.jpg",
    ],
    colors: [
      "Серый",
      "Темный",
      "Бежевый",
      "Молочный",
      "Зеленый",
      "Черный",
      "Темно-Серый",
    ],
    price: "2500",
    slug: "products-212ass1",
    id: "pdoqwwq213",
  },
  {
    title: "Бескаркасное кресло Империал 100/100 см",
    txt: "Бескаркасное кресло – это современное решение для комфортного отдыха, которое отличается отсутствием жесткого каркаса. Его конструкция основана на мягком наполнителе, заключенном в прочную обивку.",
    gallery: [
      "/img/products-3.jpg",
      "/img/products-3.jpg",
      "/img/products-3.jpg",
      "/img/products-3.jpg",
    ],
    colors: [
      "Серый",
      "Темный",
      "Бежевый",
      "Молочный",
      "Зеленый",
      "Черный",
      "Темно-Серый",
    ],
    price: "2500",
    slug: "products-21wq21",
    id: "pdo2szs13",
  },
  {
    title: "Бескаркасный диван Комфорт",
    txt: "Бескаркасное кресло – это современное решение для комфортного отдыха, которое отличается отсутствием жесткого каркаса. Его конструкция основана на мягком наполнителе, заключенном в прочную обивку.",
    gallery: [
      "/img/products-4.jpg",
      "/img/products-4.jpg",
      "/img/products-4.jpg",
      "/img/products-4.jpg",
    ],
    colors: [
      "Серый",
      "Темный",
      "Бежевый",
      "Молочный",
      "Зеленый",
      "Черный",
      "Темно-Серый",
    ],
    price: "2500",
    slug: "products-2sa121",
    id: "pdo2sa13",
  },
]);
</script>

<style scoped lang="scss">
.products_list {
  li {
    &:not(:last-child) {
      margin-bottom: 10rem;
    }

    &:nth-child(even) {
      :deep(.products_slider) {
        order: 1;
      }

      :deep(.products_content) {
        order: 0;
      }
    }
  }
}
</style>
