import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: null as any,
  }),
  actions: {
    async getAllProducts() {
      try {
        const { $main } = useNuxtApp();
        const response = await $main.get("/all-products.json");
        this.products = response.data;
      } catch (error) {}
    },
  },
  persist: true,
});

export const useProductsStoreRefs = () => storeToRefs(useProductsStore());
