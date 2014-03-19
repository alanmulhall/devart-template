/**
 * SelfieController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

Instagram = require('instagram-node-lib');

module.exports = {

  find: function (req, res) {
    Instagram.set('client_id', process.env.INSTAGRAM_CLIENT_ID);
    Instagram.set('client_secret', process.env.INSTAGRAM_CLIENT_SECRET);

    Instagram.tags.info({
        name: 'blue',
        complete: function(data){
          console.log(data);
        }
    });
    res.send('<h1>hello world</h1>');
  }

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to SelfieController)
   */
  //_config: {}

};
