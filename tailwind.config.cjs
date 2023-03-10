/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				principal: {
					100: '#999ab8',
					200: '#8282a7',
					300: '#6a6a96',
					400: '#565588',
					500: '#45457c',
					600: '#363671',
					700: '#252566',
					800: '#15155b',
					900: '#060650',
					DEFAULT: '#00004c'
				},
				'verde': {
					100: '#c8e2cf',
					200: '#bdddc5',
					300: '#afd5b9',
					400: '#a4cfaf',
					500: '#93c7a0',
					600: '#85bf94',
					700: '#79b989',
					800: '#6cb37e',
					900: '#5eab72',
					DEFAULT: '#52a567'
				},
				'principal-dark': '#52a567',
				'naranja': '#f2aa3c'
			},
			fontSize: {
				sm: '0.8rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem',
			}
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		}
	},
	plugins: [
	],
}
