/*global define*/
/*jslint nomen: true*/

define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!template/calendar/index'

], function ($, _, Backbone, index) {
    "use strict";
    var CalendarView = Backbone.View.extend({

        ////////////////////////////////////////////////////    
        el: $("#main"),
        ////////////////////////////////////////////////////
        render: function (options) {
            var that = this;

            that.$el.html(index({}));

        }
        ////////////////////////////////////////////////////
    });
    return CalendarView;
});
