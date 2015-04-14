module.exports = function(grunt) {
    
  'use strict';

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js']
    },

    sass: {
      prod: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'css/style.css': 'sass/style.scss'
        }
      },
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'auto'
        },
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },


    watch: {
      files: ['Gruntfile.js', 'js/**/*.js', 'sass/**/*.scss'],
      tasks: ['compass']
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass:dev', 'watch']);

};