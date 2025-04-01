<script setup>
import { API_ROUTES } from "@/constants/apiRoutes";
const { fetchData } = useApi();

const blogs = ref([]);
const getBlogs = async () => {
	blogs.value = await fetchData(API_ROUTES.articles.articles);
};

const categories = ref([]);
const getCategories = async () => {
	categories.value = await fetchData(API_ROUTES.articles.categories);
};

getBlogs();
getCategories();
</script>

<template>
	<main
		role="main"
		class="layout_content__z9_o0 layout_withFixedHeader__ZuxvW"
	>
		<nav class="PillarNavigation__HeaderWrapper-sc-qc2hg3-0 jYwEcq">
			<div
				class="PillarNavigation__HeaderInner-sc-qc2hg3-1 hjsJel !justify-between"
			>
				<div class="PillarNavigation__NavTitle-sc-qc2hg3-2 VjIWR">
					مقالات
				</div>
				<div
					role="navigation"
					class="PillarNavigation__NavWrapper-sc-qc2hg3-3 dhCqbV grow"
				>
					<ul
						class="NavItemWrapper-sc-1oep227-0 hIFkgg overflow-y-hidden flex justify-center"
					>
						<li
							selected=""
							class="NavItem-sc-1ervtkz-0 text-sm kxdvJW"
						>
							<router-link to="/blogs/trends-in-trust"
								>Trends in Trust</router-link
							>
						</li>
						<li class="NavItem-sc-1ervtkz-0 text-sm jefPgn">
							<router-link to="/blogs/reviews-matter"
								>Reviews Matter</router-link
							>
						</li>
						<li class="NavItem-sc-1ervtkz-0 text-sm jefPgn">
							<router-link to="/blogs/buy-with-confidence"
								>Buy With Confidence</router-link
							>
						</li>
						<li class="NavItem-sc-1ervtkz-0 text-sm jefPgn">
							<router-link to="/blogs/trustpilot-stories"
								>Trustpilot Stories</router-link
							>
						</li>
					</ul>
				</div>
				<div class="PillarNavigation__SearchWrapper-sc-qc2hg3-4 gGHzIG">
					<div
						class="DropDown__DropDownContainer-sc-14dp86x-0 gTbKnp"
					>
						<input
							placeholder="جستجوی مقالات"
							class="DropDown__DropDownSearch-sc-14dp86x-5 dKrFID placeholder:text-sm"
						/><span
							class="Search__SearchIconContainer-sc-dcvmlt-0 wRRrc"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								fill-rule="evenodd"
								clip-rule="evenodd"
								viewBox="0 0 19 20"
							>
								<path
									d="M12.572 13.106l-.016.016-.016.016a6 6 0 11.032-.032zm2.062.68A8.002 8.002 0 002.657 3.221 8 8 0 0013.22 15.2l4.286 4.286 1.414-1.414-4.286-4.286z"
								></path></svg
						></span>
					</div>
				</div>
			</div>
		</nav>
		<div class="Spacing-sc-11pk266-0 kdISxj">
			<h1
				class="Headers__Heading-sc-1erae96-0 FeaturedHeader-sc-1bwkr0x-0 PaginatedResourceList__Header-sc-1sjdi1d-0 evCvBb crrOGF kpKlxW mx-auto"
			>
				مقالات
			</h1>
			<div
				class="ResourceList__Wrapper-sc-hakffs-0 eogOz PaginatedResourceList__SpacedResourceList-sc-1sjdi1d-1 hGPeRk mx-auto"
			>
				<blogsBlogCard v-for="blog in blogs?.results" :to="blog?.id" :data="blog" />
			</div>
		</div>
	</main>
</template>

<style scoped lang="scss"></style>
