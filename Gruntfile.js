module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   typescript: {
    base: {
      src: [ __dirname+'/lib/typescript/*.ts'],
      dest: __dirname+'/lib/keybinds.js',
      options: {
        module: 'amd',
        target: 'es5',
        sourceMap: false,
        declaration: false
      }
    }
  },
  watch: {
      scripts: {
        files: ['**/*.ts'],
        tasks: ['typescript'],
        options: {
          spawn: false,
        },
      },
  },    
  });


  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};