/*global define*/
/*jslint nomen: true*/
// Filename: router.js
define([
    "jquery",
    "underscore",
    "backbone",
    "views/header/HeaderView",
    "views/default/DefaultView",
    "views/calendar/CalendarView",
    "jquery.bootstrap"
], function ($, _, Backbone, HeaderView, DefaultView, CalendarView) {

    //////////////////////////////////////////////////////////////////////
    "use strict";
    //////////////////////////////////////////////////////////////////////
    var AppRouter = Backbone.Router.extend({
        routes: {
            "calendar": "show_calendar",
            "*actions": "defaultAction"
        }
    }),

        //////////////////////////////////////////////////////////////////////
        /*Not in love with how this works,
         *But I need an object to exist everytime the router is hit
         *that way I'm not constantly creating new views.
         *
         */ /////////////////////////////////////////////////////////////////////
        obj = {},

        initialize = function () {
            var app_router = new AppRouter();

            // Instantiate all of the Views
            obj.defaultView = new DefaultView();
            obj.headerView = new HeaderView();
            obj.calendarView = new CalendarView();



            // Render the Header View
            obj.headerView.render();


            ///////////////////////////////////////////////////////////////////
            //  Calendar View:
            //  Catch everything that doesn't match
            //  another route
            ///////////////////////////////////////////////////////////////////
            app_router.on('route:show_calendar', function () {
                obj.calendarView.render();
            });
            ///////////////////////////////////////////////////////////////////
            //  Default View:
            //  Catch everything that doesn't match
            //  another route
            ///////////////////////////////////////////////////////////////////
            app_router.on('route:defaultAction', function (actions) {
                obj.defaultView.render();
            });
            ///////////////////////////////////////////////////////////////////
            Backbone.history.start({
                pushState: false
            });
        };

    return {
        initialize: initialize
    };
});
