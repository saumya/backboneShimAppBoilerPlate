/*
//console.log('Hello World : initialised from RequireJS');
requirejs.config({
    //To get timely, correct error triggers in IE, force a define/shim exports check.
    enforceDefine: true,
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.3.min")
    paths: {
        // Core Libraries
        "jquery": "../assets/js/jquery-1.9.0",
        "underscore": "../assets/js/underscore-1.4.4",
        "backbone": "../assets/js/backbone-0.9.10"
    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
    	"backbone": {
    		"deps": [ "underscore", "jquery" ],
    		"exports": "Backbone"  //attaches "Backbone" to the window object
    	} 
    }// end Shim Configuration
});

define("appMain", function(){
	
	require(['jquery','Backbone'],
	function($,backbone){
		// The "app" dependency is passed in as "App"
		//App.initialize();
		console.log('initialise');
		console.log(backbone('#container'));
		
		}
	);
		
});
*/

requirejs.config({
	// 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.3.min")
    paths: {
        // Core Libraries
        "jquery": "../assets/js/jquery-1.9.0",
        "underscore": "../assets/js/underscore-1.4.4",
        "backbone": "../assets/js/backbone-0.9.10"
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
        	exports: '_'
        },
        'backbone': {
            deps: ['jquery'],
            exports: 'Backbone'
        }
    }
});


define(
    ['jquery','underscore','backbone'],

    function (jQueryLocal,underscoreLocal,backboneLocal) {
        console.log('local', jQueryLocal);
        console.log('local', underscoreLocal);
        console.log('local', backboneLocal);
        console.log('global', $);
        console.log('global', _);
        console.log('global', Backbone);
    }
);


