<!-- @format -->

<template>
	<div class="rent">
		<PageHead :data="head" page="rent" />
		<div class="rent_desc">
			<div class="container">
				<div class="rentdesc_main">
					<div class="rentdesc__img">
						<img src="/img/rent-desc.png" alt="" />
					</div>
					<div class="rentdesc__content">
						<ul>
							<li>
								<p>Кому это подойдет</p>
								<span
									>Наши кресла-мешки предназначены для всех, кто хочет сделать свое
									мероприятие особенным.
								</span>
							</li>
							<li>
								<p>Наши предложения</p>
								<span
									>Мы готовы предоставить до 200 кресел-мешков в прокат для вашего события
									и это не предел — мы всегда готовы предложить больше!
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="price">
			<div class="container">
				<div class="price_main">
					<div class="price__content">
						<h2>Стоимость аренды</h2>
						<ul>
							<li>
								<div class="price-icon">
									<img src="@/assets/img/fruit.svg" alt="" />
								</div>
								<p>До <span>10</span> штук — <span>500</span> руб/шт/сутки</p>
							</li>
							<li>
								<div class="price-icon">
									<img src="@/assets/img/fruit.svg" alt="" />
								</div>
								<p><span>10-19</span> штук — <span>450</span> руб/шт/сутки</p>
							</li>
							<li>
								<div class="price-icon">
									<img src="@/assets/img/fruit.svg" alt="" />
								</div>
								<p><span>20-29</span> штук — <span>400</span> руб/шт/сутки</p>
							</li>
							<li>
								<div class="price-icon">
									<img src="@/assets/img/fruit.svg" alt="" />
								</div>
								<p><span>80</span> и более — <span>350</span> руб/шт/сутки</p>
							</li>
						</ul>
						<div class="price_notice">Длительная аренда — еще выгоднее!</div>
					</div>
					<div class="price_img">
						<img src="@/assets/img/price.png" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="colors">
			<div class="container">
				<div class="colors_main">
					<div class="colors_head">
						<h3>Цветовая палитра</h3>
						<p>Выберите из множества цветов</p>
					</div>
					<div class="colors_slder__w">
						<div class="color_slider">
							<div class="colors_slider">
								<Swiper
									:slides-per-view="4"
									:space-between="20"
									:modules="[Navigation]"
									:navigation="{
										prevEl: `.colors_prev`,
										nextEl: `.colors_next`,
									}"
								>
									<SwiperSlide
										v-for="(item, i) in colorsSlides"
										:key="'colors-item-slide-' + i"
									>
										<div class="colors_slide">
											<div class="color_slide__img">
												<img :src="item.img" alt="" />
											</div>
											<div class="colors_slide__txt" v-html="item.name"></div>
										</div>
									</SwiperSlide>
								</Swiper>
								<div class="colors_navigation">
									<div class="colors_prev">
										<Icon name="custom:color-arrow" size="40" />
									</div>
									<div class="colors_next">
										<Icon name="custom:color-arrow" size="40" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="conditions">
			<div class="container">
				<div class="conditions_main">
					<h3>Условия аренды пуфов – проще простого</h3>
					<ul class="conditions_list">
						<li class="conditions_item">
							<div class="conditions_item__img">
								<img src="/img/cond-0.png" alt="" />
							</div>
							<p>Никаких залогов и сложных условий</p>
						</li>
						<li class="conditions_item">
							<div class="conditions_item__img">
								<img src="/img/cond-1.png" alt="" />
							</div>
							<p>Работаем по договору — все четко и прозрачно</p>
						</li>
						<li class="conditions_item">
							<div class="conditions_item__img">
								<img src="/img/cond-2.png" alt="" />
							</div>
							<p>Наличная или безналичная оплата</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="rentxt">
			<div class="container">
				<div class="rentxt__main">
					<div class="rentxt__row">
						<h3>Почему нужно взять именно наши кресла-мешки в аренду?</h3>
						<ul>
							<li>
								<p>Максимальный комфорт</p>
								<span>Размер, подходящий для взрослых, обеспечит полное удобство</span>
							</li>
							<li>
								<p>Максимальный комфорт</p>
								<span>Размер, подходящий для взрослых, обеспечит полное удобство</span>
							</li>
							<li>
								<p>Максимальный комфорт</p>
								<span>Размер, подходящий для взрослых, обеспечит полное удобство</span>
							</li>
							<li>
								<p>Универсальность</p>
								<span
									>Используйте их как в помещении, так и на улице — наши кресла не боятся
									воды!</span
								>
							</li>
							<li>
								<p>Брендирование</p>
								<span
									>Создайте уникальный стиль вашего мероприятия с помощью брендирования
									внешних чехлов</span
								>
							</li>
						</ul>
					</div>
					<div class="rentxt__row">
						<h3>Дополнительные услуги</h3>
						<ul>
							<li>
								<p>Доставка под ключ</p>
								<span
									>Мы доставим кресла-мешки прямо на место вашего мероприятия и расставим
									их так, чтобы все выглядело идеально.
								</span>
							</li>
							<li>
								<p>Расстановка</p>
								<span
									>Мы доставим кресла-мешки прямо на место вашего мероприятия и расставим
									их так, чтобы все выглядело идеально.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="geo">
			<div class="container">
				<div class="geo_main">
					<h2>География нашей работы</h2>
					<ul class="geo_list">
						<li class="geo_item">
							<div class="geo_item__img">
								<img src="/img/geo-0.png" alt="" />
							</div>
							<p>Краснодарский край</p>
						</li>
						<li class="geo_item">
							<div class="geo_item__img">
								<img src="/img/geo-1.png" alt="" />
							</div>
							<p>Ставропольский край</p>
						</li>
						<li class="geo_item">
							<div class="geo_item__img">
								<img src="/img/geo-3.png" alt="" />
							</div>
							<p>Ростов-на-Дону</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="event">
			<div class="container">
				<div class="event_main">
					<h3>События, где наши кресла станут звездами</h3>
					<ul class="event_list">
						<li class="event_item">
							<p>Фестивали и концерты</p>
							<span>Комфорт для всех гостей</span>
						</li>
						<li class="event_item">
							<p>Дни рождения и детские праздники</p>
							<span>Яркие и незабываемые моменты</span>
						</li>
						<li class="event_item">
							<p>Корпоративы</p>
							<span>Удобное пространство для общения и отдыха</span>
						</li>
						<li class="event_item">
							<p>Кинопросмотры</p>
							<span>Атмосфера настоящего кинотеатра под открытым небом</span>
						</li>
						<li class="event_item">
							<p>Свадьбы</p>
							<span>Романтика и уют в каждом моменте</span>
						</li>
						<li class="event_item">
							<p>Кемпинги и походы</p>
							<span>Комфорт для всех гостей</span>
						</li>
					</ul>
					<ul class="event_grid">
						<li
							class="event_grid__item"
							v-for="(item, i) in 4"
							:key="'event-gallery-item' + i"
						>
							<a :href="'/img/event-' + i + '.jpg'">
								<img :src="'/img/event-' + i + '.jpg'" alt="" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<ActionBlock
			title="Арендуйте у нас кресла-мешки для комфортного и радостного
		мероприятия"
			txt=""
			img="/img/action-2.jpg"
		/>
	</div>
</template>

<script setup lang="ts">
	import PageHead from "~/components/head/PageHead.vue";
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation } from "swiper/modules";
	import ActionBlock from "~/components/blocks/ActionBlock.vue";
	const head = ref<any>({
		title: "Ощутите комфорт с арендой кресел-мешков (груш)",
		txt:
			"Создайте незабываемое событие: погрузитесь в мир комфорта и уюта с нашими креслами-мешками, которые добавят особую атмосферу вашему мероприятию!",
		img: "/img/rent-head.png",
		btn: true,
	});

	const colorsSlides = ref<any>([
		{ img: "/img/colors-slides-1.jpg", name: "Белый <span>(на 150 руб. дороже)</span>" },
		{ img: "/img/colors-slides-2.jpg", name: "Черный" },
		{ img: "/img/colors-slides-3.jpg", name: "Графит" },
		{ img: "/img/colors-slides-4.jpg", name: "Бежевый" },
		{ img: "/img/colors-slides-4.jpg", name: "Бежевый" },
	]);
</script>

<style scoped lang="scss">
	.rent_desc {
		background-color: $light;
	}

	.rentdesc_main {
		@include flex-start;
		gap: 16.5rem;
		padding: 6rem 0;
	}

	.rentdesc__img {
		max-width: 70.3rem;
	}

	.rentdesc__content {
		ul {
			li {
				max-width: 62.4rem;
				p {
					font-size: 3rem;
					font-weight: 600;
					margin-bottom: 2.5rem;
				}
				&:not(:last-child) {
					margin-bottom: 5rem;
				}
			}
		}
	}

	.price_main {
		padding: 10rem 0;
		@include flex-start;
		gap: 1rem;

		h2 {
			font-size: 5rem;
			margin-bottom: 4rem;
		}
	}

	.price__content {
		max-width: 105rem;
		ul {
			@include flex-start;
			flex-wrap: wrap;
			gap: 3.5rem 15.8rem;
			margin-bottom: 5.7rem;
			li {
				@include flex-start;
				gap: 1.9rem;
				span {
					color: $brown;
				}
			}
		}
	}

	.price_notice {
		color: $brown;
		font-size: 2.4rem;
		font-weight: 500;
	}

	.price_img {
		max-width: 70.5rem;
		@include flex-center;
	}

	.colors_head {
		margin-bottom: 3rem;
		h3 {
			font-size: 5rem;
			margin-bottom: 2rem;
			font-family: $font_2;
		}
	}

	.color_slide__img {
		@include flex-center;
		margin-bottom: 1.5rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.colors_slide__txt {
		:deep(span) {
			color: $brown;
		}
	}

	.color_slider {
		padding: 6rem 0 9.5rem 0;
	}

	.colors_slider {
		position: relative;
	}

	.colors_navigation {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: calc(100% + 3rem);
		@include flex-space;
		z-index: 11;
		div {
			@include flex-center;
			cursor: pointer;
			color: $lbrown;
			transition: all 0.3s ease-in-out;
			&:first-child {
				transform: rotate(180deg);
			}

			&.swiper-button-disabled {
				opacity: 0.4;
				cursor: not-allowed;
			}
			&:hover {
				color: $brown;
			}
		}
	}

	.conditions {
		background-color: $light;
	}

	.conditions_main {
		padding: 7rem 0;
		text-align: center;
		h3 {
			font-size: 4rem;
			margin-bottom: 9rem;
		}
	}

	.conditions_list {
		@include flex-space;
		gap: 2rem;
	}

	.conditions_item__img {
		@include flex-center;
		margin-bottom: 5.2rem;
		img {
			max-width: 10rem;
			height: 100%;
			object-fit: contain;
		}
	}

	.rentxt {
	}

	.rentxt__main {
		padding: 10rem 0;
		display: flex;
		flex-direction: column;
		gap: 10rem;
	}

	.rentxt__row {
		h3 {
			font-size: 5rem;
			max-width: 90.9rem;
			font-family: $font_2;
			font-weight: 500;
			margin-bottom: 4.5rem;
		}

		ul {
			@include flex-start;
			flex-wrap: wrap;
			max-width: 130rem;
			gap: 4rem 16.5rem;
			li {
				max-width: 56rem;
				p {
					font-size: 2.6rem;
					font-family: $font_2;
					color: $brown;
					margin-bottom: 1.5rem;
				}
			}
		}
	}

	.geo {
		background-color: $light;
	}

	.geo_main {
		padding: 8rem 0;

		h2 {
			margin-bottom: 4rem;
			font-size: 4rem;
			font-family: $font_2;
			font-weight: 500;
			text-align: center;
		}
	}

	.geo_list {
		@include flex-space;
	}

	.geo_item__img {
		height: 19rem;
		flex-direction: column;
		@include flex-center;
		margin-bottom: 4rem;
	}

	.event_main {
		padding: 10rem 0 5rem 0;

		h3 {
			font-size: 5rem;
			font-family: $font_2;
			font-weight: 500;
			margin-bottom: 4.5rem;
		}
	}

	.event_list {
		@include flex-start;
		flex-wrap: wrap;
		gap: 4rem 16.5rem;
		max-width: 129.2rem;
		margin-bottom: 8rem;
		li {
			max-width: 56rem;
			width: 100%;

			p {
				font-size: 2.5rem;
				font-family: $font_2;
				font-weight: 500;
				color: $brown;
				margin-bottom: 1.5rem;
			}
		}
	}

	.event_grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto auto;
		max-height: 70.2rem;
		grid-template-areas:
			"one two four"
			"one free four";

		.event_grid__item {
			a {
				@include flex-center;
			}
			&:nth-child(1) {
				grid-area: one;
			}

			&:nth-child(2) {
				grid-area: two;
				height: 40.4rem;
			}

			&:nth-child(3) {
				height: 29.8rem;
				grid-area: free;
			}
			&:nth-child(4) {
				grid-area: four;
			}
		}
	}
</style>
