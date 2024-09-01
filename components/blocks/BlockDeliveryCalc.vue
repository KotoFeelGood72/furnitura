<!-- @format -->

<template>
  <div class="delivery">
    <div class="delivery__address">
      <h3>Доставка</h3>
      <p>Адрес</p>
      <input
        type="text"
        v-model="query"
        @input="fetchSuggestions"
        placeholder="Введите адрес"
      />
      <ul class="delivery_siqqestion" v-if="suggestions.length">
        <li
          v-for="suggestion in suggestions"
          :key="suggestion"
          @click="selectSuggestion(suggestion)"
        >
          {{ suggestion.value }}
        </li>
      </ul>
    </div>
    <div class="delivery__method">
      <p>Способ доставки</p>
      <div
        v-for="method in deliveryMethods"
        :key="method.name"
        class="delivery__method-item"
      >
        <input
          type="radio"
          :id="method.name"
          v-model="selectedMethod"
          :value="method.name"
        />
        <label :for="method.name">
          <img :src="method.logo" alt="" />
          {{ method.name }} {{ method.price }} ₽
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const query = ref("");
const suggestions = ref([]);
const selectedAddress = ref("");
const selectedMethod = ref("");

const deliveryMethods = [
  { name: "Курьерская служба EMS", price: 520, logo: "/img/ems-logo.png" },
  { name: "Яндекс доставка", price: 1020, logo: "/img/yandex-logo.png" },
];

const fetchSuggestions = async () => {
  if (query.value.length > 1) {
    try {
      const response = await axios.post(
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
        {
          query: query.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token cab538d49b7cbc9ae1d154721028bbbbb0130b57`,
          },
        }
      );
      suggestions.value = response.data.suggestions;
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  } else {
    suggestions.value = [];
  }
};

const selectSuggestion = (suggestion: any) => {
  query.value = suggestion.value;
  selectedAddress.value = suggestion.value;
  suggestions.value = [];
};
</script>

<style scoped lang="scss">
.delivery {
  background-color: $white;
  padding: 1.7rem 2.4rem 3.4rem 2.4rem;

  h3 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .delivery__address {
    max-width: 53.6rem;
    margin-bottom: 4rem;
    position: relative;
    & > p {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      font-family: $font_2;
    }

    input {
      @include app;
      width: 100%;
      min-height: 4.8rem;
      border: 0.1rem solid #b2b2b2;
      padding: 1.2rem 1.5rem;
      font-size: 1.8rem;
    }
  }
}

.delivery_siqqestion {
  position: absolute;
  border: 0.1rem solid #b2b2b2;
  padding: 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: $white;
  max-height: 30rem;
  overflow-y: auto;
  width: 100%;

  /* Стилизация скроллбара */
  ::-webkit-scrollbar {
    width: 8px; /* Ширина скроллбара */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Цвет фона скроллбара */
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888; /* Цвет ползунка скроллбара */
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Цвет ползунка при наведении */
  }

  /* Для Firefox */
  scrollbar-width: thin; /* Толщина скроллбара */
  scrollbar-color: #888 #f1f1f1; /* Цвет ползунка и фона */
}

.delivery__method {
  p {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    color: $dark;
    font-family: $font_2;
  }
}

.delivery__method-item {
  label {
    @include flex-start;
    position: relative;
    padding-left: 3.1rem;
    &:before {
      position: absolute;
      top: 50%;
      left: 0%;
      width: 1.6rem;
      height: 1.6rem;
      border: 0.1rem solid $brown;
      border-radius: 100%;
      content: "";
      transform: translateY(-50%);
    }
    &:after {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1.6rem;
      height: 1.6rem;
      content: "";
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24'%3E%3Cpath fill='%23946b55' d='M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47'/%3E%3C/svg%3E");
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }
  }

  input {
    display: none;
  }
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}
</style>
