/*
require.config({
	paths: {
		"backbone": '/vendor/js/backbone-min.js'
		},
		shim: {
			'backbone': {
				//These script dependencies should be loaded before loading
                //backbone.js
                deps: ['underscore', 'jquery'], // here I would like to load the already loaded library
            }
        }
});

requirejs.config({
    //By default load any module IDs from js/lib
    //baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});
*/
console.log('Hello World : initialised from RequireJS');
