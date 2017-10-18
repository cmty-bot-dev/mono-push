const { join } = require('path')

module.exports = {
	mono: {
		modules: [
			'mono-mongodb',
			'mono-io',
			join(__dirname, '../../../..')
		],
		mongodb: {
			url: 'mongodb://localhost:27017/mono-push-test',
			dropDatabase: true
		},
		push: {
			io: true
		}
	}
}
