<template>
	<div>
		<div v-if="activePage === 'home' || activePage === 'events'"><HomePage /></div>
		<div v-if="activePage === 'about'"><AboutPage /></div>
        <div v-if="activePage === 'engage'"><EngagePage /></div>
	</div>
</template>
<script>
import HomePage from './HomePage.vue';
import AboutPage from './AboutPage.vue';
import EngagePage from './EngagePage.vue';

export default {
	name: 'PageView',
	props: ['activePage'],
	components: {
		HomePage,
		AboutPage,
		EngagePage,
	},
};
</script>
