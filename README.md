# Caption sync

> Closed captions events listener

[![npm version](https://badgen.net/npm/v/caption-sync)](https://www.npmjs.com/package/caption-sync)
[![Known Vulnerabilities](https://snyk.io/test/github/goatandsheep/closed-captions-listener/badge.svg)](https://snyk.io/test/github/goatandsheep/closed-captions-listener)
[![codecov](https://badgen.net/codecov/c/github/goatandsheep/closed-captions-listener)](https://codecov.io/gh/goatandsheep/closed-captions-listener)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)
[![npm downloads](https://img.shields.io/npm/dt/caption-sync.svg?style=flat-square)](https://www.npmjs.com/package/caption-sync)

## Installation

```shell
npm i caption-sync
```

## Node Example

```javascript
import CaptionSync from 'caption-sync'

const showCaptionFunc = function() {
    // start output
}
const hideCaptionFunc = function() {
    // stop output
}

const video = document.getElementById('test-video')
const captionsListener = new CaptionSync(video, showCaptionFunc, hideCaptionFunc);

```

## Credit

Brought to you by [beatcaps.io](https://www.beatcaps.io)
