///**
// * Created by terences on 12/1/16.
// */
//var grunt = require("grunt");
////grunt.loadNpmTasks('grunt-contrib-watch');
//grunt.initConfig({
//    watch: {
//        files: ['**/*.js', 'views/*.jade'],
//        tasks: ['reload'],
//        options: {
//            livereload: true
//        }
//     }
//});

module.exports = function(grunt){
    grunt.initConfig({
        //pkg:grunt.file.readJSON('package.json'),

        watch:{
            options:{livereload:true},
            files:['**/*.js','views/*.jade'],
            tasks:[]
        },
        //express:{
        //    all:{
        //        options:{
        //            port:3000,
        //            hostname:'localhost',
        //            bases:['index.js'],
        //            livereload:true
        //        }
        //    }
        //}
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.registerTask('server', ['express', 'watch']);

};