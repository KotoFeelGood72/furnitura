<template>
  <div class="quantity">
    <button
      @click="decreaseQuantity"
      class="quantity-btn"
      :disabled="quantity === 1"
    >
      <Icon name="ic:baseline-minus" />
    </button>
    <input
      type="number"
      v-model.number="quantity"
      class="quantity-input"
      min="1"
      @input="emitQuantityChange"
    />
    <button @click="increaseQuantity" class="quantity-btn">
      <Icon name="ic:baseline-plus" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  initialQuantity: number;
}>();

const emit = defineEmits(["updateQuantity"]);

const quantity = ref(props.initialQuantity);

const increaseQuantity = () => {
  quantity.value += 1;
  emitQuantityChange();
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
    emitQuantityChange();
  }
};

const emitQuantityChange = () => {
  emit("updateQuantity", quantity.value);
};

// Синхронизация начального количества при изменении пропсов
watch(
  () => props.initialQuantity,
  (newValue) => {
    quantity.value = newValue;
  }
);
</script>

<style scoped lang="scss">
.quantity {
  @include flex-center;
  max-width: 13.7rem;
  gap: 1rem;

  button {
    min-width: 3.2rem;
    width: 3.2rem;
    height: 3.2rem;
    @include flex-center;
    background-color: $lbrown;
    color: $white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: $brown;
    }
  }
  input {
    @include app;
    min-width: 4rem;
    text-align: center;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
