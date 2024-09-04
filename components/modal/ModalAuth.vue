<!-- @format -->

<template>
	<div class="auth">
		<div class="auth__head">
			<h3>Войти или зарегистрироваться</h3>
			<div class="close-btn" @click="closeModal('auth')">
				<IconBtn icon="simple-line-icons:close" size="34" @click="handleClose" />
			</div>
		</div>
		<div class="auth_main">
			<AuthNew @onNext="handleNext" v-if="!showVerification" />
			<AuthVerification
				v-if="showVerification && !showPhoneForm"
				@onNext="showPhoneForm = !showPhoneForm"
			/>
			<PhoneForm v-if="showPhoneForm" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import IconBtn from "../ui/IconBtn.vue";
	import AuthNew from "./auth/AuthNew.vue";
	import AuthVerification from "./auth/AuthVerification.vue";
	import PhoneForm from "./auth/PhoneForm.vue";
	import { useModalStore } from "~/store/useModalStore";

	const showVerification = ref(false);
	const showPhoneForm = ref(false);

	const { closeModal } = useModalStore();

	const handleNext = () => {
		showVerification.value = true;
	};
</script>

<style scoped lang="scss">
	.auth {
		position: fixed;
		max-width: 66rem;
		background-color: $white;
		top: 0;
		// top: $header;
		right: 0;
		z-index: 101;
		height: 100%;
		padding: 4.5rem 3rem;
	}

	.auth__head {
		@include flex-space;
		gap: 5rem;
		font-size: 3rem;
		margin-bottom: 3rem;
		h3 {
			font-family: $font_2;
			font-weight: 400;
		}
	}

	.close-btn {
		color: $gray;
		&:hover {
			color: $dark;
		}
	}
</style>
