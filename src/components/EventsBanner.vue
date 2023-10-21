<template>
	<section
		class="flex flex-col z-[2] fixed top-0 right-0 h-screen w-[25rem] px-[1.2rem] py-[2.4rem] items-center text-dark bg-white overflow-auto custom-scroll"
		v-if="isBannerActive"
	>
		<CloseIcon :toggleBanner="toggleBanner" />
		<EventCard
			v-for="(event, index) in events"
			:key="index"
			:date="event.date"
			:imgRoute="event.imgRoute"
			:title="event.title"
		/>
	</section>
</template>
<script>
import CloseIcon from '@/assets/icons/Close.vue';
import EventCard from './EventCard.vue';
import event1Image from '@/assets/img/event1.jpg';
import event2Image from '@/assets/img/event2.jpg';
export default {
	name: 'EventsBanner',
	props: ['isBannerActive', 'toggleBanner'],
	components: {
		CloseIcon,
		EventCard,
	},
	data() {
		return {
			events: [
				{
					date: '22-Aug',
					imgRoute: event1Image,
					title: 'World Water Week - Somos OceanoS screening',
				},
				{
					date: '21-Aug-23',
					imgRoute: event2Image,
					title: 'World Water Week - Pubquiz',
				},
			],
		};
	},
};
</script>
