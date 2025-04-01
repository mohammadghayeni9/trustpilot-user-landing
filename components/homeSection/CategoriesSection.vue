<script setup></script>

<template>
	<section class="styles_section__nTfo6">
		<div class="styles_headerBar__rvu3U">
			<h2
				class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-m__bedfe1"
			>
				دنبال چه چیزی میگردی؟
			</h2>
			<div class="styles_navigation__bdVlG">
				<router-link
					to="/categories"
					class="CDS_Button_button__2b0b71 CDS_Button_s__2b0b71 CDS_Button_appearance-outline__2b0b71"
					><span
						class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_heading-xxxs__bedfe1 CDS_Typography_disableResponsiveSizing__bedfe1 CDS_Button_buttonText__2b0b71 border rounded-full py-1 px-3"
						><span class="CDS_Button_iconSpan__2b0b71"></span>See
						more</span
					></router-link
				>
			</div>
		</div>
		<div class="styles_carouselContainer__U8y2A">
			<div class="styles_categoryTile__i7qQM" v-for="index in 20" :key="index">
				<router-link
					to="categories"
					target="_self"
					class="link_internal__uk9WZ link_wrapper__cESXa"
					><div class="styles_categoryIcon__ymR3o">
						<img
							src="https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/banks.svg"
							class="styles_image__T_TjE"
							alt=""
						/>
					</div>
					<div>
						<p
							class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_body-m__bedfe1 styles_categoryName__wOT5l"
						>
							Bank {{ index }}
						</p>
					</div></router-link
				>
			</div>
			<div class="styles_rightShadowPanel__IzLyQ"></div>
		</div>
	</section>
</template>
