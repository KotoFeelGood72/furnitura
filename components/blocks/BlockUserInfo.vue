<!-- @format -->

<template>
  <div class="userInfo">
    <div class="userInfo__head">
      <h3>Информация о покупателе</h3>
      <p v-if="!isAuth">Авторизуйтесь, чтобы отслеживать свой заказ</p>
    </div>
    <div class="user_toggle__w" v-if="!isAuth">
      <div class="user__toggle">
        <label class="switch">
          <input
            type="checkbox"
            v-model="isAuthorized"
            @change="toggleAuthorization"
          />
          <span class="slider round"></span>
        </label>
        <span>Продолжить без авторизации</span>
      </div>
      <div class="userInfo__variant">
        <div v-if="isAuthorized" class="userInfoForm">
          <div class="userInfoForm__input">
            <p>Имя*</p>
            <Inputs placeholder="Поддубная Елена" />
          </div>
          <div class="userInfoForm__input">
            <p>Телефон*</p>
            <InputPhone
              v-model="userData.phone"
              placeholder="+7 (918) 123 45 67"
            />
          </div>
          <div class="userInfoForm__input">
            <p>E-mail</p>
            <Inputs placeholder="dundub@gmail.com" type="email" />
          </div>
        </div>
        <div v-else class="userInfo_btn__auth">
          <DefaultBtn
            name="Войти или зарегистрироваться"
            type="secondary"
            color="black"
            size="large"
          />
        </div>
      </div>
    </div>
    <div class="userInfoData" v-else>
      <p><strong>Имя:</strong> {{ userData.name }}</p>
      <p><strong>Телефон:</strong> {{ userData.phone }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DefaultBtn from "../ui/DefaultBtn.vue";
import Inputs from "../ui/Inputs.vue";
import InputPhone from "../ui/InputPhone.vue";

const isAuth = ref(false);
const isAuthorized = ref(false);
const userData = ref<any>({
  name: "Константинопольская Кристина",
  phone: "+7 (918) 123 45 67",
});

const toggleAuthorization = () => {
  if (isAuthorized.value) {
    // Simulate fetching user data when authorized
    userData.value = {
      name: "Константинопольская Кристина",
      phone: "+7 (918) 123 45 67",
    };
  } else {
    userData.value = null;
  }
};
</script>

<style scoped lang="scss">
.user__toggle {
  @include flex-start;
  gap: 1.7rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 6.3rem;
  height: 3.4rem;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #b6b6b6;
  transition: 0.4s;
  border-radius: 2rem;
}

.slider:before {
  position: absolute;
  content: "";
  width: 2.4rem;
  height: 2.4rem;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: $white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: $dark;
}

input:checked + .slider:before {
  left: 3.4rem;
}

.userInfo__head {
  h3 {
    font-size: 3rem;
    font-family: $font_2;
    margin-bottom: 2.5rem;
    font-weight: 500;
  }
  p {
    font-size: 1.8rem;
    margin-bottom: 3.5rem;
  }
}

.user__toggle {
  margin-bottom: 5rem;
}

.userInfo_btn__auth {
  display: inline-flex;
}

.userInfoForm {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 53.6rem;

  p {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }

  &:deep(.phone_input) {
    input {
      max-height: 4.8rem;
    }
  }
}

.userInfoData {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  p {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
