<template>
	<div class="accordion">
		<div class="accordion__header">
			<p class="accordion__title">{{ title }}</p>
			<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 23V21H44V23H0Z" fill="#0181C8"/>
				<path d="M21 -8.74228e-08L23 0L23 44L21 44L21 -8.74228e-08Z" fill="#0181C8"/>
			</svg>
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: String
})
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
	}
	&__title {
		color: #222;
		font-size: 60px;
		font-weight: 600;
	}
}
</style>
