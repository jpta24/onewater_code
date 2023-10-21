<template>
	<div class="" id="app">
		<AppNavbar :changeActivePage="changeActivePage" :activePage="activePage" />
		<MarqueeBar />
		<PageView :activePage="activePage" />
	</div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import MarqueeBar from './components/MarqueeBar.vue';
import PageView from './components/PageView.vue';

export default {
	name: 'App',
	components: {
		AppNavbar,
		MarqueeBar,
		PageView,
	},
	data() {
		return {
			activePage: 'home',
		};
	},
	methods: {
		changeActivePage(value) {
			this.activePage = value;
		},
	},
};
</script>

<style scoped>
/* Aquí irán tus estilos generales si los tienes */
</style>
