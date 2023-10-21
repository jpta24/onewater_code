<template lang="">
    <section
		class="flex flex-col z-[2] fixed top-0 right-0 h-screen w-[25rem] px-[3.6rem] pt-[6.2rem] items-center text-dark bg-white overflow-auto custom-scroll"
		v-if="isMobileNavbarActive"
	>
    <NavbarList :changeActivePage="changeActivePage" :activePage="activePage" :toggleBanner="toggleBanner" :language="language" :setLanguage="setLanguage"/>
	</section>
</template>
<script>
import NavbarList from './NavbarList.vue';
export default {
    name:'MobileNavbar',
    components: {
		NavbarList,
	},
	props: ['isMobileNavbarActive', 'toggleMobileNavbar','language','setLanguage',"changeActivePage","toggleBanner"],
}
</script>