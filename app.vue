<script setup>
</script>

<template>
	<div dir="rtl" class="app">
		<div
			class="w-full CDS_ConstellationProvider_themeProvider__9c82b4 CDS_ConstellationProvider_theme-default__9c82b4"
			data-constellation-theme="default"
		>
			<div
				class="theme-provider_themeProvider__gTchq theme-provider_theme-default__rmYu4"
				data-constellation-theme="default"
			>
				<div class="layout_wrapper__L5QV1">
					<Header class="w-full" />
					<NuxtPage class="w-full" />
					<Footer class="w-full" />
				</div>
			</div>
		</div>
	</div>
	<Toaster />
</template>

<style lang="scss" scoped>
.app {
	background-color: var(--background);
	color: var(--foreground);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	min-height: 100vh;
}
</style>
