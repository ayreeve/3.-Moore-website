module.exports = function (grunt) {

    // Project configuration
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'sass/style.sass'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images_source/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images_build/'
                }]
            }
        },

        browserSync: {
            bsFiles: {
                src: 'css/*.css'
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        },

        watch: {
            scripts: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }

        }

    });

    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s)
    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};
