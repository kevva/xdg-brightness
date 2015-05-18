# xdg-brightness [![Build Status](https://travis-ci.org/kevva/xdg-brightness.svg?branch=master)](https://travis-ci.org/kevva/xdg-brightness)

> Change screen brightness on Linux systems


## Install

```
$ npm install --save xdg-brightness
```


## Usage

```js
var xdgBrightness = require('xdg-brightness');

xdgBrightness(80, function (err) {
	console.log('Changed brightness to 80%');
});
```


## CLI

```
$ npm install --global xdg-brightness
```

```
$ xdg-brightness --help

  Example
    $ xdg-brightness 80
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
