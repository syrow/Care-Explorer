/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				"reveal": "reveal 0.2s ease-in-out forwards",
				"goaway": "goaway 0.2s ease-in-out forwards"
			},
			keyframes: {
				"reveal": {
					"0%": {
						opacity: 0,
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0)"
					}
				},
				"goaway": {
					"0%": {
						opacity: 1,
						transform: "translateY(0)"
					},
					"100%": {
						opacity: 0,
						transform: "translateY(10px)"
					}
				}
			},
		}
	},
	plugins: []
};
