const path = require( 'path' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const pkg = require( "./package.json" );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const FaviconsWebpackPlugin = require( 'favicons-webpack-plugin' );


const PATHS = {
    app: path.join( __dirname, 'src/main/js' ),
    build: path.join( __dirname, 'target/build' )
};


const common = {
    entry: {
        app: PATHS.app,
        vendor: Object.keys( pkg.dependencies )
    },
    devtool: 'eval-cheap-module-source-map',
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },

    resolve: {
        modules: ['node_modules', './src/main/js'],
        extensions: ['.js', '.jsx']
    },

    node: {
        net: 'empty',
    },

    module: {
        loaders: [
            {test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract( {fallback: 'style-loader', use: 'css-loader'} )},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.json(\?v=\d+\.\d+\.\d+)?$/, loader: 'json-loader'},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
        ]
    },

    devServer: {
        https: true,
        port: 3000
    },


    plugins: [
        new ExtractTextPlugin( 'bundle.css' ),
        new HtmlWebpackPlugin( {
                                   template: './src/main/js/index.html'
                               } ),
        new webpack.ProvidePlugin( {
                                       $: "jquery",
                                       jQuery: "jquery"
                                   } )
    ]
};


let config;

// Detect how npm is run and branch based on that
switch ( process.env.npm_lifecycle_event ) {
    //prod
    case 'build':
        config = merge( common, {
            output: {
                filename: '[name].[chunkhash].js'
            },
            devtool: 'cheap-module-source-map',
            plugins: [new webpack.DefinePlugin( {
                                                    'process.env.NODE_ENV': JSON.stringify( 'production' )

                                                } ),
                      new webpack.optimize.UglifyJsPlugin( {
                                                               compress: {
                                                                   warnings: false
                                                               }
                                                           } ),
                      new webpack.optimize.CommonsChunkPlugin( {name: "vendor", filename: "[name].[chunkhash].js"} ),
                      new CleanWebpackPlugin( PATHS.build ),
                      new webpack.optimize.ModuleConcatenationPlugin(),
                      new FaviconsWebpackPlugin( './favicon.png' )
            ]

        } );
        break;
    default:
        config = common;

}

module.exports = config;