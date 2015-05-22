#!/usr/bin/env node
'use strict';

var meow = require('meow');
var xdgBrightness = require('./');

var cli = meow({
	help: [
		'Example',
		'  $ xdg-brightness',
		'  $ xdg-brightness 0.8'
	].join('\n')
});

if (!cli.input.length) {
	xdgBrightness.get(function (err, data) {
		if (err) {
			console.error(err.message);
			process.exit(1);
		}

		console.log(data);
	});

	return;
}

xdgBrightness.set(parseFloat(cli.input[0], 10), function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
});
