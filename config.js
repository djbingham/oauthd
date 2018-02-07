const crypto = require('crypto');
const publicSalt = crypto.randomBytes(20).toString('hex');
const staticSalt = crypto.randomBytes(20).toString('hex');

var config = {
	host_url: process.env.OAUTHD_HOST_URL || 'http://localhost', // mounted on this url
	port: process.env.OAUTHD_HOST_PORT || 6284, // The port your instance is supposed to run on
	// bind: '127.0.0.1', // Bind to an ip

	staticsalt: staticSalt,
	publicsalt: publicSalt,

	redis: {
		port: process.env.OAUTHD_REDIS_PORT || 6379,
		host: process.env.OAUTHD_REDIS_URL || '127.0.0.1',
		// password: 'my redis password',
		// database: 0 // The Redis Database (a number between 0 & 15)
		// options: {...other options...}
	},
};

module.exports = config;

console.log('oauthd config set:', config);
