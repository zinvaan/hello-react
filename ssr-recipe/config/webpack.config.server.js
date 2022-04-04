const paths = require( './paths' );
const getCSSModuleLocalIdent = require( 'react-dev-utils/getCSSModuleLocalIdent' );
const nodeExternals = require( 'webpack-node-externals' );
const webpack = require( 'webpack' );
const getClientEnvironment = require('./env');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const publicUrl = paths.servedPath.slice( 0, -1 );
const env = getClientEnvironment( publicUrl );


module.exports = {
  mode: 'production',
  entry: paths.ssrIndexJs,
  target: 'node',
  output: {
    path: paths.ssrBuild,
    filename: 'server.js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: paths.servedPath,
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve( 'babel-loader' ),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              plugins: [
                [
                  require.resolve( 'babel-plugin-named-asset-import' ),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false,
            }
          },
          //CSS를 위한 처리
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            //exportOnlyLocals: true 옵션을 설정해야 실제 CSS파일을 생성하지 않음.
            loader: require.resolve( 'css-loader' ),
            options: {
              exportOnlyLocals: true,
            }
          },
          //CSS Module을 위한 처리
          {
            test: cssModuleRegex,
            loader: require.resolve( 'css-loader' ),
            options: {
              modules: true,
              exportOnlyLocals: true,
              getLocalIdent: getCSSModuleLocalIdent,
            }
          },
          //sass를 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve( 'css-loader' ),
                options: {
                  exportOnlyLocals: true,
                }
              },
              require.resolve( 'sass-loader' )
            ]
          },
          //sass + CSS Module을 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve( 'css-loader' ),
                options: {
                  module: true,
                  exportOnlyLocals: true,
                  getLocalIdent: getCSSModuleLocalIdent,
                }
              },
              require.resolve( 'sass-loader' )
            ]
          },
          //url-loader를 위한 설정
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\png$/],
            options: {
              emitFile: false,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [ 'node_modules' ]
  },
  externals: [ nodeExternals() ],
  plugins: [
    new webpack.DefinePlugin( env.stringified )
  ],
};