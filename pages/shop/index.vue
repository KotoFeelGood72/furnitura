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
import { useProductsStoreRefs } from "~/store/useProductsStore";
import ProductsCard from "~/components/card/ProductsCard.vue";

const { products } = useProductsStoreRefs();
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
