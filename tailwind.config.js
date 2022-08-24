/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
    	spacing:{
    		'60px':'60px',
    		'32px':'32px',
    		'40px':'40px',
    		'21px':'21px',
    		'9px':'9px'
    	},
	    screens:{
	    	'sm': {
	    		'max': '576px'
	    	}
	    }
    },
  },
  plugins: [],
}
