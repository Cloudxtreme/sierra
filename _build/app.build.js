({
    "baseUrl": "../src",
    "dir": "../app_build",
    "optimizeCss": "standard",
    "inlineText": true,
    "pragmasOnSave": {
        "excludeHbsParser" : true,
        "excludeHbs": true,
        "excludeAfterBuild": true
    },
    "paths": {
        "jquery": "../bower_components/jquery/index",
        "jquery.bootstrap": "../bower_components/bootstrap/index",    
        "datepicker": "../bower_components/bootstrap-datepicker/index",        
        "underscore": "../bower_components/official-lodash/dist/lodash.underscore.min",
        "backbone": "../bower_components/backbone/backbone-min",
        "hbs": "../bower_components/require-handlebars-plugin/hbs/hbs", // This requires manual setup
        "handlebars": "../bower_components/require-handlebars-plugin/Handlebars",
        "i18nprecompile": "../bower_components/require-handlebars-plugin/hbs/i18nprecompile",
        "json2": "../bower_components/require-handlebars-plugin/hbs/json2",
        "pubsub": "../bower_components/pubsub/pubsub",
        "setup": "./setup"
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
            "deps": ["jquery","jquery.bootstrap"],
            "exports": "datepicker"
        }
    },
    "locale": "en_ca",
    "hbs" : {
        "templateExtension" : 'html',
        "disableI18n" : false
    },
    "modules": [{ name: "main"}]
})
