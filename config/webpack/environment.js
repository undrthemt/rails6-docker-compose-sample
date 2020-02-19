const { environment } = require('@rails/webpacker')

module.exports = environment

/**
 * pack全体でjQueryなどを利用する
 * @link https://techracho.bpsinc.jp/hachi8833/2020_01_17/85943
 */
const webpack = require('webpack')
environment.plugins.append(
    'Provide',
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default']
    })
)
