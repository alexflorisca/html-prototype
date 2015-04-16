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

    autoprefixer: {
        // Multiple files used for each theme, overwrites current files.
        prod: {
          options: {
            map: false
          },
          src: 'css/style.css',
          dest: 'css/style.css'
        },

        dev: {
          options: {
            map: true
          },
          src: 'css/style.css',
          dest: 'css/style.css'
        }
    },

    shell: {
        // Update the Can I Use database to get the latest usage statistics and browser support - If this doesn't work you probably need to 'npm install' again
        updateCanIUseDb: {
            command: 'echo \"Updating Can I Use database for Autoprefixer...\" && npm update caniuse-db && echo \"...Successful\"'
        }
    },


    watch: {
      files: ['Gruntfile.js', 'js/**/*.js', 'sass/**/*.scss'],
      tasks: ['sass:dev', 'autoprefixer']
    }
  });


  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['sass:dev', 'shell:updateCanIUseDb', 'autoprefixer', 'watch']);

};