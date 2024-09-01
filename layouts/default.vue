<!-- @format -->

<template>
	<main class="main">
		<Header />
		<div class="page-bg" v-if="modals.auth" @click="closeModal('auth')"></div>
		<div class="content">
			<slot />
		</div>
		<ModalAuth v-if="modals.auth" />
		<Footer />
	</main>
</template>

<script setup lang="ts">
	import ModalAuth from "~/components/modal/ModalAuth.vue";
	import Header from "~/components/shared/Header.vue";
	import Footer from "~/components/shared/Footer.vue";
	import { useModalStoreRefs, useModalStore } from "~/stores/useModalStore";

	const { modals } = useModalStoreRefs();
	const { closeModal } = useModalStore();
</script>

<style scoped lang="scss">
	.page-enter-active,
	.page-leave-active {
		transition: all 0.3s ease-in-out;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
	}

	.page-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(81, 81, 81, 0.164);
		z-index: 99;
	}
</style>
