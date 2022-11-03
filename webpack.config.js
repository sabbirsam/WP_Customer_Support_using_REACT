const defaults = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaults,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}; 

// module.exports = {
//   ...defaultConfig,
//   entry: "./src/js/block/index.js",
//   module: {
//     ...defaultConfig.module,
//     rules: [
//       ...defaultConfig.module.rules,
//       {
//         test: /\.svg$/,
//         use: ["@svgr/webpack", "url-loader"],
//       },
//     ],
//   },
//   output: {
//     filename: "index.js", 
//     path: path.resolve(__dirname, "./includes/gutenberg/blocks/"),
//   },
// };