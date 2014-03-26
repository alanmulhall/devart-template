Instagram = require('instagram-node-lib');
Instagram.set('client_id', process.env.INSTAGRAM_CLIENT_ID);
Instagram.set('client_secret', process.env.INSTAGRAM_CLIENT_SECRET);
Instagram.set('callback_url', 'http://23.251.152.185/selfie/callback');
Instagram.set('maxSockets', 10);

module.exports = {

  callback: function (req, res) {
    Instagram.subscriptions.handshake(req, res);
  },

  subscribe: function (req, res) {
    Instagram.subscriptions.subscribe({ object: 'tag', object_id: 'selfie', verify_token: 'selfie-token' });
  }

};
