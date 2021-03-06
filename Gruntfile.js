// F11P JavaScript framework

// files to include in compiled script
// first set are core library files which must be included in a specific order
// second set is the site-specific implementation (usually just one line for all of them since order is not important)

// config for standalone project:
// var bowerPath = 'bower_components';
// var frameworkCorePath = bowerPath+'/fl1p3l3v3n';

// config for sample project inside framework:
var bowerPath = 'bower_components';
var frameworkCorePath = 'bower_components/fl1p3l3v3n';

var _appfiles = [
    frameworkCorePath+'/lib/Global.js',
    frameworkCorePath+'/lib/Device.js',
    'js/site/_Config.js',
    frameworkCorePath+'/lib/bit/bitObject.js',
    frameworkCorePath+'/lib/bit/bit.js',
    frameworkCorePath+'/lib/Events.js',
    frameworkCorePath+'/lib/bit/bitEvents.js',
    frameworkCorePath+'/lib/Mobile.js',
    frameworkCorePath+'/lib/utilities/ScrollUtil.js',
    frameworkCorePath+'/lib/utilities/TouchUtil.js',
    frameworkCorePath+'/lib/MVC/MVC.js',
    frameworkCorePath+'/lib/MVC/Component.js',
    frameworkCorePath+'/lib/MVC/Model.js',
    frameworkCorePath+'/lib/MVC/View.js',
    frameworkCorePath+'/lib/MVC/Controller.js',
    frameworkCorePath+'/lib/MVC/LinkedList.js',
    
    frameworkCorePath+'/lib/Render.js',
    bowerPath+'/greensock/src/uncompressed/TweenMax.js',
    bowerPath+'/history.js/scripts/bundled-uncompressed/html4+html5/native.history.js',
    bowerPath+'/PreloadJS/lib/preloadjs-0.6.1.combined.js',
    frameworkCorePath+'/lib/utilities/Utils.js',
    'js/site/_SiteDevice.js',
    frameworkCorePath+'/lib/utilities/Cookie.js',
    frameworkCorePath+'/lib/utilities/Ajax.js',
    frameworkCorePath+'/lib/bit/extensions/Ext_BG.js',
    frameworkCorePath+'/lib/bit/extensions/Ext_Center.js',
    frameworkCorePath+'/lib/bit/extensions/Ext_CSS.js',
    frameworkCorePath+'/lib/bit/extensions/Ext_FontStyle.js',
    frameworkCorePath+'/lib/bit/extensions/Ext_Interact.js',
    frameworkCorePath+'/lib/bit/extensions/Ext_SetZ.js',
    frameworkCorePath+'/lib/bit/extensions/Ext_Size.js',
    frameworkCorePath+'/lib/bit/extensions/Ext_Transform.js',
    frameworkCorePath+'/lib/bit/extensions/Ext_Tween.js',
    frameworkCorePath+'/lib/bit/extensions/Ext_Visibility.js',
    frameworkCorePath+'/lib/bit/extensions/Ext_Filter.js',
    frameworkCorePath+'/lib/bit/bitReady.js',
    frameworkCorePath+'/lib/css/CSS.js',
    
    frameworkCorePath+'/lib/GATracker.js',
    frameworkCorePath+'/lib/Vector2.js',
    frameworkCorePath+'/addons/slidelist.js',
    frameworkCorePath+'/addons/slidenav.js',

    // 'js/site/data/**/*.js',
    'js/site/Models/**/*.js',
    'js/site/Views/**/*.js',
    'js/site/Controllers/**/*.js',
    'js/site/_Start.js',
];

// These are built into the framework. These shouldn't have to change much.
var _exceptions = [ 'bit', '$bitObject', 'Utils', 'ScrollUtil', 'TouchUtil', 'Cookie', 'Ajax', 'Mobile', 'Start', 'Container', 'Evt', 'Model', 'Data', 'Config', 'GATracker', 'Home', 'Loader', 'Device', 'CSS', 'Render', 'SiteDevice'];


// banners to prepend to the minified code. mostly for showing off.
var _banner_big="/*\n"+
                "                      ,--                 ________........\n"+
                " ________.......    ,'  |    ,---'''''''''         ____  |\n"+
                "|      ________|   |__  |    |__......-------''''''    | |\n"+
                "| |''''               | |                              | |\n"+
                "| |                   | |                              | |\n"+
                "| |                   | |       __                     | |\n"+
                "| |         ___...    | |     .` |      |'''''~,       | |\n"+
                "| |        |  ___|    | |    |   |      | ,--. |       | |\n"+
                "| |        | |        | |    --. |      | |  | |       | |\n"+
                "| |        | |        | |      | |      | |  | |       | |\n"+
                "| |        | |        | |      | |      | |  | |       | |\n"+
                "| |        | |        | |      | |      | |  | |       | |\n"+
                "| |        | |        | |      | |      | |  | |       | |\n"+
                "| |        | |_..     | |      | |      | |__, |       | |\n"+
                "| |        |  __|     | |      | |      |  ___.'       | |\n"+
                "| |        | |        | |      | |      | |            | |\n"+
                "| |        | |        | |      | |      | |            | |\n"+
                "| |        | |        | |      | |      | |            | |\n"+
                "| |        | |        | |      | |      | |            | |\n"+
                "| |        |_|        |_;      '-'      '-'            | |\n"+
                "| |                                                    | |\n"+
                "| |                                                    | |\n"+
                "| |                                                ____| |\n"+
                "| |___________............----------'''''''''''''''      |\n"+
                "|             _____________...........------------''''''''\n"+
                "'''''''```````                                          \n"+
                "\n"+
                "F11P | Flipeleven\n"+
                "A Digital Creative Agency\n"+
                "http://f11p.com\n";

var _banner_sml='/*     _         \n'+
                '      /          \n'+
                '  ___ |   _  ___ \n'+
                ' |    |  /  |    \n'+
                ' | -  |  |  | - / \n'+
                ' |    |  |  |    \n'+
                ' |    |  |  |    \n'+
                'http://f11p.com\n';


// configure Grunt
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                // If you can't get source maps to work, run the following command in your terminal:
                // $ sass scss/cousins.scss:css/cousins.css --sourcemap
                // (see this link for details: http://thesassway.com/intermediate/using-source-maps-with-sass )
                // sourceMap: true
            },

            dist: {
                options: {
                    // outputStyle: 'expanded'
                    outputStyle: 'compressed'
                },

                files: {
                    'css/app.css': 'scss/app.scss'
                }
            }
        },


        uglify: {
            concatenateOnly: {
                options: {
                    banner: _banner_big+'\n\n' +
                                        '------------------------- \n' +
                                        '<%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>\n' +
                                        '------------------------- */ \n\n',
                    compress: false,
                    // mangle: false,
                    mangle: {
                        except: _exceptions
                    },

                    drop_console: true,
                    no_mangle_functions: true,
                    preserveComments: 'none'
                },

                files: { // only concatenation
                    'js/app.min.js': _appfiles
                }
            },
        },


        concat: {
            js: {
                files: {
                    'js/app.js': _appfiles
                }
            }
        },

        watch: {

            grunt: {
                files: ['Gruntfile.js'],
                // tasks: ['concat', 'uglify:concatenateOnly', 'uglify:doAll']
                tasks: ['concat', 'uglify:concatenateOnly']
            },

            scripts: {
                files: ['js/site/**/**/*.js'],
                tasks: ['concat']
                // tasks: ['concat', 'uglify:concatenateOnly']
            },

            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            }

        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('build', ['sass', 'concat', 'uglify:concatenateOnly']);
    grunt.registerTask('default', ['build', 'watch']);
    // grunt.registerTask('build', ['uglify:js']);
};