'use strict';

var test = require('ava');
var xdgBrightness = require('./');

if (!process.env.CI) {
	test('should get brightness', function (t) {
		t.plan(2);

		xdgBrightness.get(function (err, brightness) {
			t.assert(!err, err);
			t.assert(brightness);
		});
	});

	test('should set brightness', function (t) {
		t.plan(3);

		xdgBrightness.set(0.5, function (err) {
			t.assert(!err, err);

			xdgBrightness.get(function (err, brightness) {
				t.assert(!err, err);
				t.assert(parseInt(brightness) === 0.5);
			});
		});
	});
}
