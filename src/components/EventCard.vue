<template lang="">
	<div class="group">
		<a
			href="#"
			rel="noreferrer"
			class="mt-[4.8rem] text-dark flex flex-col rounded-sm overflow-hidden items-center"
			><div
				class="text-sm border-[1px] border-b-0 border-dark group-hover:border-primary transition-all ease-in-out duration-300 py-[0.6rem] px-[1.2rem] relative rounded-t-sm"
			>
				{{ date }}
			</div>
			<div
				class="text-base font-bold pt-[0.6rem] pb-[0.4rem] px-[1.2rem] bg-dark text-white w-full relative text-center group-hover:bg-primary group-hover:text-dark transition-all ease-in-out duration-300"
			>
				{{ title }}
			</div>
			<div
				class="border-b-0 overflow-hidden border-[1px] border-dark border-t-0 group-hover:border-primary transition-all ease-in-out duration-300"
			>
            <img alt="Event banner photo" loading="lazy" class="flex h-[16rem] w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-300" :src="imgRoute">
			</div></a
		><a
			target="_blank"
			rel="noreferrer"
			href="#"
			class="bg-white cursor-pointer text-base border-[1px] transition-all ease-in-out duration-300 border-t-0 rounded-sm justify-center hover:bg-dark hover:text-white flex items-center group-hover:border-primary border-dark py-[0.6rem] px-[1.2rem] relative"
			>Location<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				class="w-[1.8rem] h-[1.8rem] ml-[0.6rem]"
			>
				<path
					fill="currentColor"
					d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"
				></path></svg></a>
	</div>
</template>
<script>
export default {
	name: 'EventCard',
	props: {
    date: {
      type: String,
      default: ''
    },
    imgRoute: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
};
</script>
<style lang=""></style>
