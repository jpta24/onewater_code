<template lang="">
	<section class="w-full">
		<div class="text-xl font-bold mt-[4.8rem] text-center">Collections</div>

		<CollectionCard
        v-for="(collection, index) in collectionList"
			:key="index"
			:title="collection"
		/>
	</section>
</template>
<script>
import CollectionCard from './CollectionCard.vue';
export default {
	name: 'CollectionSet',components: {
		CollectionCard,
	},
	data() {
		return {
			collectionList: [
				'Biodiversity',
				'Circular Economy',
				'Cities',
				'Climate Change',
				'Conflict',
			],
		};
	},
};
</script>
