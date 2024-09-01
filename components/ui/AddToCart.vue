<template>
  <div
    class="button"
    :class="['button', isColorSheme, isType, isSize, { center: isCenter }]"
  >
    <div class="btn-icon" v-if="icon">
      <Icon name="custom:cart-white" size="26" />
    </div>
    <p>{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
const props = withDefaults(
  defineProps<{
    type?: "secondary" | "primary";
    color?: "gray" | "brown" | "light" | "white";
    size?: "small" | "medium" | "large";
    name: string;
    icon?: string;
    center?: boolean;
  }>(),
  {
    type: "secondary",
    color: "light",
    name: "Купить",
  }
);

const isColorSheme = computed(() => props.color);
const isType = computed(() => props.type);
const isSize = computed(() => props.size);
const isCenter = computed(() => props.center);
</script>

<style scoped lang="scss">
.button {
  @include flex-start;
  background-color: $lbrown;
  padding: 2rem 6.9rem;
  color: $white;
  gap: 1rem;
  font-family: $font_2;
  font-size: 2.4rem;
  cursor: pointer;

  &.center {
    justify-content: center;
  }
}

.btn-icon {
  @include flex-center;
}
</style>
