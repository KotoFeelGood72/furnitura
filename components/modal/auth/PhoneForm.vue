<!-- @format -->

<template>
  <div class="form">
    <p>Мы отправим SMS-сообщение с кодом подтверждения</p>
    <div class="form__main">
      <div class="form_input">
        <span>Телефон</span>
        <InputPhone v-model="phone" placeholder="Введите номер телефона" />
      </div>
      <div class="form_btn">
        <DefaultBtn
          name="Подтвердить номер"
          type="primary"
          color="brown"
          size="normal"
        />
      </div>
      <div class="form__notice">
        Нажимая кнопку “Подтвердить номер”, Вы принимаете условия
        <NuxtLink>Программы лояльности</NuxtLink> и обработку персональных
        данных на условиях <NuxtLink>Политики конфиденциальности</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputPhone from "~/components/ui/InputPhone.vue";
import DefaultBtn from "~/components/ui/DefaultBtn.vue";

const phone = ref<any>();
</script>

<style scoped lang="scss">
.form {
  padding-top: 2rem;
  & > p {
    font-size: 2rem;
    color: $gray;
    max-width: 44.3rem;
    margin-bottom: 3.5rem;
  }
}

.form_input {
  margin-bottom: 2.5rem;
  span {
    display: block;
    margin-bottom: 1.5rem;
    color: $gray;
    font-family: $font_2;
  }
}

.form_btn {
  margin-bottom: 3.5rem;
}

.form__notice {
  font-size: 1.4rem;
  color: #9e9e9e;
  max-width: 44.3rem;
  a {
    color: #4d7dec;
  }
}
</style>
