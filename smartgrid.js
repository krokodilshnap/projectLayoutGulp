const smartgrid = require('smart-grid');

const settings = {
	filename: "_smartGrid",
	outputStyle: 'scss',
	columns: 12,
	offset: '30px',
	container: {
		maxWidth: "1340px",
		fields: "15px"
	},
	breakPoints: {
		xlg: {
			width: "1400px",
		},
		lg: {
			width: "1280px"
		},
		md: {
			width: "992px"

		},
		sm: {
			width: "768px"
		},
		ssm: {
			width: "640px",
		},
		xs: {
			width: "480px"
		}
	}
};

smartgrid('./app/scss/components', settings);