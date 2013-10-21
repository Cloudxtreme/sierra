/*global define */
/*jslint nomen: true*/

define([
    'jquery',
    'underscore',
    'backbone',
    'setup',
    'pubsub'
], function ($, _, Backbone, Setup, pubsub) {
    "use strict";

    var SessionModel = Backbone.Model.extend({
        // ******************************************************* //  
        idAttribute: "_id",

        // ******************************************************* //
        url: function () {
            return Setup.baseUrl + 'validate/';
        },

        // ******************************************************* //        
        setup: function (fx) {
            var that = this;

            // Because we're going across domains, we need to give jQuery
            // permission to send cookies. 

            $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
                options.xhrFields = {
                    withCredentials: true
                };
            });

            // We also need to set the CSRF token in the ajax pre-filter.
            // The route we're aiming at will look at our cookies, determine
            // if we are logged in, and set in the session model
            // 1. Are we valid (t || f)
            // 2. What is our CSRF token

            // We take the CSRF token, and set it as a jquery prefilter
            this.fetch({
                success: function () {
                    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
                        jqXHR.setRequestHeader('X-CSRF-Token', that.get('csrf'));
                    });

                    // After we do all this, execute whatever was thrown in at the top
                    // asynch
                    fx();

                }
            });
        },

        // ******************************************************* //
        deactivate: function () {
            this.remove();
            pubsub.trigger("deactivate");
        },

        // ******************************************************* //       
        protect: function () {
            if (this.get("valid") !== true) {
                return this.validate();
            } else {
                return true;
            }

        }

    });
    var obj = obj || new SessionModel();
    return obj;
});
