module.exports = function(grunt) {
  'use strict';
  var _ = require('lodash');
  var fs = require('fs');

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
    },
    present: {
      build: {
        files: [{
          expand: true,
          src: 'out/slides/*.html'
        }],
        options: {
          dest: 'out/presentation/index.html',
          assets: [
            'assets/',
            'bower_components/reveal.js/css/*',
            'bower_components/reveal.js/js/*',
            'bower_components/reveal.js/plugin/*'
          ],
          template: 'templates/presentation.html'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-markdown');

  grunt.registerMultiTask('present', 'build presentation', function() {
    var options = this.options();
    var template = fs.readFileSync(options.template, 'utf8');
    var src = null;
    var content = this.files.map(function(f) {
      return grunt.file.read(f.src);
    }).join('\n');

    src = _.template(template, {content: content});

    grunt.file.write(options.dest, src);

  });

  grunt.registerTask('default', ['markdown:slides', 'present:build']);

};
