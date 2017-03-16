module.exports = function(grunt) {
// Initialize grunt configuration and set image sizes for responsive images
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: '_large_2x',
            quality: 50
          },{
            width: 800,
            suffix: '_large_1x',
            quality: 50
          },{
            width: 750,
            suffix: '_meduim',
            quality: 50
          },{
            width: 500,
            suffix: '_small',
            quality: 50
          }]
        },
//clear out images folder if it exists or create images folder for new responsive sized images
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'src_images/',
          dest: 'images/'
        }]
      }
    }
  });


//load tasks
  grunt.loadNpmTasks('grunt-responsive-images');
  //run task
  grunt.registerTask('default', ['responsive_images']);

};