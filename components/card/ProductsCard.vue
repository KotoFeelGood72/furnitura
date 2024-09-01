<template>
  <div class="products">
    <div :class="`products_slider products_slider_${products.id}`">
      <Swiper
        :slides-per-view="1"
        :space-between="20"
        :modules="[Navigation, Pagination]"
        :navigation="{
          prevEl: `.products_prev_${products.id}`,
          nextEl: `.products_next_${products.id}`,
        }"
        @slideChange="updateCurrentSlide"
      >
        <SwiperSlide
          v-for="(item, i) in products.gallery"
          :key="'products-item-slide-' + item.id"
        >
          <img :src="item" alt="" />
        </SwiperSlide>
      </Swiper>
      <div class="products_navigation">
        <div :class="`products_prev products_prev_${products.id}`">
          <Icon name="bi:chevron-left" size="30" />
        </div>
        <div class="products-pagination">
          <span class="fraction">
            {{ currentSlide }}
            <div class="total">/{{ totalSlides }}</div>
          </span>
        </div>
        <div :class="`products_next products_next_${products.id}`">
          <Icon name="bi:chevron-right" size="30" />
        </div>
      </div>
    </div>
    <div class="products_content">
      <div class="products_content__head">
        <h3>{{ products.title }}</h3>
        <div class="products_description">{{ products.txt }}</div>
        <NuxtLink :to="`/shop/${products.slug}`">Подробнее о товаре</NuxtLink>
      </div>
      <div class="products_content_bottom">
        <ul class="products_color_select">
          <li v-for="(color, index) in products.colors" :key="index">
            <input
              type="radio"
              :id="'color-' + index + '-' + products.id"
              :value="color"
              v-model="selectedColor"
              @change="updateSelectedColor(color)"
            />
            <label :for="'color-' + index + '-' + products.id">
              <span :style="{ backgroundColor: colorMap[color] }"></span>
            </label>
          </li>
        </ul>
        <div class="products_color_selected">
          Цвет: <span>{{ selectedColor }}</span>
        </div>
        <div class="products_prices">
          <p>{{ products.price }} ₽</p>
          <div class="products_prices__right">
            <AddToCart name="В корзину" icon="custom:cart" />
            <Qty :initialQuantity="1" v-if="false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import AddToCart from "../ui/AddToCart.vue";
import Qty from "../ui/Qty.vue";

import { withDefaults, defineProps } from "vue";
import { ref, computed } from "vue";

const props = withDefaults(
  defineProps<{
    products: any;
  }>(),
  {
    products: null,
  }
);

const currentSlide = ref(1);
const totalSlides = ref(props.products.gallery.length);

const updateCurrentSlide = (swiper: any) => {
  currentSlide.value = swiper.realIndex + 1;
};
const selectedColor = ref(props.products.colors[0]);
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
.products {
  @include flex-start;
  gap: 16.5rem;
}

.products_slider {
  max-width: 74.5rem;
  position: relative;

  .swiper-slide {
    @include flex-center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.products_navigation {
  @include flex-space;
  margin-top: 3rem;

  div {
    cursor: pointer;
    @include flex-center;
  }
}

.fraction {
  font-size: 2.4rem;
  @include flex-center;
  font-family: $font_2;
}
.total {
  font-size: 2rem;
  color: #ababab;
  padding-left: 0.5rem;
}

.products_content__head {
  margin-bottom: 8rem;
  h3 {
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  a {
    color: $brown;
    font-size: 2.4rem;
    font-family: $font_2;
    text-decoration: underline;
    text-underline-position: under;
    display: inline-flex;
    &:hover {
      text-decoration: none;
    }
  }
}

.products_description {
  margin-bottom: 3.5rem;
  color: $gray;
}

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

.products_prices {
  @include flex-start;
  gap: 10rem;
  p {
    font-size: 4rem;
    font-family: $font_2;
  }
}

.products_prices__right {
  @include flex-end;
}
</style>
