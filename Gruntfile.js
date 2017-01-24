/**
 * Created by rakes on 1/22/2017.
 */
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({ pkg: grunt.file.readJSON('package.json'),
        less: {
            options: {
                paths: 'assets/css/less',
                yuicompress: true
            },
            files: {
                'style.css': 'assets/css/less/style.less'
            }
        },
        watch: {
            less: {
                files: 'assets/css/less/*.less',
                tasks: 'less'
            }
        }
    });
}

