/**
 * Created by damianaruj on 4/4/16.
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            dev: {
                tasks: ['nodemon:dev','watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        watch: {
            // if a javascript from these folders change, run the packaging
            app: {
                files: ['modules/**/main.jsx','modules/**/**/*.jsx'],
                tasks: ['exec']
            },
            server: {
                files: ['modules'],
                options: {
                    livereload: true
                },
                tasks: 'exec'
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    nodeArgs: ['--debug'],
                    env: {
                        PORT: '8888'
                    },
                    // omit this property if you aren't serving HTML files and
                    // don't want to open a browser tab on start
                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });


                        // refreshes browser when server reboots
                        nodemon.on('restart', function () {
                            // Delay before server listens on port
                            setTimeout(function() {
                                require('fs').writeFileSync('.rebooted', 'rebooted');
                            }, 1000);
                        });
                    }
                }
            }
        },
        exec: {
            webpack: 'webpack'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['exec','concurrent']);
    grunt.registerTask('copyFiles', function(folderName) {

        grunt.config.set('copy', {
            folderName : {expand: true, cwd: 'backup/', src: ['**'], dest: 'modules/' + folderName + '/'}
        });
        grunt.task.run('copy');
    });


};