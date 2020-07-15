/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires, fp/no-mutation */
const webpack = require('webpack');
const DotEnv = require('dotenv-webpack');

// @see https://github.com/netlify/netlify-lambda#webpack-configuration
module.exports = {
  optimization: { minimize: process.env.NODE_ENV === 'production' },
  plugins: [
    // Load environment variables
    new DotEnv(),
    // Fixes build error with node-mailjet https://github.com/netlify/netlify-faunadb-example/issues/8
    new webpack.DefinePlugin({ 'global.GENTLY': false })
  ]
};
