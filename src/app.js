// Filename: app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'models/session/SessionModel'
], function ($, _, Backbone, Router, session) {
    var initialize = function () {

        // session.setup(function () {
        Router.initialize();
        // });

    };

    return {
        initialize: initialize
    };
});
