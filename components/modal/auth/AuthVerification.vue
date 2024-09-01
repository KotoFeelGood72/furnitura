<!-- @format -->

<template>
	<div class="ver_main">
		<div class="ver_head">
			<p>Мы отправим SMS-сообщение с кодом подтверждения</p>
		</div>
		<div class="ver__form">
			<p>Введите код</p>
			<div class="ver_code__inputs">
				<Vue3OtpInput
					v-model="codes"
					:num-inputs="4"
					input-classes="otp-input"
					@on-change="handleOnChange"
					@on-complete="handleOnComplete"
					:placeholder="['*', '*', '*', '*']"
				/>
			</div>
			<p v-if="errorMessage" class="error">{{ errorMessage }}</p>
		</div>
		<div class="ver__timer">
			<span @click="resendCode" :class="{ disabled: timer.value > 0 }">
				Отправить код повторно {{ formattedTime }}
			</span>
		</div>
		<div class="form__notice">
			Нажимая кнопку “Подтвердить номер”, Вы принимаете условия
			<NuxtLink>Программы лояльности</NuxtLink> и обработку персональных данных на
			условиях <NuxtLink>Политики конфиденциальности</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed, onMounted } from "vue";
	import { defineEmits } from "vue";
	import Vue3OtpInput from "vue3-otp-input";

	const codes = ref("");
	const timer = ref(180);
	const errorMessage = ref("");

	const emit = defineEmits([]);

	const formattedTime = computed(() => {
		const minutes = Math.floor(timer.value / 60)
			.toString()
			.padStart(2, "0");
		const seconds = (timer.value % 60).toString().padStart(2, "0");
		return `${minutes}:${seconds}`;
	});

	onMounted(() => {
		startTimer();
	});

	const startTimer = () => {
		const countdown = setInterval(() => {
			if (timer.value > 0) {
				timer.value--;
			} else {
				clearInterval(countdown);
			}
		}, 1000);
	};

	const resendCode = () => {
		if (timer.value === 0) {
			console.log("Повторная отправка кода...");
			errorMessage.value = "";
			codes.value = "";
			timer.value = 180;
			startTimer();
		}
	};

	const handleOnComplete = (value) => {
		if (value !== "1113") {
			errorMessage.value = "Неверный код";
		} else {
			emit("onNext");
			errorMessage.value = "";
		}
	};
</script>

<style scoped lang="scss">
	.ver_head {
		margin-bottom: 3.7rem;
		max-width: 44.3rem;
		p {
			font-size: 2rem;
			color: $gray;
			margin-top: 1.5rem;
		}
	}

	.ver__form {
		& > p {
			font-size: 1.8rem;
			color: $gray;
			margin-bottom: 1.5rem;
			font-family: $font_2;
		}
	}

	.ver_code__inputs {
		@include flex-start;
		gap: 2rem;
		margin-bottom: 1.5rem;
	}

	:deep(.otp-input) {
		@include app;
		border: 0.1rem solid #878787;
		max-width: 4rem;
		@include flex-center;
		height: 4rem;
		font-size: 2rem;
		font-family: $font_2;
		text-align: center;
	}

	.ver__timer {
		font-size: 1.6rem;
		color: $brown;
		cursor: pointer;
		margin-bottom: 3.5rem;

		&.disabled {
			cursor: not-allowed;
			color: #ccc;
		}
	}

	.error {
		color: #b23e00 !important;
		font-size: 1.8rem;
		margin-bottom: 3rem !important;
		font-family: $font_1 !important;
	}

	:deep(.otp-input-container) {
		gap: 1.5rem;
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
