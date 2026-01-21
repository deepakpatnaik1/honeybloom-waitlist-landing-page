/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				honey: {
					50: '#fdf2f6',
					100: '#fce7ef',
					200: '#f9d0e0',
					300: '#f4a9c6',
					400: '#ec72a0',
					500: '#AE0D46',  /* base: deep magenta/raspberry */
					600: '#9a0b3d',
					700: '#800932',
					800: '#6b0829',
					900: '#5a0723',
					950: '#330413'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
