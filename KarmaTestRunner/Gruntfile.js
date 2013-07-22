module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    markdown: {
      slides:{
        files: [{
          expand: true,
          src: 'slides/*.md',
          dest: 'out/',
          ext: '.html'
        }],
        options: {
          template: 'templates/slide.html',
          markdownOptions: {
            gfm: true
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-markdown');

  grunt.registerMultiTask('present', 'build presentation', function() {
    //list markdown files,
    //order by file name
    //compile into presentation

  });

};
