<template>
	<div class="flex items-center">
		<ul class="flex items-center">
			<li class="justify-start mr-[2.4rem] cursor-pointer">
				<LensIcon />
			</li>
			<li
				class="justify-start mr-[2.4rem] cursor-pointer relative"
				@click="selectActive('about')"
			>
				<span class="hover:text-primary text-xl font-custom-text"
					>about</span
				>
				<UnderlineIcon :activePage="activePage" :elem="'about'"/>
			</li>
			<li
				class="justify-start mr-[2.4rem] cursor-pointer relative"
				@click="selectActive('events')"
			>
				<span class="hover:text-primary text-xl font-custom-text"
					>events</span
				>
			</li>
			<li
				class="justify-start mr-[2.4rem] cursor-pointer relative"
				@click="selectActive('engage')"
			>
				<span class="hover:text-primary text-xl font-custom-text"
					>engage</span
				>
				<UnderlineIcon :activePage="activePage" :elem="'engage'"/>
			</li>
			<li
				class="hover:text-primary justify-start mr-[2.4rem] cursor-pointer"
				@click="selectActive('user')"
			>
				<UserIcon />
			</li>
		</ul>
	</div>
</template>

<script>
import UserIcon from '@/assets/icons/User.vue';
import LensIcon from '@/assets/icons/Lens.vue';
import UnderlineIcon from '@/assets/icons/Underline.vue';
export default {
	name: 'NavbarList',
	props: ['changeActivePage', 'activePage'],
	components: {
		UserIcon,
		LensIcon,
		UnderlineIcon,
	},
	methods: {
		selectActive(value) {
			this.changeActivePage(value);
		},
	},
};
</script>
