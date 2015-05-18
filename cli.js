#!/usr/bin/env node
'use strict';

var meow = require('meow');
var xdgBrightness = require('./');

var cli = meow({
	help: [
		'Example',
		'  $ xdg-brightness 80'
	].join('\n')
});

if (!cli.input.length) {
	console.error('Brightness required');
	process.exit(1);
}

xdgBrightness(cli.input[0], function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
});
