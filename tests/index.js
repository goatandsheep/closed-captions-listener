const CaptionSync = require('../index');

module.exports = {
	'My first test case'(browser) {
		browser;
		const cs = new CaptionSync('video');
	}
};
