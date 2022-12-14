/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
  theme: {
		colors: {
			primary: '#26DAFD',
			black: '#000',
			green: '#00FF00',
			lightPrimary: '#A1ECFB',
			red: '#FF0000',
		},
		extend: {
			fontFamily: {
				dosis: ['Dosis', 'sans-serif'],
			},
			animation: {
				'delay-spin': 'spin 8s linear infinite',
      },
			backgroundImage:{
				'main': "url('./img/background-large.jpg')",
			}
		},
  },
  plugins: [],
}
