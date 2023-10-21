/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.vue'],
	theme: {
		extend: {
			screens: {
				'custom-breakpoint': '915px',
			},
			fontSize: {
				base: '1.6rem',
				sm: '1.4rem',
				xl: '2.4rem',
			},
			fontFamily: {
				'custom-text': ['serif'],
			},
            colors:{
				'custom-gray': '#E2E2E2',
                'dark': '#333333',
                'primary':'rgb(160, 200, 255)'
            }
		},
	},
	plugins: [],
};
