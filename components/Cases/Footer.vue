<template>
	<div class="footer-wrapper">
		<div class="footer-contacts">
			<div class="footer-contacts__decor">
			</div>
			<div class="footer-contacts__col">
				<p class="footer-contacts__title">
					{{ $t('footer.more') }}
				</p>
				<div class="footer-contacts__info">
					<NuxtLink to="https://disk.yandex.ru/i/ffr_32LgvsLmYg" target="_blank" class="home-link">
						<svg
							class="home-link__svg"
							:class="{
								'home-link__svg--preloader': curtains === 'Preloader',
								'home-link__svg--curtains': redirect,
							}"
							width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="68" cy="68" r="68" fill="#0181C8"/>
							<path d="M124.817 79.2473L113.718 77.7417L113.919 76.2672L123.622 77.5836L124.314 72.4783L114.611 71.162L114.811 69.6875L125.909 71.1931L124.817 79.2473Z" fill="white"/>
							<path d="M121.196 90.5911C120.79 91.5425 120.133 92.1958 119.228 92.5511C118.327 92.9204 117.406 92.9038 116.465 92.5014C115.533 92.1032 114.885 91.449 114.519 90.539C114.15 89.6388 114.169 88.713 114.575 87.7616L115.588 85.3928L111.91 83.8209L112.494 82.4526L122.793 86.8541L121.196 90.5911ZM115.855 88.3086C115.612 88.8775 115.602 89.43 115.826 89.9662C116.059 90.5066 116.465 90.9005 117.043 91.1478C117.632 91.3993 118.197 91.4205 118.739 91.2112C119.281 91.002 119.673 90.6129 119.916 90.044L120.928 87.6753L116.868 85.9399L115.855 88.3086Z" fill="white"/>
							<path d="M107.597 95.1508L104.462 99.2994L103.338 98.4505L107.37 93.1148L116.306 99.8674L112.322 105.139L111.199 104.29L114.285 100.206L111.541 98.1316L108.695 101.897L107.585 101.058L110.43 97.2923L107.597 95.1508Z" fill="white"/>
							<path d="M99.7188 109.646C99.1185 109.824 98.5455 109.834 97.9998 109.677C97.4542 109.519 96.9774 109.193 96.5696 108.7C95.9579 107.96 95.7378 107.125 95.9094 106.194C96.0728 105.27 96.6107 104.431 97.5232 103.676C98.3535 102.99 99.1764 102.621 99.9919 102.569C100.799 102.525 101.547 102.709 102.235 103.123L101.72 104.483C100.663 103.724 99.563 103.817 98.4204 104.761C97.8203 105.258 97.4645 105.773 97.3532 106.308C97.2487 106.851 97.3799 107.345 97.747 107.789C98.114 108.233 98.5659 108.461 99.1025 108.474C99.631 108.494 100.171 108.276 100.721 107.821L101.733 106.985L102.599 108.033L101.872 108.634C101.346 109.069 101.032 109.543 100.93 110.057C100.835 110.578 100.961 111.048 101.308 111.467C101.647 111.879 102.071 112.089 102.577 112.099C103.083 112.124 103.594 111.923 104.112 111.495C105.066 110.706 105.353 109.756 104.973 108.644L106.394 108.404C106.861 110.024 106.397 111.412 104.999 112.568C104.169 113.254 103.308 113.578 102.418 113.539C101.52 113.507 100.778 113.137 100.194 112.43C99.5138 111.608 99.3556 110.68 99.7188 109.646Z" fill="white"/>
							<path d="M91.0401 110.045L86.3714 112.335L85.7514 111.071L91.7561 108.126L96.6879 118.182L90.7551 121.092L90.1351 119.827L94.732 117.573L93.2172 114.484L88.9794 116.563L88.3665 115.313L92.6042 113.235L91.0401 110.045Z" fill="white"/>
							<path d="M76.8726 125.019L75.4299 125.311L73.2055 114.334L74.6482 114.042L75.6492 118.981L80.9808 117.901L79.9798 112.961L81.4382 112.666L83.6626 123.643L82.2042 123.938L81.2605 119.281L75.9288 120.361L76.8726 125.019Z" fill="white"/>
							<path d="M61.1842 125.295L61.2656 123.889L64.5721 124.081L65.1385 114.305L66.608 114.39L66.0416 124.166L69.3321 124.357L69.2506 125.762L61.1842 125.295Z" fill="white"/>
							<path d="M50.9669 111.223L51.0589 113.894L55.8528 115.45L57.4957 113.342L59.0023 113.831L51.5729 123.195L49.975 122.677L49.4602 110.734L50.9669 111.223ZM54.9361 116.616L51.1162 115.376L51.3298 121.249L54.9361 116.616Z" fill="white"/>
							<path d="M38.3258 105.527L37.3376 104.846L39.3529 101.921L40.5782 102.766L39.3618 104.531L45.8177 108.979L39.4632 118.202L38.2379 117.358L43.7936 109.294L39.5511 106.371L33.9954 114.435L32.7701 113.59L38.3258 105.527Z" fill="white"/>
							<path d="M30.3266 95.0739L23.8512 100.349L33.9645 99.5397L34.7224 100.47L26.0389 107.544L25.0991 106.39L31.5869 101.105L21.4612 101.924L20.7033 100.994L29.3868 93.9202L30.3266 95.0739Z" fill="white"/>
							<path d="M13.8867 87.8526L24.1188 83.298L24.7174 84.6428L20.8 86.3865L21.7044 88.4183L26.7995 89.3203L27.4827 90.8551L22.2674 89.9191C22.414 90.6945 22.3018 91.4391 21.9307 92.1531C21.5597 92.867 21.0136 93.3845 20.2924 93.7054C19.4154 94.0958 18.5333 94.1207 17.6461 93.7801C16.7448 93.434 16.099 92.8225 15.7086 91.9454L13.8867 87.8526ZM20.7954 89.6811L19.5721 86.9331L15.757 88.6313L16.9803 91.3794C17.2015 91.8763 17.5775 92.2227 18.1083 92.4184C18.6391 92.6141 19.1676 92.5949 19.6938 92.3607C20.2201 92.1264 20.5929 91.7444 20.8125 91.2147C21.0223 90.6893 21.0166 90.1781 20.7954 89.6811Z" fill="white"/>
							<path d="M11.2077 58.1787L22.3425 59.3853L22.1822 60.8646L12.4472 59.8097L11.8921 64.9317L21.6272 65.9866L21.4668 67.466L10.332 66.2594L11.2077 58.1787Z" fill="white"/>
							<path d="M14.4344 46.9336C14.8124 45.9704 15.4488 45.2977 16.3436 44.9155C17.2323 44.5195 18.1533 44.5085 19.1065 44.8826C20.0498 45.2528 20.7176 45.8872 21.1097 46.7859C21.5057 47.6747 21.5148 48.6006 21.1368 49.5638L20.1958 51.9617L23.9193 53.423L23.3757 54.8081L12.9498 50.7167L14.4344 46.9336ZM19.841 49.0553C20.067 48.4794 20.0604 47.9268 19.8212 47.3975C19.5721 46.8643 19.1547 46.4827 18.5688 46.2528C17.973 46.0191 17.4075 46.0148 16.8722 46.2402C16.3369 46.4655 15.9562 46.8662 15.7302 47.4421L14.7892 49.84L18.9 51.4532L19.841 49.0553Z" fill="white"/>
							<path d="M27.9738 41.8144L31.0019 37.587L32.1465 38.4069L28.2519 43.8439L19.1468 37.3219L22.9948 31.9499L24.1395 32.7698L21.1579 36.9321L23.9545 38.9353L26.7031 35.0982L27.8347 35.9088L25.0862 39.7459L27.9738 41.8144Z" fill="white"/>
							<path d="M35.4516 27.1217C36.0472 26.9285 36.6197 26.9038 37.1692 27.0477C37.7187 27.1915 38.2036 27.5048 38.6239 27.9875C39.2542 28.7115 39.4955 29.541 39.3477 30.4758C39.2079 31.4036 38.6915 32.2563 37.7985 33.0337C36.986 33.7411 36.1727 34.131 35.3588 34.2032C34.5528 34.2684 33.8007 34.103 33.1023 33.7069L33.5828 32.3339C34.6587 33.0661 35.7557 32.9454 36.874 31.9718C37.4613 31.4605 37.8037 30.9361 37.9014 30.3985C37.9921 29.8528 37.8483 29.3628 37.4701 28.9284C37.0919 28.4939 36.6343 28.2771 36.0975 28.2777C35.5687 28.2714 35.0348 28.5029 34.4958 28.9721L33.5062 29.8336L32.6132 28.8079L33.3252 28.188C33.8401 27.7398 34.1418 27.2579 34.2304 26.7423C34.312 26.2187 34.1741 25.7518 33.8169 25.3415C33.4667 24.9393 33.0383 24.7395 32.5315 24.7423C32.0258 24.73 31.5196 24.9445 31.0127 25.3857C30.0795 26.1982 29.8167 27.1553 30.2244 28.2571L28.8104 28.5335C28.3016 26.9258 28.7311 25.5265 30.0987 24.3358C30.9112 23.6284 31.763 23.2829 32.654 23.2991C33.5531 23.3084 34.3038 23.659 34.9061 24.3508C35.6065 25.1553 35.7884 26.0789 35.4516 27.1217Z" fill="white"/>
							<path d="M43.8554 26.6212L48.4542 24.1941L49.1114 25.4393L43.1966 28.5609L37.9689 18.6558L43.8129 15.5715L44.4701 16.8167L39.9421 19.2065L41.5477 22.2488L45.722 20.0457L46.3717 21.2768L42.1974 23.4798L43.8554 26.6212Z" fill="white"/>
							<path d="M57.7558 11.1497L59.1902 10.8189L61.7068 21.7325L60.2724 22.0633L59.1399 17.1521L53.839 18.3745L54.9715 23.2856L53.5215 23.6199L51.005 12.7063L52.4549 12.372L53.5227 17.0025L58.8236 15.7802L57.7558 11.1497Z" fill="white"/>
							<path d="M73.3879 10.4076L73.3444 11.815L70.034 11.7127L69.7317 21.5001L68.2604 21.4546L68.5627 11.6673L65.2683 11.5655L65.3117 10.1582L73.3879 10.4076Z" fill="white"/>
							<path d="M84.0978 24.1854L83.9352 21.5179L79.1018 20.0895L77.5153 22.24L75.9962 21.791L83.1754 12.2339L84.7865 12.7101L85.6168 24.6344L84.0978 24.1854ZM79.9874 18.8997L83.8387 20.0379L83.4699 14.1729L79.9874 18.8997Z" fill="white"/>
							<path d="M96.762 29.4185L97.7697 30.0701L95.841 33.0528L94.5915 32.2449L95.7556 30.4445L89.1721 26.1874L95.2536 16.7823L96.5032 17.5903L91.1862 25.813L95.5125 28.6105L100.829 20.3878L102.079 21.1958L96.762 29.4185Z" fill="white"/>
							<path d="M105.209 39.7707L111.548 34.3325L101.459 35.399L100.677 34.4883L109.178 27.1956L110.147 28.325L103.796 33.7736L113.897 32.6966L114.679 33.6074L106.178 40.9L105.209 39.7707Z" fill="white"/>
							<path d="M121.838 46.5156L111.728 51.3351L111.095 50.0064L114.965 48.1612L114.008 46.1536L108.891 45.3847L108.169 43.8681L113.407 44.668C113.24 43.8967 113.333 43.1494 113.685 42.426C114.037 41.7027 114.57 41.1712 115.282 40.8315C116.149 40.4184 117.03 40.3706 117.926 40.688C118.836 41.0105 119.497 41.605 119.91 42.4716L121.838 46.5156ZM114.884 44.8676L116.179 47.5828L119.948 45.7858L118.654 43.0706C118.42 42.5795 118.035 42.2431 117.499 42.0612C116.963 41.8794 116.436 41.9124 115.916 42.1603C115.396 42.4081 115.033 42.7997 114.827 43.335C114.631 43.8656 114.65 44.3765 114.884 44.8676Z" fill="white"/>
						</svg>

						<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"
							class="home-link__play"
							:class="{
								'home-link__play--preloader': curtains === 'Preloader',
								'home-link__play--curtains': redirect,
							}"
						>
							<path d="M1 24.9985L24.9981 1.00194" stroke="white" stroke-width="2" stroke-linecap="round"/>
							<path d="M25 24.9985L25 1.00194" stroke="white" stroke-width="2" stroke-linecap="round"/>
							<path d="M1 1L24.9981 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
						</svg>
					</NuxtLink>
					<p class="footer-contacts__tagline" v-html="$t('footer.tagline')"></p>
					<!-- <a href="https://disk.yandex.ru/i/ffr_32LgvsLmYg" target="_blank" rel="noopener noreferrer" class="footer-contacts__link">Презентация</a> -->
				</div>
			</div>
			<div class="footer-contacts__col">
				<img src="/img/footer-placeholder.jpg" alt="" class="footer-contacts__img">
				<!-- <p class="footer-contacts__title">
					Офис
				</p>
				<div class="footer-contacts__info footer-contacts__info--address">
					<div class="footer-contacts__address">
						<p class="footer-contacts__address-title">Мурманск</p>
						<p class="footer-contacts__address-text">ул. П. Осипенко 37-А (2 этаж)</p>
					</div>
					<div class="footer-contacts__address">
						<p class="footer-contacts__address-title">Санкт-Петербург</p>
						<p class="footer-contacts__address-text">ул. Галерная 22-А офис № 38</p>
					</div>
				</div> -->
			</div>
			<div class="footer-contacts__col">
				<p class="footer-contacts__title">
					{{ $t('footer.contacts') }}
				</p>
				<div class="footer-contacts__info footer-contacts__info--contacts">
					<div class="footer-contacts__contacts-row">
						<a href="https://wa.me/79113119113" class="footer-contacts__contacts-link">
							<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0.985352 22.2182L2.49622 16.7031C1.32736 14.6735 0.860691 12.3149 1.16857 9.99313C1.47646 7.67132 2.54168 5.51593 4.19912 3.86109C5.85656 2.20625 8.01363 1.14441 10.3359 0.840177C12.6582 0.535945 15.016 1.00632 17.0438 2.17837C19.0716 3.35043 20.6561 5.1587 21.5516 7.32285C22.4472 9.487 22.6038 11.8862 21.9972 14.1484C21.3906 16.4106 20.0546 18.4095 18.1964 19.8352C16.3382 21.261 14.0616 22.0339 11.7195 22.0341C9.94283 22.0331 8.19473 21.5873 6.63458 20.7374L0.985352 22.2182ZM6.88871 18.8163L7.21291 19.0164C8.57613 19.8237 10.1311 20.2501 11.7155 20.2511C13.6774 20.2515 15.5839 19.5999 17.1351 18.3986C18.6863 17.1974 19.7944 15.5148 20.285 13.6151C20.7757 11.7155 20.6212 9.70674 19.8457 7.90454C19.0703 6.10233 17.7179 4.60894 16.0012 3.65913C14.2844 2.70932 12.3008 2.35696 10.362 2.65744C8.42315 2.95792 6.63918 3.8942 5.2905 5.31909C3.94182 6.74398 3.10491 8.57668 2.91135 10.5291C2.71779 12.4814 3.17856 14.4428 4.2212 16.1048L4.42132 16.4389L3.5268 19.7028L6.88871 18.8163Z"
									fill="#A5A5A5"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M17.0819 13.9233C17.0158 13.8113 16.8377 13.7452 16.5716 13.6132C16.3054 13.4811 14.9987 12.8367 14.7545 12.7467C14.5104 12.6566 14.3343 12.6146 14.1542 12.8807C13.9741 13.1469 13.4678 13.7452 13.3137 13.9233C13.1596 14.1014 13.0015 14.1235 12.7374 13.9894C11.9574 13.6761 11.2376 13.2299 10.6102 12.6706C10.0288 12.1328 9.53039 11.5117 9.13134 10.8276C8.97525 10.5614 9.11333 10.4274 9.24741 10.2853C9.38149 10.1432 9.51356 9.97309 9.64764 9.81901C9.75767 9.68478 9.84735 9.53509 9.91379 9.37475C9.94882 9.30123 9.96513 9.2202 9.96129 9.13886C9.95745 9.05751 9.93357 8.97838 9.89177 8.90849C9.82573 8.77641 9.29143 7.46767 9.07131 6.93536C8.85118 6.40306 8.63706 6.48711 8.47097 6.4771C8.30487 6.4671 8.13878 6.4771 7.96268 6.4771C7.82591 6.47936 7.69113 6.51027 7.56705 6.56783C7.44296 6.62539 7.33232 6.70833 7.24226 6.81129C6.94383 7.09426 6.70712 7.43588 6.54698 7.81468C6.38685 8.19349 6.30676 8.60131 6.31174 9.01255C6.31174 10.3213 7.26428 11.586 7.39836 11.7641C7.53244 11.9422 9.27343 14.6277 11.9409 15.7784C12.4362 15.9921 12.9425 16.1791 13.4578 16.3387C14.0003 16.5035 14.5738 16.5398 15.1328 16.4448C15.643 16.3687 16.7057 15.8004 16.9338 15.1801C17.1619 14.5597 17.1479 14.0334 17.0819 13.9233Z"
									fill="#A5A5A5"
								/>
							</svg>
						</a>
						<a href="https://t.me/Vorobey_Art" class="footer-contacts__contacts-link">
							<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M1.86721 9.14313C8.12277 6.41758 12.2938 4.62055 14.3803 3.75206C20.3397 1.27465 21.5844 0.844402 22.3849 0.828393C22.6817 0.822623 22.9729 0.910111 23.2174 1.07854C23.3889 1.22647 23.4983 1.43374 23.5235 1.65887C23.5666 1.93884 23.5787 2.22272 23.5596 2.50535C23.2374 5.90729 21.8386 14.13 21.1282 17.9301C20.828 19.531 20.2357 20.0774 19.6613 20.1314C18.4166 20.2454 17.4601 19.3069 16.2594 18.5165C14.3703 17.2778 13.3037 16.5153 11.4707 15.2986C9.35147 13.8978 10.7263 13.1354 11.9329 11.8827C12.2491 11.5545 17.7362 6.55966 17.8443 6.1074C17.8586 6.04062 17.8569 5.97142 17.8395 5.90538C17.8222 5.83934 17.7895 5.77831 17.7443 5.72718C17.6786 5.68613 17.6042 5.66096 17.5271 5.65366C17.45 5.64637 17.3722 5.65715 17.3 5.68516C17.1119 5.72652 14.0955 7.72032 8.25085 11.6666C7.39436 12.2549 6.61859 12.5417 5.92352 12.5271C5.15709 12.509 3.68424 12.0928 2.58762 11.7266C1.24485 11.2903 0.186257 11.0602 0.270305 10.3258C0.319667 9.94158 0.851966 9.54736 1.86721 9.14313Z"
									fill="#A5A5A5"
								/>
							</svg>
						</a>
					</div>
					<div class="footer-contacts__address">
						<p class="footer-contacts__address-title">+7 911 311 911 3</p>
						<p class="footer-contacts__address-text">team@vorobeyart.ru</p>
					</div>
				</div>
			</div>
		</div>
		<div class="footer__wrapper">
			<NuxtLink :to="`${settings.next}`" class="footer" v-if="case">
				<picture>
					<source
						media="(max-width: 768px)"
						:srcset="`/img/${settings.background[0]}/Mobile/${settings.background[1]}.webp`"
						type="image/webp"
					/>
					<source
						media="(min-width: 769px)"
						:srcset="`/img/${settings.background[0]}/PC/${settings.background[1]}.webp`"
						type="image/webp"
					/>
					<source
						:srcset="`/img/${settings.background[0]}/JPG/${settings.background[1]}.png`"
						type="image/png"
					/>
					<img
						:srcset="`/img/${settings.background[0]}/PC/${settings.background[1]}.webp`"
						:alt="settings.title"
						type="image/webp"
						class="footer__background"
					/>
				</picture>
				<div class="footer__background-white"></div>
				<div class="footer__text">
					<p class="footer__suptitle">
						Следующий проект
						<svg
							width="17"
							height="17"
							viewBox="0 0 17 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.12753 14.377C0.645679 14.8589 0.645679 15.6401 1.12753 16.122C1.60938 16.6038 2.39062 16.6038 2.87247 16.122L1.12753 14.377ZM16.4834 2C16.4834 1.31856 15.931 0.766142 15.2495 0.766142L4.14479 0.766142C3.46335 0.766142 2.91093 1.31856 2.91093 2C2.91093 2.68144 3.46335 3.23386 4.14479 3.23386L14.0157 3.23386L14.0157 13.1047C14.0157 13.7862 14.5681 14.3386 15.2495 14.3386C15.931 14.3386 16.4834 13.7862 16.4834 13.1047L16.4834 2ZM2.87247 16.122L16.122 2.87247L14.377 1.12753L1.12753 14.377L2.87247 16.122Z"
								fill="black"
							/>
						</svg>
					</p>
					<h2 class="footer__title">{{ settings.title }}</h2>
				</div>
			</NuxtLink>
			<FooterCurtains v-else/>
		</div>

	</div>
</template>

<script>
// import {gsap} from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FooterCurtains from '@/components/FooterCurtains.vue'
export default {
  name: 'FooterTemplate',
  props: {
    settings: {
      default: {
        background: [],
        title: '',
        next: '',
      },
    },
		case: {
			type: Boolean,
			default: true
		}
  },
	components: {
		FooterCurtains
	}
	// mounted() {
	// 	setTimeout(() => {
	// 		gsap.registerPlugin(ScrollTrigger);
	// 		let footer = null
	// 		footer = gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: '.footer__wrapper',
	// 				// pin: true,
	// 				start: 'top bottom',
	// 				end: 'bottom bottom',
	// 				scrub: true,
	// 				// markers: true,
	// 			},
	// 		});
	// 		footer.fromTo('.footer', {ease: 'none', y: '-100%'}, {ease: 'none', y: '0%'})
	// 	}, 1000)
	// }
};
</script>

<style lang="scss" scoped>
.home-link {
	text-decoration: none;
	position: absolute;
	top: 54px;
	right: 56px;
	height: 140px;
	width: 140px;
	z-index: 1;
	&::after {
		content: '';
		border-radius: 50%;
		width: 72px;
		height: 72px;
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 1px solid #fff;
		opacity: 0.2;
		transition: .3s ease;
	}
	&__svg {
		animation: rotateLink 30s linear infinite;
		transition: .3s ease-in-out;
		width: 140px;
		height: 140px;
		@keyframes rotateLink {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		&--curtains {
			animation: linkSvgVisible 1s ease-in-out both 0.9s;
		}
		&--preloader {
			animation: linkSvgVisible 1s ease-in-out both 2.7s;
		}
		@keyframes linkSvgVisible {
			0% {
				transform: scale(1.3);
				opacity: 0;
			}
			100% {
				transform: scale(1);
				opacity: 1;
			}
		}
	}
	&__play {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: .3s ease-in;
		&--curtains {
			animation: linkPlayVisible 1s ease-in-out both 0.9s;
		}
		&--preloader {
			animation: linkPlayVisible 1s ease-in-out both 2.7s;
		}
		@keyframes linkPlayVisible {
			0% {
				transform: translate(-100%, 0%) scale(0.8);
				opacity: 0;
			}
			100% {
				transform: translate(-50%, -50%) scale(1);
				opacity: 1;
			}
		}
	}
	&:hover {
		.home-link {
			&__play {
				transform: translate(-50%, -50%) scale(1.1);
			}
			&__svg {
				scale: 0.8;
			}
		}
		&::after {
			transform: translate(-50%, -50%) scale(0.8);
		}
	}
}
.footer-wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
}

.footer-contacts {
	min-height: 440px;
	display: flex;
	z-index: 1;
	background: #F6F6F6;
	box-shadow: 0px 28px 30px 0px rgba(0, 121, 188, 0.60);
	position: relative;
	&__contacts {
		&-link {
			width: 42px;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 42px;
			border-radius: 50%;
			border: 1px solid hsla(0, 0%, 82%, 1);
			background-color: #F9F9F9;
			transition: .1s ease-out;
			path {
				transition: .1s ease-out;
			}
			&:first-child {
				&:hover {
					border-color: #26D16A;
					background-color: #26D16A;
					path {
						fill: white
					}
				}
			}
			&:last-child {
				padding-right: 3px;
				padding-top: 2px;
				&:hover {
					border-color: #23A1DD;
					background-color: #23A1DD;
					path {
						fill: white
					}
				}
			}
		}
		&-row {
			display: flex;
			gap: 14px;
		}
	}
	&__col {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 46px 56px 56px;
		position: relative;
		&:not(:last-child) {
			border-right: 1px solid #E1E1E1;
		}
	}
	&__title {
		display: flex;
		align-items: center;
		gap: 20px;
		color: #222;
		font-size: 20px;
		font-weight: 400;
		&::before {
			content: '';
			display: flex;
			border-radius: 50%;
			width: 7px;
			height: 7px;
			background: #0181C8;
		}
	}
	&__img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__info {
		margin-top: 143px;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		gap: 24px;
		&--address {
			gap: 52px;
		}
		&--contacts {
			gap: 28px;
		}
	}
	&__link {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px 40px;
		background-color: #0181C8;
		border-radius: 100px;
		text-align: center;
		font-size: 20px;
		color: white;
		text-decoration: none;
		font-weight: 500;
	}
	&__address {
		display: flex;
		flex-direction: column;
		gap: 12px;
		&-title {
			color: #222;
			font-size: 20px;
			font-weight: 700;
		}
		&-text {
			color: #222;
			font-size: 20px;
		}
	}
	&__tagline {
		color: #222;
		font-size: 40px;
		font-weight: 500;
	}
	&__decor {
		position: absolute;
		z-index: -1;
		overflow: hidden;
		bottom: 0;
		right: 0;
		&-text {
			margin-top: -41px;
			margin-bottom: -82px;
			color: #F0F0F0;
			font-size: 248px;
			font-weight: 700;
		}
	}
}

.footer {
	width: 100%;
	height: 545px;
	position: relative;
	display: block;
	bottom: 0;
	text-decoration: none;
	overflow: hidden;

	&__background-white {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: hsla(201, 99%, 39%, 1);
		transition: .3s ease;
	}
	&__background {
		height: 150%;
		width: auto;
		object-fit: cover;
		object-position: center center;
		position: absolute;
		transition: .3s ease;
		left: 50%;
		top: 50%;
		transform-origin: top left;
		transform: translate(-50%, -50%);
		z-index: 1;
		opacity: 0.15;
		@media (hover: hover) and (pointer: fine) {
			filter: blur(12px);
		}
	}
	&__text {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		position: absolute;
		text-align: center;
		color: white;
	}
	&__suptitle{
		color: white;
		transition: .3s ease;
		font-weight: 700;
		font-size: 30px;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		gap: 3px;
		position: relative;
		width: min-content;
		white-space: nowrap;
		margin: 0 auto 18px;
		svg {
			right: -20px;
			top: -10px;
			position: absolute;
			path {
				fill: white;
			}
		}
	}
	&__title {
		color: white;
		font-size: 100px;
		font-weight: 700;
		transition: .3s ease;
		white-space: nowrap;
		text-transform: uppercase;
	}
	&:hover {
		.footer {
			&__background {
				filter: blur(0);
				transform: scale(1.1) translate(-50%, -50%);
			}
			&__title {
				transform: scale(1.5);
				opacity: 0;
			}
			&__suptitle {
				transform: scale(0.5);
				opacity: 0;
			}
		}
	}
}

@media(max-width: 1440px) {
	.footer-contacts {
		&__info {
			margin-top: 91px;
		}
	}
}
@media(max-width: 1024px) {
	.footer {
		&__title {
			font-size: 80px;
			white-space: nowrap;
		}
		&__date {
			bottom: 70px;
		}
	}

	.footer-contacts {
		&__col:nth-child(3) {
			display: none;
		}
		&__tagline {
			font-size: 35px;
		}
		&__info {
			margin-top: 108px;
		}
	}
}

@media (max-width: 768px) {
	.home-link {
		position: relative;
		right: unset;
		top: unset;
	}
	.footer {
		height: 275px;
		&__suptitle {
			font-size: 20px;
			white-space: nowrap;
			margin-bottom: 1px;
		}
		&__title {
			font-size: 48px;
			white-space: nowrap;
		}
		&--global {
			height: 100vh;
		}
	}
	.footer-contacts {
		&__tagline {
			font-size: 30px;
		}
		&__info {
			margin-top: 124px;
		}
	}
}

@media (max-width: 660px) {
	.footer-contacts {
		flex-direction: column;
		&__col {
			border-right: 0;
			border-bottom: 1px solid #E1E1E1;
		}
		&__tagline {
			font-size: 25px;
		}
		&__info {
			margin-top: 56px;
		}
	}
}

@media (max-width: 425px) {
	.footer {
		height: 250px;
		&__suptitle {
			font-size: 20px;
			white-space: nowrap;
			margin-bottom: 1px ;
		}
		&__title {
			font-size: 40px;
			white-space: nowrap;
		}
		&__date {
			font-size: 18px;
			bottom: 64px;
		}
		&--global {
			height: 100vh;
		}
	}
}
@media (max-width: 360px) {
	.footer-contacts {
		&__col {
			padding: 46px 61px 56px 41px;
		}
	}
}
</style>
