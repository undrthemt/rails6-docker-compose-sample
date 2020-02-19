/**
 * @note webpackのアセットコンパイル用
 * @link https://techracho.bpsinc.jp/hachi8833/2020_01_16/85940
 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

/**
 * @link https://techracho.bpsinc.jp/hachi8833/2020_01_17/85943
 */
// require("jquery"); // application.js内で直接使わない限り不要
// require("bootstrap"); // bootstrap_custom.js を使います
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// @link https://medium.com/@guilhermepejon/how-to-install-bootstrap-4-3-in-a-rails-6-app-using-webpack-9eae7a6e2832
import './bootstrap_custom.js'
import '../stylesheets/application.scss'

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

