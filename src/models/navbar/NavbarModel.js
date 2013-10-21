/*global define */
/*jslint nomen: true*/

define([
    "underscore",
    "backbone",
    "setup"
], function (_, Backbone, Setup) {
    "use strict";

    var NavbarModel = Backbone.Model.extend({
        "initialize": function () {

        }
    });
    return NavbarModel;
});
