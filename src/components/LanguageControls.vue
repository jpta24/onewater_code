<template lang="">
	<section>
		<div
			class="flex items-center mt-[1.8rem] pl-[0.2rem] py-[0.4rem] w-[4.2rem] h-[4.5rem] text-base text-bold font-custom-text border border-dark rounded transition-all ease-in-out duration-300 hover:w-[10rem] hover:bg-black hover:text-white group cursor-pointer"
			:class="{ 'bg-black text-white': language === 'En' }"
            @click="setLanguage('En')"
		>
			<span class="hidden group-hover:inline mx-[1rem] transition-all ease-in-out duration-300">English</span
			><span :class="{ 'bg-black text-white': language === 'En' }">EN</span>
		</div>
		<div
			class="flex items-center mt-[1.8rem] pl-[0.2rem] py-[0.4rem] w-[4.2rem] h-[4.5rem] text-base text-bold text-black font-custom-text border border-dark rounded transition-all ease-in-out duration-300 hover:w-[10rem] hover:bg-black hover:text-white group cursor-pointer"
			:class="{ 'bg-black text-white': language === 'Fr' }"
            @click="setLanguage('Fr')"
		>
			<span class="hidden group-hover:inline mx-[1rem] transition-all ease-in-out duration-300">French</span
			><span :class="{ 'bg-black text-white': language === 'Fr' }">FR</span>
		</div>
	</section>
</template>
<script>
export default {
	name: 'LanguageControls',
	props: ['language', 'setLanguage'],
};
</script>
<style lang=""></style>
