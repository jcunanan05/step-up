module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(1);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/styles/app.scss
var app = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/__head.js



/* harmony default export */ var _head = (function () {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Step Up! Community Initiative"), external_react_default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), external_react_default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "/_next/static/style.css"
  }));
});
// CONCATENATED MODULE: ./src/components/__body.js




var _body_Body = function Body(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(_head, null), external_react_default.a.createElement("div", {
    className: "App"
  }, children));
};

/* harmony default export */ var _body = (_body_Body);
// CONCATENATED MODULE: ./src/components/Navbar/Item.js


var Item_Item = function Item(_ref) {
  var text = _ref.text;
  return external_react_default.a.createElement("a", {
    className: "navbar-item"
  }, text);
};

/* harmony default export */ var Navbar_Item = (Item_Item);
// CONCATENATED MODULE: ./src/components/Navbar/Menu.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Menu_Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderNavbar", function (direction, children) {
      if (children == '') return '';
      return external_react_default.a.createElement("div", {
        className: "navbar-".concat(direction)
      }, children);
    });

    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$left = _this$props.left,
          left = _this$props$left === void 0 ? '' : _this$props$left,
          _this$props$right = _this$props.right,
          right = _this$props$right === void 0 ? '' : _this$props$right,
          _this$props$active = _this$props.active,
          active = _this$props$active === void 0 ? false : _this$props$active;
      var isActive = active ? 'is-active' : '';
      return external_react_default.a.createElement("div", {
        className: "navbar-menu ".concat(isActive)
      }, this.renderNavbar('start', left), this.renderNavbar('end', right));
    }
  }]);

  return Menu;
}(external_react_["Component"]);

/* harmony default export */ var Navbar_Menu = (Menu_Menu);
// CONCATENATED MODULE: ./src/components/Navbar/Burger.js


var Burger_Burger = function Burger(_ref) {
  var _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;
  return external_react_default.a.createElement("a", {
    role: "button",
    className: "navbar-burger",
    "aria-label": "menu",
    "aria-expanded": "".concat(expanded),
    onClick: onClick
  }, external_react_default.a.createElement("span", {
    "aria-hidden": "true"
  }), external_react_default.a.createElement("span", {
    "aria-hidden": "true"
  }), external_react_default.a.createElement("span", {
    "aria-hidden": "true"
  }));
};

/* harmony default export */ var Navbar_Burger = (Burger_Burger);
// CONCATENATED MODULE: ./src/components/Navbar/index.js


function Navbar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Navbar_typeof = function _typeof(obj) { return typeof obj; }; } else { Navbar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Navbar_typeof(obj); }

function Navbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Navbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Navbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Navbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Navbar_defineProperties(Constructor, staticProps); return Constructor; }

function Navbar_possibleConstructorReturn(self, call) { if (call && (Navbar_typeof(call) === "object" || typeof call === "function")) { return call; } return Navbar_assertThisInitialized(self); }

function Navbar_getPrototypeOf(o) { Navbar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Navbar_getPrototypeOf(o); }

function Navbar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Navbar_setPrototypeOf(subClass, superClass); }

function Navbar_setPrototypeOf(o, p) { Navbar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Navbar_setPrototypeOf(o, p); }

function Navbar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Navbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Navbar_Brand = function Brand(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", {
    className: "navbar-brand"
  }, children);
};

var Navbar_Navbar =
/*#__PURE__*/
function (_Component) {
  Navbar_inherits(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    Navbar_classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Navbar_possibleConstructorReturn(this, (_getPrototypeOf2 = Navbar_getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Navbar_defineProperty(Navbar_assertThisInitialized(Navbar_assertThisInitialized(_this)), "state", {
      isBurgerExpanded: false
    });

    Navbar_defineProperty(Navbar_assertThisInitialized(Navbar_assertThisInitialized(_this)), "onBurgerClick", function () {
      var isBurgerExpanded = !_this.state.isBurgerExpanded;

      _this.setState({
        isBurgerExpanded: isBurgerExpanded
      });
    });

    return _this;
  }

  Navbar_createClass(Navbar, [{
    key: "render",
    value: function render() {
      var isBurgerExpanded = this.state.isBurgerExpanded;
      var _this$props = this.props,
          _this$props$left = _this$props.left,
          left = _this$props$left === void 0 ? '' : _this$props$left,
          _this$props$right = _this$props.right,
          right = _this$props$right === void 0 ? '' : _this$props$right,
          _this$props$brand = _this$props.brand,
          brand = _this$props$brand === void 0 ? external_react_default.a.createElement(Navbar_Item, {
        text: "Brand"
      }) : _this$props$brand;
      return external_react_default.a.createElement("nav", {
        className: "navbar",
        role: "navigation",
        "aria-label": "main navigation"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement(Navbar_Brand, null, brand, external_react_default.a.createElement(Navbar_Burger, {
        onClick: this.onBurgerClick,
        expanded: isBurgerExpanded
      })), external_react_default.a.createElement(Navbar_Menu, {
        active: isBurgerExpanded,
        left: left,
        right: right
      })));
    }
  }]);

  return Navbar;
}(external_react_["Component"]);

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./src/components/Footer.js


var Footer_Footer = function Footer(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("footer", {
    className: "footer"
  }, external_react_default.a.createElement("div", {
    className: "content has-text-centered"
  }, children));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./src/templates/HomeTemplate.js






var HomeTemplate_HomeTemplate = function HomeTemplate(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement(_body, null, external_react_default.a.createElement("section", {
    className: "hero is-dark is-fullheight"
  }, external_react_default.a.createElement("div", {
    className: "hero-head"
  }, external_react_default.a.createElement(components_Navbar, {
    brand: external_react_default.a.createElement(Navbar_Item, {
      text: "StepUP"
    }),
    right: external_react_default.a.createElement(Navbar_Item, {
      text: "Home"
    })
  })), external_react_default.a.createElement("div", {
    className: "hero-body"
  }, external_react_default.a.createElement("div", {
    className: "container has-text-centered"
  }, external_react_default.a.createElement("h1", {
    className: "title"
  }, "StepUP!"), external_react_default.a.createElement("h2", {
    className: "subtitle"
  }, "Community Initiative")))), external_react_default.a.createElement("main", {
    className: "main"
  }, children), external_react_default.a.createElement(components_Footer, null, external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "StepUp!"), " Copyright \xA9 2018. All rights reserved.")));
};

/* harmony default export */ var templates_HomeTemplate = (HomeTemplate_HomeTemplate);
// CONCATENATED MODULE: ./pages/index.js


/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(templates_HomeTemplate, null);
});

/***/ })
/******/ ]);