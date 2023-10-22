<template>
    <div
			class="flex relative mt-[2.4rem] w-[18rem] cursor-pointer items-start flex-col w-full"
		>
			<div
				class="text-dark text-bold text-base hover:text-primary transition-all duration-300 ease-in-out"
			>
				{{title}}
			</div>
		</div>
</template>
<script>
export default {
    name:'CollectionCard',
    props:['title']
}
</script>