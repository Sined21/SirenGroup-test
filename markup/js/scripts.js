// javascript
let objectFitPoly = false;
let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', function () {
	supportPolyfills();
	lazyLoad();
	correctVh();
	correctVw();

	// dev2
	// dev3
});

window.addEventListener('resize', function () {
	correctVh();
	correctVw();

	// dev2
	// dev3
});

// replaseInlineSvg
function replaseInlineSvg(el) {
	var imgID = el.getAttribute('id');
	var imgClass = el.getAttribute('class');
	var imgURL = el.getAttribute('src');
	fetch(imgURL).then(function(data) {
		return data.text();
	}).then(function(response) {
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(response, 'text/html');
		var svg = xmlDoc.querySelector('svg');
		if (typeof imgID !== 'undefined') {
			svg.setAttribute('id', imgID);
		}
		if (typeof imgClass !== 'undefined') {
			svg.setAttribute('class', imgClass + ' replaced-svg');
		}
		svg.removeAttribute('xmlns:a');
		el.parentNode.replaceChild(svg, el);
	});
}

// lazyLoad
function lazyLoad() {
	if ('loading' in HTMLImageElement.prototype) {
		var images = document.querySelectorAll('img.lazyload');
		images.forEach(function (img) {
			img.src = img.dataset.src;
			img.onload = function () {
				img.classList.add('lazyloaded');
			};
			if (img.classList.contains('svg-html')) {
				replaseInlineSvg(img);
			}
		});
	} else {
		if (!loadLazyLoadScript) {
			loadLazyLoadScript = true;
			var script = document.createElement('script');
			script.async = true;
			script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js';
			document.body.appendChild(script);
		}
		document.addEventListener('lazyloaded', function (e) {
			var img = e.target;
			if (img.classList.contains('svg-html')) {
				replaseInlineSvg(img);
			}
		});
	}
}

// correctVh
function correctVh() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

// correctVw
function correctVw() {
	let vw = document.documentElement.clientWidth * 0.01;
	document.documentElement.style.setProperty('--vw', vw + 'px');
}

// support and polyfills
function supportPolyfills() {
	// objectFit
	if ('objectFit' in document.documentElement.style === false && !objectFitPoly) {
		const script = document.createElement('script');

		script.src = 'js/ofi.min.js';
		document.body.appendChild(script);
		script.onload = function () {
			objectFitPoly = true;
			objectFitImages();
		};
	}

	// forEach
	if (window.NodeList && !NodeList.prototype.forEach) {
		NodeList.prototype.forEach = Array.prototype.forEach;
	}

	// swiper 6 polyfills
	Number.isNaN = Number.isNaN || function isNaN(input) {
		return typeof input === 'number' && input !== input;
	}

	if (!String.prototype.repeat) {
		String.prototype.repeat = function (count) {
			'use strict';
			if (this == null)
				throw new TypeError('can\'t convert ' + this + ' to object');

			var str = '' + this;
			count = +count;
			if (count != count)
				count = 0;

			if (count < 0)
				throw new RangeError('repeat count must be non-negative');

			if (count == Infinity)
				throw new RangeError('repeat count must be less than infinity');

			count = Math.floor(count);
			if (str.length == 0 || count == 0)
				return '';

			if (str.length * count >= 1 << 28)
				throw new RangeError('repeat count must not overflow maximum string size');

			var maxCount = str.length * count;
			count = Math.floor(Math.log(count) / Math.log(2));
			while (count) {
				str += str;
				count--;
			}
			str += str.substring(0, maxCount - str.length);
			return str;
		}
	}
	// swiper 6 polyfills end
};

// dev2
// dev3
// dev4

// jQuery
(function ($) {
	'use strict';

	$(document).ready(function () {

		// dev2
		// dev3
	}); // ready

	$(window).on('resize', function () {

		// dev2
		// dev3
	}); // resize

	$(window).on('load', function () {

		// dev2
		// dev3
	}); // load

	// functions

	// dev2
	// dev3

})(this.jQuery);