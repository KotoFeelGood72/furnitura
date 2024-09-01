<!-- @format -->

<template>
	<div class="degign">
		<PageHead :data="head" />
		<div class="whats">
			<div class="container">
				<div class="whats_main">
					<div class="whats__content">
						<h2>Почему мы</h2>
						<p>
							Понимаем, что каждый интерьер требует особого подхода и внимания к деталям.
							Поэтому предлагаем вам не просто мебель, а идеальный инструмент для
							воплощения самых смелых и креативных идей. Наши кресла-мешки созданы для
							того, чтобы стать неотъемлемой частью вашего дизайнерского замысла, добавляя
							в пространство уют и стиль.
						</p>
					</div>
					<div class="whats_imgs">
						<div class="whats_img">
							<img src="/img/whats-1.jpg" alt="" />
						</div>
						<div class="whats_img">
							<img src="/img/whats-2.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="proposal">
			<div class="container">
				<div class="propposal_main">
					<h3>Что мы предлагаем?</h3>
					<ul class="propposal_list">
						<li
							class="proposal_item"
							v-for="(item, i) in proposal"
							:key="'proposal-item-' + i"
						>
							<div class="proposal_item__img">
								<img :src="item.img" alt="" />
							</div>
							<div class="proposal_item__content">
								<h3>{{ item.title }}</h3>
								<p>{{ item.txt }}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<ActionBlock
			img="/img/action-1.jpg"
			title="Как начать сотрудничество?"
			txt="Свяжитесь с нами, чтобы обсудить ваши идеи и запросы. Наши специалисты всегда готовы предоставить консультацию и помочь на каждом этапе реализации вашего проекта. Вместе мы сможем создать нечто действительно выдающееся."
		/>
	</div>
</template>

<script setup lang="ts">
	import PageHead from "~/components/head/PageHead.vue";
	import ActionBlock from "~/components/blocks/ActionBlock.vue";

	const head = ref<any>({
		title: "Партнёрство с дизайнерами интерьеров: расширяя границы комфорта и эстетики",
		txt:
			"Мы рады приветствовать вас в мире, где дизайн становится проще, а комфорт в интерьере доступен каждому. Наша компания, специализирующаяся на производстве уникальных кресел-мешков,    объявляет о запуске эксклюзивной программы сотрудничества с дизайнерами интерьеров.",
		img: "/img/design-head.png",
	});

	const proposal = ref<any>([
		{
			title: " 3D модели по запросу",
			txt:
				"Создавайте и воплощайте свои проекты с нашими 3D моделями кресел-мешков. Мы предоставляем высококачественные 3D модели, которые идеально впишутся в ваши визуализации, позволяя вам наглядно демонстрировать клиентам будущие интерьеры.",
			img: "/img/pro-1.png",
		},
		{
			title: "Индивидуальный подбор тканей",
			txt:
				"Мы ценим уникальность каждого проекта. Поэтому предлагаем вам возможность выбора из широкого ассортимента тканей. Если в нашей коллекции нет подходящего варианта, мы с радостью предоставим возможность использовать любые другие материалы по вашему запросу.  От элитных тканей до экзотических текстур — все для того, чтобы ваши проекты стали ещё более оригинальными и эксклюзивными.",
			img: "/img/pro-2.png",
		},
		{
			title: "Разработка эксклюзивных моделей",
			txt:
				"Хотите создать что-то совершенно уникальное? Наши дизайнеры готовы сотрудничать с вами для разработки эксклюзивных моделей кресел-мешков, которые будут изготовлены по индивидуальным эскизам. Мы учитываем ваши пожелания и требования, чтобы результат превзошел ожидания.",
			img: "/img/pro-3.png",
		},
		{
			title: "Наши клиенты",
			txt:
				"Мы уже сотрудничаем с ведущими ивент-агентствами и престижными фирмами. Наши кресла-мешки украшают пространства, создавая атмосферу комфорта и роскоши. Мы гордимся тем, что можем быть частью вашего творческого процесса и помочь вам создавать неповторимые интерьеры.",
			img: "/img/pro-4.png",
		},
	]);
</script>

<style scoped lang="scss">
	.whats {
		background-color: $light;
	}

	.whats_main {
		@include flex-space;
		gap: 10rem;
		padding: 4.2rem 0;
	}

	.whats__content {
		max-width: 84.3rem;

		h2 {
			font-size: 4rem;
			margin-bottom: 3rem;
		}
		p {
			color: $gray;
		}
	}

	.whats_imgs {
		@include flex-start;
		gap: 2rem;
		max-width: 70.4rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.whats_img {
		@include flex-center;
	}

	.propposal_main {
		padding: 10rem 0;

		& > h3 {
			font-size: 4rem;
			margin-bottom: 8rem;
		}
		p {
			color: $gray;
		}
	}
	.proposal_item__content {
		width: 50%;

		h3 {
			font-size: 3rem;
			color: $brown;
			margin-bottom: 2rem;
		}
	}
	.proposal_item__img {
		width: 50%;
		img {
			max-width: 80rem;
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.proposal_item {
		@include flex-start;
		gap: 2.9rem;
		&:not(:last-child) {
			margin-bottom: 8rem;
		}
		&:nth-child(2) {
			.proposal_item__img {
				order: 1;
			}
			.proposal_item__content {
				order: 0;
			}
		}
		&:last-child {
			padding-top: 2rem;
			.proposal_item__img {
				@include flex-center;
				order: 1;
				img {
					max-width: 33rem;
				}
			}
			.proposal_item__content {
				order: 0;
				h3 {
					color: $dark;
				}
			}
		}
	}
</style>
