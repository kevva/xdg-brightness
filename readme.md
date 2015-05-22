# xdg-brightness [![Build Status](https://travis-ci.org/kevva/xdg-brightness.svg?branch=master)](https://travis-ci.org/kevva/xdg-brightness)

> Change screen brightness on Linux systems


## Install

```
$ npm install --save xdg-brightness
```


## Usage

```js
var xdgBrightness = require('xdg-brightness');

xdgBrightness.get(function (err, brightness) {
	console.log(brightness);
	// 0.5
});

xdgBrightness.set(0.8, function (err) {
	console.log('Changed brightness to 80%');
});
```


## CLI

See the [brightness](https://github.com/kevva/brightness) CLI.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
