<!-- @format -->

<template>
	<div class="usernew">
		<div class="usernew__form">
			<div class="usernew__input">
				<p>Имя</p>
				<Inputs placeholder="Поддубная Елена" />
			</div>
			<div class="usernew__input">
				<p>E-mail</p>
				<Inputs placeholder="elrnadub@gmail.com" type="email" />
			</div>
			<DefaultBtn
				name="Продолжить"
				type="primary"
				color="brown"
				size="normal"
				@click="nextStep()"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Inputs from "~/components/ui/Inputs.vue";
	import DefaultBtn from "~/components/ui/DefaultBtn.vue";
	import { defineEmits } from "vue";

	const emit = defineEmits(["onNext"]);

	const nextStep = () => {
		// Эмитируем событие 'onNext'
		emit("onNext");
	};
</script>

<style scoped lang="scss">
	.usernew__input {
		margin-bottom: 2.5rem;
		p {
			font-size: 1.8rem;
			font-family: $font_2;
			color: $gray;
			margin-bottom: 1.5rem;
		}
	}
</style>
