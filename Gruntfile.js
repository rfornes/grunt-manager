/*
 * grunt-manager
 * 
 * Goodies for site & scripts development
 *
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        reporterOutput: "",
        jshintrc: '.jshintrc'
      }
    },
    clean: {
      tests: ['tmp']
    },
    manager: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      },
      custom_options: {
        options: {
          separator: ': ',
          punctuation: ' !!!'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      }
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // load our task(s).
  grunt.loadTasks('tasks');
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  
  grunt.registerTask('test', ['clean', 'manager', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};
