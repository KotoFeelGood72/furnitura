<template>
  <div class="single">
    <div class="products">
      <div class="container">
        <Breadcrumbs :crumbs="breadcrumbs" />
        <div class="products_main">
          <div class="products_slider">
            <Swiper
              :slides-per-view="1"
              :space-between="20"
              :modules="[Navigation, Pagination]"
              :navigation="{
                prevEl: `.products_prev`,
                nextEl: `.products_next`,
              }"
              @slideChange="updateCurrentSlide"
            >
              <SwiperSlide
                v-for="(item, i) in aboutGallery"
                :key="'products-item-slide-' + i"
              >
                <img :src="item" alt="" />
              </SwiperSlide>
            </Swiper>
            <div class="products_navigation">
              <div class="products_prev">
                <Icon name="bi:chevron-left" size="30" />
              </div>
              <div class="products-pagination">
                <span class="fraction"
                  >{{ currentSlide }}
                  <div class="total">/{{ totalSlides }}</div></span
                >
              </div>
              <div class="products_next">
                <Icon name="bi:chevron-right" size="30" />
              </div>
            </div>
          </div>
          <div class="products_content">
            <div class="products_content__head">
              <h3>Бескаркасное кресло Империал</h3>
              <div class="products_art">Артикул 1122.14</div>
            </div>
            <div class="products_content_bottom">
              <ColorSelect :colors="colors" :id="1" />
              <div class="products_prices">
                <p>2.500 ₽</p>
                <AddToCart name="В корзину" :center="true" />
                <Qty :initialQuantity="1" />
              </div>
              <ul class="products__nav">
                <li>
                  <a href="#"
                    ><p>Характеристики</p>
                    <Icon name="fluent:chevron-right-28-regular" />
                  </a>
                </li>
                <li>
                  <a href="#"
                    ><p>Отзывы</p>
                    <Icon name="fluent:chevron-right-28-regular" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SingleAbout :gallery="aboutGallery" />
    <SingleCharacter />
    <SingleIdeas :gallery="aboutGallery" />
  </div>
</template>

<script setup lang="ts">
import SingleCharacter from "~/components/single/SingleCharacter.vue";
import SingleIdeas from "~/components/single/SingleIdeas.vue";
import SingleAbout from "~/components/single/SingleAbout.vue";
import ColorSelect from "~/components/ui/ColorSelect.vue";
import AddToCart from "~/components/ui/AddToCart.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import Breadcrumbs from "~/components/ui/Breadcrumbs.vue";
const currentSlide = ref(1);
const totalSlides = ref(3);
const breadcrumbs = ref([
  { text: "Каталог", href: "/shop" },
  { text: "Бескаркасное кресло империал" },
]);

const updateCurrentSlide = (swiper: any) => {
  currentSlide.value = swiper.realIndex + 1;
};
const selectedColor = ref("Черный");

const colors = [
  "Серый",
  "Темный",
  "Бежевый",
  "Молочный",
  "Зеленый",
  "Черный",
  "Темно-Серый",
];

const aboutGallery = ref<any>([
  "/img/about-1.jpg",
  "/img/about-2.jpg",
  "/img/about-3.jpg",
  "/img/about-4.jpg",
]);

const colorMap: Record<string, string> = {
  "#000000": "Черный",
  "#FFFFFF": "Белый",
  "#D3D3D3": "Серый",
  "#00008B": "Темно-синий",
  "#008000": "Зеленый",
  "#FFD700": "Золотой",
  "#8B4513": "Коричневый",
};
const selectedColorName = computed(() => {
  return colorMap[selectedColor.value] || "Молочный";
});

const updateSelectedColor = (color: string) => {
  selectedColor.value = color;
};
</script>

<style scoped lang="scss">
.products {
  padding-top: calc($header + 4.6rem);
}

.products_main {
  @include flex-start;
  gap: 16.5rem;
  align-items: flex-start;
}

.products_slider {
  max-width: 99.5rem;
  margin-bottom: 3rem;

  :deep(.swiper-slide) {
    height: 78.4rem;
    // height: 100%;
    @include flex-center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.products_content__head {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 5.6rem;
  h3 {
    font-size: 4rem;
  }
  .products_art {
    color: $brown;
  }
}

.products_prices {
  font-size: 4rem;
  font-family: $font_2;
  margin-bottom: 8rem;
  p {
    margin-bottom: 7rem;
  }
}

.products__nav {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  li {
    &:first-child {
      border-bottom: 0.1rem solid #d5d5d5;
      padding-bottom: 2rem;
    }
    a {
      @include flex-space;
      color: $brown;
      font-size: 2.4rem;
      font-family: $font_2;
    }
  }
}

.products_navigation {
  @include flex-space;
  margin-top: 3rem;

  .products_prev,
  .products_next {
    color: $brown;
    cursor: pointer;
  }
  div {
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
</style>
