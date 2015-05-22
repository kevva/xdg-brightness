'use strict';

var fs = require('fs');
var path = require('path');

module.exports.get = function (cb) {
	var dir = '/sys/class/backlight';

	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	fs.readdir(dir, function (err, dirs) {
		if (err) {
			cb(err);
			return;
		}

		if (!dirs.length) {
			cb(new Error('No backlight device found'));
			return;
		}

		fs.readFile(path.join(dir, dirs[0], 'brightness'), 'utf8', function (err, data) {
			if (err) {
				cb(err);
				return;
			}

			cb(null, data);
		});
	});
};

module.exports.set = function (val, cb) {
	var dir = '/sys/class/backlight';

	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	if (typeof val !== 'number' && typeof val !== 'string') {
		throw new Error('Expected a value');
	}

	fs.readdir(dir, function (err, dirs) {
		if (err) {
			cb(err);
			return;
		}

		if (!dirs.length) {
			cb(new Error('No backlight device found'));
			return;
		}

		fs.readFile(path.join(dir, dirs[0], 'max_brightness'), 'utf8', function (err, data) {
			if (err) {
				cb(err);
				return;
			}

			var max = parseInt(data);
			var brightness = Math.floor(val / 100 * max).toString();

			fs.writeFile(path.join(dir, dirs[0], 'brightness'), brightness, function (err) {
				if (err) {
					cb(err);
					return;
				}

				cb();
			});
		});
	});
};
