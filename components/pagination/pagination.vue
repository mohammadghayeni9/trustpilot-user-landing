<script setup>
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { toRefs } from "vue";

const props = defineProps({
	pageNumber: {
		type: Number,
		default: 1,
	},
});

const emits = defineEmits(["changePage"]);

const changePage = (type) => {
	emits("changePage", type);
};

const { pageNumber } = toRefs(props);
</script>

<template>
	<div class="flex gap-4 mt-5 items-center justify-center select-none">
		<div class="flex cursor-pointer border rounded-md px-3 py-[6px]" @click="changePage('next')">
			<ChevronRight />
			<span>بعدی</span>
		</div>
		<div
			class="rounded-md text-center px-[14px] py-[6px] border"
		>
			{{ pageNumber }}
		</div>
		<div class="flex cursor-pointer border rounded-md px-3 py-[6px]" @click="changePage('prev')">
			<span>قبلی</span>
			<ChevronLeft />
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
