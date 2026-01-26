/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				/**
				 * Honeybloom Palette — LOCKED Jan 24, 2026
				 *
				 * Usage:
				 * - Surfaces: 8% opacity bg + full border (e.g., bg-magenta/[0.08] border-magenta)
				 * - Headlines: Full accent color (e.g., text-magenta)
				 * - CTAs: Full saturation fill (e.g., bg-magenta)
				 */

				// Canvas
				dark: '#121212',           // Google Material dark — background

				// Sophie accent (Home page — romance, intimacy, warmth)
				magenta: '#AE0D46',

				// Business accent (Founders Club, Pricing — trust, clarity)
				emerald: '#10B981',

				// Text, light surfaces
				cream: '#F5F0E6',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
