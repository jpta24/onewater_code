<template>
	<div class="relative">
		<div>
			<div v-if="activePage === 'home' || activePage === 'events'">
				<HomePage />
			</div>
			<div v-if="activePage === 'about'"><AboutPage /></div>
			<div v-if="activePage === 'engage'"><EngagePage /></div>
			<div v-if="activePage === 'profile'"><ProfilePage /></div>
		</div>
		<LanguageControls
			class="absolute top-[4.8rem] left-0 hidden custom-breakpoint:block"
			:language="language"
			:setLanguage="setLanguage"
		/>
	</div>
</template>
<script>
import HomePage from './HomePage.vue';
import AboutPage from './AboutPage.vue';
import EngagePage from './EngagePage.vue';
import ProfilePage from './ProfilePage.vue';
import LanguageControls from './LanguageControls.vue';

export default {
	name: 'PageView',
	props: ['activePage', 'language', 'setLanguage'],
	components: {
		HomePage,
		AboutPage,
		EngagePage,
		ProfilePage,
		LanguageControls,
	},
};
</script>
