/*global define*/
/*jslint nomen: true*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/header/ItemView',
    'collections/navbar/NavbarCollection',
    'hbs!template/header/index'

], function ($, _, Backbone, Item, Collection, index) {
    "use strict";
    var DefaultView = Backbone.View.extend({

        ////////////////////////////////////////////////////    
        el: $("#page-header"),


        ////////////////////////////////////////////////////        
        initialize: function () {
            this.collection = new Collection([{
                "name": "Home",
                "url": "#"
            }, {
                "name": "Calendar",
                "url": "#/calendar"
            }, {
                "name": "About",
                "url": "#/about"
            }, {
                "name": "Contact",
                "url": "#/contact"
            }, {
                "name": "Reviews",
                "url": "#/reviews"
            }, ]);
        },




        ////////////////////////////////////////////////////
        render: function (options) {
            var that = this;

            that.$el.html(index({}));


            _.each(that.collection.models, function (model) {
                var view = new Item({
                    model: model
                });
                that.$(".routes").append(view.render().el);
            });

        }
        ////////////////////////////////////////////////////
    });
    return DefaultView;
});
