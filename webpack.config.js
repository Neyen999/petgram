const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu App de Fotos de Mascotas',
      shortname: 'Petgram 🐶',
      description: 'Con Petgram puedes encontrar fotos de animales domesticos',
      background_color: '#fff',
      theme_color: '#b1a',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: path.resolve('src/assets/icon-192x192.png'),
          size: '192x192',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/icon-256x256.png'),
          size: '256x256',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/icon-384x384.png'),
          size: '384x384',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/icon-512x512.png'),
          size: '512x512',
          purpose: 'any maskable',
          type: 'image/png'
        },
      ]       
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-server-neyen.vercel.app/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    },
    liveReload: true,
    publicPath: '/'
  }
}
