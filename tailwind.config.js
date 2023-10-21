/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.vue'],
	theme: {
		extend: {
			screens: {
				'custom-breakpoint': '915px',
			},
			textColor: {
				primary: 'rgb(160, 200, 255)',
			},
			fontSize: {
				base: '1.6rem',
				sm: '1.4rem',
				xl: '2.4rem',
			},
			backgroundColor: {
				'custom-gray': '#E2E2E2',
			},
			fontFamily: {
				'custom-text': ['serif'],
			},
		},
	},
	plugins: [],
};
