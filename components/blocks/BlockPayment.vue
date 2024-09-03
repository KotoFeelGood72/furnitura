<!-- @format -->

<template>
  <div class="payment">
    <div class="payment__address">
      <h3>Выберите способ оплаты</h3>
    </div>
    <div class="payment__method">
      <div
        v-for="method in paymentMethods"
        :key="method.name"
        class="payment__method-item"
      >
        <input
          type="radio"
          :id="method.name"
          v-model="selectedMethod"
          :value="method.name"
        />
        <label :for="method.name">
          <span>{{ method.name }}</span>
          <img v-if="method.logo" :src="method.logo" alt="" />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedMethod = ref("");

const paymentMethods = [
  {
    name: "Оплата картой онлайн или через СБП",
  },
  { name: "Оплатить", logo: "/img/split.png" },
];

// onMounted(() => {
//   if (window.YaPay) {
//     onYaPayLoad();
//   } else {
//     const script = document.createElement("script");
//     script.src = "https://pay.yandex.ru/sdk/v1/pay.js";
//     script.async = true;
//     script.onload = onYaPayLoad;
//     document.head.appendChild(script);
//   }
// });

// function onYaPayLoad() {
//   const YaPay = window.YaPay;

//   const paymentData = {
//     env: YaPay.PaymentEnv.Sandbox,
//     version: 4,
//     currencyCode: YaPay.CurrencyCode.Rub,
//     merchantId: "<YOUR_MERCHANT_ID>",
//     totalAmount: "15980.00",
//     availablePaymentMethods: ["CARD", "SPLIT"],
//   };

//   async function onPayButtonClick() {
//     // Создание заказа и возврат URL на оплату
//   }

//   function onFormOpenError(reason) {
//     console.error(`Payment error — ${reason}`);
//   }

//   YaPay.createSession(paymentData, {
//     onPayButtonClick: onPayButtonClick,
//     onFormOpenError: onFormOpenError,
//   })
//     .then(function (paymentSession) {
//       paymentSession.mountButton(document.querySelector("#button_container"), {
//         type: YaPay.ButtonType.Pay,
//         theme: YaPay.ButtonTheme.Black,
//         width: YaPay.ButtonWidth.Auto,
//       });
//     })
//     .catch(function (err) {
//       console.error("Failed to create payment session:", err);
//     });
// }
</script>

<style scoped lang="scss">
.payment {
  background-color: $white;
  padding: 1.7rem 2.4rem 3.4rem 2.4rem;

  h3 {
    font-size: 3rem;
    margin-bottom: 3rem;
    font-family: $font_2;
    font-weight: 500;
  }
}

.payment__method-item {
  input:checked + label {
    &:after {
      opacity: 1;
      visibility: visible;
    }
  }
  label {
    cursor: pointer;
    @include flex-start;
    position: relative;
    padding-left: 3.1rem;
    font-size: 1.8rem;

    span {
      margin-right: 1.2rem;
    }

    img {
      @include flex-start;
    }
    &:before {
      position: absolute;
      top: 45%;
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
      top: 45%;
      left: 0.3rem;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      content: "";
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
      background-position: center center;
      background-color: $brown;
      border-radius: 100%;
    }
  }

  input {
    display: none;
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
