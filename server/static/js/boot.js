require.config({
	paths: {
		jQuery: '/js/libs/jquery',
		Underscore: '/js/libs/underscore',
		Backbone: '/js/libs/backbone',
		text: '/js/libs/text',
		templates: '../views'
	},
	shim: {
		'Backbone': ['Underscore', 'jQuery'],
		'kuan': ['Backbone']
	}
});
require(['kuan'], function(kuan) {
	Kuan.initialize();
});