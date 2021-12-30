WEBPACK
1. Watch mode `--watch` webpack stays running, keeps in memeory catched version of modules and updates only these modules that are changed.
2. Live reload functionality `webpack dev server` browser refreshes automatically, not a production dev server
3. `devServer`
  * contentBase - folders that the devServer serves static content out of, not part of the bundle; content not from webpack is served from this folder
  * publicPath - location where the output from webpack is served
  * watchContentBase - watches separate files served from contentBase which is a static asset; by default webpack dev server will not watch these files for changes
4. `Hot reload`
  * HotModuleReplacementPlugin
  * NamedModulesPlugin
  * set `public path` in output key
5. Environment variables management:
  * cross-env
  * dotenv & Webpack dotenv plugin || dotenv-webpack
  * we can use `env` variable in webpack.config.js file and set environment flag `--env` to 'production' or 'development' in package.json scripts
6. Exporting multiple configurations is possible
7. *webpack-merge* helps to merge configuration objects and keep consistent file structure (helps to avoid imperative code style)
8. `webpack.DefinePlugin()` allows you to create global constants which can be configured at compile time
  * there is also *environment plugin* - shorthand for using the *define plugin* on `process.env` keys
9. Babel loader is comprised of plugins that perform transformations - `preset-env` preset is simply a group of plugins (recipe of what plugins you want to include for the transformations you want to apply):
  * browser list https://github.com/browserslist/browserslist
10. Use `useBuiltIns` option in *@babel/preset-env* to automatically pick out needed polyfills from *@babel/polyfill*
  * with `entry` option to select polyfills based on browsers we want to support
  * with `usage` option to select plyfills based on what syntax constructs do we use in our code
11. `plugin-transform-runtime` is a different option for polyfills
  * `helpers` prevents code duplication
  * `regenerator` toggles whether or not generator functions are transformed to use a regenerator runtime that does not pollute the global scope
12. In part *debugging Webpack with Chrome* it is needet to use `node --inspect-brk node_modules\webpack\bin\webpack.js --env production` and either open *chrome://inspect* address in the browser or click *node icon* in dev-tools to debug code
13. Inline loader are useful to apply loader to specific file:
  * `tee-loader!./klondike/scoring.js` adds tee-loader to other loaders (e.g. babel)
  * `!!tee-loader!./klondike/scoring.js` runs only tee-loader
  * `!!tee-loader?label=inline-after!babel-loader!tee-loader?label=inline-before!./klondike/scoring.js` inline method to run several loaders with options