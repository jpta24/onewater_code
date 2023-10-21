<template>
	<div class="" id="app">
		<div :class="{ 'is-blurred': isBannerActive }">
			<AppNavbar
				:changeActivePage="changeActivePage"
				:activePage="activePage"
                :toggleBanner="toggleBanner"
                :isMobileNavbarActive="isMobileNavbarActive"
                :toggleMobileNavbar="toggleMobileNavbar"
			/>
			<MarqueeBar />
			<PageView :activePage="activePage" />
		</div>

		<EventsBanner :activePage="activePage" :isBannerActive="isBannerActive" :toggleBanner="toggleBanner"/>
        <MobileNavbar :isMobileNavbarActive="isMobileNavbarActive" :toggleMobileNavbar="toggleMobileNavbar" :language="language" :setLanguage="setLanguage"/>
	</div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import MarqueeBar from './components/MarqueeBar.vue';
import PageView from './components/PageView.vue';
import EventsBanner from './components/EventsBanner.vue';
import MobileNavbar from './components/MobileNavbar.vue';

export default {
	name: 'App',
	components: {
		AppNavbar,
		MarqueeBar,
		PageView,
		EventsBanner,
		MobileNavbar,
	},
	data() {
		return {
			activePage: 'home',
			isBannerActive: false,
            isMobileNavbarActive: false,
            language:'En'
		};
	},
	methods: {
		changeActivePage(value) {
			this.activePage = value;
		},
		toggleBanner() {
			this.isBannerActive = !this.isBannerActive;
		},
        toggleMobileNavbar() {
			this.isMobileNavbarActive = !this.isMobileNavbarActive;
		},
        setLanguage(language) {
            this.language = language
        }
	},
};
</script>

<style scoped>
.is-blurred {
	filter: blur(3px);
	opacity: 0.5;
	transition: all 0.5s ease-in-out; 
}
</style>
