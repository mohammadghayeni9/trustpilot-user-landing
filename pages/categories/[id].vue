<script setup>
import CompanyCard from "~/components/company/CompanyCard.vue";

const changePage = (type) => {
	console.log(type);
	// Logic to change page
}
</script>

<template>
	<main role="main" class="layout_content__z9_o0 mt-20">
		<div class="styles_wrapper__WBuPF">
			<div class="styles_headingWrapper__rn5iN">
				<div
					class="styles_container__a8xsG styles_widthControlled__NBg9c"
				>
					<div class="styles_headings__fDudc">
						<div class="styles_mainHeading__pBWU3">
							<h1
								class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_display-m__bedfe1"
							>
								Best in Events &amp; Entertainment<span
									class="styles_tooltipMobile__U_HRi"
									><span
										><svg
											aria-hidden="true"
											viewBox="0 0 16 16"
											fill="inherit"
											class="CDS_Icon_icon__70b220 CDS_Icon_subtle__70b220"
											xmlns="http://www.w3.org/2000/svg"
											width="12px"
											height="12px"
											role="img"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M7.5 7h-.75V6H8.5v5.502h.75v1h-2.5v-1h.75V7ZM6.75 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
											/></svg></span
								></span>
							</h1>
						</div>
						<div class="styles_subHeading__MqpsI">
							<p
								class="CDS_Typography_appearance-subtle__bedfe1 CDS_Typography_body-l__bedfe1"
							>
								Compare the best companies in this category
							</p>
							<div class="styles_tooltipDesktop__2NlYO">
								<span
									><svg
										aria-hidden="true"
										viewBox="0 0 16 16"
										fill="inherit"
										class="CDS_Icon_icon__70b220 CDS_Icon_subtle__70b220"
										xmlns="http://www.w3.org/2000/svg"
										width="12px"
										height="12px"
										role="img"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M7.5 7h-.75V6H8.5v5.502h.75v1h-2.5v-1h.75V7ZM6.75 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
										/></svg
								></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="styles_body__P7Ur5">
				<aside class="styles_desktop__8o1CJ styles_aside__oh9mp">
					<div
						class="CDS_Card_card__16d1cc CDS_Card_appearance-default__16d1cc CDS_Card_borderRadius-m__16d1cc CDS_Card_padding-l__16d1cc styles_wrapper__5waHO styles_asideItem__2R3ll"
					>
						<fieldset
							class="styles_wrapper__UmHwb styles_fieldset__Bkv0W"
						>
							<legend
								class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-xs__bedfe1 styles_legend__E2evH"
							>
								Rating
							</legend>
							<div
								class="CDS_ButtonToggle_buttonToggle__2081db CDS_ButtonToggle_wide__2081db"
								data-trustscore-filter-button-toggle="true"
							>
								<div class="styles_itemWrapper__dv_sO">
									<label
										class="CDS_Item_item__aff786 CDS_Item_m__aff786 CDS_Item_checked__aff786 CDS_Item_wide__aff786 CDS_Item_button-toggle-icon__aff786 !rounded-md !border"
										><input
											type="radio"
											name="trustscore-filter"
											class="CDS_Item_input__aff786"
											checked=""
										/><span
											class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-xxs__bedfe1 CDS_Item_label__aff786"
											><span
												class="styles_buttonInner___CrOh"
												><span
													class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_heading-xxs__bedfe1"
													>Any</span
												></span
											></span
										></label
									><label
										class="CDS_Item_item__aff786 CDS_Item_m__aff786 CDS_Item_wide__aff786 CDS_Item_button-toggle-icon__aff786 !rounded-md !border"
										><input
											type="radio"
											name="trustscore-filter"
											class="CDS_Item_input__aff786"
										/><span
											class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-xxs__bedfe1 CDS_Item_label__aff786"
											><span
												class="styles_buttonInner___CrOh"
												><svg
													aria-hidden="true"
													viewBox="0 0 16 16"
													fill="inherit"
													class="CDS_Icon_icon__70b220 CDS_Icon_inherit__70b220"
													xmlns="http://www.w3.org/2000/svg"
													width="16px"
													height="16px"
													role="img"
												>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M9.88 6.225H16l-4.929 3.504-3.047 2.149-4.953 3.504L4.952 9.73 0 6.225h6.119L8 .572l1.881 5.653Zm1.596 4.812L8 11.9l4.929 3.527-1.453-4.392Z"
													/></svg
												><span
													class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_heading-xxs__bedfe1 mt-1"
													>3.0<!-- -->+</span
												></span
											></span
										></label
									><label
										class="CDS_Item_item__aff786 CDS_Item_m__aff786 CDS_Item_wide__aff786 CDS_Item_button-toggle-icon__aff786 !rounded-md !border"
										><input
											type="radio"
											name="trustscore-filter"
											class="CDS_Item_input__aff786"
										/><span
											class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-xxs__bedfe1 CDS_Item_label__aff786"
											><span
												class="styles_buttonInner___CrOh"
												><svg
													aria-hidden="true"
													viewBox="0 0 16 16"
													fill="inherit"
													class="CDS_Icon_icon__70b220 CDS_Icon_inherit__70b220"
													xmlns="http://www.w3.org/2000/svg"
													width="16px"
													height="16px"
													role="img"
												>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M9.88 6.225H16l-4.929 3.504-3.047 2.149-4.953 3.504L4.952 9.73 0 6.225h6.119L8 .572l1.881 5.653Zm1.596 4.812L8 11.9l4.929 3.527-1.453-4.392Z"
													/></svg
												><span
													class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_heading-xxs__bedfe1 mt-1"
													>4.0<!-- -->+</span
												></span
											></span
										></label
									><label
										class="CDS_Item_item__aff786 CDS_Item_m__aff786 CDS_Item_wide__aff786 CDS_Item_button-toggle-icon__aff786 !rounded-md !border"
										><input
											type="radio"
											name="trustscore-filter"
											class="CDS_Item_input__aff786"
										/><span
											class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-xxs__bedfe1 CDS_Item_label__aff786"
											><span
												class="styles_buttonInner___CrOh"
												><svg
													aria-hidden="true"
													viewBox="0 0 16 16"
													fill="inherit"
													class="CDS_Icon_icon__70b220 CDS_Icon_inherit__70b220"
													xmlns="http://www.w3.org/2000/svg"
													width="16px"
													height="16px"
													role="img"
												>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M9.88 6.225H16l-4.929 3.504-3.047 2.149-4.953 3.504L4.952 9.73 0 6.225h6.119L8 .572l1.881 5.653Zm1.596 4.812L8 11.9l4.929 3.527-1.453-4.392Z"
													/></svg
												><span
													class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_heading-xxs__bedfe1 mt-1"
													>4.5<!-- -->+</span
												></span
											></span
										></label
									>
								</div>
							</div>
						</fieldset>
						<fieldset
							class="styles_wrapper__UmHwb styles_fieldset__Bkv0W"
						>
							<legend
								class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-xs__bedfe1 styles_legend__E2evH"
							>
								Location
							</legend>
							<div class="CDS_Select_wrapper__ee64e4">
								<select
									class="CDS_Select_select__ee64e4 CDS_Select_select--l__ee64e4"
									aria-invalid="false"
									aria-label="Country"
									name="country-selector-filter"
									data-country-selector-filter-select="true"
								>
									<option value="ZW">Zimbabwe</option></select
								><svg
									aria-hidden="true"
									viewBox="0 0 20 20"
									fill="inherit"
									class="CDS_Icon_icon__70b220 CDS_Icon_default__70b220 CDS_Select_icon__ee64e4"
									xmlns="http://www.w3.org/2000/svg"
									width="16px"
									height="16px"
									role="img"
								>
									<path
										fill-rule="evenodd"
										d="m0 5 10 10L20 5z"
									/>
								</svg>
							</div>
						</fieldset>
						<fieldset
							class="styles_wrapper__UmHwb styles_fieldset__Bkv0W styles_companyStatusFilters__qmmLA"
						>
							<legend
								class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-xs__bedfe1 styles_legend__E2evH"
							>
								Company status
							</legend>
							<div class="styles_fields__Am4kT">
								<label
									class="CDS_Label_label__83f8d3 CDS_Label_l__83f8d3 CDS_Label_default__83f8d3 styles_item__tWoe3"
									><span
										class="CDS_Typography_appearance-subtle__bedfe1 CDS_Typography_default__bedfe1 styles_label__ezbI1"
										>Claimed
										<input
											class="CDS_Checkbox_checkbox__c6fe1b !mr-auto !ml-0"
											type="checkbox"
											data-claimed-checkbox="true" /></span
								></label>
							</div>
						</fieldset>
						<fieldset
							class="styles_wrapper__UmHwb styles_fieldset__Bkv0W"
						>
							<legend
								class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-xs__bedfe1 styles_legend__E2evH styles_heading__OE3ay"
							>
								<span
									class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-xs__bedfe1"
									>Subcategories</span
								><button
									class="CDS_Typography_appearance-action__bedfe1 CDS_Typography_body-m__bedfe1 CDS_Link_link__78952a styles_button__k6f50 CDS_Link_asButton__78952a CDS_Link_noUnderline__78952a"
									name="see more"
									data-see-more-button="true"
								>
									Show all
								</button>
							</legend>
							<div class="styles_fields__TezKH">
								<label
									class="styles_label__nIBzN"
									for="desktop-adult_entertainment"
									><span
										class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_body-m__bedfe1 styles_labelText__a2N_4"
										>Adult Entertainment</span
									><input
										id="desktop-adult_entertainment"
										type="checkbox"
										name="subcategories"
										class="styles_input__L6ltM"
										value="adult_entertainment" /></label
								><label
									class="styles_label__nIBzN"
									for="desktop-childrens_entertainment"
									><span
										class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_body-m__bedfe1 styles_labelText__a2N_4"
										>Children&#x27;s Entertainment</span
									><input
										id="desktop-childrens_entertainment"
										type="checkbox"
										name="subcategories"
										class="styles_input__L6ltM"
										value="childrens_entertainment" /></label
								><label
									class="styles_label__nIBzN"
									for="desktop-clubbing_nightlife"
									><span
										class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_body-m__bedfe1 styles_labelText__a2N_4"
										>Clubbing &amp; Nightlife</span
									><input
										id="desktop-clubbing_nightlife"
										type="checkbox"
										name="subcategories"
										class="styles_input__L6ltM"
										value="clubbing_nightlife" /></label
								><label
									class="styles_label__nIBzN"
									for="desktop-events_venues"
									><span
										class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_body-m__bedfe1 styles_labelText__a2N_4"
										>Events &amp; Venues</span
									><input
										id="desktop-events_venues"
										type="checkbox"
										name="subcategories"
										class="styles_input__L6ltM"
										value="events_venues" /></label
								><label
									class="styles_label__nIBzN"
									for="desktop-gambling"
									><span
										class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_body-m__bedfe1 styles_labelText__a2N_4"
										>Gambling</span
									><input
										id="desktop-gambling"
										type="checkbox"
										name="subcategories"
										class="styles_input__L6ltM"
										value="gambling" /></label
								><label
									class="styles_label__nIBzN"
									for="desktop-gaming"
									><span
										class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_body-m__bedfe1 styles_labelText__a2N_4"
										>Gaming</span
									><input
										id="desktop-gaming"
										type="checkbox"
										name="subcategories"
										class="styles_input__L6ltM"
										value="gaming" /></label
								><label
									class="styles_label__nIBzN"
									for="desktop-museums_exibits"
									><span
										class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_body-m__bedfe1 styles_labelText__a2N_4"
										>Museums &amp; Exhibits</span
									><input
										id="desktop-museums_exibits"
										type="checkbox"
										name="subcategories"
										class="styles_input__L6ltM"
										value="museums_exibits" /></label
								><label
									class="styles_label__nIBzN"
									for="desktop-music_movies"
									><span
										class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_body-m__bedfe1 styles_labelText__a2N_4"
										>Music &amp; Movies</span
									><input
										id="desktop-music_movies"
										type="checkbox"
										name="subcategories"
										class="styles_input__L6ltM"
										value="music_movies" /></label
								><label
									class="styles_label__nIBzN"
									for="desktop-theater_opera"
									><span
										class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_body-m__bedfe1 styles_labelText__a2N_4"
										>Theater &amp; Opera</span
									><input
										id="desktop-theater_opera"
										type="checkbox"
										name="subcategories"
										class="styles_input__L6ltM"
										value="theater_opera"
								/></label>
							</div>
						</fieldset>
					</div>
				</aside>
				<div class="styles_main__Yq3xN">
					<section class="styles_feed__Ni7ie">
						<div
							class="styles_sticky__aPlXt styles_mobileFilters__qfKRF"
						>
							<div class="button-toggle_container__s_V95">
								<button
									name="open-filters"
									class="styles_filterButton__CvWu6 styles_button__gS0Cz button-toggle_large__7pIpS"
									data-mobile-filters-filter-button="true"
								>
									<span
										class="typography_heading-xxs__UmE9o typography_appearance-inherit__YnCNb"
										>Filter by</span
									><svg
										viewBox="0 0 16 16"
										fill="inherit"
										class="icon_icon__RdICC icon_appearance-inherit__MeZek"
										xmlns="http://www.w3.org/2000/svg"
										width="16px"
										height="16px"
									>
										<g
											clip-path="url(#a)"
											fill-rule="evenodd"
											clip-rule="evenodd"
										>
											<path
												d="M6 13a3 3 0 1 1-3.5-2.959V0h1v10.041A3 3 0 0 1 6 13Zm-1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12.5 5.959V16h1V5.959a3 3 0 1 0-1 0ZM13.002 5h-.004a2 2 0 1 1 .004 0Z"
											/>
										</g>
										<defs>
											<clipPath id="a">
												<path
													transform="rotate(-180 8 8)"
													d="M0 0h16v16H0z"
												/>
											</clipPath>
										</defs>
									</svg></button
								><button
									name="open-sort"
									class="styles_button__gS0Cz button-toggle_large__7pIpS"
									data-mobile-filters-sort-button="true"
								>
									<span
										class="typography_heading-xxs__UmE9o typography_appearance-inherit__YnCNb"
										>Sort by</span
									><svg
										viewBox="0 0 16 16"
										fill="inherit"
										class="icon_icon__RdICC icon_appearance-inherit__MeZek"
										xmlns="http://www.w3.org/2000/svg"
										width="16px"
										height="16px"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M11 7H5l3-4 3 4Zm0 2-3 4-3-4h6Z"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div class="styles_feedHeading__ISp_w">
							<p
								class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_body-m__bedfe1"
								data-results-count-typography="true"
							>
								1<!-- -->-<!-- -->20<!-- -->
								of
								<!-- -->10,000<!-- -->
								results
							</p>
							<div
								class="styles_container__PwKKt styles_desktop__8o1CJ"
							>
								<label
									class="CDS_Label_label__83f8d3 CDS_Label_m__83f8d3 CDS_Label_default__83f8d3 styles_label__gqJCL"
									for="category-sort-options-desktop"
									>Sort by</label
								>
								<div class="CDS_Select_wrapper__ee64e4">
									<select
										class="CDS_Select_select__ee64e4 CDS_Select_select--l__ee64e4"
										id="category-sort-options-desktop"
										aria-invalid="false"
										name="category-sort-options"
										data-category-sort-options-select="true"
									>
										<option value="recommended">
											Most relevant
										</option>
										<option
											value="reviews_count"
											selected=""
										>
											Highest number of reviews
										</option>
										<option value="latest_review">
											Most recent reviews
										</option></select
									><svg
										aria-hidden="true"
										viewBox="0 0 20 20"
										fill="inherit"
										class="CDS_Icon_icon__70b220 CDS_Icon_default__70b220 CDS_Select_icon__ee64e4"
										xmlns="http://www.w3.org/2000/svg"
										width="16px"
										height="16px"
										role="img"
									>
										<path
											fill-rule="evenodd"
											d="m0 5 10 10L20 5z"
										/>
									</svg>
								</div>
							</div>
						</div>
						<CompanyCard />
						<div
							class="styles_paginationWrapper__B0Vxg styles_pagination__U6Zyt"
						>
							<Pagination
								:pageNumber="1"
								@changePage="changePage" />
						</div>
					</section>
					<div class="styles_wrapper__eYRP_ styles_afterFeed__YuK0F">
						<h2
							class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-s__bedfe1 styles_widgetHeading__oPvzp"
						>
							Popular searches
						</h2>
						<ul class="styles_list__EtKNN">
							<li class="styles_item__MO3r5">
								<router-link
									class="CDS_Button_button__6251b5 CDS_Button_m__6251b5 CDS_Button_appearance-outline__6251b5 CDS_Button_squared__6251b5"
									to="#"
									><span
										class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_heading-xxs__bedfe1 CDS_Typography_disableResponsiveSizing__bedfe1 CDS_Button_buttonText__6251b5"
										><span
											class="CDS_Button_iconSpan__6251b5"
										></span
										><span
											class="CDS_Typography_appearance-inherit__bedfe1 CDS_Typography_heading-xxs__bedfe1 styles_link__f_9so"
											><svg
												aria-hidden="true"
												viewBox="0 0 16 16"
												fill="inherit"
												class="CDS_Icon_icon__70b220 CDS_Icon_inherit__70b220"
												xmlns="http://www.w3.org/2000/svg"
												width="14px"
												height="14px"
												role="img"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M3 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM6.75 2a4.75 4.75 0 1 0 2.987 8.444l3.91 3.91.707-.708-3.91-3.91A4.75 4.75 0 0 0 6.75 2Z"
												/></svg
											>Gaming service Provider</span
										></span
									></router-link
								>
							</li>
						</ul>
					</div>
					<div class="styles_afterFeed__YuK0F">
						<h2
							class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-s__bedfe1 styles_widgetHeading__oPvzp"
						>
							Recently reviewed companies
						</h2>
						<div
							class="styles_carouselWrapper__I9HkL styles_carousel__f3fYT"
						>
							<div
								class="styles_carousel__23TCJ styles_carouselInner__mG9Au"
							>
								<div
									class="CDS_Card_card__16d1cc CDS_Card_appearance-default__16d1cc CDS_Card_borderRadius-m__16d1cc styles_card__Fhaew ml-4"
								>
									<router-link
										to="#"
										class="link_internal__Eam_b link_wrapper__ahpyq styles_businessCard__epR7N"
										><p
											class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_heading-xs__bedfe1 styles_displayName__NDmTK"
										>
											CDKeys.com
										</p>
										<div class="styles_rating__wt_dj">
											<img
												class="CDS_StarRating_starRating__8ae3cf"
												alt="TrustScore 5 out of 5"
												width="84px"
												src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
											/>
											<p
												class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_body-s__bedfe1 styles_ratingStats__MjBGX"
											>
												<span
													class="styles_trustScore__dRMDX"
													>4.8</span
												><span
													class="styles_ratingSeparator__qZ0Y9"
												>
													| </span
												>199,655<!-- -->
												reviews
											</p>
										</div>
										<div class="styles_wrapper__Ql1Zx">
											<span
												class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_body-s__bedfe1"
												>Gaming service Provider</span
											>
										</div>
										<div class="styles_footer__gPm_o">
											<div
												class="styles_reviewCardWrapper__4keTI"
											>
												<div
													class="styles_reviewCard__QAUbT"
												>
													<p
														class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_body-s__bedfe1"
													>
														<time
															datetime="2025-03-30T10:25:50.000Z"
															class=""
															>An hour ago</time
														>
													</p>
													<div
														class="styles_reviewRow__9YWma"
													>
														<div
															class="CDS_Avatar_imageWrapper__168d80"
															style="
																width: 32px;
																height: 32px;
																min-width: 32px;
																min-height: 32px;
															"
														>
															<img
																alt=""
																loading="lazy"
																width="32"
																height="32"
																decoding="async"
																data-nimg="1"
																style="
																	color: transparent;
																"
																src="https://user-images.trustpilot.com/67e9000989ee14d2c44e56ac/73x73.png"
															/>
														</div>
														<img
															class="CDS_StarRating_starRating__8ae3cf"
															alt="Rated 1 out of 5 stars"
															width="84px"
															src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-1.svg"
														/>
													</div>
													<p
														class="CDS_Typography_appearance-default__bedfe1 CDS_Typography_body-m__bedfe1 styles_reviewBody__Ym1yO"
													>
														Bought a game which is
														compatible with my
														console as i already
														have games.undwr the
														same compatibility,
														wouldn&#x27;t install as
														said incompatible, sent
														screenshot showing that
														I had other games with
														the same compatibility,
														refused refund, the game
														is listed as compatible
														for my console but
														clearly cdkeys have
														conned others into the
														same problem as its
														listed wrong.
													</p>
												</div>
											</div>
										</div></router-link
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped lang="scss">
.styles_wrapper__uvNWg {
	position: relative;
	display: flex;
	padding: 0;
	margin: 0;
}
.styles_badge__oQ9m4 {
	position: absolute;
	top: -2px;
	right: -5px;
	line-height: 14px;
}
.styles_badge__oQ9m4 svg {
	fill: #068861;
}
.styles_badge__oQ9m4 svg path:first-child {
	stroke: #fff;
}
.styles_badge__oQ9m4 svg path:last-child {
	fill: #fff;
}
@keyframes styles_placeHolderShimmer__bZhlz {
	0% {
		background-position: -468px 0;
	}
	to {
		background-position: 468px 0;
	}
}
.styles_skeleton__V2M8B {
	height: 16px;
	background-color: #f2f2f5;
	will-change: background;
	animation: styles_placeHolderShimmer__bZhlz 2s linear infinite normal
		forwards;
	background: #f2f2f5;
	background: linear-gradient(90deg, #f2f2f5 8%, #dcdce6 18%, #f2f2f5 33%);
	background-size: 1000px 100px;
	position: relative;
	box-sizing: border-box;
}
.styles_wrapper__Ql1Zx {
	font-size: 12px;
	font-size: 0.75rem;
	line-height: 16px;
	line-height: 1rem;
	color: #1b1b21;
	font-weight: 400;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.styles_wrapper__Ql1Zx .styles_categoriesBullet__WDS9E {
	margin: 0 8px;
}
.styles_card__Fhaew {
	overflow: visible;
	width: 264px;
}
.styles_card__Fhaew + .styles_card__Fhaew {
	margin-left: 16px;
}
.styles_businessCard__epR7N {
	min-width: 264px;
	padding: 16px;
	display: flex;
	flex-direction: column;
}
.styles_businessCard__epR7N .styles_displayName__NDmTK {
	margin-bottom: 8px;
	overflow: hidden;
	text-overflow: ellipsis;
}
.styles_businessCard__epR7N .styles_rating__wt_dj {
	display: flex;
	margin-bottom: 8px;
}
.styles_businessCard__epR7N .styles_rating__wt_dj > :first-child {
	flex: 0 0 auto;
	margin-left: 8px;
	min-width: 0;
}
.styles_businessCard__epR7N .styles_rating__wt_dj > :first-child > img {
	width: auto;
}
.styles_businessCard__epR7N
	.styles_rating__wt_dj
	.styles_trustScore__dRMDX
	> * {
	font-weight: inherit;
}
.styles_businessCard__epR7N
	.styles_rating__wt_dj
	.styles_ratingSeparator__qZ0Y9 {
	color: #dcdce6;
}
.styles_businessCard__epR7N .styles_footer__gPm_o {
	margin-top: auto;
}
.styles_reviewCardWrapper__4keTI {
	padding-top: 32px;
}
.styles_reviewCard__QAUbT {
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	border: 1px solid #dcdce6;
	padding: 16px;
}
.styles_reviewCard__QAUbT .styles_reviewRow__9YWma {
	margin-top: 12px;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
}
.styles_reviewCard__QAUbT .styles_reviewRow__9YWma > :first-child {
	margin-left: 8px;
}
.styles_reviewCard__QAUbT .styles_reviewBody__Ym1yO {
	display: -webkit-box;
	line-clamp: 2;
	word-break: break-all;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 2.5rem;
}
.styles_locationDivider__6RlO4 {
	margin-top: 32px;
	margin-bottom: 16px;
}
.styles_location__qX5Ek {
	display: flex;
	align-items: center;
}
.styles_location__qX5Ek > svg {
	flex: 0 0 auto;
	margin-right: 12px;
}
.styles_location__qX5Ek .styles_locationText__DL70e,
.styles_ratingStats__MjBGX {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.styles_container__a8xsG {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}
@media only screen and (min-width: 1024px) {
	.styles_container__a8xsG {
		min-height: 230px;
	}
}
.styles_container__a8xsG svg {
	fill: currentColor;
}
.styles_breadcrumbs__qcVjJ {
	margin-bottom: auto;
}
.styles_headings__fDudc {
	margin-top: 48px;
	margin-bottom: 48px;
	text-align: center;
}
.styles_breadcrumbs__qcVjJ + .styles_headings__fDudc {
	margin-top: 0;
}
@media only screen and (min-width: 1024px) {
	.styles_headings__fDudc {
		margin-top: 24px;
		margin-bottom: 56px;
	}
}
.styles_mainHeading__pBWU3 {
	align-items: center;
	display: flex;
	justify-content: center;
}
@media only screen and (min-width: 1024px) {
	.styles_mainHeading__pBWU3 {
		margin-bottom: 8px;
	}
}
.styles_subHeading__MqpsI {
	display: none;
}
@media only screen and (min-width: 1024px) {
	.styles_subHeading__MqpsI {
		align-items: center;
		display: flex;
		justify-content: center;
	}
}
.styles_tooltipDesktop__2NlYO {
	display: none;
}
@media only screen and (min-width: 1024px) {
	.styles_tooltipDesktop__2NlYO {
		display: inline;
		margin: 0 8px;
	}
}
.styles_tooltipMobile__U_HRi:before {
	content: " ";
	white-space: nowrap;
}
@media only screen and (min-width: 1024px) {
	.styles_tooltipMobile__U_HRi {
		display: none;
	}
}
.styles_container__PwKKt {
	align-items: center;
	display: flex;
	justify-content: flex-end;
}
.styles_container__PwKKt .styles_label__gqJCL {
	margin-left: 8px;
}
.styles_wrapper__UmHwb {
	border: none;
}
.styles_legend__E2evH {
	margin-bottom: 16px;
}
.styles_wrapper__ORH3s .styles_inputWrapper__KjVEK {
	position: relative;
}
.styles_wrapper__ORH3s .styles_inputWrapper__KjVEK .styles_inputIcon__eb1WH {
	position: absolute;
	display: flex;
	align-items: center;
	height: 100%;
	box-sizing: content-box;
	color: var(--CDS-color-semantic-surface-foreground-subtle);
}
.styles_wrapper__ORH3s .styles_inputWrapper__KjVEK .styles_searchIcon__FZAyd {
	padding-left: 13px;
}
.styles_wrapper__ORH3s .styles_inputWrapper__KjVEK input[type="search"] {
	padding-left: var(--CDS-spacing-xxl);
	padding-right: var(--CDS-spacing-xl);
	-webkit-appearance: none;
	-moz-appearance: none;
}
.styles_wrapper__ORH3s
	.styles_inputWrapper__KjVEK
	input[type="search"]::-webkit-search-cancel-button {
	display: none;
}
.styles_wrapper__ORH3s .styles_inputWrapper__KjVEK .styles_crossIcon__ZMP38 {
	top: 0;
	right: 0;
	padding-left: 12px;
	padding-right: 12px;
	background: none;
	border: none;
	cursor: pointer;
}
.styles_heading__OE3ay {
	width: 100%;
}
.styles_heading__OE3ay,
.styles_label__nIBzN {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.styles_label__nIBzN {
	flex-wrap: nowrap;
	position: relative;
	padding: 0 var(--CDS-spacing-m);
	height: var(--CDS-spacing-xxl);
	border: 1px solid var(--CDS-color-semantic-surface-foreground-subtle);
	border-radius: var(--CDS-border-radius-s);
	color: var(--CDS-color-semantic-surface-foreground-default);
	overflow: hidden;
}
.styles_label__nIBzN.styles_checked__0Mtrr {
	background-color: var(--CDS-color-semantic-actions-surface);
	border-color: var(--CDS-color-semantic-actions-default);
	color: var(--CDS-color-semantic-actions-default);
}
.styles_label__nIBzN.styles_checked__0Mtrr > .styles_labelText__a2N_4 {
	width: calc(100% - 14px);
}
.styles_label__nIBzN:hover {
	border-color: var(--CDS-color-semantic-actions-surface-hover);
	background-color: var(--CDS-color-semantic-actions-surface-hover);
	color: var(--CDS-color-semantic-surface-foreground-default);
	cursor: pointer;
}
.styles_label__nIBzN:focus-within {
	outline: 2px solid var(--CDS-color-semantic-actions-default);
	outline-offset: 2px;
}
@media not all and (-webkit-min-device-pixel-ratio: 0),
	not all and (min-resolution: 0.001dpcm) {
	@supports (-webkit-appearance: none) {
		.styles_label__nIBzN:focus-within {
			outline-style: auto;
		}
	}
}
.styles_label__nIBzN > .styles_labelText__a2N_4 {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.styles_label__nIBzN > .styles_input__L6ltM {
	height: 0;
	opacity: 0;
	width: 0;
	margin: 0;
	position: absolute;
}
.styles_iconWrapper__mA4GF {
	position: absolute;
	right: var(--CDS-spacing-m);
	display: flex;
	align-items: center;
}
.styles_iconWrapper__mA4GF svg {
	height: 14px;
	width: 14px;
}
.styles_iconActive__QEgIq svg {
	color: var(--CDS-color-semantic-actions-default);
}
.styles_fields__TezKH {
	display: flex;
	flex-wrap: wrap;
	gap: var(--CDS-spacing-s) var(--CDS-spacing-xs);
}
.styles_fields__TezKH + .styles_button__k6f50 {
	margin-top: var(--CDS-spacing-xs);
}
.styles_buttonInner___CrOh,
.styles_itemWrapper__dv_sO {
	display: flex;
	align-items: center;
}
.styles_itemWrapper__dv_sO {
	width: 100%;
}
.styles_itemWrapper__dv_sO label {
	width: 100%;
	justify-content: center;
	padding: 0 8px !important;
}
.styles_buttonInner___CrOh svg {
	fill: currentColor;
	margin: 0 0 0 var(--CDS-spacing-xxs);
}
.styles_wrapper__5waHO .styles_fieldset__Bkv0W + .styles_fieldset__Bkv0W {
	margin-top: 24px;
}
.styles_wrapper__5waHO .styles_fieldset__Bkv0W {
	min-width: 0;
}
.styles_wrapper__5waHO .styles_fieldset__Bkv0W .styles_locationField__uDjqX {
	margin-top: 16px;
}
.styles_wrapper__5waHO .styles_companyStatusFilters__qmmLA {
	border-bottom: 1px solid #f2f2f5;
}
.styles_wrapper__5waHO .styles_companyStatusFilters__qmmLA:last-child {
	border-bottom: none;
}
.styles_fieldset__EEUTw + .styles_fieldset__EEUTw {
	margin-top: 24px;
}
.styles_fieldset__EEUTw {
	min-width: 0;
}
.styles_fieldset__EEUTw .styles_locationField__J1OAy {
	margin-top: 16px;
}
.styles_companyStatusFilters__DXzyy {
	border-bottom: 1px solid #f2f2f5;
}
.styles_companyStatusFilters__DXzyy:last-child {
	border-bottom: none;
}
.styles_sortOption__tgmOa {
	border-bottom: 1px solid #f2f2f5;
	padding-top: 16px;
	padding-bottom: 16px;
}
.styles_sortOption__tgmOa:last-child {
	border-bottom: none;
	margin-bottom: none;
}
.styles_sortOption__tgmOa .styles_radio__lT5aB {
	align-items: center;
	display: flex;
	justify-content: space-between;
}
.styles_sortOption__tgmOa .styles_description__OajHd {
	margin-top: 8px;
}
.styles_wrapper__WBuPF {
	display: flex;
	flex-direction: column;
	background-color: var(--CDS-color-semantic-surface-background-default);
	color: var(--CDS-color-semantic-surface-foreground-default);
}
.styles_wrapper__WBuPF .styles_desktop__8o1CJ {
	display: none;
}
@media only screen and (min-width: 1024px) {
	.styles_wrapper__WBuPF .styles_desktop__8o1CJ {
		display: flex;
	}
}
.styles_body__P7Ur5,
.styles_heading__9P6Wk,
.styles_widthControlled__NBg9c {
	width: 100%;
	padding: 0 16px;
}
@media only screen and (min-width: 1024px) {
	.styles_body__P7Ur5,
	.styles_heading__9P6Wk,
	.styles_widthControlled__NBg9c {
		padding: 0 48px;
		max-width: 1304px;
		margin: 0 auto;
	}
}
.styles_headingWrapper__rn5iN {
	border-bottom: 1px solid var(--CDS-color-semantic-border-default);
	background-color: var(--CDS-color-semantic-surface-default);
}
.styles_heading__9P6Wk {
	padding-top: 16px;
	padding-bottom: 16px;
}
@media only screen and (min-width: 1024px) {
	.styles_heading__9P6Wk {
		padding-top: 24px;
		padding-bottom: 56px;
	}
}
.styles_body__P7Ur5 {
	display: flex;
	flex-direction: column;
	padding-top: 24px;
	padding-bottom: 40px;
}
@media only screen and (min-width: 1024px) {
	.styles_body__P7Ur5 {
		padding-top: 48px;
		padding-bottom: 80px;
		flex-direction: row;
		gap: 48px;
	}
	.styles_body__P7Ur5 .styles_aside__oh9mp {
		max-width: 328px;
	}
	.styles_body__P7Ur5 .styles_main__Yq3xN {
		flex: 1 1;
		min-width: 0;
	}
}
.styles_aside__oh9mp {
	display: flex;
	flex-direction: column;
}
.styles_aside__oh9mp .styles_asideItem__2R3ll {
	padding-top: 32px;
	padding-bottom: 32px;
}
.styles_aside__oh9mp .styles_asideItem__2R3ll + .styles_asideItem__2R3ll {
	margin-top: 16px;
}
.styles_main__Yq3xN {
	display: flex;
	flex-direction: column;
}
.styles_main__Yq3xN .styles_afterFeed__YuK0F {
	margin-top: 40px;
}
.styles_main__Yq3xN .styles_carouselWrapper__K9b16 > :first-child {
	margin-top: 0;
}
.styles_main__Yq3xN .styles_carouselWrapper__K9b16 > :last-child {
	margin-bottom: 0;
}
.styles_feedHeading__ISp_w {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.styles_feed__Ni7ie > * + * {
	margin-top: 12px;
}
@media only screen and (min-width: 1024px) {
	.styles_feed__Ni7ie .styles_pagination__U6Zyt {
		margin-top: 72px;
		margin-bottom: 24px;
	}
}
.styles_widgetHeading__oPvzp {
	margin-bottom: 12px;
}
@media only screen and (min-width: 1024px) {
	.styles_widgetHeading__oPvzp {
		margin-bottom: 32px;
	}
}
.styles_mobileFilters__qfKRF {
	background-color: var(--CDS-color-semantic-surface-background-default);
	padding: 16px;
	margin-top: -24px;
	margin-left: -16px;
	margin-right: -16px;
	transition: box-shadow 0.1s;
}
.styles_mobileFilters__qfKRF.styles_stuck__cgTqj {
	background-color: var(--CDS-color-semantic-surface-default);
	box-shadow: var(--CDS-box-shadow-30);
}
@media only screen and (min-width: 1024px) {
	.styles_mobileFilters__qfKRF {
		display: none;
	}
}
.styles_spinner__BuGk_ {
	width: 128px;
	height: 128px;
	background: var(--CDS-color-semantic-surface-default);
	border-radius: 16px;
	box-shadow: var(--CDS-box-shadow-80);
	padding: 40px;
	position: fixed;
	z-index: 99;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.styles_paginationWrapper__B0Vxg > nav {
	padding: 0;
}
.styles_paginationWrapper__B0Vxg > nav > a:first-child,
.styles_paginationWrapper__B0Vxg > nav > a:last-child {
	white-space: unset;
}
.styles_carousel__f3fYT {
	margin-left: -16px;
	margin-right: -16px;
}
.styles_carousel__f3fYT .styles_carouselInner__mG9Au {
	scroll-padding: 0 16px;
	padding: 0 16px 8px;
}
@media only screen and (min-width: 1024px) {
	.styles_carousel__f3fYT {
		margin-left: 0;
		margin-right: 0;
	}
	.styles_carousel__f3fYT .styles_carouselInner__mG9Au {
		scroll-padding: 0;
		padding: 0;
	}
}
.styles_wrapper__eYRP_ .styles_list__EtKNN {
	list-style: none;
	display: flex;
	flex-wrap: nowrap;
	gap: 12px;
	overflow-x: scroll;
	margin-left: -16px;
	margin-right: -16px;
	padding-bottom: 8px;
}
.styles_wrapper__eYRP_ .styles_list__EtKNN > .styles_item__MO3r5:first-child {
	margin-left: 16px;
}
.styles_wrapper__eYRP_ .styles_list__EtKNN > .styles_item__MO3r5:last-child {
	margin-right: 16px;
}
@media only screen and (min-width: 1024px) {
	.styles_wrapper__eYRP_ .styles_list__EtKNN {
		margin-left: 0;
		margin-right: 0;
		overflow-x: hidden;
		overflow-y: auto;
		flex-wrap: wrap;
	}
	.styles_wrapper__eYRP_
		.styles_list__EtKNN
		> .styles_item__MO3r5:first-child {
		margin-left: 0;
	}
	.styles_wrapper__eYRP_
		.styles_list__EtKNN
		> .styles_item__MO3r5:last-child {
		margin-right: 0;
	}
}
.styles_wrapper__eYRP_ .styles_item__MO3r5 {
	padding: 0;
	margin: 0;
	flex: 0 0 auto;
}
.styles_wrapper__eYRP_ .styles_link__f_9so {
	display: flex;
	align-items: center;
}
.styles_wrapper__eYRP_ .styles_link__f_9so svg {
	margin-left: 8px;
}
.styles_mobile__bvM5v {
	display: block;
}
@media only screen and (min-width: 1024px) {
	.styles_mobile__bvM5v {
		display: none;
	}
}
.styles_desktop__FT1Bb {
	display: none;
}
@media only screen and (min-width: 1024px) {
	.styles_desktop__FT1Bb {
		display: block;
	}
}
.styles_header__t6mgb {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.styles_categories__H3jqf {
	list-style-type: none;
}
.styles_category___zQAn {
	color: #454554;
	border-bottom: 1px solid #f2f2f5;
}
.styles_category___zQAn:first-child .styles_categoryLink__IfdvC {
	padding-top: 8px;
}
.styles_category___zQAn:last-child .styles_categoryLink__IfdvC {
	padding-bottom: 0;
}
.styles_category___zQAn:last-child {
	border-bottom: none;
}
.styles_category___zQAn .styles_categoryLink__IfdvC {
	display: flex;
	justify-content: space-between;
	padding-top: 12px;
	padding-bottom: 12px;
}
.styles_category___zQAn .styles_categoryLink__IfdvC > b {
	font-weight: 500;
}
.styles_category___zQAn .styles_categoryLink__IfdvC:active,
.styles_category___zQAn .styles_categoryLink__IfdvC:hover {
	text-decoration: none;
}
.styles_sticky__aPlXt {
	position: -webkit-sticky;
	position: sticky;
	top: -1px;
	z-index: 80;
}
.styles_tooltipWrapper__X5Q1R {
	display: inline;
	margin: 0 8px;
	text-align: left;
}
.styles_wrapper__90tpR {
	font-size: 14px;
	font-size: 0.875rem;
	line-height: 20px;
	line-height: 1.25rem;
	color: #454554;
	font-weight: 400;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.styles_wrapper__90tpR .styles_categoriesBullet__bu6wI {
	margin: 0 8px;
}
.styles_iconWrapper__offmB {
	border: none;
	background: none;
	display: flex;
	align-items: center;
	padding: 4px;
	color: var(--CDS-color-semantic-surface-foreground-default);
}
.styles_iconWrapper__offmB:hover {
	cursor: pointer;
}
.styles_iconWrapper__offmB:focus,
.styles_iconWrapper__offmB:hover {
	color: var(--CDS-color-semantic-actions-default);
}
.styles_iconWrapper__offmB > svg + svg {
	margin-left: 12px;
}
.styles_modalDisplayName__71xW1,
.styles_tooltipTitle__PNT7e {
	color: #1b1b21;
	margin-bottom: 16px;
}
.styles_modalDisplayName__71xW1 {
	display: none;
}
[role="dialog"] .styles_modalDisplayName__71xW1 {
	display: block;
}
.styles_list__2Yton {
	list-style: none;
}
.styles_list__2Yton .styles_item__9pNrw {
	color: #1b1b21;
	display: flex;
	padding: 16px 0;
	border-top: 1px solid #dcdce6;
}
.styles_list__2Yton .styles_item__9pNrw:last-child {
	padding-bottom: 0;
}
.styles_list__2Yton .styles_item__9pNrw svg {
	margin: 2px 16px 2px 0;
	min-width: 16px;
}
.styles_arrowButton__3zSFX {
	position: absolute;
	right: -48px;
	top: calc(50% - 20px);
	display: none;
}
@media only screen and (max-width: 767.98px) {
	.styles_arrowButton__3zSFX {
		mask-image: linear-gradient(90deg, #000 calc(100% - 64px), transparent),
			linear-gradient(#000, #000);
		mask-position-y: 0, 100%;
		mask-size: auto, 100% 0;
		mask-repeat: no-repeat, no-repeat;
		-webkit-mask-image: linear-gradient(
				90deg,
				#000 calc(100% - 64px),
				transparent
			),
			linear-gradient(#000, #000);
		-webkit-mask-position-y: 0, 100%;
		-webkit-mask-size: auto, 100% 0;
		-webkit-mask-repeat: no-repeat, no-repeat;
	}
}
@media only screen and (min-width: 1024px) {
	.styles_arrowButton__3zSFX {
		display: flex;
	}
}
.styles_arrowButton__3zSFX svg {
	transform: translateX(1px);
}
.styles_arrowButton__3zSFX.styles_left__buZjL {
	right: unset;
	left: -48px;
}
.styles_arrowButton__3zSFX.styles_left__buZjL svg {
	transform: rotate(180deg) translateX(1px);
}
.styles_arrowButton__3zSFX.styles_hidden__WLYfW {
	display: none;
}
.styles_carouselWrapper__I9HkL {
	position: relative;
}
.styles_carouselWrapper__I9HkL .styles_carousel__23TCJ {
	display: flex;
	overflow-x: auto;
	max-width: 100%;
}
.styles_carouselWrapper__I9HkL .styles_carousel__23TCJ.styles_fadeOut__YL7gq {
	mask-image: linear-gradient(90deg, #000 calc(100% - 64px), transparent),
		linear-gradient(#000, #000);
	mask-position-y: 0, 100%;
	mask-size: auto, 100% 0;
	mask-repeat: no-repeat, no-repeat;
	-webkit-mask-image: linear-gradient(
			90deg,
			#000 calc(100% - 64px),
			transparent
		),
		linear-gradient(#000, #000);
	-webkit-mask-position-y: 0, 100%;
	-webkit-mask-size: auto, 100% 0;
	-webkit-mask-repeat: no-repeat, no-repeat;
}
.styles_carouselWrapper__I9HkL
	.styles_carousel__23TCJ.styles_stickyScroll__QgGOo {
	scroll-snap-type: x;
}
.styles_carouselWrapper__I9HkL
	.styles_carousel__23TCJ.styles_stickyScroll__QgGOo
	> * {
	scroll-snap-align: start;
}
@-moz-document url-prefix() {
	.styles_carouselWrapper__I9HkL
		.styles_carousel__23TCJ.styles_stickyScroll__QgGOo
		> * {
		scroll-snap-align: none;
	}
}
@media (hover: none) {
	.styles_carouselWrapper__I9HkL .styles_carousel__23TCJ {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	.styles_carouselWrapper__I9HkL .styles_carousel__23TCJ::-webkit-scrollbar {
		display: none;
	}
}
@media (hover: hover) {
	.styles_carouselWrapper__I9HkL .styles_carousel__23TCJ {
		scrollbar-color: #c5c5d6 #f2f2f5;
		scrollbar-width: thin;
		padding-bottom: 8px;
	}
	.styles_carouselWrapper__I9HkL .styles_carousel__23TCJ::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}
	.styles_carouselWrapper__I9HkL
		.styles_carousel__23TCJ::-webkit-scrollbar-thumb {
		background: #c5c5d6;
		border-radius: 8px;
	}
	.styles_carouselWrapper__I9HkL
		.styles_carousel__23TCJ::-webkit-scrollbar-track {
		background: #f2f2f5;
		border-radius: 8px;
	}
	.styles_carouselWrapper__I9HkL
		.styles_carousel__23TCJ.styles_fadeOut__YL7gq {
		mask-image: linear-gradient(90deg, #000 calc(100% - 64px), transparent),
			linear-gradient(#000, #000);
		mask-position-y: 0, 100%;
		mask-size: auto, 100% 16px;
		mask-repeat: no-repeat, no-repeat;
		-webkit-mask-image: linear-gradient(
				90deg,
				#000 calc(100% - 64px),
				transparent
			),
			linear-gradient(#000, #000);
		-webkit-mask-position-y: 0, 100%;
		-webkit-mask-size: auto, 100% 16px;
		-webkit-mask-repeat: no-repeat, no-repeat;
	}
	.styles_carouselWrapper__I9HkL.styles_withButtons__EkrAd
		.styles_carousel__23TCJ {
		scrollbar-width: none;
		-ms-overflow-style: none;
		padding-bottom: 0;
	}
}
@media (hover: hover) {
	.styles_carouselWrapper__I9HkL.styles_withButtons__EkrAd
		.styles_carousel__23TCJ::-webkit-scrollbar {
		display: none;
	}
	.styles_carouselWrapper__I9HkL.styles_withButtons__EkrAd
		.styles_carousel__23TCJ.styles_fadeOut__YL7gq {
		mask-image: linear-gradient(90deg, #000 calc(100% - 64px), transparent),
			linear-gradient(#000, #000);
		mask-position-y: 0, 100%;
		mask-size: auto, 100% 0;
		mask-repeat: no-repeat, no-repeat;
		-webkit-mask-image: linear-gradient(
				90deg,
				#000 calc(100% - 64px),
				transparent
			),
			linear-gradient(#000, #000);
		-webkit-mask-position-y: 0, 100%;
		-webkit-mask-size: auto, 100% 0;
		-webkit-mask-repeat: no-repeat, no-repeat;
	}
}
.styles_latestReviews__YIzeT {
	transition: height 0.3s ease-in-out;
	height: 208px;
	overflow: hidden;
}
.styles_latestReviews__YIzeT.styles_hide__TJiTg {
	height: 0;
}
.styles_latestReviews__YIzeT .styles_carouselWrapper__fQEr6 {
	margin: 0;
}
.styles_latestReviews__YIzeT
	.styles_carouselWrapper__fQEr6
	.styles_carousel__gr2k4 {
	scroll-padding: 0 16px;
	padding: 0 16px 8px;
}
.styles_latestReviews__YIzeT
	.styles_carouselWrapper__fQEr6
	.styles_carousel__gr2k4
	> .styles_reviewCard__wkLB_:not(:first-child) {
	margin-left: 16px;
}
.styles_reviewCard__wkLB_ {
	min-width: 248px;
	width: 248px;
	transition: border 0.2s ease-in-out;
}
.styles_reviewCard__wkLB_ > * {
	padding: 16px;
}
.styles_reviewCard__wkLB_:not(.styles_reviewCardSkeleton__V9_is):hover {
	border: 1px solid var(--CDS-color-semantic-actions-default);
}
.styles_reviewCard__wkLB_ .styles_reviewRow__9xzHa {
	margin-top: 12px;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
}
.styles_reviewCard__wkLB_ .styles_reviewRow__9xzHa > :first-child {
	margin-right: 8px;
}
.styles_reviewCard__wkLB_ .styles_reviewBody__61JTu {
	display: -webkit-box;
	line-clamp: 4;
	word-break: break-all;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 4.75rem;
}
.styles_reviewCardSkeleton__V9_is .styles_text__8E4Am {
	height: 16px;
	width: 100%;
}
.styles_reviewCardSkeleton__V9_is .styles_text__8E4Am.styles_short__3jQv6 {
	width: 40%;
}
.styles_reviewCardSkeleton__V9_is
	.styles_text__8E4Am.styles_multi__MdOrq:not(:last-child) {
	margin-bottom: 4px;
}
.styles_reviewCardSkeleton__V9_is .styles_round__UlnOP {
	height: 32px;
	width: 32px;
	border-radius: 50%;
}
.styles_wrapper__Jg8fe {
	transition: box-shadow 0.2s ease-in-out;
}
.styles_wrapper__Jg8fe:hover {
	box-shadow: var(--CDS-box-shadow-30);
}
.styles_wrapper__Jg8fe .styles_linkWrapper___KiUr {
	position: relative;
	padding: 12px 12px 16px;
	display: flex;
	flex-direction: column;
	outline-offset: -1px;
	border-radius: 8px 8px 0 0;
}
@media only screen and (min-width: 640px) {
	.styles_wrapper__Jg8fe .styles_linkWrapper___KiUr {
		padding: 16px 16px 24px;
	}
}
.styles_wrapper__Jg8fe .styles_linkWrapper___KiUr .styles_badge__5MVaQ {
	text-transform: uppercase;
	align-self: flex-end;
	margin-top: -4px;
	margin-right: -4px;
	margin-bottom: 4px;
}
@media only screen and (min-width: 640px) {
	.styles_wrapper__Jg8fe .styles_linkWrapper___KiUr .styles_badge__5MVaQ {
		position: absolute;
		top: 16px;
		left: 12px;
	}
}
.styles_wrapper__Jg8fe .styles_linkWrapper___KiUr .styles_content__XZQZQ {
	display: flex;
}
@media only screen and (min-width: 640px) {
	.styles_wrapper__Jg8fe .styles_linkWrapper___KiUr .styles_content__XZQZQ {
		margin-left: 8px;
	}
	.styles_wrapper__Jg8fe
		.styles_linkWrapper___KiUr
		.styles_content__XZQZQ:first-child {
		margin-top: 8px;
	}
}
.styles_wrapper__Jg8fe
	.styles_linkWrapper___KiUr
	.styles_content__XZQZQ
	.styles_logoBox__gDCBr {
	flex: 0 0 auto;
	margin-left: 16px;
}
@media only screen and (min-width: 640px) {
	.styles_wrapper__Jg8fe
		.styles_linkWrapper___KiUr
		.styles_content__XZQZQ
		.styles_logoBox__gDCBr {
		margin-left: 32px;
	}
}
.styles_wrapper__Jg8fe
	.styles_linkWrapper___KiUr
	.styles_content__XZQZQ
	.styles_logoBox__gDCBr
	> picture {
	align-items: flex-start;
	padding-top: 5px;
}
.styles_wrapper__Jg8fe
	.styles_linkWrapper___KiUr
	.styles_content__XZQZQ
	.styles_businessUnitMain__e_tIa {
	min-width: 0;
}
.styles_wrapper__Jg8fe .styles_badge__5MVaQ {
	background-color: #f2f2f5;
	padding: 4px 8px;
	border-radius: 2px;
	text-transform: uppercase;
	font-size: 10px;
	font-size: 0.625rem;
	line-height: 12px;
	line-height: 0.75rem;
	font-weight: 700;
}
.styles_wrapper__Jg8fe .styles_badgeAd__KvIU_ {
	background-color: #d8e4fa;
}
.styles_wrapper__Jg8fe .styles_logoBox__gDCBr,
.styles_wrapper__Jg8fe .styles_logoBox__gDCBr img {
	width: 48px;
}
@media only screen and (min-width: 640px) {
	.styles_wrapper__Jg8fe .styles_logoBox__gDCBr,
	.styles_wrapper__Jg8fe .styles_logoBox__gDCBr img {
		width: 72px;
	}
}
.styles_wrapper__Jg8fe .styles_websiteUrlDisplayed__lSw1A {
	margin-bottom: 8px;
}
.styles_wrapper__Jg8fe .styles_rating__AWUbj {
	display: flex;
}
.styles_wrapper__Jg8fe .styles_rating__AWUbj,
.styles_wrapper__Jg8fe .styles_rating__AWUbj * {
	height: 16px;
	line-height: 16px;
}
@media only screen and (min-width: 640px) {
	.styles_wrapper__Jg8fe .styles_rating__AWUbj,
	.styles_wrapper__Jg8fe .styles_rating__AWUbj * {
		height: 20px;
		line-height: 20px;
	}
}
.styles_wrapper__Jg8fe .styles_rating__AWUbj .styles_ratingText__A2dmB {
	margin-left: 8px;
	line-height: inherit;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.styles_wrapper__Jg8fe
	.styles_rating__AWUbj
	.styles_ratingText__A2dmB
	.styles_trustScore__iURkS {
	line-height: inherit;
}
.styles_wrapper__Jg8fe
	.styles_rating__AWUbj
	.styles_ratingText__A2dmB
	.styles_trustScore__iURkS
	> * {
	font-weight: inherit;
}
@media only screen and (min-width: 640px) {
	.styles_wrapper__Jg8fe .styles_rating__AWUbj .styles_ratingText__A2dmB {
		margin-left: 12px;
	}
}
.styles_wrapper__Jg8fe .styles_rating__AWUbj img {
	min-width: 0;
	width: auto;
}
.styles_wrapper__Jg8fe .styles_categoriesLabelsWrapper__jwGZk {
	padding: 12px;
}
.styles_wrapper__Jg8fe .styles_categoriesLabels__Y_RKI {
	font-size: 12px;
	font-size: 0.75rem;
	line-height: 16px;
	line-height: 1rem;
}
.styles_wrapper__Jg8fe .styles_footerWrapper__fzSEA {
	padding: 12px;
}
@media only screen and (min-width: 640px) {
	.styles_wrapper__Jg8fe .styles_footerWrapper__fzSEA {
		padding: 12px 16px;
	}
}
.styles_wrapper__Jg8fe .styles_footer__tOuX5 {
	display: flex;
	align-items: center;
}
.styles_wrapper__Jg8fe .styles_footer__tOuX5 .styles_categoriesLabels__Y_RKI {
	border-left: 1px solid #dcdce6;
	color: #454554;
	padding-left: 12px;
	margin-left: 12px;
}
.styles_wrapper__Jg8fe .styles_footer__tOuX5 .styles_reviewsButton___CRLw {
	font-size: 14px;
	font-size: 0.875rem;
	line-height: 20px;
	line-height: 1.25rem;
	padding: 8px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	min-width: -moz-fit-content;
	min-width: fit-content;
	margin: -8px -8px -8px auto;
	border: none;
	background: none;
	color: var(--CDS-color-semantic-actions-default);
}
.styles_wrapper__Jg8fe .styles_footer__tOuX5 .styles_reviewsButton___CRLw:focus,
.styles_wrapper__Jg8fe
	.styles_footer__tOuX5
	.styles_reviewsButton___CRLw:hover {
	cursor: pointer;
}
.styles_wrapper__Jg8fe
	.styles_footer__tOuX5
	.styles_reviewsButton___CRLw[disabled] {
	color: var(--CDS-color-semantic-surface-foreground-disabled);
	cursor: default;
}
.styles_separator__rhY3o {
	color: #dcdce6;
	margin: 0 8px;
}
@media only screen and (min-width: 640px) {
	.styles_separator__rhY3o {
		margin: 0 12px;
	}
}
.styles_metadataRow__WKWNi {
	align-items: baseline;
	display: flex;
	flex-direction: column;
	margin-top: 8px;
}
.styles_metadataRow__WKWNi .styles_metadataItem__DOu6t {
	font-size: 12px;
	font-size: 0.75rem;
	line-height: 16px;
	line-height: 1rem;
	font-weight: 500;
	margin-top: 6px;
}
.styles_metadataRow__WKWNi .styles_separator__rhY3o {
	display: none;
}
@media only screen and (min-width: 640px) {
	.styles_metadataRow__WKWNi {
		flex-direction: row;
	}
	.styles_metadataRow__WKWNi .styles_metadataItem__DOu6t {
		font-size: 14px;
		font-size: 0.875rem;
		line-height: 20px;
		line-height: 1.25rem;
		font-weight: inherit;
		margin-top: 0;
	}
	.styles_metadataRow__WKWNi .styles_separator__rhY3o {
		display: inherit;
	}
}
.styles_websiteUrl__fEM1E {
	flex: 0 1 auto;
	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.styles_location__wea8G {
	flex: 0 0 auto;
}
@media only screen and (min-width: 640px) {
	.styles_mobile__hqjff {
		display: none;
	}
}
.styles_desktop__ytR38 {
	display: none;
}
@media only screen and (min-width: 640px) {
	.styles_desktop__ytR38 {
		display: revert;
	}
}
.styles_fields__Am4kT {
	display: flex;
	flex-direction: column;
}
.styles_fields__Am4kT .styles_item__tWoe3 {
	display: flex;
	flex-direction: column;
	padding: 16px 0;
	border-top: 1px solid #f2f2f5;
}
.styles_fields__Am4kT .styles_item__tWoe3 .styles_label__ezbI1 {
	display: flex;
	align-items: center;
}
.styles_fields__Am4kT
	.styles_item__tWoe3
	.styles_label__ezbI1
	.styles_tooltipButton__oRB2s {
	display: flex;
	align-items: center;
	margin-top: 1px;
	margin-left: 8px;
}
.styles_fields__Am4kT
	.styles_item__tWoe3
	.styles_label__ezbI1
	> input:last-child {
	margin: 0 0 0 auto;
}
.styles_fields__Am4kT .styles_item__tWoe3 .styles_tooltipButton__oRB2s > svg {
	color: inherit;
	fill: currentColor;
}
.styles_fields__Am4kT .styles_item__tWoe3 .styles_mobileDescription__sh9hy {
	margin-top: 8px;
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-style: normal;
	font-weight: 300;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-light.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-light.woff)
			format("woff");
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-style: normal;
	font-weight: 400;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-regular.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-regular.woff)
			format("woff");
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-weight: 500;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-medium.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-medium.woff)
			format("woff");
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-weight: 700;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-bold.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-bold.woff)
			format("woff");
}
@font-face {
	font-family: Trustpilot Display;
	font-display: swap;
	font-weight: 900;
	src: url(https://cdn.trustpilot.net/brand-assets/4.4.0/fonts/trustpilot-display-extrablack.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/4.4.0/fonts/trustpilot-display-extrablack.woff)
			format("woff");
}
.button-toggle_button__YAw9u {
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	overflow: hidden;
	min-width: 48px;
	white-space: nowrap;
	border: 1px solid transparent;
	border-radius: var(--CDS-border-radius-full);
}
.button-toggle_button__YAw9u,
.button-toggle_button__YAw9u *,
.button-toggle_button__YAw9u :after,
.button-toggle_button__YAw9u :before {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
.button-toggle_button__YAw9u:focus-visible {
	outline: 2px solid var(--CDS-color-semantic-actions-default);
	outline-offset: 2px;
}
@media not all and (-webkit-min-device-pixel-ratio: 0),
	not all and (min-resolution: 0.001dpcm) {
	@supports (-webkit-appearance: none) {
		.button-toggle_button__YAw9u:focus-visible {
			outline-style: auto;
		}
	}
}
.button-toggle_buttonText__PTPc7 {
	display: flex;
	align-items: center;
}
.button-toggle_button__YAw9u.button-toggle_busy__HsGak {
	color: transparent;
	pointer-events: none;
	position: relative;
}
.button-toggle_button__YAw9u.button-toggle_busy__HsGak:after {
	color: var(--spinner-color);
	animation: button-toggle_btn-loading-state__LLTaj 0.6s linear infinite;
	border-radius: 100%;
	border-color: transparent transparent currentcolor currentcolor;
	border-style: solid;
	border-width: 2px;
	content: "";
	height: 24px;
	width: 24px;
	position: absolute;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
}
@keyframes button-toggle_btn-loading-state__LLTaj {
	0% {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(359deg);
	}
}
.button-toggle_s__u6y6k {
	height: 32px;
	padding: 0 16px;
	font-weight: 400;
}
.button-toggle_s__u6y6k.button-toggle_busy__HsGak:after {
	height: 16px;
	width: 16px;
}
.button-toggle_s__u6y6k.button-toggle_circle__1gocZ {
	width: 32px;
}
.button-toggle_m__Kjszy {
	height: 40px;
	padding: 0 24px;
	font-weight: 400;
}
.button-toggle_m__Kjszy.button-toggle_circle__1gocZ {
	width: 40px;
}
.button-toggle_l__dtqq5 {
	height: 48px;
	padding: 0 32px;
}
.button-toggle_l__dtqq5.button-toggle_circle__1gocZ {
	width: 48px;
}
.button-toggle_xl__QE5TQ {
	height: 56px;
	padding: 0 32px;
}
.button-toggle_xl__QE5TQ.button-toggle_circle__1gocZ {
	width: 56px;
}
.button-toggle_wide__R3a05 {
	min-width: 100%;
	width: 100%;
}
.button-toggle_squared__2CT4x {
	border-radius: var(--CDS-border-radius-s);
}
.button-toggle_circle__1gocZ {
	overflow: hidden;
	min-width: 0;
	padding: 0;
}
.button-toggle_appearance-primary__EjyFp {
	color: var(--CDS-color-semantic-surface-foreground-inverted);
	background-color: var(--CDS-color-semantic-actions-default);
	--spinner-color: var(--CDS-color-semantic-surface-foreground-inverted);
}
.button-toggle_appearance-secondary__1ZIy3 {
	background-color: var(--CDS-color-semantic-actions-surface);
}
.button-toggle_appearance-outline__MaCTI,
.button-toggle_appearance-secondary__1ZIy3 {
	color: var(--CDS-color-semantic-actions-default);
	--spinner-color: var(--CDS-color-semantic-actions-default);
}
.button-toggle_appearance-outline__MaCTI {
	background-color: transparent;
	border-color: var(--CDS-color-semantic-actions-default);
}
.button-toggle_appearance-outline__MaCTI:hover,
.button-toggle_appearance-primary__EjyFp:hover,
.button-toggle_appearance-secondary__1ZIy3:hover {
	color: var(--CDS-color-semantic-surface-foreground-default);
	background-color: var(--CDS-color-semantic-actions-surface-hover);
	border-color: transparent;
}
.button-toggle_appearance-outline__MaCTI:not(.button-toggle_busy__HsGak):active,
.button-toggle_appearance-primary__EjyFp:not(.button-toggle_busy__HsGak):active,
.button-toggle_appearance-secondary__1ZIy3:not(
		.button-toggle_busy__HsGak
	):active {
	color: var(--CDS-color-semantic-surface-foreground-default);
	background-color: var(--CDS-color-semantic-actions-surface-active);
	border-color: transparent;
}
.button-toggle_appearance-critical__pfdvU {
	color: var(--CDS-color-semantic-surface-foreground-inverted);
	background-color: var(--CDS-color-semantic-feedback-critical-default);
	--spinner-color: var(--CDS-color-semantic-surface-foreground-inverted);
}
.button-toggle_appearance-critical__pfdvU:hover {
	color: var(--CDS-color-semantic-surface-foreground-inverted);
	background-color: var(--CDS-color-semantic-feedback-critical-hover);
}
.button-toggle_appearance-critical__pfdvU:not(
		.button-toggle_busy__HsGak
	):active {
	color: var(--CDS-color-semantic-surface-foreground-inverted);
	background-color: var(--CDS-color-semantic-feedback-critical-active);
}
.button-toggle_appearance-caution__SbHTp {
	color: var(--CDS-color-semantic-feedback-warning-foreground);
	background-color: var(--CDS-color-semantic-feedback-warning-default);
	--spinner-color: var(--CDS-color-semantic-feedback-warning-foreground);
}
.button-toggle_appearance-caution__SbHTp:hover {
	color: var(--CDS-color-semantic-feedback-warning-foreground);
	background-color: var(--CDS-color-semantic-feedback-warning-hover);
}
.button-toggle_appearance-caution__SbHTp:not(
		.button-toggle_busy__HsGak
	):active {
	color: var(--CDS-color-semantic-surface-foreground-inverted);
	background-color: var(--CDS-color-semantic-feedback-warning-active);
}
.button-toggle_appearance-positive__ZcXqS {
	color: var(--CDS-color-semantic-surface-foreground-inverted);
	background-color: var(--CDS-color-semantic-feedback-positive-default);
	--spinner-color: var(--CDS-color-semantic-surface-foreground-inverted);
}
.button-toggle_appearance-positive__ZcXqS:hover {
	color: var(--CDS-color-semantic-surface-foreground-inverted);
	background-color: var(--CDS-color-semantic-feedback-positive-hover);
}
.button-toggle_appearance-positive__ZcXqS:not(
		.button-toggle_busy__HsGak
	):active {
	color: var(--CDS-color-semantic-surface-foreground-inverted);
	background-color: var(--CDS-color-semantic-feedback-positive-active);
}
.button-toggle_disabled__tzZh_,
.button-toggle_disabled__tzZh_:active,
.button-toggle_disabled__tzZh_:hover,
.button-toggle_item__8rBDt.button-toggle_disabled__tzZh_ {
	cursor: not-allowed;
	box-shadow: none;
	color: var(--CDS-color-semantic-surface-foreground-disabled);
	border-color: transparent;
	background-color: var(--CDS-color-semantic-surface-disabled);
}
.button-toggle_appearance-link__SBfTB {
	background: none;
	border: none;
	padding: 0;
	min-width: 0;
	cursor: pointer;
	border-radius: var(--CDS-border-radius-none);
	height: auto;
}
.button-toggle_appearance-link__SBfTB .button-toggle_buttonText__PTPc7 {
	color: var(--CDS-color-semantic-actions-default);
}
.button-toggle_appearance-link__SBfTB:active > *,
.button-toggle_appearance-link__SBfTB:focus > *,
.button-toggle_appearance-link__SBfTB:hover > * {
	text-decoration: underline;
}
.button-toggle_appearance-link__SBfTB.button-toggle_disabled__tzZh_,
.button-toggle_appearance-link__SBfTB.button-toggle_disabled__tzZh_:active,
.button-toggle_appearance-link__SBfTB.button-toggle_disabled__tzZh_:hover {
	cursor: not-allowed;
	color: inherit;
	border-color: transparent;
	background-color: transparent;
}
.button-toggle_container__s_V95 {
	display: flex;
}
.button-toggle_item__8rBDt {
	border-radius: none;
	white-space: nowrap;
	display: flex;
	align-items: center;
	position: relative;
	border: 1px solid #c5c5d6;
	flex: 1 1;
	color: #1b1b21;
	border-radius: 0;
}
.button-toggle_item__8rBDt:first-of-type {
	border-top-left-radius: 2px;
	border-bottom-left-radius: 2px;
}
.button-toggle_item__8rBDt:last-of-type {
	border-top-right-radius: 2px;
	border-bottom-right-radius: 2px;
}
.button-toggle_item__8rBDt:not(:first-of-type) {
	border-left: none;
	margin-left: -1px;
}
.button-toggle_item__8rBDt:not(:first-of-type):before {
	content: "";
	height: 100%;
	background-color: #f2f2f5;
	width: 1px;
	position: absolute;
	left: 0;
}
.button-toggle_item__8rBDt.button-toggle_large__7pIpS,
.button-toggle_item__8rBDt.button-toggle_medium__kckab,
.button-toggle_item__8rBDt.button-toggle_small__TQhaT {
	padding: 0 8px;
}
.button-toggle_item__8rBDt.button-toggle_checked__x1gyj {
	z-index: 2;
	color: var(--CDS-color-semantic-actions-default);
	border-color: var(--CDS-color-semantic-actions-default);
}
.button-toggle_item__8rBDt.button-toggle_checked__x1gyj:before {
	background-color: var(--CDS-color-semantic-actions-default);
}
.button-toggle_item__8rBDt:not(.button-toggle_checked__x1gyj) {
	z-index: 1;
}
.button-toggle_item__8rBDt:active,
.button-toggle_item__8rBDt:focus,
.button-toggle_item__8rBDt:focus-within,
.button-toggle_item__8rBDt:hover {
	cursor: pointer;
	z-index: 3;
	color: #1c52bd;
	border-color: #1c52bd;
}
.button-toggle_item__8rBDt:active:before,
.button-toggle_item__8rBDt:focus-within:before,
.button-toggle_item__8rBDt:focus:before,
.button-toggle_item__8rBDt:hover:before {
	background-color: #1c52bd;
}
.button-toggle_item__8rBDt > .button-toggle_input__HAo6z {
	height: 0;
	opacity: 0;
	width: 0;
	margin: 0;
	position: absolute;
}
.styles_container__fzUqL {
	text-align: center;
	padding: 48px 24px;
}
@media only screen and (min-width: 1024px) {
	.styles_container__fzUqL {
		padding-top: 72px;
		padding-bottom: 72px;
	}
}
.styles_icon__cv39k {
	margin-bottom: var(--CDS-spacing-l);
}
.styles_heading__Zp5_g {
	margin-bottom: 4px;
}
.styles_resetButton__xfWyO {
	margin: 4px auto 0;
}
.styles_filterButton__CvWu6 svg {
	transform: rotate(-90deg);
}
.styles_filterCount__V9rz_ {
	width: auto;
	padding: 0 var(--CDS-spacing-xs);
	border-radius: var(--CDS-border-radius-l);
}
.styles_label__JhFUR {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.styles_button__gS0Cz {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1 1;
	padding: var(--CDS-spacing-s) var(--CDS-spacing-m);
	background: var(--CDS-color-semantic-surface-default);
	border: 1px solid var(--CDS-color-semantic-actions-default);
	color: var(--CDS-color-semantic-actions-default);
}
.styles_button__gS0Cz:only-child {
	border-radius: var(--CDS-border-radius-xl);
	gap: var(--CDS-spacing-xs);
	justify-content: center;
}
.styles_button__gS0Cz:first-of-type:not(:only-child) {
	border-radius: var(--CDS-border-radius-s) 0 0 var(--CDS-border-radius-s);
	border-right: 0;
}
.styles_button__gS0Cz:last-of-type:not(:only-child) {
	border-radius: 0 var(--CDS-border-radius-s) var(--CDS-border-radius-s) 0;
}
.tooltip_tooltip__49opG {
	z-index: 999;
}
@media only screen and (min-width: 640px) {
	.tooltip_tooltip__49opG {
		width: auto;
	}
}
.tooltip_tooltip__49opG .tooltip_tooltip-wrapper__hdHik {
	position: relative;
	border-radius: var(--CDS-border-radius-m);
	filter: drop-shadow(0 0 8px #0000004d);
}
.tooltip_tooltip__49opG .tooltip_tooltip-inner___wDGV {
	z-index: inherit;
	background: var(--CDS-color-semantic-surface-default);
	border-radius: var(--CDS-border-radius-m);
	padding: 16px;
	position: relative;
	max-width: 360px;
}
.tooltip_tooltip__49opG .tooltip_tooltip-title__u3Qgr {
	margin-bottom: 8px;
}
.tooltip_tooltip__49opG .tooltip_tooltip-arrow__4gGAc {
	position: absolute;
	top: 100%;
	width: 8px;
	height: 8px;
	border-radius: var(--CDS-border-radius-xs);
	background-color: var(--CDS-color-semantic-surface-default);
	transform: rotate(45deg);
}
.tooltip_tooltip__49opG[x-placement^="top"] {
	padding-bottom: 12px;
}
.tooltip_tooltip__49opG[x-placement^="top"] .tooltip_tooltip-arrow__4gGAc {
	top: calc(100% - 4px);
}
.tooltip_tooltip__49opG[x-placement^="bottom"] {
	padding-top: 12px;
}
.tooltip_tooltip__49opG[x-placement^="bottom"] .tooltip_tooltip-arrow__4gGAc {
	top: -4px;
}
.tooltip_tooltip__49opG[x-placement^="right"] {
	padding-left: 12px;
}
.tooltip_tooltip__49opG[x-placement^="right"] .tooltip_tooltip-arrow__4gGAc {
	left: -4px;
}
.tooltip_tooltip__49opG[x-placement^="left"] {
	padding-right: 12px;
}
.tooltip_tooltip__49opG[x-placement^="left"] .tooltip_tooltip-arrow__4gGAc {
	right: -4px;
}
.modal_modal__t_PgE {
	position: fixed;
	z-index: 999;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(28, 28, 28, 0.5);
}
.modal_modal__t_PgE .modal_dialog__u_nH3 {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 80%;
	border: 2px solid var(--CDS-color-semantic-border-default);
	border-radius: var(--CDS-border-radius-l) var(--CDS-border-radius-l) 0 0;
	box-shadow: var(--CDS-box-shadow-30);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background-color: var(--CDS-color-semantic-surface-default);
}
@media only screen and (max-width: 639.98px) {
	.modal_modal__t_PgE .modal_dialog__u_nH3.modal_fullHeight__kBKtI {
		height: 100%;
		border-radius: 0;
	}
}
@media only screen and (min-width: 640px) {
	.modal_modal__t_PgE .modal_dialog__u_nH3 {
		top: 20%;
		bottom: auto;
		left: 50%;
		transform: translate(-50%);
		width: 630px;
		height: auto;
		max-height: 496px;
		border-radius: var(--CDS-border-radius-l);
	}
}
.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_header__npJDe {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px 16px;
	border-bottom: 1px solid var(--CDS-color-semantic-border-default);
}
.modal_modal__t_PgE
	.modal_dialog__u_nH3
	.modal_header__npJDe
	> :not(.modal_title__IwELs)
	.modal_dismiss__JLguD {
	margin-left: auto;
}
.modal_modal__t_PgE
	.modal_dialog__u_nH3
	.modal_header__npJDe
	> .modal_title__IwELs {
	padding-right: var(--CDS-spacing-m);
}
.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_content__vcdx3 {
	flex: 1 1 auto;
	padding: 16px;
	overflow-y: auto;
}
@media only screen and (min-width: 640px) {
	.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_content__vcdx3 {
		flex: 0 1 auto;
	}
}
.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb {
	flex: 0 0 auto;
	padding: 16px;
	display: flex;
	flex-direction: column;
}
.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb > * {
	width: 100%;
}
.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb > * + * {
	margin-top: 8px;
}
@media only screen and (max-width: 639.98px) {
	.modal_modal__t_PgE
		.modal_dialog__u_nH3
		.modal_footer__Dbrtb.modal_noStack__fQyTU {
		flex-direction: row-reverse;
		justify-content: space-between;
	}
	.modal_modal__t_PgE
		.modal_dialog__u_nH3
		.modal_footer__Dbrtb.modal_noStack__fQyTU
		> * {
		width: calc((100% - 8px) / 2);
		margin-top: 0;
	}
}
.modal_modal__t_PgE
	.modal_dialog__u_nH3
	.modal_footer__Dbrtb.modal_topBorder__xKJxE {
	border-top: 1px solid var(--CDS-color-semantic-border-default);
}
@media only screen and (min-width: 640px) {
	.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb {
		flex-direction: row-reverse;
	}
	.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb > * {
		display: inline-flex;
		width: auto;
	}
	.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb > * + * {
		margin-right: 16px;
		margin-top: 0;
	}
}
.icon-button_icon-button__icv0o {
	height: -moz-fit-content;
	height: fit-content;
}
.icon-button_icon-button__icv0o svg {
	margin: 0 6px 0 0;
}
.icon-button_icon-button__icv0o.icon-button_right-icon__Ewse_ svg {
	margin: 0 0 0 6px;
}
.icon-button_icon-button__icv0o.icon-button_no-text__8Gni0 svg {
	margin: 0;
}
.icon-button_icon-button__icv0o.icon-button_hide-icon__uEtgR svg {
	visibility: hidden;
}
.icon-button_icon-button__icv0o.icon-button_full-width__YxMJF {
	min-width: 100%;
}
.business-profile-image_containmentWrapper__xJZjr {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
}
.business-profile-image_image__V14jr {
	max-width: 100%;
	max-height: 100%;
}
.business-profile-image_fallbackImage__Yp1_q {
	width: 160px;
}
.pagination-link_item__C2iL0,
.pagination-link_rel__tXE5c {
	background-color: var(--CDS-color-semantic-surface-default);
	height: 44px;
}
.pagination-link_item__C2iL0:active,
.pagination-link_item__C2iL0:focus,
.pagination-link_item__C2iL0:hover,
.pagination-link_rel__tXE5c:active,
.pagination-link_rel__tXE5c:focus,
.pagination-link_rel__tXE5c:hover {
	border-color: var(--CDS-color-semantic-surface-foreground-subtle);
}
.pagination-link_item__C2iL0:focus-visible,
.pagination-link_rel__tXE5c:focus-visible {
	z-index: 3;
	outline-offset: -2px;
}
.pagination-link_item__C2iL0 {
	display: none;
	padding: 0 var(--CDS-spacing-s);
	border-radius: 0;
	color: var(--CDS-color-semantic-surface-foreground-default);
	border: unset;
	border: 1px solid var(--CDS-color-semantic-surface-foreground-subtle);
	border-right-width: 0;
}
.pagination-link_item__C2iL0.pagination-link_current__tWg4w {
	border-color: var(--CDS-color-semantic-actions-default);
	pointer-events: none;
	color: var(--CDS-color-semantic-actions-default);
	background-color: var(--CDS-color-semantic-actions-surface);
}
@media only screen and (min-width: 768px) {
	.pagination-link_item__C2iL0 {
		display: flex;
	}
}
.pagination-link_disabled__UYSG0 {
	color: var(--CDS-color-semantic-surface-foreground-disabled);
}
.pagination-link_rel__tXE5c {
	flex-grow: 1;
	padding: 0 var(--CDS-spacing-m);
}
.pagination-link_rel__tXE5c.pagination-link_prev__Do_jK {
	border-right-width: 0;
	border-radius: var(--CDS-border-radius-s) 0 0 var(--CDS-border-radius-s);
}
.pagination-link_rel__tXE5c.pagination-link_next__NdSsd {
	border-radius: 0 var(--CDS-border-radius-s) var(--CDS-border-radius-s) 0;
}
.pagination-link_rel__tXE5c.pagination-link_next__NdSsd.pagination-link_disabled__UYSG0,
.pagination-link_rel__tXE5c.pagination-link_prev__Do_jK.pagination-link_disabled__UYSG0 {
	border-color: var(--CDS-color-semantic-surface-foreground-subtle);
}
@media only screen and (min-width: 768px) {
	.pagination-link_rel__tXE5c {
		flex-grow: 0;
		width: auto;
		min-width: auto;
		min-width: -moz-fit-content;
		min-width: fit-content;
	}
}
.breadcrumb_breadcrumbs__svX3y {
	overflow: hidden;
}
.breadcrumb_breadcrumbs__svX3y .breadcrumb_breadcrumbList__hI5ce {
	height: 48px;
	margin: 0;
	padding: 0 16px 0 0;
	list-style: none;
	display: flex;
	overflow-x: auto;
	overflow-y: hidden;
	scrollbar-width: none;
	-ms-overflow-style: none;
}
.breadcrumb_breadcrumbs__svX3y
	.breadcrumb_breadcrumbList__hI5ce::-webkit-scrollbar {
	display: none;
}
@media only screen and (min-width: 1024px) {
	.breadcrumb_breadcrumbs__svX3y .breadcrumb_breadcrumbList__hI5ce {
		padding: 16px 0;
		flex-wrap: wrap;
		row-gap: 4px;
		height: auto;
		overflow-x: initial;
	}
}
.breadcrumb_breadcrumbs__svX3y .breadcrumb_breadcrumb__QUtnI {
	display: flex;
	align-items: center;
	white-space: nowrap;
}
.breadcrumb_breadcrumbs__svX3y
	.breadcrumb_breadcrumb__QUtnI:first-child
	.breadcrumb_breadcrumbLink__rX9Yu {
	padding-left: 0;
}
.breadcrumb_breadcrumbs__svX3y .breadcrumb_breadcrumbLink__rX9Yu {
	padding: 16px 8px;
}
@media only screen and (min-width: 1024px) {
	.breadcrumb_breadcrumbs__svX3y .breadcrumb_breadcrumbLink__rX9Yu {
		padding: 0;
	}
}
.breadcrumb_breadcrumbs__svX3y .breadcrumb_arrowIcon__AGiU0 {
	display: flex;
	align-items: center;
}
@media only screen and (min-width: 1024px) {
	.breadcrumb_breadcrumbs__svX3y .breadcrumb_arrowIcon__AGiU0 {
		padding: 0 8px;
	}
}
.breadcrumb_breadcrumbs__svX3y .breadcrumb_arrowIcon__AGiU0 svg {
	margin-left: -2px;
}
@media only screen and (max-width: 1023.98px) {
	.breadcrumb_breadcrumbs__svX3y .breadcrumb_hideWithEllipsis__JRafW {
		display: none;
	}
}
@media only screen and (min-width: 1024px) {
	.breadcrumb_breadcrumbs__svX3y .breadcrumb_ellipsis__LWdg8 {
		display: none;
	}
}
@media only screen and (max-width: 1023.98px) {
	.breadcrumb_breadcrumbs__svX3y {
		mask-image: linear-gradient(90deg, #000 calc(100% - 16px), transparent);
		-webkit-mask-image: linear-gradient(
			90deg,
			#000 calc(100% - 16px),
			transparent
		);
	}
}
.filter-button_filterButton__KhPig {
	padding: 0 8px;
}
.filter-button_filterButton__KhPig .filter-button_filterButtonContent__5fUvZ {
	display: flex;
	align-items: center;
	text-transform: capitalize;
}
.filter-button_filterButton__KhPig
	.filter-button_filterButtonContent__5fUvZ
	> :last-child {
	margin-left: 4px;
}
.filter-button_filterCount__ylTdQ {
	border-radius: 50%;
	color: var(--CDS-color-semantic-surface-foreground-inverted);
	background-color: var(--CDS-color-semantic-actions-default);
	display: inline-flex;
	width: 20px;
	height: 20px;
	font-weight: inherit;
	align-items: center;
	justify-content: center;
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-style: normal;
	font-weight: 300;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-light.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-light.woff)
			format("woff");
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-style: normal;
	font-weight: 400;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-regular.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-regular.woff)
			format("woff");
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-weight: 500;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-medium.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-medium.woff)
			format("woff");
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-weight: 700;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-bold.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-bold.woff)
			format("woff");
}
@font-face {
	font-family: Trustpilot Display;
	font-display: swap;
	font-weight: 900;
	src: url(https://cdn.trustpilot.net/brand-assets/4.4.0/fonts/trustpilot-display-extrablack.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/4.4.0/fonts/trustpilot-display-extrablack.woff)
			format("woff");
}
.pagination_pagination__K4LuV {
	text-align: center;
	overflow: hidden;
	cursor: default;
	display: flex;
	justify-content: center;
	width: 100%;
}
@media only screen and (max-width: 767.98px) {
	.pagination_pagination__K4LuV * a {
		border-radius: var(--CDS-border-radius-s);
	}
	.pagination_pagination__K4LuV :last-child a {
		border-right: 0;
		border-radius: var(--CDS-border-radius-s);
	}
}
.pagination_paginationEllipsis__ZiUxz {
	display: none;
	width: 48px;
	border: 1px solid var(--CDS-color-semantic-surface-foreground-subtle);
	border-right-width: 0;
	background-color: var(--CDS-color-semantic-surface-default);
}
.pagination_paginationEllipsis__ZiUxz svg {
	fill: var(--CDS-color-semantic-surface-foreground-subtle);
}
@media only screen and (min-width: 768px) {
	.pagination_paginationEllipsis__ZiUxz {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
.tooltip_tooltip__49opG {
	z-index: 999;
}
@media only screen and (min-width: 640px) {
	.tooltip_tooltip__49opG {
		width: auto;
	}
}
.tooltip_tooltip__49opG .tooltip_tooltip-wrapper__hdHik {
	position: relative;
	border-radius: var(--CDS-border-radius-m);
	filter: drop-shadow(0 0 8px #0000004d);
}
.tooltip_tooltip__49opG .tooltip_tooltip-inner___wDGV {
	z-index: inherit;
	background: var(--CDS-color-semantic-surface-default);
	border-radius: var(--CDS-border-radius-m);
	padding: 16px;
	position: relative;
	max-width: 360px;
}
.tooltip_tooltip__49opG .tooltip_tooltip-title__u3Qgr {
	margin-bottom: 8px;
}
.tooltip_tooltip__49opG .tooltip_tooltip-arrow__4gGAc {
	position: absolute;
	top: 100%;
	width: 8px;
	height: 8px;
	border-radius: var(--CDS-border-radius-xs);
	background-color: var(--CDS-color-semantic-surface-default);
	transform: rotate(45deg);
}
.tooltip_tooltip__49opG[x-placement^="top"] {
	padding-bottom: 12px;
}
.tooltip_tooltip__49opG[x-placement^="top"] .tooltip_tooltip-arrow__4gGAc {
	top: calc(100% - 4px);
}
.tooltip_tooltip__49opG[x-placement^="bottom"] {
	padding-top: 12px;
}
.tooltip_tooltip__49opG[x-placement^="bottom"] .tooltip_tooltip-arrow__4gGAc {
	top: -4px;
}
.tooltip_tooltip__49opG[x-placement^="right"] {
	padding-left: 12px;
}
.tooltip_tooltip__49opG[x-placement^="right"] .tooltip_tooltip-arrow__4gGAc {
	left: -4px;
}
.tooltip_tooltip__49opG[x-placement^="left"] {
	padding-right: 12px;
}
.tooltip_tooltip__49opG[x-placement^="left"] .tooltip_tooltip-arrow__4gGAc {
	right: -4px;
}
.modal_modal__t_PgE {
	position: fixed;
	z-index: 999;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(28, 28, 28, 0.5);
}
.modal_modal__t_PgE .modal_dialog__u_nH3 {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 80%;
	border: 2px solid var(--CDS-color-semantic-border-default);
	border-radius: var(--CDS-border-radius-l) var(--CDS-border-radius-l) 0 0;
	box-shadow: var(--CDS-box-shadow-30);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background-color: var(--CDS-color-semantic-surface-default);
}
@media only screen and (max-width: 639.98px) {
	.modal_modal__t_PgE .modal_dialog__u_nH3.modal_fullHeight__kBKtI {
		height: 100%;
		border-radius: 0;
	}
}
@media only screen and (min-width: 640px) {
	.modal_modal__t_PgE .modal_dialog__u_nH3 {
		top: 20%;
		bottom: auto;
		left: 50%;
		transform: translate(-50%);
		width: 630px;
		height: auto;
		max-height: 496px;
		border-radius: var(--CDS-border-radius-l);
	}
}
.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_header__npJDe {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px 16px;
	border-bottom: 1px solid var(--CDS-color-semantic-border-default);
}
.modal_modal__t_PgE
	.modal_dialog__u_nH3
	.modal_header__npJDe
	> :not(.modal_title__IwELs)
	.modal_dismiss__JLguD {
	margin-left: auto;
}
.modal_modal__t_PgE
	.modal_dialog__u_nH3
	.modal_header__npJDe
	> .modal_title__IwELs {
	padding-right: var(--CDS-spacing-m);
}
.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_content__vcdx3 {
	flex: 1 1 auto;
	padding: 16px;
	overflow-y: auto;
}
@media only screen and (min-width: 640px) {
	.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_content__vcdx3 {
		flex: 0 1 auto;
	}
}
.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb {
	flex: 0 0 auto;
	padding: 16px;
	display: flex;
	flex-direction: column;
}
.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb > * {
	width: 100%;
}
.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb > * + * {
	margin-top: 8px;
}
@media only screen and (max-width: 639.98px) {
	.modal_modal__t_PgE
		.modal_dialog__u_nH3
		.modal_footer__Dbrtb.modal_noStack__fQyTU {
		flex-direction: row-reverse;
		justify-content: space-between;
	}
	.modal_modal__t_PgE
		.modal_dialog__u_nH3
		.modal_footer__Dbrtb.modal_noStack__fQyTU
		> * {
		width: calc((100% - 8px) / 2);
		margin-top: 0;
	}
}
.modal_modal__t_PgE
	.modal_dialog__u_nH3
	.modal_footer__Dbrtb.modal_topBorder__xKJxE {
	border-top: 1px solid var(--CDS-color-semantic-border-default);
}
@media only screen and (min-width: 640px) {
	.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb {
		flex-direction: row-reverse;
	}
	.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb > * {
		display: inline-flex;
		width: auto;
	}
	.modal_modal__t_PgE .modal_dialog__u_nH3 .modal_footer__Dbrtb > * + * {
		margin-right: 16px;
		margin-top: 0;
	}
}
.icon-button_icon-button__icv0o {
	height: -moz-fit-content;
	height: fit-content;
}
.icon-button_icon-button__icv0o svg {
	margin: 0 6px 0 0;
}
.icon-button_icon-button__icv0o.icon-button_right-icon__Ewse_ svg {
	margin: 0 0 0 6px;
}
.icon-button_icon-button__icv0o.icon-button_no-text__8Gni0 svg {
	margin: 0;
}
.icon-button_icon-button__icv0o.icon-button_hide-icon__uEtgR svg {
	visibility: hidden;
}
.icon-button_icon-button__icv0o.icon-button_full-width__YxMJF {
	min-width: 100%;
}
.business-profile-image_containmentWrapper__xJZjr {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
}
.business-profile-image_image__V14jr {
	max-width: 100%;
	max-height: 100%;
}
.business-profile-image_fallbackImage__Yp1_q {
	width: 160px;
}
.pagination-link_item__C2iL0,
.pagination-link_rel__tXE5c {
	background-color: var(--CDS-color-semantic-surface-default);
	height: 44px;
}
.pagination-link_item__C2iL0:active,
.pagination-link_item__C2iL0:focus,
.pagination-link_item__C2iL0:hover,
.pagination-link_rel__tXE5c:active,
.pagination-link_rel__tXE5c:focus,
.pagination-link_rel__tXE5c:hover {
	border-color: var(--CDS-color-semantic-surface-foreground-subtle);
}
.pagination-link_item__C2iL0:focus-visible,
.pagination-link_rel__tXE5c:focus-visible {
	z-index: 3;
	outline-offset: -2px;
}
.pagination-link_item__C2iL0 {
	display: none;
	padding: 0 var(--CDS-spacing-s);
	border-radius: 0;
	color: var(--CDS-color-semantic-surface-foreground-default);
	border: unset;
	border: 1px solid var(--CDS-color-semantic-surface-foreground-subtle);
	border-right-width: 0;
}
.pagination-link_item__C2iL0.pagination-link_current__tWg4w {
	border-color: var(--CDS-color-semantic-actions-default);
	pointer-events: none;
	color: var(--CDS-color-semantic-actions-default);
	background-color: var(--CDS-color-semantic-actions-surface);
}
@media only screen and (min-width: 768px) {
	.pagination-link_item__C2iL0 {
		display: flex;
	}
}
.pagination-link_disabled__UYSG0 {
	color: var(--CDS-color-semantic-surface-foreground-disabled);
}
.pagination-link_rel__tXE5c {
	flex-grow: 1;
	padding: 0 var(--CDS-spacing-m);
}
.pagination-link_rel__tXE5c.pagination-link_prev__Do_jK {
	border-right-width: 0;
	border-radius: var(--CDS-border-radius-s) 0 0 var(--CDS-border-radius-s);
}
.pagination-link_rel__tXE5c.pagination-link_next__NdSsd {
	border-radius: 0 var(--CDS-border-radius-s) var(--CDS-border-radius-s) 0;
}
.pagination-link_rel__tXE5c.pagination-link_next__NdSsd.pagination-link_disabled__UYSG0,
.pagination-link_rel__tXE5c.pagination-link_prev__Do_jK.pagination-link_disabled__UYSG0 {
	border-color: var(--CDS-color-semantic-surface-foreground-subtle);
}
@media only screen and (min-width: 768px) {
	.pagination-link_rel__tXE5c {
		flex-grow: 0;
		width: auto;
		min-width: auto;
		min-width: -moz-fit-content;
		min-width: fit-content;
	}
}
.breadcrumb_breadcrumbs__svX3y {
	overflow: hidden;
}
.breadcrumb_breadcrumbs__svX3y .breadcrumb_breadcrumbList__hI5ce {
	height: 48px;
	margin: 0;
	padding: 0 16px 0 0;
	list-style: none;
	display: flex;
	overflow-x: auto;
	overflow-y: hidden;
	scrollbar-width: none;
	-ms-overflow-style: none;
}
.breadcrumb_breadcrumbs__svX3y
	.breadcrumb_breadcrumbList__hI5ce::-webkit-scrollbar {
	display: none;
}
@media only screen and (min-width: 1024px) {
	.breadcrumb_breadcrumbs__svX3y .breadcrumb_breadcrumbList__hI5ce {
		padding: 16px 0;
		flex-wrap: wrap;
		row-gap: 4px;
		height: auto;
		overflow-x: initial;
	}
}
.breadcrumb_breadcrumbs__svX3y .breadcrumb_breadcrumb__QUtnI {
	display: flex;
	align-items: center;
	white-space: nowrap;
}
.breadcrumb_breadcrumbs__svX3y
	.breadcrumb_breadcrumb__QUtnI:first-child
	.breadcrumb_breadcrumbLink__rX9Yu {
	padding-left: 0;
}
.breadcrumb_breadcrumbs__svX3y .breadcrumb_breadcrumbLink__rX9Yu {
	padding: 16px 8px;
}
@media only screen and (min-width: 1024px) {
	.breadcrumb_breadcrumbs__svX3y .breadcrumb_breadcrumbLink__rX9Yu {
		padding: 0;
	}
}
.breadcrumb_breadcrumbs__svX3y .breadcrumb_arrowIcon__AGiU0 {
	display: flex;
	align-items: center;
}
@media only screen and (min-width: 1024px) {
	.breadcrumb_breadcrumbs__svX3y .breadcrumb_arrowIcon__AGiU0 {
		padding: 0 8px;
	}
}
.breadcrumb_breadcrumbs__svX3y .breadcrumb_arrowIcon__AGiU0 svg {
	margin-left: -2px;
}
@media only screen and (max-width: 1023.98px) {
	.breadcrumb_breadcrumbs__svX3y .breadcrumb_hideWithEllipsis__JRafW {
		display: none;
	}
}
@media only screen and (min-width: 1024px) {
	.breadcrumb_breadcrumbs__svX3y .breadcrumb_ellipsis__LWdg8 {
		display: none;
	}
}
@media only screen and (max-width: 1023.98px) {
	.breadcrumb_breadcrumbs__svX3y {
		mask-image: linear-gradient(90deg, #000 calc(100% - 16px), transparent);
		-webkit-mask-image: linear-gradient(
			90deg,
			#000 calc(100% - 16px),
			transparent
		);
	}
}
.filter-button_filterButton__KhPig {
	padding: 0 8px;
}
.filter-button_filterButton__KhPig .filter-button_filterButtonContent__5fUvZ {
	display: flex;
	align-items: center;
	text-transform: capitalize;
}
.filter-button_filterButton__KhPig
	.filter-button_filterButtonContent__5fUvZ
	> :last-child {
	margin-left: 4px;
}
.filter-button_filterCount__ylTdQ {
	border-radius: 50%;
	color: var(--CDS-color-semantic-surface-foreground-inverted);
	background-color: var(--CDS-color-semantic-actions-default);
	display: inline-flex;
	width: 20px;
	height: 20px;
	font-weight: inherit;
	align-items: center;
	justify-content: center;
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-style: normal;
	font-weight: 300;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-light.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-light.woff)
			format("woff");
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-style: normal;
	font-weight: 400;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-regular.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-regular.woff)
			format("woff");
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-weight: 500;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-medium.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-medium.woff)
			format("woff");
}
@font-face {
	font-family: TrustpilotDefaultFont;
	font-display: swap;
	font-weight: 700;
	src: url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-bold.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/2.1.0/fonts/trustpilot-default-font-bold.woff)
			format("woff");
}
@font-face {
	font-family: Trustpilot Display;
	font-display: swap;
	font-weight: 900;
	src: url(https://cdn.trustpilot.net/brand-assets/4.4.0/fonts/trustpilot-display-extrablack.woff2)
			format("woff2"),
		url(https://cdn.trustpilot.net/brand-assets/4.4.0/fonts/trustpilot-display-extrablack.woff)
			format("woff");
}
.pagination_pagination__K4LuV {
	text-align: center;
	overflow: hidden;
	cursor: default;
	display: flex;
	justify-content: center;
	width: 100%;
}
@media only screen and (max-width: 767.98px) {
	.pagination_pagination__K4LuV * a {
		border-radius: var(--CDS-border-radius-s);
	}
	.pagination_pagination__K4LuV :last-child a {
		border-right: 0;
		border-radius: var(--CDS-border-radius-s);
	}
}
.pagination_paginationEllipsis__ZiUxz {
	display: none;
	width: 48px;
	border: 1px solid var(--CDS-color-semantic-surface-foreground-subtle);
	border-right-width: 0;
	background-color: var(--CDS-color-semantic-surface-default);
}
.pagination_paginationEllipsis__ZiUxz svg {
	fill: var(--CDS-color-semantic-surface-foreground-subtle);
}
@media only screen and (min-width: 768px) {
	.pagination_paginationEllipsis__ZiUxz {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
