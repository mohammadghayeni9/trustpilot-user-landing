<script setup>
import { API_ROUTES } from "@/constants/apiRoutes";

const props = defineProps({
	data: {
		type: Object,
	},
});

const { data } = toRefs(props);

const imageComputed = computed(() => {
	return API_ROUTES.baseUrl + data.value.image;
});
</script>

<template>
	<div
		class="ResourcePreview__Wrapper-sc-jaop8e-0 bHrCuE ResourceList__SpacedVerticalPreview-sc-hakffs-1 bYWNPD"
	>
		<router-link
			aria-labelledby="resource-preview-header-parcel-delivery-scams"
			class="Links__StyledLink-sc-hi52k0-0 hQQgRH Links__Link-sc-hi52k0-1 ResourcePreview__ThumbnailLink-sc-jaop8e-1 hRKPDT feAwAc"
			:to="`/blogs/${data?.id}`"
			><div
				class="react-aspect-ratio-placeholder"
				style="max-width: 640px; width: 100%; --aspect-ratio: (1)"
			>
				<img
					alt="Parcel delivery scams"
					title="A cardboard box on a bike"
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
						object-fit: cover;
						color: transparent;
					"
					sizes="(min-width: 992px) 15vw, 25vw"
					:src="imageComputed"
				/></div
		></router-link>
		<div class="ResourcePreview__Info-sc-jaop8e-5 hhGuWn">
			<div
				class="Links__StyledLink-sc-hi52k0-0 hQQgRH Links__Link-sc-hi52k0-1 ResourcePreview__Pillar-sc-jaop8e-2 hRKPDT gggBzR cursor-default"
			>
				{{ data?.category?.name }}
			</div>
			<router-link
				class="Links__StyledLink-sc-hi52k0-0 hQQgRH Links__Link-sc-hi52k0-1 hRKPDT"
				:to="`/blogs/${data?.id}`"
				><h3
					id="resource-preview-header-parcel-delivery-scams"
					class="ResourcePreview__Header-sc-jaop8e-3 kwWwXM"
				>
					{{ data?.title }}
				</h3>
				<span
					class="ResourcePreview__PublishedDate-sc-jaop8e-4 leLjNw"
					>{{ data?.created_at }}</span
				></router-link
			>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
