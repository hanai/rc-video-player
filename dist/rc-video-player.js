(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["rc-video-player"] = factory(require("react"), require("react-dom"));
	else
		root["rc-video-player"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_37__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(2);
	
	var _ControlBar = __webpack_require__(6);
	
	var _ControlBar2 = _interopRequireDefault(_ControlBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Player = _react2.default.createClass({
	  displayName: 'Player',
	
	  propTypes: {
	    autoplay: _react2.default.PropTypes.bool,
	    poster: _react2.default.PropTypes.string,
	    width: _react2.default.PropTypes.number,
	    height: _react2.default.PropTypes.number
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      autoplay: false,
	      poster: '',
	      width: 854,
	      height: 480
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      paused: true,
	      currentTime: 0,
	      loadedTime: 0,
	      duration: 0,
	      buffered: [0, 0]
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._controller = this.refs.player.controller ? this.refs.player.controller : this.refs.player;
	  },
	  _play: function _play() {
	    this._controller.play();
	  },
	  _pause: function _pause() {
	    this._controller.pause();
	  },
	  _togglePlay: function _togglePlay() {
	    if (this._controller.paused) {
	      this._play();
	    } else {
	      this._pause();
	    }
	  },
	  _handlePlay: function _handlePlay() {
	    this.setState({
	      paused: false
	    });
	  },
	  _handlePause: function _handlePause() {
	    this.setState({
	      paused: true
	    });
	  },
	  _handleDurationChange: function _handleDurationChange() {
	    this.setState({
	      duration: this._controller.duration
	    });
	  },
	  _handleTimeUpdate: function _handleTimeUpdate() {
	    this.setState({
	      currentTime: this._controller.currentTime
	    });
	  },
	  _handleProgress: function _handleProgress() {
	    if (this._controller.readyState === 4) {
	      var buffered = this._controller.buffered;
	      console.log([buffered.start(0), buffered.end(0)]);
	      this.setState({
	        buffered: [buffered.start(0), buffered.end(0)]
	      });
	    }
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'player-box', style: { width: this.props.width, height: this.props.height } },
	      _react2.default.createElement(
	        'video',
	        { ref: 'player',
	          width: this.props.width,
	          height: this.props.height,
	          autoPlay: this.props.autoplay,
	          poster: this.props.poster ? this.props.poster : null,
	          controls: false,
	          onClick: this._togglePlay,
	          onPlay: this._handlePlay,
	          onPause: this._handlePause,
	          onProgress: this._handleProgress,
	          onDurationChange: this._handleDurationChange,
	          onTimeUpdate: this._handleTimeUpdate
	        },
	        this.props.children
	      ),
	      _react2.default.createElement(_ControlBar2.default, { paused: this.state.paused,
	        onClickPlay: this._togglePlay,
	        currentTime: this.state.currentTime,
	        duration: this.state.duration,
	        buffered: this.state.buffered })
	    );
	  }
	});
	
	module.exports = Player;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "*, *:before, *:after {\n  box-sizing: border-box; }\n\n.player-box {\n  position: relative; }\n  .player-box .control-bar {\n    background: #1B1B1B;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 28px;\n    flex-direction: row;\n    display: flex;\n    justify-content: space-between;\n    line-height: 28px; }\n    .player-box .control-bar .play-btn {\n      width: 50px;\n      text-align: center;\n      vertical-align: middle;\n      color: #757575;\n      cursor: pointer; }\n      .player-box .control-bar .play-btn:hover .play-icon, .player-box .control-bar .play-btn:hover .pause-icon {\n        fill: #fff; }\n      .player-box .control-bar .play-btn .play-icon, .player-box .control-bar .play-btn .pause-icon {\n        fill: #cccccc; }\n    .player-box .control-bar .progress-bar-container {\n      flex: 1;\n      padding: 0 10px;\n      display: flex;\n      align-items: center; }\n    .player-box .control-bar .progress-bar {\n      position: relative;\n      width: 100%; }\n      .player-box .control-bar .progress-bar:hover .pointer {\n        display: block; }\n      .player-box .control-bar .progress-bar .pointer {\n        content: '';\n        width: 10px;\n        height: 10px;\n        overflow: hidden;\n        background: #D71816;\n        position: absolute;\n        top: 50%;\n        margin-top: -5px;\n        margin-left: -5px;\n        z-index: 5;\n        border-radius: 50%;\n        left: 0;\n        display: none;\n        cursor: pointer; }\n      .player-box .control-bar .progress-bar .progress-list {\n        flex: 1;\n        height: 3px;\n        background: #666;\n        position: relative;\n        cursor: pointer;\n        transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1); }\n        .player-box .control-bar .progress-bar .progress-list:hover {\n          background: #999;\n          transform: scaleY(1.5); }\n      .player-box .control-bar .progress-bar .play {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        width: 0;\n        background: #D71816; }\n      .player-box .control-bar .progress-bar .buffer {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        width: 0;\n        z-index: 4; }\n      .player-box .control-bar .progress-bar .hover {\n        background: rgba(0, 0, 0, 0.5);\n        opacity: 0;\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        width: 0; }\n    .player-box .control-bar .time-label {\n      font-size: 12px;\n      color: #ddd;\n      padding: 0 8px;\n      white-space: nowrap; }\n      .player-box .control-bar .time-label .current {\n        color: #fff; }\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProgressBar = __webpack_require__(7);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	var _TimeLabel = __webpack_require__(8);
	
	var _TimeLabel2 = _interopRequireDefault(_TimeLabel);
	
	var _playIcon = __webpack_require__(9);
	
	var _playIcon2 = _interopRequireDefault(_playIcon);
	
	var _pauseIcon = __webpack_require__(38);
	
	var _pauseIcon2 = _interopRequireDefault(_pauseIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ControlBar = _react2.default.createClass({
	  displayName: 'ControlBar',
	
	  propTypes: {
	    currentTime: _react2.default.PropTypes.number.isRequired,
	    duration: _react2.default.PropTypes.number.isRequired,
	    onClickPlay: _react2.default.PropTypes.func.isRequired,
	    buffered: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number).isRequired
	  },
	  _handleClickPlay: function _handleClickPlay() {
	    this.props.onClickPlay();
	  },
	  render: function render() {
	    var _props = this.props;
	    var currentTime = _props.currentTime;
	    var duration = _props.duration;
	    var buffered = _props.buffered;
	
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'control-bar' },
	      _react2.default.createElement(
	        'div',
	        { className: 'play-btn', 'aria-role': 'button', onClick: this._handleClickPlay,
	          'aria-label': this.props.paused ? 'play' : 'pause' },
	        this.props.paused ? _react2.default.createElement(_playIcon2.default, null) : _react2.default.createElement(_pauseIcon2.default, null)
	      ),
	      _react2.default.createElement(_ProgressBar2.default, { currentTime: currentTime,
	        duration: duration,
	        buffered: buffered }),
	      _react2.default.createElement(_TimeLabel2.default, { currentTime: currentTime,
	        duration: duration })
	    );
	  }
	});
	
	module.exports = ControlBar;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProgressBar = function (_React$Component) {
	  _inherits(ProgressBar, _React$Component);
	
	  function ProgressBar(props) {
	    _classCallCheck(this, ProgressBar);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProgressBar).call(this, props));
	
	    _this.state = {
	      displayHoverBar: false,
	      hoverBarLength: 0,
	      pointerLeft: 0,
	      playPercent: 0
	    };
	    return _this;
	  }
	
	  _createClass(ProgressBar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var currentTime = nextProps.currentTime;
	      var duration = nextProps.duration;
	
	      var progressLength = this.refs.progressList.clientWidth;
	      this.setState({
	        playPercent: duration ? currentTime / duration * 100 + '%' : 0,
	        pointLeft: (duration ? currentTime / duration * progressLength : 0) + 'px'
	      });
	    }
	  }, {
	    key: '_handleMouseEnterProgressBar',
	    value: function _handleMouseEnterProgressBar() {
	      this.setState({
	        displayHoverBar: true
	      });
	    }
	  }, {
	    key: '_handleMouseLeaveProgressbar',
	    value: function _handleMouseLeaveProgressbar(event) {
	      var posX = event.pageX;
	      var posY = event.pageY;
	      this.setState({
	        displayHoverBar: false
	      });
	    }
	  }, {
	    key: '_handleMouseMoveProgressBar',
	    value: function _handleMouseMoveProgressBar(event) {
	      var eX = event.clientX;
	      var barBounding = this.refs.progressList.getBoundingClientRect();
	      var barX = barBounding.left;
	      var offset = eX - barX;
	      this.setState({
	        hoverBarLength: offset
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var currentTime = _props.currentTime;
	      var duration = _props.duration;
	      var _state = this.state;
	      var playPercent = _state.playPercent;
	      var pointLeft = _state.pointLeft;
	      var displayHoverBar = _state.displayHoverBar;
	      var hoverBarLength = _state.hoverBarLength;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'progress-bar-container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'progress-bar' },
	          _react2.default.createElement(
	            'div',
	            { className: 'progress-list', ref: 'progressList',
	              onMouseMove: this._handleMouseMoveProgressBar,
	              onMouseEnter: this._handleMouseEnterProgressBar,
	              onMouseLeave: this._handleMouseLeaveProgressbar },
	            _react2.default.createElement('div', { className: 'play', style: { width: playPercent } }),
	            _react2.default.createElement('div', { className: 'buffer' }),
	            _react2.default.createElement('div', { className: 'hover',
	              style: { opacity: displayHoverBar ? 1 : 0, width: hoverBarLength } })
	          ),
	          _react2.default.createElement('div', { className: 'pointer', style: { left: pointLeft } })
	        )
	      );
	    }
	  }]);
	
	  return ProgressBar;
	}(_react2.default.Component);
	
	ProgressBar.propTypes = {
	  currentTime: _react2.default.PropTypes.number.isRequired,
	  duration: _react2.default.PropTypes.number.isRequired,
	  buffered: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number).isRequired
	};
	
	
	module.exports = ProgressBar;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TimeLabel = _react2.default.createClass({
	  displayName: 'TimeLabel',
	
	  propTypes: {
	    currentTime: _react2.default.PropTypes.number.isRequired,
	    duration: _react2.default.PropTypes.number.isRequired
	  },
	  _formatSeconds: function _formatSeconds(seconds) {
	    var h = parseInt(seconds / 3600);
	    var m = parseInt(seconds % 3600 / 60);
	    var s = parseInt(seconds % 3600 % 60);
	    var fH = h ? h + ':' : '';
	    var fM = m ? m < 10 ? '0' + m + ':' : m + ':' : '00:';
	    var fS = s ? s < 10 ? '0' + s : s : '00';
	    return '' + fH + fM + fS;
	  },
	  render: function render() {
	    var _props = this.props;
	    var currentTime = _props.currentTime;
	    var duration = _props.duration;
	
	    var currentTimeSeconds = parseInt(currentTime);
	    var durationSeconds = parseInt(duration);
	
	    var formattedCurrentTime = this._formatSeconds(currentTimeSeconds);
	    var formattedDuration = this._formatSeconds(durationSeconds);
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'time-label' },
	      _react2.default.createElement(
	        'span',
	        { className: 'current' },
	        formattedCurrentTime
	      ),
	      ' / ',
	      _react2.default.createElement(
	        'span',
	        { className: 'duration' },
	        formattedDuration
	      )
	    );
	  }
	});
	
	module.exports = TimeLabel;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var helpers = __webpack_require__(10)(__webpack_require__(37));
	
	module.exports = React.createClass({
	
	    displayName: "PlayIcon",
	
	    getDefaultProps: function getDefaultProps() {
	        return { "width": "28px", "height": "28px", "viewBox": "0 0 28 28", "version": "1.1", "xmlns": "http://www.w3.org/2000/svg" };
	    },
	    componentDidMount: function componentDidMount() {
	        helpers.applyXmlAttributes(this);
	    },
	    render: function render() {
	        var props = this.props;
	        var children = props.children;
	
	        return React.createElement(
	            'svg',
	            this.props,
	            React.createElement(
	                'g',
	                { className: 'play-icon', strokeWidth: '1px' },
	                React.createElement('path', { d: 'M 7 6 L 22 14 L 7 22 Z' })
	            ),
	            React.Children.map(children, function (c) {
	                return c;
	            })
	        );
	    }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var forEach  = __webpack_require__(11);
	var ATTR_KEY = 'data-svgreactloader';
	
	var MODULE = {
	    /**
	     * @param {HTMLElement}
	     */
	    applyAttributes: function (el) {
	        var data = MODULE.hasXmlAttributes(el);
	        if (data) {
	            forEach(JSON.parse(data), function (args) {
	                var method = 'setAttribute' + (args.length === 3 ? 'NS' : '');
	                el[method].apply(el, args);
	            });
	        }
	    },
	    /**
	     * @param {HTMLElement}
	     */
	    hasXmlAttributes: function (el) {
	        return el && el.getAttribute(ATTR_KEY);
	    },
	    /**
	     * @param {React.Component}
	     */
	    applyXmlAttributes: function (component) {
	        var domEl = MODULE.reactDOM.findDOMNode(component);
	        var fn = MODULE.applyAttributes;
	
	        if (domEl) {
	            fn(domEl);
	            forEach(domEl.querySelectorAll('[' + ATTR_KEY + ']'), fn);
	        }
	    }
	};
	
	module.exports = function helpers (reactDOM) {
	    if (!MODULE.reactDOM) {
	        MODULE.reactDOM = reactDOM;
	    }
	    return MODULE;
	};
	


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(12),
	    baseEach = __webpack_require__(13),
	    createForEach = __webpack_require__(34);
	
	/**
	 * Iterates over elements of `collection` invoking `iteratee` for each element.
	 * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	 * (value, index|key, collection). Iteratee functions may exit iteration early
	 * by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length" property
	 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	 * may be used for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @alias each
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array|Object|string} Returns `collection`.
	 * @example
	 *
	 * _([1, 2]).forEach(function(n) {
	 *   console.log(n);
	 * }).value();
	 * // => logs each value from left to right and returns the array
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	 *   console.log(n, key);
	 * });
	 * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	 */
	var forEach = createForEach(arrayEach, baseEach);
	
	module.exports = forEach;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(14),
	    createBaseEach = __webpack_require__(33);
	
	/**
	 * The base implementation of `_.forEach` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(15),
	    keys = __webpack_require__(19);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(16);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(17);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    isArrayLike = __webpack_require__(24),
	    isObject = __webpack_require__(18),
	    shimKeys = __webpack_require__(28);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(21);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(22),
	    isObjectLike = __webpack_require__(23);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(25),
	    isLength = __webpack_require__(27);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(26);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(29),
	    isArray = __webpack_require__(30),
	    isIndex = __webpack_require__(31),
	    isLength = __webpack_require__(27),
	    keysIn = __webpack_require__(32);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(24),
	    isObjectLike = __webpack_require__(23);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    isLength = __webpack_require__(27),
	    isObjectLike = __webpack_require__(23);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(29),
	    isArray = __webpack_require__(30),
	    isIndex = __webpack_require__(31),
	    isLength = __webpack_require__(27),
	    isObject = __webpack_require__(18);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(25),
	    isLength = __webpack_require__(27),
	    toObject = __webpack_require__(17);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    var length = collection ? getLength(collection) : 0;
	    if (!isLength(length)) {
	      return eachFunc(collection, iteratee);
	    }
	    var index = fromRight ? length : -1,
	        iterable = toObject(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(35),
	    isArray = __webpack_require__(30);
	
	/**
	 * Creates a function for `_.forEach` or `_.forEachRight`.
	 *
	 * @private
	 * @param {Function} arrayFunc The function to iterate over an array.
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @returns {Function} Returns the new each function.
	 */
	function createForEach(arrayFunc, eachFunc) {
	  return function(collection, iteratee, thisArg) {
	    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	      ? arrayFunc(collection, iteratee)
	      : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	  };
	}
	
	module.exports = createForEach;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(36);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var helpers = __webpack_require__(10)(__webpack_require__(37));
	
	module.exports = React.createClass({
	
	    displayName: "PauseIcon",
	
	    getDefaultProps: function getDefaultProps() {
	        return { "width": "28px", "height": "28px", "viewBox": "0 0 28 28", "version": "1.1", "xmlns": "http://www.w3.org/2000/svg" };
	    },
	    componentDidMount: function componentDidMount() {
	        helpers.applyXmlAttributes(this);
	    },
	    render: function render() {
	        var props = this.props;
	        var children = props.children;
	
	        return React.createElement(
	            'svg',
	            this.props,
	            React.createElement(
	                'g',
	                { className: 'pause-icon', strokeWidth: '1px' },
	                React.createElement('path', { d: 'M 7 6 L 13 6 L 13 22 L 7 22 Z M 16 6 L 22 6 L 22 22 L 16 22 Z' })
	            ),
	            React.Children.map(children, function (c) {
	                return c;
	            })
	        );
	    }
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=rc-video-player.js.map