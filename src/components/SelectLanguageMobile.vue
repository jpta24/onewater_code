<template lang="">
	<section class="w-[12rem] text-base font-custom-text">
		<div
			class="flex bg-dark text-white self-center h-[3.6rem] justify-between items-center px-[1.5rem] relative"
		>
			<span>{{ language === 'En' ? 'English' : 'French' }}</span>
			<ChevronUp
				:class="[isCollapsed ? 'block' : 'hidden']"
				@click="toggleCollapsed()"
			/>
			<ChevronDown
				class="rotate-180"
				:class="[isCollapsed ? 'hidden' : 'block']"
				@click="toggleCollapsed()"
			/>
		</div>
		<div
			class="absolute flex flex-col justify-between items-center shadow-xl"
			:class="[isCollapsed ? 'hidden' : 'block']"
		>
			<div
				class="flex items-center justify-start h-[3.6rem] px-[1.5rem] w-[12rem] bg-white hover:bg-gray-200 cursor-pointer"
				@click="
					() => {
						setLanguage('En');
						isCollapsed = true;
					}
				"
			>
				English
			</div>
			<div
				class="flex items-center justify-start h-[3.6rem] px-[1.5rem] w-[12rem] bg-white hover:bg-gray-200 cursor-pointer"
				@click="
					() => {
						setLanguage('Fr');
						isCollapsed = true;
					}
				"
			>
				French
			</div>
		</div>
	</section>
</template>
<script>
import ChevronUp from '@/assets/icons/ChevronUp.vue';
import ChevronDown from '@/assets/icons/ChevronDown.vue';
export default {
	name: 'SelectLanguageMobile',
	props: ['language', 'setLanguage'],
	components: {
		ChevronUp,
		ChevronDown,
	},
	data() {
		return {
			isCollapsed: 'true',
		};
	},
	methods: {
		toggleCollapsed() {
			this.isCollapsed = !this.isCollapsed;
		},
	},
};
</script>
