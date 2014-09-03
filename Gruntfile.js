module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                // port: 4000,
                base: '.',
                keepalive: true,
                hostname: '*',
                livereload: true
                }
            },
        },
        watch: {

        }
    });
    //define npm tasks for grunt
    grunt.loadNpmTasks('grunt-contrib-connect');
    //register tasks for grunt
    grunt.registerTask('default', ['connect']);
};