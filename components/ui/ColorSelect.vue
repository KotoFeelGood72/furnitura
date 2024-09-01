<template>
  <div class="select-color">
    <ul class="products_color_select">
      <li v-for="(color, index) in colors" :key="index">
        <input
          type="radio"
          :id="'color-' + index + '-' + id"
          :value="color"
          v-model="selectedColor"
          @change="updateSelectedColor(color)"
        />
        <label :for="'color-' + index + '-' + id">
          <span :style="{ backgroundColor: colorMap[color] }"></span>
        </label>
      </li>
    </ul>
    <div class="products_color_selected">
      Цвет: <span>{{ selectedColor }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  colors: any;
  id: number;
}>();

const selectedColor = ref(props.colors[0]);
const colorMap: Record<string, string> = {
  Серый: "#5B5E62",
  Темный: "#342F2F",
  Бежевый: "#D8D1B6",
  Молочный: "#EAECD7",
  Зеленый: "#547C51",
  Черный: "#000000",
  "Темно-Серый": "#909090",
};

const updateSelectedColor = (color: string) => {
  selectedColor.value = color;
};
</script>

<style scoped lang="scss">
.products_color_select {
  @include flex-start;
  margin-bottom: 3.5rem;
  gap: 2.1rem;
  li {
    width: 3.5rem;
    height: 3.5rem;
  }

  input {
    display: none;
    &:checked + label {
      border: 0.1rem solid $brown;
      span {
        transform: scale(0.8);
      }
    }
  }

  label {
    width: 100%;
    height: 100%;
    @include flex-center;
    cursor: pointer;
    span {
      transition: all 0.3s ease-in-out;
      width: 100%;
      @include flex-center;
      height: 100%;
    }
  }
}

.products_color_selected {
  margin-bottom: 7rem;
  font-size: 2.4rem;
  font-family: $font_2;
  @include flex-start;
  gap: 0.5rem;
  span {
    color: $brown;
    font-size: 2rem;
    font-family: $font_1;
  }
}
</style>
