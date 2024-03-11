<template>
	<div class="accordion" :class="{ 'active': open }">
		<div class="accordion__header" @click="open = !open">
			<p class="accordion__title">{{ title }}</p>
			<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 23V21H44V23H0Z" fill="#0181C8"/>
				<path d="M21 -8.74228e-08L23 0L23 44L21 44L21 -8.74228e-08Z" fill="#0181C8"/>
			</svg>
		</div>
		<div class="accordion__wrapper">
			<div class="accordion__content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: String
})

const open = ref(false)
</script>

<style scoped lang="scss">
.accordion {
	display: flex;
	flex-direction: column;
	border-top: 1px solid #000;
	&:last-child {
		border-bottom: 1px solid #000;
	}
	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30px 72px;
		cursor: pointer;
		svg {
			transition: .3s ease;
		}
	}
	&__title {
		color: #222;
		font-size: 60px;
		font-weight: 600;
	}
	&__wrapper {
		display: grid;
		grid-template-rows: 0fr;
		transition: .3s ease;
	}
	&__content {
		padding: 0px;
		overflow: hidden;
		height: 100%;
		transition: .3s ease;
	}
	&.active {
		.accordion__wrapper {
			grid-template-rows: 1fr;
		}
		.accordion__content {
			padding: 60px 0;
		}
		.accordion__header svg {
			transform: rotate(45deg);
		}
	}
}
@media (max-width: 1200px) {
	.accordion {
		&__title {
			font-size: 35px;
		}
		&__header {
			padding: 40px 50px 40px 40px;
			svg {
				width: 30px;
				height: 30px;
			}
		}
	}
}
@media (max-width: 570px) {
	.accordion {
		&__title {
			font-size: 25px;
		}
		&__header {
			padding: 30px 13px;
		}
	}
}
</style>
