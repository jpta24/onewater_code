<template>
	<nav class="z-20 relative md:overflow-hidden">
		<div
			class="text-dark w-full flex items-center justify-between custom-breakpoint:pr-[4.8rem] custom-breakpoint:pl-[4.8rem] custom-breakpoint:py-[1.2rem] py-[1.2rem] pl-[2.4rem] pr-[1.2rem]"
		>
			<OneWaterIcon :changeActivePage="changeActivePage"/>
			<div class="block custom-breakpoint:hidden">
				<HamburgerIcon />
			</div>
			<div class="hidden custom-breakpoint:block">
				<NavbarList :changeActivePage="changeActivePage" :activePage="activePage"/>
			</div>
		</div>
	</nav>
</template>

<script>
import OneWaterIcon from '@/assets/icons/OneWater.vue';
import HamburgerIcon from '@/assets/icons/Hamburger.vue';
import NavbarList from './NavbarList.vue';
export default {
	name: 'AppNavbar',
    props: ['changeActivePage','activePage'],
	components: {
		OneWaterIcon,
		HamburgerIcon,
		NavbarList,
	},
};
</script>
