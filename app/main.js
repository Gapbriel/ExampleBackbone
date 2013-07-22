
require.config({
  paths: {
    'jquery' : 'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',/*'../libs/jquery/jquery-1.7.1.min',*/
    'jqueryUI' : 'http://code.jquery.com/ui/1.10.3/jquery-ui',
    'underscore' : 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
    'backbone' : 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min', /*'../libs/backbone/backbone',*/
	'localStorage' : 'http://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.0/backbone.localStorage-min',/*'../libs/backbone/backbone.localStorage',*/
    'hbs' : '../libs/hbs/handlebars-wrapper',
    'text' : '../libs/require/text',
	'validate': '../libs/backbone/backbone-validation',
	'bootstrapDatepicker' : 'http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/0.0.11/js/bootstrap-datetimepicker.min',
	'bootstrapvalid': '../libs/backbone/backbone.validation.bootstrap'

  },
 shim: {
	'underscore': {
	  exports: "_"
	},
	'backbone': {
	  deps: ['underscore', 'jquery'],
	  exports: 'Backbone'
	},
	'localStorage': {
	  deps: ['backbone'],
	  exports: 'Backbone'
	},
	'validate': {
	  deps: ['backbone'],
	  exports: 'Backbone'
	},
	'bootstrapvalid': {
	  deps: ['backbone','validate','underscore'],
	  exports: 'Backbone'
	},
	'bootstrapDatepicker': {
	  exports: 'jquery',
	}
  }  
});

require(
  [
    'app'
  ],
  function(app) {
    app.init();
  }
);
