/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: port,
					base: '.',
                    livereload: true,
                    open: true
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
            html: {
                files: [ 'index.html', 'style.css' ]
            }
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );
};
