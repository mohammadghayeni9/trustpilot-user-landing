<script setup>
</script>
<template>
	<section class="styles_section__6zL15">
		<div>
			<div class="styles_headerBar__RM49S">
				<div>
					<h2
						class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-m__bedfe1"
					>
						Best in Bank
					</h2>
				</div>
				<div class="styles_rightSideControls__Lkj0d">
					<router-link
						class="CDS_Button_button__2b0b71 CDS_Button_s__2b0b71 CDS_Button_appearance-outline__2b0b71 styles_buttonLink__Abtby"
						to="/categories"
						><span
							class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_heading-xxxs__bedfe1 CDS_Typography_disableResponsiveSizing__bedfe1 CDS_Button_buttonText__2b0b71 border rounded-full py-1 px-3"
							><span class="CDS_Button_iconSpan__2b0b71"></span
							>See more</span
						></router-link
					>
				</div>
			</div>
			<div class="styles_carouselContainer__cFby6">
				<div class="styles_column__4UN_5" v-for="index in 4" :key="index">
					<div
						class="CDS_Card_card__16d1cc CDS_Card_appearance-default__16d1cc CDS_Card_borderRadius-l__16d1cc styles_card__iftKX border rounded !p-2"
					>
						<router-link
							to="#"
							target="_self"
							class="link_internal__uk9WZ link_wrapper__cESXa"
							><div class="styles_imageWrapper__4haiA">
								<div class="styles_image__QJHWR">
									<picture
										class="business-profile-image_containmentWrapper__2lens"
										>
										<img
											class="business-profile-image_image__gyBH3"
											src="https://consumersiteimages.trustpilot.net/business-units/592855190000ff0005a33f85-198x149-1x.jpg"
											alt=""
									/></picture>
								</div>
							</div>
							<h3
								class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-xs__bedfe1 styles_name___m5K_"
							>
								DuGood Credit Union
							</h3>
							<p
								class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_body-m__bedfe1 styles_identifyingName__Svc21"
							>
								www.dugood.org
							</p>
							<div class="styles_reviews__xd4lg">
								<div class="styles_starRating__bleXy">
									<img
										class="CDS_StarRating_starRating__8ae3cf"
										alt="TrustScore 5 out of 5"
										width="84px"
										src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
									/>
								</div>
								<p
									class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_body-m__bedfe1 styles_rating__kflqk"
								>
									4.8
								</p>
								<p
									class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_body-m__bedfe1 styles_reviewCount__Yuwbd"
								>
									(4254)
								</p>
							</div></router-link
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
