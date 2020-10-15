let mix = require('laravel-mix');
let LiveReloadPlugin = require('webpack-livereload-plugin');

mix.js('resources/js/app.js', 'dist/');
mix.sass('resources/scss/app.scss', 'dist/');


mix.webpackConfig({
    plugins: [
        new LiveReloadPlugin()
    ]
});