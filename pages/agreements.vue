<template>
	<div class="content policy">
		<div class="content__wrapper">
			<h2 class="policy__title">Согласие на обработку персональных данных</h2>
			<p class="policy__text">
				Настоящим даю свое согласие на обработку своих персональных данных индивидуальным предпринимателем Воробьевым Артемом Олеговичем, ИНН 519098076458, ОГРНИП 323510000030307, Юридический адрес:183017, г. Мурманск, ул. Полины Осипенко,
				д. 10, кв. 57 (далее – Оператор), относящихся исключительно к перечисленным ниже категориям персональных данных: фамилия, имя, отчество; номер телефона; адрес электронной почты; фотографии, документы.  
			</p>
			<p class="policy__text policy__text--left">
				Я даю согласие на использование персональных данных исключительно в целях: 
				Обработка и оформление заявок, поданных на сайте www.vorobeyart.ru для установления обратной связи, включая направление уведомлений, запросов, касающихся оказания услуг, заключения договоров.
				<br>
				<br>
				Заключение, исполнение и прекращение гражданско-правовых договоров.
				<br>
				<br>
				Получение сообщений рекламного и информационного характера.
				<br>
				<br>
				Предоставление эффективной клиентской и технической поддержки при возникновении проблем, связанных с использованием сайта <a href="https://www.vorobeyart.ru">www.vorobeyart.ru.</a>
			</p>
			<p class="policy__text">
				Настоящее Согласие предоставляется мной на осуществление действий в отношении моих персональных данных, которые необходимы для достижения указанных выше целей, включая (без ограничения) сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, передачу третьим лицам для осуществления действий по обмену информацией, обезличивание, блокирование персональных данных, а также осуществление любых иных действий, предусмотренных действующим законодательством Российской Федерации.
			</p>
			<p class="policy__text">
				Я проинформирован, что Оператор гарантирует обработку моих персональных данных в соответствии с действующим законодательством Российской Федерации и Политикой в отношении обработки персональных данных как неавтоматизированным, так и автоматизированным способами.
			</p>
			
			<p class="policy__text">
				Настоящее Согласие на обработку персональных данных действует с момента представления бессрочно. Данное Согласие может быть отозвано в любой момент путем направления письма на адрес электронной почты Оператора team@vorobeyart.ru
			</p>
			<p class="policy__text">
				Дата вступления в силу: 26 марта 2024 г.
				<br>
				Утверждено: ИП Воробьевым А.О.
			</p>
		</div>
	</div>
</template>

<script>
import TitlePage from '@/components/TitlePage.vue';
export default {
	name: 'PolicyPage',
	components: {
		TitlePage,
	},
};
</script>

<style lang="sass" scoped>
.policy
	&__title
		font-size: 30px
		font-weight: bold
		margin-bottom: 30px
		line-height: 36px
	&__list
		line-height: 24px
		font-size: 20px
		margin-bottom: 24px
		font-weight: 500
		list-style: disc
		padding-left: 24px
	&__text
		line-height: 24px
		font-size: 20px
		font-weight: 500
		&--left
			padding-left: 30px
		strong
			font-weight: 700
		&+&
			margin-top: 24px
		&+ul
			margin-top: 24px
		&+.policy__title
			margin-top: 90px

@media (max-width:1024px)
	.policy
		&__title
			font-size: 25px
			line-height: 31px
		&__list
			font-size: 18px
			line-height: 22px
		&__text
			font-size: 18px
			line-height: 22px
			&+&
				margin-top: 22px
			&+ul
				margin-top: 22px
			&+.policy__title
				margin-top: 60px
		&__title
			margin-bottom: 25px

@media (max-width:425px)
	.policy
		&__list
			font-size: 16px
			line-height: 19px
		&__text
			font-size: 16px
			line-height: 19px
			&--left 
				padding-left: 20px
			&+&
				margin-top: 19px
			&+ul
				margin-top: 19px
			&+.policy__title
				margin-top: 50px
		&__title
			margin-bottom: 20px
// CONTENT
// .content
// 	max-width: 1920px
// 	width: 100%
// 	margin: 35px auto 0
// 	padding: 0 93px 100px
// 	&__wrapper
// 		max-width: 1280px
// 		width: 100%
// 		margin: 0 auto
// 		position: relative
// 		z-index: 3

// @media (max-width: 1440px)
// 	.content
// 		padding: 0 147px 100px

// @media (max-width: 1024px)
// 	.content
// 		padding: 10px 118px 100px
// @media (max-width: 768px)
// 	.content
// 		padding: 35px 78px 100px
// @media (max-width: 660px)
// 	.content
// 		padding: 30px 44px 100px
// @media (max-width: 366px)
// 	.content
// 		padding: 0 39px 100px
</style>
