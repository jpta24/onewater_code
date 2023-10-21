<template>
	<div class="flex items-center">
		<ul class="flex items-center">
			<li class="justify-start mr-[2.4rem] cursor-pointer">
				<LensIcon />
			</li>
			<li
				class="hover:text-primary text-xl font-custom-text justify-start mr-[2.4rem] cursor-pointer"
			>
				about
			</li>
			<li
				class="hover:text-primary text-xl font-custom-text justify-start mr-[2.4rem] cursor-pointer"
			>
				events
			</li>
			<li
				class="hover:text-primary text-xl font-custom-text justify-start mr-[2.4rem] cursor-pointer"
			>
				engage
			</li>
			<li class="hover:text-primary justify-start mr-[2.4rem] cursor-pointer">
				<UserIcon />
			</li>
		</ul>
	</div>
</template>

<script>
import UserIcon from '@/assets/icons/User.vue';
import LensIcon from '@/assets/icons/Lens.vue';
export default {
	name: 'NavbarList',
	components: {
		UserIcon,
		LensIcon,
	},
};
</script>
