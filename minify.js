const minify = require('@node-minify/core');
const uglifyjs = require('@node-minify/uglify-js');
const sqwish = require('@node-minify/sqwish');


minify({
  compressor: uglifyjs,
  input: [
  			'js/jquery-2.1.3.min.js',
  			'js/modernizr.custom.js',
  			'js/pages-switcher.js', 
  			'js/imagesloaded.pkgd.min.js',
  			'js/validator.js',
  			'js/jquery.shuffle.min.js',
  			'js/masonry.pkgd.min.js',
  			'js/owl.carousel.min.js',
  			'js/jquery.magnific-popup.min.js',
  			'js/jquery.hoverdir.js',
  			'js/main.js'
  		],
  output: 'js/all.min.js',
  callback: function(err, min) {}
}); 


minify({
  compressor: sqwish,
  input: [
  			'css/bootstrap.css', 
  			'css/normalize.css',
  			'css/animate.css',
  			'css/transition-animations.css',
  			'css/owl.carousel.css',
  			'css/magnific-popup.css',
  			'css/main-green.css',
  		],
  output: 'css/all.min.css',
  callback: function(err, min) {}
});
