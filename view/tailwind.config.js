/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
  theme: {
		colors: {
			primary: '#029DBB',
			lightPrimary: '#A1ECFB',
		},
		extend: {
			backgroundImage:{
				'main': "url('./img/background-large.jpg')",
			}
		},
  },
  plugins: [],
}
