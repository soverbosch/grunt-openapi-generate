# grunt-openapi-generate

> Generates openapi file using JDoc like comments

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-openapi-generate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-openapi-generate');

grunt.registerTask('openapi', ['openapi_generate']);
```

## The "openapi_generate" task

### Overview
In your project's Gruntfile, add a section named `openapi_generate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  openapi_generate: {
    options: {
      title: 'This is a generated OpenAPI file', // Optional, will default to text as printed here.
      version: '1.0.0', // Optional, defaults to 1.0.0
      openapiVersion: '3.0.1', // Optional, defaults to 3.0.1
      apis: [], // Contains a list of directories and/or files to scan for @swagger tags.
      destination: 'target/openapi.json' // Location where resulting OpenApi file is placed
    },
  },
});
```

### Options

### Usage Examples

In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  openapi_generate: {
    options: {
      title: 'Example Update API',
      apis:  ['src/**/*.js'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
