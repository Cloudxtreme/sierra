/*global define*/
/*jslint nomen: true*/

define([
    "jquery",
    "underscore",
    "backbone",
    "setup",
    "pubsub",
    "models/navbar/NavbarModel"
], function ($, _, Backbone, Setup, pubsub, model) {

    "use strict";
    var TaskCollection = Backbone.Collection.extend({

        "model": model,

        ////////////////////////////////////////////////////////
        initialize: function () {

        }
    });
    return TaskCollection;
});
