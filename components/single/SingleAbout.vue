<!-- @format -->

<template>
	<div class="about">
		<div class="container">
			<div class="about_main">
				<div class="about_head">
					<h2>О товаре</h2>
					<p>
						Бескаркасное кресло – это современное решение для комфортного отдыха, которое
						отличается отсутствием жесткого каркаса. Его конструкция основана на мягком
						наполнителе, заключенном в прочную обивку.
					</p>
				</div>
				<ul class="about_grid">
					<li class="about_item" v-for="(item, i) in gallery" :key="'about-item-' + i">
						<a :href="item">
							<img :src="item" alt="" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { defineProps } from "vue";

	const props = defineProps<{
		gallery: any;
	}>();
</script>

<style scoped lang="scss">
	.about {
		background-color: #fdfdff;
	}

	.about_main {
		padding: 5rem 0 10rem 0;
	}

	.about_head {
		margin-bottom: 4rem;
		h2 {
			font-size: 4rem;
			margin-bottom: 3px;
		}

		p {
			max-width: 110rem;
			color: $gray;
		}
	}

	.about_grid {
		@include flex-start;
		flex-wrap: wrap;
	}

	.about_item {
		&:nth-child(1) {
			max-width: 63.2rem;
		}

		&:nth-child(2) {
			max-width: 56rem;
		}
		&:nth-child(3) {
			max-width: 56rem;
		}
	}
</style>
