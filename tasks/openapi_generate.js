/*
 * grunt-openapi-generate
 * https://github.com/soverbosch/grunt-openapi-generate
 *
 * Copyright (c) 2019 Sarris Overbosch
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var swaggerJSDoc = require('swagger-jsdoc');
    var path = require('path');
    var semver = require('semver');

    grunt.registerTask('openapi_generate', 'Generates openapi file using JDoc like comments', function() {
        var options = this.options({
            title: 'This is a generated OpenAPI file',
            version: '1.0.0',
            openapiVersion: '3.0.1',
            apis: [],
            destination: 'target/openapi.json'
        });

        // ToDo: Check that openapiVersion 3 has version consisting out of two dots (3.0.x)
        // ToDo: Check that openapiVersion 2 has version consisting out of one dots (2.x)
        var swaggerOptions = {
            definition: {
                info: {
                    version: semver.valid(options.version) ? options.version : '1.0.1',
                    title: options.title
                },
                openapi: semver.valid(options.openapiVersion) ? options.openapiVersion : '3.0.1'
            },
            apis: options.apis
        };

        grunt.log.warn(JSON.stringify(swaggerOptions));
        const swaggerSpec = swaggerJSDoc(swaggerOptions);

        var swaggerOutputFile = path.normalize(path.join(options.destination));
        grunt.file.write(swaggerOutputFile, JSON.stringify(swaggerSpec));
    });
};