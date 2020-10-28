let mix = require('laravel-mix');

mix.setPublicPath('public')
   .js('resources/assets/js/main.js', 'public/js')
   .sass('resources/assets/scss/main.scss', 'public/css')

