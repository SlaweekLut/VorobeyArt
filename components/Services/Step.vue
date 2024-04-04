<script setup>
defineProps({
	title: String,
	step: String,
	icon: String,
	text: String
})
</script>
	
<template>
<div class="services-item">
	<div class="services-item__header">
		<p class="services-item__title">{{ title }}</p>
		<p class="services-item__step">*/ {{step}}</p>
	</div>
	<div class="services-item__row">
		<img :src="`/img/services/${icon}.svg`" alt="">
		<p class="services-item__text">{{ text }}</p>
	</div>
</div>
</template>
	
<style scoped lang="scss">
.services-item {
	display: flex;
	flex-direction: column;
	&__header {
		padding: 6px 40px 6px 112px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #E0E0E0;
	}
	&__title {
		font-weight: 700;
		font-size: 40px;
	}
	&__step {
		font-size: 18px;
		color: #aaa;
	}
	&__row {
		display: flex;
		gap: 30px;
		margin-top: 20px;
		padding: 26px 40px 30px 112px;
	}
	&__text {
		font-size: 20px;
		font-weight: 500;
	}
	img {
		width: 94px;
		height: 94px;
		min-height: 94px;
		min-width: 94px;
		max-width: 94px;
		max-height: 94px;
	}
}
@media (max-width: 1200px) {
	.services-item {
		&__header {
			padding: 6px 90px;
		}
		&__row {
			padding: 26px 90px 0px;
		}
		&__text {
			max-width: 500px;
			font-size: 18px;
		}
	}
}
@media (max-width: 1024px) {
	.services-item {
		&__title {
			font-size: 30px;
		}
	}
}
@media (max-width: 768px) {
	.services-item {
		&__title {
			font-size: 30px;
		}
		&__header {
			padding: 0px 65px 15px 42px;
		}
		&__row {
			margin-top: 0;
			padding: 46px 42px 0px;
		}
	}
}
@media (max-width: 425px) {
	.services-item {
		&__row {
			flex-direction: column;
			gap: 24px;
			padding: 46px 23px 0px 13px;
		}
		&__header {
			padding: 0px 23px 15px 13px;
		}
		&__title {
			font-size: 20px;
		}
		&__text {
			font-size: 16px;
		}
	}
}
</style>