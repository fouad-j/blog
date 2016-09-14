'use strict';

let cpx = require('cpx');

let assets = {
  fonts: {
    src: './node_modules/font-awesome/fonts/**.*',
    dist: './build/fonts/'
  },
  images: {
    src: './src/**/**.{jpg,png,gif}',
    dist: './build/images/'
  }
};

cpx.copy(assets.fonts.src, assets.fonts.dist);
// TODO add "imagemin"
// cpx.watch(assets.images.src, assets.images.dist);
