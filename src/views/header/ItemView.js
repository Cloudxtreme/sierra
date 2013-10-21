/*global define*/
/*jslint nomen: true*/

define([
    "jquery",
    "underscore",
    "backbone",
    "pubsub",
    "models/navbar/NavbarModel",
    "hbs!template/header/item"
], function ($, _, Backbone, pubsub, model, template) {
    "use strict";

    var TaskView = Backbone.View.extend({
        tagName: "li",

        ////////////////////////////////////////////////////    
        events: {
            "click": function () {
                pubsub.trigger("list_click", this);
            }
        },

        ////////////////////////////////////////////////////
        initialize: function () {
            var that = this;
            _.bindAll(this, "render");
            this.model.on("change", this.render);
            this.model.on("remove", this.remove, this);


            // We Listen to PubSub for a List Click Event
            pubsub.on("list_click", function (e) {
                if (that === e) {
                    that.$el.addClass("active");
                } else {
                    that.$el.removeClass("active");
                }
            });

        },
        ////////////////////////////////////////////////////
        render: function () {
            var that = this;
            $(that.el).html(template(that.model.toJSON()));
            this.delegateEvents();
            return this;
        },
        ////////////////////////////////////////////////////           
        remove: function () {
            $(this.el).remove();
        }
    });
    return TaskView;
});
