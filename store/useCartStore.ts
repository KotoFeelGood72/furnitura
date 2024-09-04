import { defineStore, storeToRefs } from "pinia";

export const useCartStore = defineStore("carts", {
  state: () => ({
    carts: [] as any,
  }),
  actions: {
    addCart(item: any) {
      console.log(item);
      const existingCartItem = this.carts.find(
        (cart: any) => cart.id === item.id
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        this.carts.push({ ...item, quantity: 1 });
      }
    },
    removeCart(item: any) {
      const existingCartItem = this.carts.find(
        (cart: any) => cart.id === item.id
      );
      if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
          existingCartItem.quantity -= 1;
        } else {
          this.carts = this.carts.filter((cart: any) => cart.id !== item.id);
        }
      }
    },
    updateCartItem(updatedItem: any) {
      const existingCartItem = this.carts.find(
        (cart: any) => cart.id === updatedItem.id
      );
      if (existingCartItem) {
        existingCartItem.quantity =
          updatedItem.quantity || existingCartItem.quantity;
        existingCartItem.color = updatedItem.color || existingCartItem.color;
        existingCartItem.price = updatedItem.price || existingCartItem.price;
      }
    },
    removeCartItem(itemId: string) {
      this.carts = this.carts.filter((cart: any) => cart.id !== itemId);
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});

export const useCartStoreRefs = () => storeToRefs(useCartStore());
