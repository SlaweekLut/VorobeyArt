<template>
	<div class="service" @click="open">
		<div class="service__header">
			<p class="service__title">{{ title }}</p>
			<div class="service__icon" :class="{ 'service__icon--open': visible }">
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="service__text-wrapper" :class="{ 'service__text-wrapper--open': visible }">
			<transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
				<div v-show="visible" class="service__text-content">
					<p class="service__text" v-html="text"></p>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AboutService',
	inject: ['Accordion'],
	props: {
		title: String,
		text: String,
	},
	data() {
		return {
			index: null,
		};
	},
	computed: {
		visible() {
			return this.index == this.Accordion.active;
		},
	},
	created() {
		this.index = this.Accordion.count++;
	},
	methods: {
		open() {
			if (this.visible) {
				this.Accordion.active = null;
			} else {
				this.Accordion.active = this.index;
			}
		},
		start(el) {
			el.style.maxHeight = el.scrollHeight + 'px';
		},
		end(el) {
			el.style.maxHeight = el.scrollHeight + 'px';
		},
	},
};
</script>

<style lang="sass">
.accordion-enter-active,.accordion-leave-active
	will-change: max-height
	transition: max-height 0.8s ease-in-out

.accordion-enter, .accordion-leave-to
	max-height: 0 !important
	transition: max-height 0.8s ease-in-out

.service
	border: 1px solid #000
	border-right: 0
	border-left: 0
	padding: 30px 0 0
	cursor: pointer
	position: relative
	& + &
		border-top: 0
	&__header
		display: flex
		align-items: center
		padding-bottom: 30px
	&__title
		margin-left: 22px
		margin-right: auto
		font-size: 20px
		font-weight: 600
	&__text
		font-size: 20px
		font-weight: 500
		color: #555
		transition: .8s ease-in-out
		strong
			font-weight: 700
	&__text-content
		overflow: hidden
		max-height: 0
		height: 100%
		transition: max-height .8s ease-in-out
	&__text-wrapper
		padding: 0
		transition: .8s ease-in-out
		&--open
			padding: 10px 0 30px
	&__icon
		position: relative
		height: 15px
		width: 15px
		margin-right: 25px
		span
			position: absolute
			top: 50%
			left: 50%
			transform: translate(-50%, -50%)
			width: 15px
			height: 2px
			background-color: #0181C8
			transition: .8s linear
			&:nth-child(1)
				transform: translate(-50%, -50%) rotate(90deg)
		&--open
			span
				&:nth-child(2)
					transform: translate(-50%, -50%) rotate(135deg)
				&:nth-child(1)
					transform: translate(-50%, -50%) rotate(225deg)

@media (max-width: 1440px)
	.service
		&__title
			font-size: 18px

@media (max-width: 768px)
	.service
		&__text
			font-size: 18px
			line-height: 22px
		&__title
			margin-left: 20px
			font-size: 16px
			font-weight: 500
@media (max-width: 425px)
	.service
		&__title
			margin-left: 12px
@media (max-width: 360px)
	.service
		&__title
			margin-left: 12px
		&__text
			font-size: 16px
			line-height: 20px
		&__icon
			margin-right: 15px
</style>
