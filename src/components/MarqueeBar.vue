<template>
	<div
		class="h-[3.5rem] py-[0.4rem] px-0 border-t border-b border-black font-custom-text font-semibold custom-breakpoint:text-base text-sm text-dark marquee marquee--hover-pause tracking-widest"
	>
		<marquee
			behavior="scroll"
			direction="left"
			onmouseover="this.stop();"
			onmouseout="this.start();"
			scrollamount="13"
		>
			We are looking for photostories
			<a href="#" style="text-decoration: underline">[Click here]</a> as
			well as article contribution from researchers and development
			professionals with a focus on the Euphrates in Syria
			<a href="#" style="text-decoration: underline">[Click here]</a>.
			Deadline 31st of October! • And our partners at AMCOW are welcoming
			contributions for the next edition of Africa's Voice on Water
			<a href="#" style="text-decoration: underline">[Click here]</a>.
		</marquee>
	</div>
</template>

<script>
export default {
	name: 'MarqueeBar',
};
</script>
