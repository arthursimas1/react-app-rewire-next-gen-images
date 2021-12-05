const NextGenImagesPlugin = require('next-gen-images-webpack-plugin')

/**
 * @param {object} config
 * @param {any[]} config.plugins
 * @param env
 * @param nextGenImagesPluginOptions
 */
function rewireNextGenImagesPlugin(config, env, nextGenImagesPluginOptions = {}) {
  // Add the NextGenImagesPlugin plugin to the list of plugins
  config.plugins = (config.plugins || []).concat([
    new NextGenImagesPlugin(nextGenImagesPluginOptions)
  ])

  return config
}

module.exports = rewireNextGenImagesPlugin
