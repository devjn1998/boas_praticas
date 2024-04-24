const { task } = require("grunt");

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    './bem/base.css': 'src/styles/base.less',
                    './bem/layout.css': 'src/styles/layout.less',
                    './bem/modulos.css': 'src/styles/modulos.less',
                    './bem/temas.css': 'src/styles/temas.less',
                }
            }
        },

        watch: {
            less: {
                files: ['src/**/*.less'],
                tasks: ['less:development']
            }
        }
    });

    //plugins:
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //carregar tarefas
    grunt.registerTask('default', ['watch'])
}