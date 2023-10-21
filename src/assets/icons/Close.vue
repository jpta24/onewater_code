<template lang="">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		class="min-w-[4rem] min-h-[4rem] cursor-pointer hover:text-primary transition-all ease-in-out duration-300"
		@click="toggleBanner()"
	>
		<g fill="none" stroke="currentColor" strokeWidth="2">
			<path strokeLinecap="round" d="M15 15L9 9m6 0l-6 6"></path>
			<circle cx="12" cy="12" r="10"></circle>
		</g>
	</svg>
</template>
<script>
export default {
	name: 'CloseIcon',
	props:['toggleBanner']
};
</script>
