#!/usr/bin/env node

/*
Modifications:
- Changed imports to use require for non-cordova modules.
*/

var deferral = require('q').defer();

module.exports = function(context) {

    /** @external */
    // var deferral = context.requireCordovaModule('q').defer(),
    var UpdateConfig = require('./../update_config.js'),
        updateConfig = new UpdateConfig(context);

    /** Main method */
    var main = function() {
        // Remove the xwalk variables
        updateConfig.afterBuild64bit();

        deferral.resolve();
    };

    main();

    return deferral.promise;

};
