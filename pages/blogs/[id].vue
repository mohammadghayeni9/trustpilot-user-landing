<script setup>
import { API_ROUTES } from "@/constants/apiRoutes";
const { fetchData } = useApi();

const route = useRoute();

const blog = ref({});
const getBlog = async () => {
	blog.value = await fetchData(
		API_ROUTES.articles.articles + route.params.id + "/"
	);
};

getBlog();
</script>

<template>
	<main
		role="main"
		class="layout_content__z9_o0 layout_withFixedHeader__ZuxvW"
	>
		<nav class="PillarNavigation__HeaderWrapper-sc-qc2hg3-0 gvlUzE">
			<div
				class="PillarNavigation__HeaderInner-sc-qc2hg3-1 flex items-center justify-between max-w-[1300px] mx-auto"
			>
				<div class="PillarNavigation__NavTitle-sc-qc2hg3-2 VjIWR">
					The Trustpilot Blog
				</div>
				<router-link
					to="/blogs"
					class="PillarNavigation__BreadcrumbsBackLink-sc-qc2hg3-7 bRZNIX"
					>بازگشت به مقالات</router-link
				>
			</div>
		</nav>
		<div>
			<div class="Spacing-sc-11pk266-0 gQkMvi">
				<router-link
					class="Links__StyledLink-sc-hi52k0-0 hQQgRH Links__Link-sc-hi52k0-1 SingleResourceView__TopPillarLink-sc-w8e2aw-0 hRKPDT jDOCWC"
					to="#"
					>{{ blog?.category?.name }}</router-link
				>
				<h1
					itemProp="name headline"
					class="Headers__Heading-sc-1erae96-0 Headers__H1-sc-1erae96-2 SingleResourceView__Title-sc-w8e2aw-1 gKXYKr hfVHek hrcOuu !text-5xl font-bold text-center mb-8 mt-0 mx-auto"
				>
					{{ blog?.title }}
				</h1>
				<div
					itemProp="dateCreated datePublished"
					class="SingleResourceView__PublishedDate-sc-w8e2aw-2 lnMZRc"
				>
					{{ blog?.updated_at }}
				</div>
			</div>
			<div class="SingleResourceView__ArticleContent-sc-w8e2aw-4 fmQqAW">
				<div class="Spacing-sc-11pk266-0 kTQFfb">
					<div
						class="Spacing-sc-11pk266-0 ResourceImage__Wrapper-sc-uyzb89-1 hmxrfE OcFqL"
					>
						<div
							class="react-aspect-ratio-placeholder"
							style="
								max-width: 640px;
								width: 100%;
								--aspect-ratio: (1.4988290398126465);
							"
						>
							<img
								alt="Romance scams"
								title="A woman sitting on a couch looking at her laptop"
								loading="lazy"
								decoding="async"
								data-nimg="fill"
								style="
									position: absolute;
									height: 100%;
									width: 100%;
									left: 0;
									top: 0;
									right: 0;
									bottom: 0;
									color: transparent;
									object-fit: cover;
								"
								sizes="50vw"
								:src="API_ROUTES.baseUrl + blog?.image"
							/>
						</div>
					</div>
					<div
						class="from-markdown SingleResourceView__Introduction-sc-w8e2aw-3 bkyjuy"
					>
						<p
							class="Markdown__Paragraph-sc-wk78ky-0 hvhTD !text-2xl"
						>
							{{ blog?.summary }}
						</p>
					</div>
					<div
						class="RichText__RichtextWrapper-sc-lgc1a-5 cKNMGu"
						v-html="blog?.text"
					></div>
				</div>
				<div class="Spacing-sc-11pk266-0 fWOdXJ">
					<div
						class="SingleResourceView__ResourceFooter-sc-w8e2aw-6 fWIZrr"
					>
						<div
							class="Author__Wrapper-sc-1ep02bo-0 dLxPXm"
						>
							<div
								class="Author__SectionName-sc-1ep02bo-2 exWuZb"
							>
								نویسنده
							</div>
							<div class="Author__Header-sc-1ep02bo-3 dwxJle">
								<div
									class="Author__Image-sc-1ep02bo-1 cHhCTI mr-0 ml-1"
								>
									<picture
										>
										<img
											:src="API_ROUTES.baseUrl + blog?.author?.picture"
									/></picture>
								</div>
								<div
									class="Author__Info-sc-1ep02bo-7 cryOmn pr-2"
								>
									<div
										itemProp="name"
										class="Author__Name-sc-1ep02bo-4 eIjpPE text-lg flex gap-2"
									>
										<span>{{ blog?.author?.first_name }}</span>
										<span>{{ blog?.author?.last_name }}</span>
									</div>
									<!-- <div
										itemProp="jobTitle"
										class="Author__Title-sc-1ep02bo-5 jYfPKU !text-base"
									>
										Consumer Content Marketing Manager
									</div> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<h3
			class="Headers__Heading-sc-1erae96-0 Headers__H3-sc-1erae96-4 SingleResourceView__RelatedResourceHeader-sc-w8e2aw-5 evCvBb ikIQBu eSHcWI"
		>
			مقالات مشابه
		</h3>
		<div class="Spacing-sc-11pk266-0 dWqNns">
			<div class="ResourceList__Wrapper-sc-hakffs-0 eogOz">
				<!-- <blogsBlogCard /> -->
			</div>
		</div>
	</main>
</template>

<style scoped lang="scss">
.gTbKnp {
	outline: none;
	width: 100%;
	max-width: 544px;
	text-align: left;
	position: relative;
	border-radius: 2px;
	color: #c5c5d6;
	-webkit-transition: border 0.5s;
	transition: border 0.5s;
	background-color: #fff;
	border: 1px solid #c5c5d6;
} /*!sc*/
data-styled.g3[id="DropDown__DropDownContainer-sc-14dp86x-0"] {
	content: "gTbKnp,";
} /*!sc*/
.dKrFID {
	width: 100%;
	border: none;
	background: none;
	padding: 9px 18px;
	display: inline-block;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
} /*!sc*/
.dKrFID:focus {
	outline: none;
} /*!sc*/
.dKrFID::-webkit-input-placeholder {
	color: #9a9aad;
} /*!sc*/
.dKrFID::-moz-placeholder {
	color: #9a9aad;
} /*!sc*/
.dKrFID:-ms-input-placeholder {
	color: #9a9aad;
} /*!sc*/
.dKrFID::placeholder {
	color: #9a9aad;
} /*!sc*/
data-styled.g8[id="DropDown__DropDownSearch-sc-14dp86x-5"] {
	content: "dKrFID,";
} /*!sc*/
.wRRrc {
	left: 0px;
	padding: 16px 12px;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
} /*!sc*/
.wRRrc svg {
	height: 20px;
	width: 20px;
} /*!sc*/
.wRRrc svg path {
	fill: #c5c5d6;
} /*!sc*/
data-styled.g9[id="Search__SearchIconContainer-sc-dcvmlt-0"] {
	content: "wRRrc,";
} /*!sc*/
.evCvBb {
	width: 100%;
	margin-bottom: 0;
	color: undefined;
} /*!sc*/
data-styled.g11[id="Headers__Heading-sc-1erae96-0"] {
	content: "evCvBb,";
} /*!sc*/
.crrOGF {
	margin: 30px auto 0px auto;
	font-size: 2.4rem;
	line-height: 1.5rem;
	max-width: 670px;
} /*!sc*/
@media (min-width: 768px) {
	.crrOGF {
		margin: 40px auto 15px auto;
		font-size: 2rem;
		line-height: 2rem;
	}
} /*!sc*/
@media (min-width: 992px) {
	.crrOGF {
		max-width: 1300px;
	}
} /*!sc*/
data-styled.g20[id="FeaturedHeader-sc-1bwkr0x-0"] {
	content: "crrOGF,";
} /*!sc*/
.kxdvJW {
	line-height: 1em;
	margin: 0px 35px 0px 0px;
	display: inline-block;
	height: 100%;
	border-bottom: 3px solid #000032;
} /*!sc*/
.kxdvJW a {
	display: inline-block;
	color: rgba(0, 0, 50, 0.5);
	padding: 40px 0 35px 0;
} /*!sc*/
.kxdvJW a:hover {
	color: #000032;
} /*!sc*/
.kxdvJW a {
	color: #000032;
} /*!sc*/
.jefPgn {
	line-height: 1em;
	margin: 0px 35px 0px 0px;
	display: inline-block;
	height: 100%;
} /*!sc*/
.jefPgn a {
	display: inline-block;
	color: rgba(0, 0, 50, 0.5);
	padding: 40px 0 35px 0;
} /*!sc*/
.jefPgn a:hover {
	color: #000032;
} /*!sc*/
data-styled.g22[id="NavItem-sc-1ervtkz-0"] {
	content: "kxdvJW,jefPgn,";
} /*!sc*/
.hIFkgg {
	margin: 0 auto;
	padding: 0;
	height: 100%;
	list-style: none;
	overflow: auto;
	white-space: nowrap;
	max-width: 1300px;
} /*!sc*/
data-styled.g23[id="NavItemWrapper-sc-1oep227-0"] {
	content: "hIFkgg,";
} /*!sc*/
.cFYfmF {
	display: block;
	position: fixed;
	width: 100%;
	top: 72px;
	z-index: 200;
	background-color: white;
} /*!sc*/
@media (min-width: 992px) {
	.cFYfmF {
		display: none;
	}
} /*!sc*/
data-styled.g24[id="MobileMenu__MobileMenuWrapper-sc-y2owew-0"] {
	content: "cFYfmF,";
} /*!sc*/
.cIsxeI {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	cursor: pointer;
	font-weight: 700;
	padding: 27px 30px;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	border-bottom: 1px solid #dcdce6;
} /*!sc*/
data-styled.g27[id="MobileMenu__CurrentItem-sc-y2owew-3"] {
	content: "cIsxeI,";
} /*!sc*/
.fCWREN {
	margin-left: auto;
	-webkit-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	transform: rotate(90deg);
} /*!sc*/
data-styled.g28[id="MobileMenu__RotateableArrow-sc-y2owew-4"] {
	content: "fCWREN,";
} /*!sc*/
.eVcemQ {
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 64px 0px 64px;
} /*!sc*/
@media (min-width: 768px) {
	.eVcemQ {
		padding-top: 60px;
		padding-bottom: 90px;
	}
} /*!sc*/
.cUkIYn {
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0px 0px 70px;
} /*!sc*/
@media (min-width: 992px) {
	.cUkIYn {
		padding-top: 60px;
		padding-bottom: 0px;
	}
} /*!sc*/
data-styled.g29[id="Spacing-sc-11pk266-0"] {
	content: "eVcemQ,cUkIYn,";
} /*!sc*/
@media (min-width: 992px) {
	.fmGMiV {
		border-bottom: 1px solid #dcdce6;
	}
} /*!sc*/
data-styled.g30[id="BorderedSpacing__BottomBorderSpacing-sc-g7s5i3-0"] {
	content: "fmGMiV,";
} /*!sc*/
.clmIVx {
	margin: 0 auto;
	padding: 0 15px;
	max-width: 1300px;
} /*!sc*/
@media (min-width: 768px) {
	.clmIVx {
		padding: 0 30px;
	}
} /*!sc*/
data-styled.g31[id="BorderedSpacing__BorderedSpacingWrapper-sc-g7s5i3-1"] {
	content: "clmIVx,";
} /*!sc*/
.jYwEcq {
	width: 100%;
	height: 79px;
	position: relative;
	font-weight: 500;
	font-size: 1.4rem;
	z-index: 1;
	-webkit-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	background-color: #fcece3;
} /*!sc*/
@media (min-width: 768px) {
	.jYwEcq {
		position: -webkit-sticky;
		position: sticky;
		top: 72px;
	}
} /*!sc*/
@media (min-width: 992px) {
	.jYwEcq {
		height: 94px;
	}
} /*!sc*/
data-styled.g34[id="PillarNavigation__HeaderWrapper-sc-qc2hg3-0"] {
	content: "jYwEcq,";
} /*!sc*/
.hjsJel {
	height: 100%;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	margin: 0 auto;
	padding: 0;
	-webkit-flex-wrap: nowrap;
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;
	max-width: 1300px;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
} /*!sc*/
@media (min-width: 992px) {
	.hjsJel {
		padding: 0 30px;
	}
} /*!sc*/
data-styled.g35[id="PillarNavigation__HeaderInner-sc-qc2hg3-1"] {
	content: "hjsJel,";
} /*!sc*/
.VjIWR {
	margin: 0;
	padding: 0;
	height: 94px;
	overflow: hidden;
	position: relative;
	white-space: nowrap;
	font-size: 22px;
	font-weight: 700;
} /*!sc*/
@media (min-width: 992px) {
	.VjIWR {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
} /*!sc*/
data-styled.g36[id="PillarNavigation__NavTitle-sc-qc2hg3-2"] {
	content: "VjIWR,";
} /*!sc*/
.dhCqbV {
	margin: 0;
	padding: 0;
	height: 94px;
	overflow: hidden;
	position: relative;
	white-space: nowrap;
	width: calc(100% - 556px);
} /*!sc*/
@media (min-width: 992px) {
	.dhCqbV {
		display: block;
	}
} /*!sc*/
data-styled.g37[id="PillarNavigation__NavWrapper-sc-qc2hg3-3"] {
	content: "dhCqbV,";
} /*!sc*/
.gGHzIG {
	padding-left: 30px;
	-webkit-box-flex: 1;
	-webkit-flex-grow: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
} /*!sc*/
@media (min-width: 992px) {
	.gGHzIG {
		display: block;
	}
} /*!sc*/
data-styled.g38[id="PillarNavigation__SearchWrapper-sc-qc2hg3-4"] {
	content: "gGHzIG,";
} /*!sc*/
.hQQgRH {
	cursor: pointer;
	color: #1a66ff;
} /*!sc*/
data-styled.g42[id="Links__StyledLink-sc-hi52k0-0"] {
	content: "hQQgRH,";
} /*!sc*/
.bHrCuE {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	max-width: 670px;
	margin: 0 auto;
} /*!sc*/
@media (min-width: 992px) {
	.bHrCuE {
		max-width: 1300px;
		margin: 0;
	}
} /*!sc*/
@media (min-width: 992px) {
	.bHrCuE {
		display: block;
		width: 100%;
	}
} /*!sc*/
data-styled.g45[id="ResourcePreview__Wrapper-sc-jaop8e-0"] {
	content: "bHrCuE,";
} /*!sc*/
.feAwAc {
	width: 100%;
	margin-bottom: 16px;
	-webkit-flex-shrink: 0;
	-ms-flex-negative: 0;
	flex-shrink: 0;
	display: block;
	max-width: 115px;
} /*!sc*/
@media (min-width: 768px) {
	.feAwAc {
		max-width: 288px;
	}
} /*!sc*/
@media (min-width: 992px) {
	.feAwAc {
		max-width: none;
	}
} /*!sc*/
data-styled.g46[id="ResourcePreview__ThumbnailLink-sc-jaop8e-1"] {
	content: "feAwAc,";
} /*!sc*/
.gggBzR {
	display: none;
	font-weight: 700;
	margin-bottom: 10px;
	font-size: 0.95rem;
} /*!sc*/
@media (min-width: 992px) {
	.gggBzR {
		display: block;
	}
} /*!sc*/
data-styled.g47[id="ResourcePreview__Pillar-sc-jaop8e-2"] {
	content: "gggBzR,";
} /*!sc*/
.kwWwXM {
	margin: 0;
	margin-bottom: 8px;
	padding: 0 0 0 30px;
	color: #1b1b21;
	font-size: 1.2rem;
	font-weight: 700;
} /*!sc*/
@media (min-width: 768px) {
	.kwWwXM {
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
} /*!sc*/
data-styled.g48[id="ResourcePreview__Header-sc-jaop8e-3"] {
	content: "kwWwXM,";
} /*!sc*/
.leLjNw {
	display: none;
	font-weight: 400;
	font-size: 0.8rem;
	line-height: 2.1rem;
	color: #6f6f87;
} /*!sc*/
@media (min-width: 768px) {
	.leLjNw {
		display: inline-block;
	}
} /*!sc*/
data-styled.g49[id="ResourcePreview__PublishedDate-sc-jaop8e-4"] {
	content: "leLjNw,";
} /*!sc*/
.hhGuWn {
	margin-right: 15px;
} /*!sc*/
@media (min-width: 768px) {
	.hhGuWn {
		margin-left: 25px;
	}
} /*!sc*/
@media (min-width: 992px) {
	.hhGuWn {
		margin-left: 0;
	}
} /*!sc*/
data-styled.g50[id="ResourcePreview__Info-sc-jaop8e-5"] {
	content: "hhGuWn,";
} /*!sc*/
.eogOz {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	max-width: 670px;
	margin: 0 auto;
} /*!sc*/
@media (min-width: 992px) {
	.eogOz {
		margin: 0 -10px;
		max-width: 1300px;
	}
} /*!sc*/
data-styled.g51[id="ResourceList__Wrapper-sc-hakffs-0"] {
	content: "eogOz,";
} /*!sc*/
.bYWNPD {
	width: 100%;
	padding: 30px 0;
	border-top: 1px solid #dcdce6;
} /*!sc*/
.bYWNPD:first-child {
	border-top: none;
} /*!sc*/
.bYWNPD:last-child {
	border-bottom: 1px solid #dcdce6;
} /*!sc*/
@media (min-width: 768px) {
	.bYWNPD {
		padding: 40px 0;
	}
} /*!sc*/
@media (min-width: 992px) {
	.bYWNPD {
		width: 25%;
		padding: 0 10px 60px;
		border: none;
	}
	.bYWNPD:last-child {
		border: none;
	}
} /*!sc*/
data-styled.g52[id="ResourceList__SpacedVerticalPreview-sc-hakffs-1"] {
	content: "bYWNPD,";
} /*!sc*/
.jqqjyj {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	margin: 0 auto 24px;
	-webkit-align-items: flex-end;
	-webkit-box-align: flex-end;
	-ms-flex-align: flex-end;
	align-items: flex-end;
	max-width: 670px;
} /*!sc*/
@media (min-width: 992px) {
	.jqqjyj {
		margin: 0 auto 48px;
		max-width: 1300px;
	}
} /*!sc*/
data-styled.g55[id="PillarResourcePreview__PillarHeadWrapper-sc-dmsixb-0"] {
	content: "jqqjyj,";
} /*!sc*/
.kndCHA {
	margin: 0;
	max-width: none;
} /*!sc*/
@media (min-width: 768px) {
	.kndCHA {
		margin: 0;
	}
} /*!sc*/
data-styled.g56[id="PillarResourcePreview__PillarHead-sc-dmsixb-1"] {
	content: "kndCHA,";
} /*!sc*/
.bFTely {
	font-weight: 500;
	margin-left: auto;
	white-space: nowrap;
	display: none;
	text-align: left;
} /*!sc*/
@media (min-width: 576px) {
	.bFTely {
		display: block;
	}
} /*!sc*/
.fgDkFy {
	font-weight: 500;
	margin-left: auto;
	white-space: nowrap;
	display: block;
	text-align: center;
} /*!sc*/
@media (min-width: 576px) {
	.fgDkFy {
		display: none;
	}
} /*!sc*/
data-styled.g57[id="PillarResourcePreview__ResourceLink-sc-dmsixb-2"] {
	content: "bFTely,fgDkFy,";
} /*!sc*/
.lbpHku {
	margin: 0 auto;
	max-width: 670px;
} /*!sc*/
@media (min-width: 992px) {
	.lbpHku {
		max-width: none;
	}
} /*!sc*/
data-styled.g58[id="PillarResourcePreview__Wrapper-sc-dmsixb-3"] {
	content: "lbpHku,";
} /*!sc*/
.gQNbUo {
	margin-bottom: 24px;
} /*!sc*/
@media (min-width: 768px) {
	.gQNbUo {
		margin-bottom: 0;
	}
} /*!sc*/
data-styled.g59[id="PillarResourcePreview__SpacedResourceList-sc-dmsixb-4"] {
	content: "gQNbUo,";
} /*!sc*/
.giGedo {
	display: inline-block;
	background: none;
	position: relative;
	text-align: center;
	border-width: 0;
	border-style: none;
	border-radius: 3px;
	-webkit-text-decoration: none;
	text-decoration: none;
	-webkit-transition: all 0.15s ease-in-out;
	transition: all 0.15s ease-in-out;
	cursor: pointer;
	opacity: 1;
	padding: 16px 24px;
	font-weight: 500;
} /*!sc*/
.giGedo:hover,
.giGedo:focus,
.giGedo:active {
	outline: none;
	-webkit-text-decoration: none;
	text-decoration: none;
} /*!sc*/
data-styled.g60[id="Buttons__BaseButton-sc-10k1r7g-0"] {
	content: "giGedo,";
} /*!sc*/
.bvvCAt {
	color: #fff;
	background-color: #1a66ff;
	border: 2px solid #1a66ff;
} /*!sc*/
.bvvCAt:hover,
.bvvCAt:focus,
.bvvCAt:active {
	color: #fff;
	background-color: #1a66ff;
	border: 2px solid #1a66ff;
} /*!sc*/
data-styled.g61[id="Buttons__Button-sc-10k1r7g-1"] {
	content: "bvvCAt,";
} /*!sc*/
.hFIIqn {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: column-reverse;
	-ms-flex-direction: column-reverse;
	flex-direction: column-reverse;
	max-width: 670px;
	margin: 0 auto;
} /*!sc*/
@media (min-width: 768px) {
	.hFIIqn {
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
	}
} /*!sc*/
@media (min-width: 992px) {
	.hFIIqn {
		max-width: 1300px;
	}
} /*!sc*/
data-styled.g98[id="FeaturedResourcePreview__Wrapper-sc-1o49ikn-0"] {
	content: "hFIIqn,";
} /*!sc*/
.eyDgGS {
	display: block;
	width: 100%;
	max-width: none;
} /*!sc*/
@media (min-width: 768px) {
	.eyDgGS {
		width: 50%;
	}
} /*!sc*/
@media (min-width: 1200px) {
	.eyDgGS {
		width: 680px;
	}
} /*!sc*/
data-styled.g99[id="FeaturedResourcePreview__ThumbnailLink-sc-1o49ikn-1"] {
	content: "eyDgGS,";
} /*!sc*/
.bRdIbP {
	margin-top: 38px;
} /*!sc*/
data-styled.g101[id="FeaturedResourcePreview__ButtonWrapper-sc-1o49ikn-3"] {
	content: "bRdIbP,";
} /*!sc*/
.fONxGC {
	margin: 0;
	color: #1b1b21;
	margin-bottom: 8px;
	padding: 0 30px 0 0;
	font-size: 2.2rem;
	line-height: 2.7rem;
} /*!sc*/
@media (min-width: 768px) {
	.fONxGC {
		font-size: 3.2rem;
		line-height: 4rem;
	}
} /*!sc*/
@media (min-width: 992px) {
	.fONxGC {
		font-size: 4.3rem;
		line-height: 4.8rem;
	}
} /*!sc*/
data-styled.g102[id="FeaturedResourcePreview__Header-sc-1o49ikn-4"] {
	content: "fONxGC,";
} /*!sc*/
.kAMdev {
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 2.1rem;
	display: inline-block;
	margin-bottom: 16px;
	color: #6f6f87;
} /*!sc*/
@media (min-width: 768px) {
	.kAMdev {
		display: inline-block;
	}
} /*!sc*/
data-styled.g103[id="FeaturedResourcePreview__PublishedDate-sc-1o49ikn-5"] {
	content: "kAMdev,";
} /*!sc*/
.bffwbC {
	width: 100%;
	margin: 20px 0 0;
} /*!sc*/
@media (min-width: 768px) {
	.bffwbC {
		width: 50%;
		margin: 0 32px 0 0;
	}
} /*!sc*/
@media (min-width: 1200px) {
	.bffwbC {
		width: calc(100% - 680px);
	}
} /*!sc*/
data-styled.g104[id="FeaturedResourcePreview__Info-sc-1o49ikn-6"] {
	content: "bffwbC,";
} /*!sc*/
.hnGwBx {
	position: relative;
} /*!sc*/
.hnGwBx header {
	background-color: #022a1c;
} /*!sc*/
.hnGwBx footer div {
	background: #022a1c;
} /*!sc*/
.hnGwBx footer * {
	font-size: 14px !important;
	font-weight: 500;
	-webkit-letter-spacing: 0.5px;
	-moz-letter-spacing: 0.5px;
	-ms-letter-spacing: 0.5px;
	letter-spacing: 0.5px;
} /*!sc*/
.hnGwBx footer * h3 {
	font-size: 18px !important;
} /*!sc*/
.hnGwBx [data-navigation] * {
	font-size: 14px !important;
} /*!sc*/
.hnGwBx [class*="content"][data-navigation] * {
	font-size: 24px !important;
	line-height: 32px !important;
} /*!sc*/
data-styled.g117[id="BaseLayout__PageWrapper-sc-7cnlo4-0"] {
	content: "hnGwBx,";
} /*!sc*/
.gTbKnp {
	outline: none;
	width: 100%;
	max-width: 544px;
	text-align: left;
	position: relative;
	border-radius: 2px;
	color: #c5c5d6;
	-webkit-transition: border 0.5s;
	transition: border 0.5s;
	background-color: #fff;
	border: 1px solid #c5c5d6;
} /*!sc*/
data-styled.g3[id="DropDown__DropDownContainer-sc-14dp86x-0"] {
	content: "gTbKnp,";
} /*!sc*/
.dKrFID {
	width: 100%;
	border: none;
	background: none;
	padding: 15px 18px;
	display: inline-block;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
} /*!sc*/
.dKrFID:focus {
	outline: none;
} /*!sc*/
.dKrFID::-webkit-input-placeholder {
	color: #9a9aad;
} /*!sc*/
.dKrFID::-moz-placeholder {
	color: #9a9aad;
} /*!sc*/
.dKrFID:-ms-input-placeholder {
	color: #9a9aad;
} /*!sc*/
.dKrFID::placeholder {
	color: #9a9aad;
} /*!sc*/
data-styled.g8[id="DropDown__DropDownSearch-sc-14dp86x-5"] {
	content: "dKrFID,";
} /*!sc*/
.wRRrc {
	right: 0px;
	padding: 16px 12px;
	position: absolute;
} /*!sc*/
.wRRrc svg {
	height: 20px;
	width: 20px;
} /*!sc*/
.wRRrc svg path {
	fill: #c5c5d6;
} /*!sc*/
data-styled.g9[id="Search__SearchIconContainer-sc-dcvmlt-0"] {
	content: "wRRrc,";
} /*!sc*/
.gKXYKr {
	width: 100%;
	margin-bottom: 0;
	text-align: center;
	color: undefined;
} /*!sc*/
.evCvBb {
	width: 100%;
	margin-bottom: 0;
	color: undefined;
} /*!sc*/
data-styled.g11[id="Headers__Heading-sc-1erae96-0"] {
	content: "gKXYKr,evCvBb,";
} /*!sc*/
.hfVHek {
	font-size: 5.2rem;
	line-height: 6.2rem;
} /*!sc*/
data-styled.g13[id="Headers__H1-sc-1erae96-2"] {
	content: "hfVHek,";
} /*!sc*/
.iDyBte {
	font-size: 3.2rem;
	line-height: 4rem;
} /*!sc*/
data-styled.g14[id="Headers__H2-sc-1erae96-3"] {
	content: "iDyBte,";
} /*!sc*/
.ikIQBu {
	font-size: 26px;
	line-height: 34px;
} /*!sc*/
data-styled.g15[id="Headers__H3-sc-1erae96-4"] {
	content: "ikIQBu,";
} /*!sc*/
.dWpZNL {
	margin-top: 5rem;
	margin-bottom: 3rem;
} /*!sc*/
.hqeHFg {
	margin-top: 4rem;
	margin-bottom: 1rem;
} /*!sc*/
data-styled.g19[id="Headers__HeaderSpacing-sc-1erae96-8"] {
	content: "dWpZNL,hqeHFg,";
} /*!sc*/
.kGqLlx {
	width: 9px;
	height: 9px;
	display: inline-block;
	border-top: 2px solid rgb(0, 0, 50);
	border-right: 2px solid rgb(0, 0, 50);
	-webkit-transform: rotate(-135deg);
	-ms-transform: rotate(-135deg);
	transform: rotate(-135deg);
} /*!sc*/
data-styled.g21[id="Arrows__Arrow-sc-1gwjvbv-0"] {
	content: "kGqLlx,";
} /*!sc*/
.gQkMvi {
	width: 100%;
	max-width: 870px;
	margin: 0 auto;
	padding: 76px 15px 40px;
} /*!sc*/
@media (min-width: 768px) {
	.gQkMvi {
		padding-left: 30px;
		padding-right: 30px;
	}
} /*!sc*/
.kTQFfb {
	width: 100%;
	max-width: 670px;
	margin: 0 auto;
	padding: 0px 15px 64px;
} /*!sc*/
@media (min-width: 768px) {
	.kTQFfb {
		padding-left: 30px;
		padding-right: 30px;
	}
} /*!sc*/
.hmxrfE {
	width: 100%;
	max-width: 670px;
	margin: 0 auto;
	padding: 0px 15px 50px;
} /*!sc*/
@media (min-width: 768px) {
	.hmxrfE {
		padding-left: 30px;
		padding-right: 30px;
	}
} /*!sc*/
.fWOdXJ {
	width: 100%;
	max-width: 670px;
	margin: 0 auto;
	padding: 0px 15px 0px;
} /*!sc*/
@media (min-width: 768px) {
	.fWOdXJ {
		padding-left: 30px;
		padding-right: 30px;
	}
} /*!sc*/
.dWqNns {
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0px 15px 75px;
} /*!sc*/
@media (min-width: 768px) {
	.dWqNns {
		padding-left: 30px;
		padding-right: 30px;
	}
} /*!sc*/
data-styled.g29[id="Spacing-sc-11pk266-0"] {
	content: "gQkMvi,kTQFfb,hmxrfE,fWOdXJ,dWqNns,";
} /*!sc*/
.gvlUzE {
	width: 100%;
	height: 79px;
	position: relative;
	font-weight: 500;
	font-size: 1.4rem;
	z-index: 1;
	-webkit-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	background-color: #fcece3;
	display: none;
} /*!sc*/
@media (min-width: 768px) {
	.gvlUzE {
		position: -webkit-sticky;
		position: sticky;
		top: 72px;
	}
} /*!sc*/
@media (min-width: 992px) {
	.gvlUzE {
		height: 94px;
	}
} /*!sc*/
@media (min-width: 768px) {
	.gvlUzE {
		display: block;
	}
} /*!sc*/
data-styled.g34[id="PillarNavigation__HeaderWrapper-sc-qc2hg3-0"] {
	content: "gvlUzE,";
} /*!sc*/
.hjsJel {
	height: 100%;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	margin: 0 auto;
	padding: 0;
	-webkit-flex-wrap: nowrap;
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;
	max-width: 1300px;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
} /*!sc*/
@media (min-width: 992px) {
	.hjsJel {
		padding: 0 30px;
	}
} /*!sc*/
data-styled.g35[id="PillarNavigation__HeaderInner-sc-qc2hg3-1"] {
	content: "hjsJel,";
} /*!sc*/
.VjIWR {
	margin: 0;
	padding: 0;
	height: 94px;
	display: none;
	overflow: hidden;
	position: relative;
	white-space: nowrap;
	font-size: 22px;
	font-weight: 700;
	width: 230px;
} /*!sc*/
@media (min-width: 992px) {
	.VjIWR {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
} /*!sc*/
data-styled.g36[id="PillarNavigation__NavTitle-sc-qc2hg3-2"] {
	content: "VjIWR,";
} /*!sc*/
.gAAnHh {
	padding-left: 30px;
	-webkit-box-flex: 1;
	-webkit-flex-grow: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	display: none;
} /*!sc*/
@media (min-width: 992px) {
	.gAAnHh {
		display: block;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: end;
		-webkit-justify-content: flex-end;
		-ms-flex-pack: end;
		justify-content: flex-end;
	}
	.gAAnHh > div {
		max-width: 295px;
	}
} /*!sc*/
data-styled.g38[id="PillarNavigation__SearchWrapper-sc-qc2hg3-4"] {
	content: "gAAnHh,";
} /*!sc*/
.gfoHQ {
	display: none;
} /*!sc*/
@media (min-width: 992px) {
	.gfoHQ {
		display: block;
		width: 1px;
		height: 34px;
		opacity: 0.2;
		margin-right: 26px;
		color: #000032;
	}
} /*!sc*/
data-styled.g40[id="PillarNavigation__BreadcrumbsVerticalDivider-sc-qc2hg3-6"] {
	content: "gfoHQ,";
} /*!sc*/
.bRZNIX {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	color: inherit;
	padding-left: 30px;
} /*!sc*/
@media (min-width: 992px) {
	.bRZNIX {
		padding: 0;
	}
} /*!sc*/
.bRZNIX > span {
	margin-right: 16px;
} /*!sc*/
data-styled.g41[id="PillarNavigation__BreadcrumbsBackLink-sc-qc2hg3-7"] {
	content: "bRZNIX,";
} /*!sc*/
.hQQgRH {
	cursor: pointer;
	color: #1a66ff;
} /*!sc*/
data-styled.g42[id="Links__StyledLink-sc-hi52k0-0"] {
	content: "hQQgRH,";
} /*!sc*/
.bHrCuE {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	max-width: 670px;
	margin: 0 auto;
} /*!sc*/
@media (min-width: 992px) {
	.bHrCuE {
		max-width: 1300px;
		margin: 0;
	}
} /*!sc*/
@media (min-width: 992px) {
	.bHrCuE {
		display: block;
		width: 100%;
	}
} /*!sc*/
data-styled.g45[id="ResourcePreview__Wrapper-sc-jaop8e-0"] {
	content: "bHrCuE,";
} /*!sc*/
.feAwAc {
	width: 100%;
	margin-bottom: 16px;
	-webkit-flex-shrink: 0;
	-ms-flex-negative: 0;
	flex-shrink: 0;
	display: block;
	max-width: 115px;
} /*!sc*/
@media (min-width: 768px) {
	.feAwAc {
		max-width: 288px;
	}
} /*!sc*/
@media (min-width: 992px) {
	.feAwAc {
		max-width: none;
	}
} /*!sc*/
data-styled.g46[id="ResourcePreview__ThumbnailLink-sc-jaop8e-1"] {
	content: "feAwAc,";
} /*!sc*/
.gggBzR {
	display: none;
	font-weight: 500;
	margin-bottom: 10px;
	font-size: 1.4rem;
} /*!sc*/
@media (min-width: 992px) {
	.gggBzR {
		display: block;
	}
} /*!sc*/
data-styled.g47[id="ResourcePreview__Pillar-sc-jaop8e-2"] {
	content: "gggBzR,";
} /*!sc*/
.kwWwXM {
	margin: 0;
	margin-bottom: 8px;
	padding: 0 30px 0 0;
	color: #1b1b21;
	font-size: 1.6rem;
} /*!sc*/
@media (min-width: 768px) {
	.kwWwXM {
		font-size: 2.1rem;
		line-height: 2.8rem;
	}
} /*!sc*/
data-styled.g48[id="ResourcePreview__Header-sc-jaop8e-3"] {
	content: "kwWwXM,";
} /*!sc*/
.hhGuWn {
	margin-left: 15px;
} /*!sc*/
@media (min-width: 768px) {
	.hhGuWn {
		margin-left: 25px;
	}
} /*!sc*/
@media (min-width: 992px) {
	.hhGuWn {
		margin-left: 0;
	}
} /*!sc*/
data-styled.g50[id="ResourcePreview__Info-sc-jaop8e-5"] {
	content: "hhGuWn,";
} /*!sc*/
.eogOz {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	max-width: 670px;
	margin: 0 auto;
} /*!sc*/
@media (min-width: 992px) {
	.eogOz {
		margin: 0 -10px;
		max-width: 1300px;
	}
} /*!sc*/
data-styled.g51[id="ResourceList__Wrapper-sc-hakffs-0"] {
	content: "eogOz,";
} /*!sc*/
.bYWNPD {
	width: 100%;
	padding: 30px 0;
	border-top: 1px solid #dcdce6;
} /*!sc*/
.bYWNPD:first-child {
	border-top: none;
} /*!sc*/
.bYWNPD:last-child {
	border-bottom: 1px solid #dcdce6;
} /*!sc*/
@media (min-width: 768px) {
	.bYWNPD {
		padding: 40px 0;
	}
} /*!sc*/
@media (min-width: 992px) {
	.bYWNPD {
		width: 25%;
		padding: 0 10px 60px;
		border: none;
	}
	.bYWNPD:last-child {
		border: none;
	}
} /*!sc*/
data-styled.g52[id="ResourceList__SpacedVerticalPreview-sc-hakffs-1"] {
	content: "bYWNPD,";
} /*!sc*/
.hvhTD {
	margin-top: 0;
	color: undefined;
} /*!sc*/
.hvhTD img {
	max-width: 100%;
} /*!sc*/
data-styled.g95[id="Markdown__Paragraph-sc-wk78ky-0"] {
	content: "hvhTD,";
} /*!sc*/
.OcFqL {
	text-align: center;
} /*!sc*/
data-styled.g109[id="ResourceImage__Wrapper-sc-uyzb89-1"] {
	content: "OcFqL,";
} /*!sc*/
.hnGwBx {
	position: relative;
} /*!sc*/
.hnGwBx header {
	background-color: #022a1c;
} /*!sc*/
.hnGwBx footer div {
	background: #022a1c;
} /*!sc*/
.hnGwBx footer * {
	font-size: 14px !important;
	font-weight: 500;
	-webkit-letter-spacing: 0.5px;
	-moz-letter-spacing: 0.5px;
	-ms-letter-spacing: 0.5px;
	letter-spacing: 0.5px;
} /*!sc*/
.hnGwBx footer * h3 {
	font-size: 18px !important;
} /*!sc*/
.hnGwBx [data-navigation] * {
	font-size: 14px !important;
} /*!sc*/
.hnGwBx [class*="content"][data-navigation] * {
	font-size: 24px !important;
	line-height: 32px !important;
} /*!sc*/
data-styled.g117[id="BaseLayout__PageWrapper-sc-7cnlo4-0"] {
	content: "hnGwBx,";
} /*!sc*/
.dLxPXm {
	padding: 18px 0 28px 0;
} /*!sc*/
data-styled.g118[id="Author__Wrapper-sc-1ep02bo-0"] {
	content: "dLxPXm,";
} /*!sc*/
.cHhCTI {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	width: 60px;
	height: 60px;
	overflow: hidden;
	margin: 0 20px 0 0;
	border-radius: 50%;
} /*!sc*/
.cHhCTI img {
	width: 100%;
	height: auto;
} /*!sc*/
data-styled.g119[id="Author__Image-sc-1ep02bo-1"] {
	content: "cHhCTI,";
} /*!sc*/
.exWuZb {
	margin-bottom: 14px;
	font-weight: bold;
	font-size: 1.4rem;
	line-height: 2.1rem;
} /*!sc*/
data-styled.g120[id="Author__SectionName-sc-1ep02bo-2"] {
	content: "exWuZb,";
} /*!sc*/
.dwxJle {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	margin-bottom: 14px;
} /*!sc*/
data-styled.g121[id="Author__Header-sc-1ep02bo-3"] {
	content: "dwxJle,";
} /*!sc*/
.eIjpPE {
	font-weight: bold;
	font-size: 1.4rem;
	line-height: 2.1rem;
} /*!sc*/
data-styled.g122[id="Author__Name-sc-1ep02bo-4"] {
	content: "eIjpPE,";
} /*!sc*/
.jYfPKU {
	font-size: 1.4rem;
	line-height: 2.1rem;
	opacity: 0.6;
} /*!sc*/
data-styled.g123[id="Author__Title-sc-1ep02bo-5"] {
	content: "jYfPKU,";
} /*!sc*/
.cryOmn {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
} /*!sc*/
data-styled.g125[id="Author__Info-sc-1ep02bo-7"] {
	content: "cryOmn,";
} /*!sc*/
.dggytE {
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	font-size: 1.6rem;
	line-height: 2.4rem;
} /*!sc*/
.dggytE:last-child {
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	margin: 1.5rem auto;
} /*!sc*/
data-styled.g134[id="RichText__Paragraph-sc-lgc1a-2"] {
	content: "dggytE,";
} /*!sc*/
.cKNMGu {
	text-align: undefined;
} /*!sc*/
.cKNMGu *:first-child {
	margin-top: 0;
} /*!sc*/
data-styled.g137[id="RichText__RichtextWrapper-sc-lgc1a-5"] {
	content: "cKNMGu,";
} /*!sc*/
.jDOCWC {
	display: block;
	text-align: center;
	margin-bottom: 16px;
} /*!sc*/
data-styled.g138[id="SingleResourceView__TopPillarLink-sc-w8e2aw-0"] {
	content: "jDOCWC,";
} /*!sc*/
.hrcOuu {
	margin-bottom: 24px;
	font-size: 3.2rem;
	line-height: 4rem;
} /*!sc*/
@media (min-width: 768px) {
	.hrcOuu {
		font-size: 5.2rem;
		line-height: 6.2rem;
	}
} /*!sc*/
data-styled.g139[id="SingleResourceView__Title-sc-w8e2aw-1"] {
	content: "hrcOuu,";
} /*!sc*/
.lnMZRc {
	color: #6f6f87;
	text-align: center;
} /*!sc*/
data-styled.g140[id="SingleResourceView__PublishedDate-sc-w8e2aw-2"] {
	content: "lnMZRc,";
} /*!sc*/
.bkyjuy {
	padding: 0 15px;
	margin: 0 auto 60px auto;
	font-size: 2.1rem;
	line-height: 3.2rem;
	max-width: 670px;
} /*!sc*/
@media (min-width: 768px) {
	.bkyjuy {
		padding: 0 30px;
		font-size: 2.4rem;
		line-height: 4rem;
	}
} /*!sc*/
data-styled.g141[id="SingleResourceView__Introduction-sc-w8e2aw-3"] {
	content: "bkyjuy,";
} /*!sc*/
.fmQqAW {
	content-visibility: auto;
	contain-intrinsic-size: 1200px;
} /*!sc*/
data-styled.g142[id="SingleResourceView__ArticleContent-sc-w8e2aw-4"] {
	content: "fmQqAW,";
} /*!sc*/
.eSHcWI {
	text-align: center;
	margin: 0 0 48px 0;
} /*!sc*/
@media (min-width: 768px) {
	.eSHcWI {
		margin: 0 0 70px 0;
	}
} /*!sc*/
data-styled.g143[id="SingleResourceView__RelatedResourceHeader-sc-w8e2aw-5"] {
	content: "eSHcWI,";
} /*!sc*/
.fWIZrr {
	margin-bottom: 48px;
	border-width: 1px 0;
	border-style: solid;
	border-color: #dcdce6;
} /*!sc*/
@media (min-width: 768px) {
	.fWIZrr {
		margin-bottom: 106px;
	}
} /*!sc*/
data-styled.g144[id="SingleResourceView__ResourceFooter-sc-w8e2aw-6"] {
	content: "fWIZrr,";
} /*!sc*/
.lhLMGe {
	width: 100%;
	padding: 18px 0 24px 0;
	border-width: 1px 0 0 0;
	border-style: solid;
	border-color: #dcdce6;
} /*!sc*/
@media (min-width: 768px) {
	.lhLMGe {
		padding: 18px 0 28px 0;
	}
} /*!sc*/
data-styled.g146[id="SingleResourceView__SocialIconsWrapper-sc-w8e2aw-8"] {
	content: "lhLMGe,";
} /*!sc*/
.gYYuZV {
	margin-bottom: 14px;
	font-weight: bold;
	font-size: 1.4rem;
	line-height: 2.1rem;
} /*!sc*/
data-styled.g147[id="SingleResourceView__SectionName-sc-w8e2aw-9"] {
	content: "gYYuZV,";
} /*!sc*/
.dbwviz {
	list-style-type: none;
	padding: 0;
} /*!sc*/
data-styled.g148[id="SingleResourceView__SocialIcons-sc-w8e2aw-10"] {
	content: "dbwviz,";
} /*!sc*/
.RqykO {
	display: -webkit-inline-box;
	display: -webkit-inline-flex;
	display: -ms-inline-flexbox;
	display: inline-flex;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	cursor: pointer;
	width: 40px;
	height: 40px;
	border-radius: 30px;
	margin-right: 10px;
	background-color: #f9f9fa;
} /*!sc*/
.RqykO:last-of-type {
	margin-right: 0;
} /*!sc*/
@media (min-width: 768px) {
	.RqykO {
		width: 50px;
		height: 50px;
	}
} /*!sc*/
data-styled.g149[id="SingleResourceView__SocialShareIconItem-sc-w8e2aw-11"] {
	content: "RqykO,";
} /*!sc*/
.dwjUYR {
	width: 100%;
	height: 100%;
	display: inherit;
	-webkit-align-items: inherit;
	-webkit-box-align: inherit;
	-ms-flex-align: inherit;
	align-items: inherit;
	-webkit-box-pack: inherit;
	-webkit-justify-content: inherit;
	-ms-flex-pack: inherit;
	justify-content: inherit;
	border-radius: inherit;
} /*!sc*/
.dwjUYR > svg {
	width: 16px;
	height: 16px;
} /*!sc*/
.dwjUYR > svg > path {
	fill: #ffffff;
} /*!sc*/
data-styled.g150[id="SingleResourceView__SocialShareIconLink-sc-w8e2aw-12"] {
	content: "dwjUYR,";
} /*!sc*/
.jIfMJJ {
	background-color: #4267b2;
} /*!sc*/
data-styled.g151[id="SingleResourceView__FacebookIconLinkWrapper-sc-w8e2aw-13"] {
	content: "jIfMJJ,";
} /*!sc*/
.eqeAYL {
	background-color: #48aae6;
} /*!sc*/
data-styled.g152[id="SingleResourceView__TwitterIconLinkWrapper-sc-w8e2aw-14"] {
	content: "eqeAYL,";
} /*!sc*/
.bLSWoF {
	background-color: #0077b5;
} /*!sc*/
data-styled.g153[id="SingleResourceView__LinkedInIconLinkWrapper-sc-w8e2aw-15"] {
	content: "bLSWoF,";
} /*!sc*/
</style>
