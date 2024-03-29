module.exports = {
	content: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html'
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Plus Jakarta Sans', 'sans-serif'],
			// sans: ['Graphik', 'sans-serif'],
		},
		extend: {
			colors: {
				'pastel-orange': '#ffa646',
				'pastel-red': '#f86041',
				'pastel-purple': '#982062',
				'pastel-blue': '#343779',
				'primary': '#eeefe9',
				'secondary': '#e4e6dd',
				'secondary-hover': '#d6d9cd'
			},
			animation: {
				vote: 'vote 1s ease-in-out'
			},
			keyframes: {
				vote: {
					'0%, 100%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(-15deg)'
					},
					'50%': {
						transform: 'rotate(15deg)'
					},
					'75%': {
						transform: 'rotate(-5deg)'
					},
					'100%': {
						transform: 'rotate(0deg)'
					}
				}
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'--tw-prose-bullets': theme('colors.black'),
						// these customizations are explained here https://youtu.be/-FzemNMcOGs
						blockquote: {
							borderLeft: '3px solid red',
							fontSize: 'inherit',
							fontStyle: 'inherit',
							fontWeight: 'medium'
						},
						'blockquote p:first-of-type::before': {
							content: ''
						},
						'blockquote p:last-of-type::after': {
							content: ''
						},

						'code::before': false,
						'code::after': false,
						code: {
							'border-radius': '0.25rem',
							padding: '0.15rem 0.3rem',
							borderWidth: '2px',
							borderColor: 'rgba(0,0,0,0.1)'
						},
						'a code': {
							color: 'unset'
						},
						'li, ul, ol': {
							margin: 0
							// padding: '0.15rem 0.3rem',
						},
						'li > img': {
							margin: 0,
							display: 'inline'
						},
						'ol > li::marker': {
							color: 'var(--tw-prose-body)'
						},
						'ul > li::marker': {
							color: 'var(--tw-prose-body)'
						}
					}
				}
			})
		}
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')]
};
