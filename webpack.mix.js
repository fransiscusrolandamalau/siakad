const mix = require('laravel-mix');
const glob = require('glob');
const path = require('path');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const rimraf = require('rimraf');
require('laravel-mix-purgecss');

// Default
mix.js('resources/admin/js/app.js', 'public/admin/js')
	.scripts('resources/admin/js/config.js', 'public/admin/js/config.js');

// 3rd party plugins css/js
mix.sass('resources/admin/plugins/plugins.scss', 'public/admin/plugins/global/plugins.bundle.css').then(() => {
    // remove unused preprocessed fonts folder
    rimraf(path.resolve('public/admin/fonts'), () => {});
    rimraf(path.resolve('public/admin/images'), () => {});
}).sourceMaps(!mix.inProduction())
    // .setResourceRoot('./')
    .options({processCssUrls: false}).js(['resources/admin/plugins/plugins.js'], 'public/admin/plugins/global/plugins.bundle.js');

// Metronic css/js
mix.sass('resources/admin/metronic/sass/style.scss', 'public/admin/css/style.bundle.css', {
    sassOptions: {includePaths: ['node_modules']},
})
    // .options({processCssUrls: false})
    .js('resources/admin/js/scripts.js', 'public/admin/js/scripts.bundle.js');

// Custom 3rd party plugins
(glob.sync('resources/admin/plugins/custom/**/*.js') || []).forEach(file => {
    mix.js(file, `public/admin/${file.replace('resources/admin/', '').replace('.js', '.bundle.js')}`);
});
(glob.sync('resources/admin/plugins/custom/**/*.scss') || []).forEach(file => {
    mix.sass(file, `public/admin/${file.replace('resources/admin/', '').replace('.scss', '.bundle.css')}`);
});

// Metronic css pages (single page use)
(glob.sync('resources/admin/metronic/sass/pages/**/!(_)*.scss') || []).forEach(file => {
    file = file.replace(/[\\\/]+/g, '/');
    mix.sass(file, file.replace('resources/admin/metronic/sass', 'public/admin/css').replace(/\.scss$/, '.css'));
});

// Metronic js pages (single page use)
(glob.sync('resources/admin/metronic/js/pages/**/*.js') || []).forEach(file => {
    mix.js(file, `public/admin/${file.replace('resources/admin/metronic/', '')}`);
});

// Metronic theme
(glob.sync('resources/admin/metronic/sass/themes/**/!(_)*.scss') || []).forEach(file => {
    file = file.replace(/[\\\/]+/g, '/');
    mix.sass(file, file.replace('resources/admin/metronic/sass', 'public/admin/css').replace(/\.scss$/, '.css'));
});

mix.webpackConfig({
    plugins: [
        new ReplaceInFileWebpackPlugin([
            {
                // rewrite font paths
                dir: path.resolve('public/admin/plugins/global'),
                test: /\.css$/,
                rules: [
                    {
                        // fontawesome
                        search: /url\((\.\.\/)?webfonts\/(fa-.*?)"?\)/g,
                        replace: 'url(./fonts/@fortawesome/$2)',
                    },
                    {
                        // flaticon
                        search: /url\(("?\.\/)?font\/(Flaticon\..*?)"?\)/g,
                        replace: 'url(./fonts/flaticon/$2)',
                    },
                    {
                        // flaticon2
                        search: /url\(("?\.\/)?font\/(Flaticon2\..*?)"?\)/g,
                        replace: 'url(./fonts/flaticon2/$2)',
                    },
                    {
                        // keenthemes fonts
                        search: /url\(("?\.\/)?(Ki\..*?)"?\)/g,
                        replace: 'url(./fonts/keenthemes-icons/$2)',
                    },
                    {
                        // lineawesome fonts
                        search: /url\(("?\.\.\/)?fonts\/(la-.*?)"?\)/g,
                        replace: 'url(./fonts/line-awesome/$2)',
                    },
                    {
                        // socicons
                        search: /url\(("?\.\.\/)?font\/(socicon\..*?)"?\)/g,
                        replace: 'url(./fonts/socicon/$2)',
                    },
                ],
            },
        ]),
    ],
});

// Webpack.mix does not copy fonts, manually copy
(glob.sync('resources/admin/metronic/plugins/**/*.+(woff|woff2|eot|ttf)') || []).forEach(file => {
    var folder = file.match(/resources\/admin\/metronic\/plugins\/(.*?)\//)[1];
    mix.copy(file, `public/admin/plugins/global/fonts/${folder}/${path.basename(file)}`);
});
(glob.sync('node_modules/+(@fortawesome|socicon|line-awesome)/**/*.+(woff|woff2|eot|ttf)') || []).forEach(file => {
    var folder = file.match(/node_modules\/(.*?)\//)[1];
    mix.copy(file, `public/admin/plugins/global/fonts/${folder}/${path.basename(file)}`);
});

// Optional: Import datatables.net
mix.copy('resources/admin/js/datatables-services.js', 'public/admin/js/datatables-services.js');

mix.scripts([
    'node_modules/datatables.net/js/jquery.dataTables.js',
    'node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js',
    'node_modules/datatables.net-autofill/js/dataTables.autoFill.min.js',
    'node_modules/datatables.net-autofill-bs4/js/autoFill.bootstrap4.min.js',
    'node_modules/datatables.net-buttons/js/dataTables.buttons.min.js',
    'node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js',
    'node_modules/datatables.net-buttons/js/buttons.colVis.js',
    'node_modules/datatables.net-buttons/js/buttons.flash.js',
    'node_modules/datatables.net-buttons/js/buttons.html5.js',
    'node_modules/datatables.net-buttons/js/buttons.print.js',
    'node_modules/datatables.net-colreorder/js/dataTables.colReorder.min.js',
    'node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js',
    'node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js',
    'node_modules/datatables.net-keytable/js/dataTables.keyTable.min.js',
    'node_modules/datatables.net-responsive/js/dataTables.responsive.min.js',
    'node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
    'node_modules/datatables.net-rowgroup/js/dataTables.rowGroup.min.js',
    'node_modules/datatables.net-rowreorder/js/dataTables.rowReorder.min.js',
    'node_modules/datatables.net-scroller/js/dataTables.scroller.min.js',
    'node_modules/datatables.net-select/js/dataTables.select.min.js',
], 'public/admin/plugins/custom/datatables/datatables.bundle.js').purgeCss();
mix.styles([
    'node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css',
    'node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css',
    'node_modules/datatables.net-autofill-bs4/css/autoFill.bootstrap4.min.css',
    'node_modules/datatables.net-colreorder-bs4/css/colReorder.bootstrap4.min.css',
    'node_modules/datatables.net-fixedcolumns-bs4/css/fixedColumns.bootstrap4.min.css',
    'node_modules/datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.min.css',
    'node_modules/datatables.net-keytable-bs4/css/keyTable.bootstrap4.min.css',
    'node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
    'node_modules/datatables.net-rowgroup-bs4/css/rowGroup.bootstrap4.min.css',
    'node_modules/datatables.net-rowreorder-bs4/css/rowReorder.bootstrap4.min.css',
    'node_modules/datatables.net-scroller-bs4/css/scroller.bootstrap4.min.css',
    'node_modules/datatables.net-select-bs4/css/select.bootstrap4.min.css',
], 'public/admin/plugins/custom/datatables/datatables.bundle.css').purgeCss();
