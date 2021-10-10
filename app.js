'use strict';

const AlipaySDK = require('alipay-libs').default;

module.exports = app => {
  app.beforeStart(async () => {
    const { fullAlipay } = app.config || {};
    if (fullAlipay && fullAlipay.appId && fullAlipay.appPrivateKey && fullAlipay.alipayPublicKey) {
      const options = {
        app_id: fullAlipay.appId,
        appPrivKeyFile: fullAlipay.appPrivateKey,
        alipayPubKeyFile: fullAlipay.alipayPublicKey,
        notifyUrl: fullAlipay.notifyUrl || '',
        gatewayUrl: fullAlipay.gatewayUrl || '',
      };
      try {
        app.alipay = new AlipaySDK(options);
      } catch (error) {
        console.log(`aliPay init fail. params is ${JSON.stringify(fullAlipay)}`);
      }
    } else {
      console.log('aliPay init fail, params error');
    }
  });
};
