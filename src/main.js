require.config({
    "hbs": {
        "templateExtension": "html",
        "disableI18n": false
    },
    "paths": {
        "jquery": "../bower_components/jquery/index",
        "jquery.bootstrap": "../bower_components/bootstrap/index",
        "datepicker": "../bower_components/bootstrap-datepicker/index",
        "underscore": "../bower_components/official-lodash/dist/lodash.underscore",
        "hbs": "../bower_components/require-handlebars-plugin/hbs",
        "handlebars": "../bower_components/require-handlebars-plugin/Handlebars",
        "i18nprecompile": "../bower_components/require-handlebars-plugin/hbs/i18nprecompile",
        "json2": "../bower_components/require-handlebars-plugin/hbs/json2",
        "backbone": "../bower_components/backbone/backbone-min",
        "setup": "./setup",
        "pubsub": "../bower_components/pubsub/pubsub"
    },
    "shim": {
        "backbone": {
            "deps": ["underscore", "jquery"],
            "exports": "Backbone"
        },
        "jquery.bootstrap": {
            "deps": ["jquery"]
        },
        "datepicker": {
            "deps": ["jquery", "jquery.bootstrap"],
            "exports": "datepicker"
        }
    }
});

require([
    "app"
], function (App) {
    App.initialize();
});
