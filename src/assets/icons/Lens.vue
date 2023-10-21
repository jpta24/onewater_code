<template>
	<div class="flex items-center group" @mouseleave="clearInput">
		<div
			class="input h-[4rem] w-0 group-hover:w-[20rem] opacity-0 group-hover:opacity-100 transition-all duration-300 relative"
		>
			<input
				type="text"
				class="input__field"
				maxlength="9999"
				v-model="inputValue"
				id="myInput"
				autocomplete="off"
			/>
			<label class="input__label font-custom-text" for="myInput">
				search
			</label>
			<div class="input__bar"></div>
		</div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 256 256"
			class="w-[2.6rem] h-[2.6rem] group-hover:ml-[1.2rem]"
		>
			<path
				fill="currentColor"
				d="M168 112a56 56 0 1 1-56-56a56 56 0 0 1 56 56Zm61.66 117.66a8 8 0 0 1-11.32 0l-50.06-50.07a88 88 0 1 1 11.32-11.31l50.06 50.06a8 8 0 0 1 0 11.32ZM112 184a72 72 0 1 0-72-72a72.08 72.08 0 0 0 72 72Z"
			></path>
		</svg>
	</div>
</template>
<script>
export default {
	name: 'LensIcon',
	data() {
		return {
			showInput: false,
			inputValue: '',
		};
	},
	methods: {
		clearInput() {
			this.inputValue = '';
		},
	},
};
</script>
<style>
.input__label {
	color: #000;
	font-size: 1.4rem;
	left: 1.2rem;
	opacity: 0.7;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	transition: all 0.3s;
	pointer-events: none;
}

.input__field {
	background: #f0f0f0;
	border-radius: 0.2rem;
	color: #000;
	font-family: Poppins;
	font-size: 1.6rem;
	height: 100%;
	max-height: 30rem;
	outline: none;
	padding: 1.2rem 0.8rem 0.6rem;
	resize: none;
	vertical-align: top;
	width: 100%;
	transition: all 0.3s;
}

.input__field:focus ~ .input__label {
	top: -20%;
	left: 2%;
	font-size: 1.2rem;
	transform: translateY(0);
	opacity: 1;
	background-color: #ffffff;
	padding: 0 3px;
	border-radius: 2px;
}

.input__field:hover {
	background-color: #e2e2e2;
	border-bottom: 1px solid black;
}

.input__field:focus {
	border-bottom: 2px solid black;
}
</style>
