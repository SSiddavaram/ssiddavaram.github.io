'use strict';

module.exports = function(grunt) {
	
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);
	
	// Project configuration.
	grunt.initConfig({
		// Project settings
		yeoman: {
			// configurable paths
			app: require('./bower.json').appPath || 'src'
		},
	});
};