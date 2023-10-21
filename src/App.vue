<template>
	<div class="" id="app">
		<div :class="{ 'is-blurred': isBannerActive }">
			<AppNavbar
				:changeActivePage="changeActivePage"
				:activePage="activePage"
                :toggleBanner="toggleBanner"
			/>
			<MarqueeBar />
			<PageView :activePage="activePage" />
		</div>

		<EventsBanner :activePage="activePage" :isBannerActive="isBannerActive" :toggleBanner="toggleBanner"/>
	</div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import MarqueeBar from './components/MarqueeBar.vue';
import PageView from './components/PageView.vue';
import EventsBanner from './components/EventsBanner.vue';

export default {
	name: 'App',
	components: {
		AppNavbar,
		MarqueeBar,
		PageView,
		EventsBanner,
	},
	data() {
		return {
			activePage: 'home',
			isBannerActive: false,
		};
	},
	methods: {
		changeActivePage(value) {
			this.activePage = value;
		},
		toggleBanner() {
			this.isBannerActive = !this.isBannerActive;
		},
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
