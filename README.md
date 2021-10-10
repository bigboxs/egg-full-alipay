# egg-full-alipay

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-full-alipay.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-full-alipay
[travis-image]: https://img.shields.io/travis/eggjs/egg-full-alipay.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-full-alipay
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-full-alipay.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-full-alipay?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-full-alipay.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-full-alipay
[snyk-image]: https://snyk.io/test/npm/egg-full-alipay/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-full-alipay
[download-image]: https://img.shields.io/npm/dm/egg-full-alipay.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-full-alipay

<!--
Description here.
-->

## Install

```bash
$ npm i egg-full-alipay --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.fullAlipay = {
  enable: true,
  package: 'egg-full-alipay',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.fullAlipay = {
  appId: '', // 应用ID
  appPrivateKey: '', // 应用私钥
  alipayPublicKey: '',// 支付宝公钥
  gatewayUrl: '',// 应用网关（选填）
  notifyUrl: '',// 回调通知地址（选填）
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
