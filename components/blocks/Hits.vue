

<template>
	<div class="hits">
		<div class="container">
			<div class="hits_main p10">
				<div class="hits__title">
					<h2>{{ title }}</h2>
				</div>
				<ul class="hits_grid">
					<li class="hits_item" v-for="(item, i) in products" :key="`hits-item-${i}`">
						<NuxtLink :to="`/shop/products/${i}`">
							<div class="hits_item__content">
								<span>{{ item.status }}</span>
								<h3>{{ item.title }}</h3>
								<div class="hits_item__price">
									<span>{{ item.price }}</span>
									<span class="item__oldprice">{{ item.oldprice }}</span>
								</div>
							</div>
							<div class="hits_item__img">
								<img :src="item.thumbnail" alt="" />
							</div>
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string
	products: any
}>()
	const hits = ref<any>([
		{
			name: "Бескаркасное кресло Ингви",
			status: "В НАЛИЧИИ",
			price: "2.500",
			img: "/img/hits-0.png",
			id: "hits-0",
		},
		{
			name: "Бескаркасное кресло Империал",
			status: "В НАЛИЧИИ",
			price: "2.500",
			oldprice: " 3.500",
			img: "/img/hits-1.png",
			id: "hits-1",
		},
		{
			name: "Бескаркасное кресло Ингви",
			status: "В НАЛИЧИИ",
			price: "2.500",
			img: "/img/hits-2.png",
			id: "hits-2",
		},
	]);
</script>

<style scoped lang="scss">
	.hits_main {
		margin-top: 5rem;
	}

	.hits__title {
		font-size: 5rem;
		margin-bottom: 4.5rem;
	}

	.hits_grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
		grid-gap: 2rem;
	}

	.hits_item {
		background-color: $light;
		position: relative;
		overflow: hidden;

		&:hover {
			h3 {
				color: $brown;
			}
			&:before {
				transform: scale(1);
				opacity: 0.2;
				visibility: visible;
			}
			img {
				transform: rotate(5deg);
			}
		}
		a {
			@include flex-start;
		}
	}

	.hits_item__content {
		padding: 2.7rem 2.7rem;
		@include flex-space;
		flex-direction: column;
		align-items: flex-start;
		gap: 4.5rem;
		z-index: 2;
		span {
			font-size: 1.2rem;
			color: $brown;
			text-transform: uppercase;
		}

		h3 {
			font-size: 3rem;
			margin-right: -5rem;
			transition: all 0.3s ease-in-out;
		}
	}

	.hits_item__price {
		color: $brown;
		@include flex-start;
		gap: 2rem;
		& > span {
			font-size: 2rem;
			font-family: $font_2;
		}
	}

	.item__oldprice {
		color: $gray !important;
		text-decoration: line-through;
	}

	.hits_item__img {
		@include flex-center;
		width: 25rem;
		z-index: 2;

		img {
			transition: all 0.5s ease-in-out;
			z-index: 2;
			width: 100%;
		}
	}
</style>
