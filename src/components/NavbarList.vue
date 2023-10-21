<template>
	<div class="flex items-center">
		<ul class="flex items-center flex-col custom-breakpoint:flex-row">
			<li class="block custom-breakpoint:hidden">
				<SelectLanguageMobile
					:language="language"
					:setLanguage="setLanguage"
				/>
			</li>
			<li
				class="justify-start custom-breakpoint:mr-[2.4rem] custom-breakpoint:mt-0 mt-[4.8rem] cursor-pointer hidden custom-breakpoint:block"
			>
				<LensIcon />
			</li>
			<li
				class="flex items-center w-[12rem] custom-breakpoint:mt-0 mt-[4.8rem] cursor-pointer block custom-breakpoint:hidden text-xl font-custom-text"
				@click="selectActive('home')"
			>
				<SearchIcon class="mr-[2.4rem]" />
				search
			</li>
			<li
				class="flex items-center custom-breakpoint:mr-[2.4rem] w-[12rem] custom-breakpoint:mt-0 mt-[2.4rem] cursor-pointer relative custom-breakpoint:w-[100%]"
				@click="selectActive('about')"
			>
				<EyeIcon class="block custom-breakpoint:hidden mr-[2.4rem]" />
				<span class="hover:text-primary text-xl font-custom-text"
					>about</span
				>
				<UnderlineIcon :activePage="activePage" :elem="'about'" />
			</li>
			<li
				class="flex items-center custom-breakpoint:mr-[2.4rem] w-[12rem] custom-breakpoint:mt-0 mt-[2.4rem] cursor-pointer relative custom-breakpoint:w-[100%]"
				@click="
					() => {
						selectActive('events');
						toggleBanner();
					}
				"
			>
				<EventsIcon
					class="block custom-breakpoint:hidden mr-[2.4rem]"
				/>
				<span class="hover:text-primary text-xl font-custom-text"
					>events</span
				>
				<UnderlineIcon :activePage="activePage" :elem="'events'" />
			</li>
			<li
				class="flex items-center custom-breakpoint:mr-[2.4rem] w-[12rem] custom-breakpoint:mt-0 mt-[2.4rem] cursor-pointer relative custom-breakpoint:w-[100%]"
				@click="selectActive('engage')"
			>
				<JoinIcon class="block custom-breakpoint:hidden mr-[2.4rem]" />
				<span class="hover:text-primary text-xl font-custom-text"
					>engage</span
				>
				<UnderlineIcon :activePage="activePage" :elem="'engage'" />
			</li>
			<li
				class="flex items-center w-[12rem] custom-breakpoint:mt-0 mt-[2.4rem] cursor-pointer relative custom-breakpoint:w-[100%]"
				@click="selectActive('user')"
			>
				<UserIcon class="mr-[2.4rem]" />
				<span
					class="hover:text-primary text-xl font-custom-text block custom-breakpoint:hidden"
					>profile</span
				>
			</li>
		</ul>
	</div>
</template>

<script>
import UserIcon from '@/assets/icons/User.vue';
import LensIcon from '@/assets/icons/Lens.vue';
import SearchIcon from '@/assets/icons/Search.vue';
import EyeIcon from '@/assets/icons/Eye.vue';
import EventsIcon from '@/assets/icons/Events.vue';
import JoinIcon from '@/assets/icons/Join.vue';
import UnderlineIcon from '@/assets/icons/Underline.vue';
import SelectLanguageMobile from './SelectLanguageMobile.vue';
export default {
	name: 'NavbarList',
	props: [
		'changeActivePage',
		'activePage',
		'toggleBanner',
		'language',
		'setLanguage',
	],
	components: {
		UserIcon,
		LensIcon,
		SearchIcon,
		EyeIcon,
		EventsIcon,
		JoinIcon,
		UnderlineIcon,
		SelectLanguageMobile,
	},
	methods: {
		selectActive(value) {
			this.changeActivePage(value);
		},
	},
};
</script>
