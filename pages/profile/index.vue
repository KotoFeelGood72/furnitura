<!-- @format -->

<template>
	<div class="user">
		<div class="user__main">
			<div class="user__info">
				<div class="user__content">
					<p>Поддубная Елена</p>
					<ul>
						<li>
							<p>Телефон</p>
							<span>+ 7 918 123 45 67</span>
						</li>
						<li>
							<p>E-mail</p>
							<span>elrnadub@gmail.com</span>
						</li>
					</ul>
				</div>
				<div class="user__edit">
					<NuxtLink to="/profile/edit">Редактировать</NuxtLink>
				</div>
				<div class="user__logout">Выйти</div>
			</div>
			<div class="user__img">
				<img src="/img/profile.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.user__main {
		@include flex-start;
		align-items: flex-end;
		gap: 7.1rem;
		padding-bottom: 44.7rem;

		& > div {
			width: 50%;
			&:first-child {
				background-color: $light;
				padding: 3rem;
				position: relative;
				margin-bottom: 1.1rem;
				max-height: 33.1rem;
			}
		}
	}

	.user__edit,
	.user__logout {
		position: absolute;
		top: 3rem;
		right: 3rem;
		cursor: pointer;
		font-size: 1.8rem;
		border-bottom: 0.1rem solid $brown;
		line-height: 95%;
		transition: all 0.3s ease-in-out;
		color: $brown;
		a {
			color: inherit;
		}
		&:hover {
			border-color: transparent;
			color: $lbrown;
		}
	}

	.user__logout {
		top: auto;
		bottom: 3rem;
		border-color: transparent;
		&:hover {
			color: $lbrown;
			border-color: $lbrown;
		}
	}

	.user__content {
		padding: 1.8rem 1.3rem 2.7rem 1.3rem;
		& > p {
			margin-bottom: 4.5rem;
			font-size: 2.4rem;
			font-family: $font_2;
			color: $dark;
		}

		ul {
			li {
				&:not(:last-child) {
					margin-bottom: 4rem;
				}
				p {
					color: $gray;
					font-family: $font_2;
					margin-bottom: 1rem;
				}
				span {
					font-weight: 400;
				}
			}
		}
	}

	.user__img {
		max-width: 80rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
