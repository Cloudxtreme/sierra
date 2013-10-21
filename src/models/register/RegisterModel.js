/*global define */
/*jslint nomen: true*/

define([
    'underscore',
    'backbone',
    'setup',
    'pubsub'
], function (_, Backbone, Setup, PubSub) {
    "use strict";

    var RegisterModel = Backbone.Model.extend({
        idAttribute: "_id",
        initialize: function () {

        },
        // ******************************************************* //
        url: function () {
            return Setup.baseUrl + 'register/';
        }
    });
    return RegisterModel;
});
