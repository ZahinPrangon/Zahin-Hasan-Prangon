(window["webpackJsonpresume"] = window["webpackJsonpresume"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.contact-form {\n  margin-top: 25px;\n}\n\n#label {\n  color: aliceblue;\n  letter-spacing: 1px;\n  \n}\n\n#submit {\n  color: black;\n}\n\n\n", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about */ "./src/components/about/about.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer */ "./src/components/footer/footer.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _components_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/portfolio/portfolio */ "./src/components/portfolio/portfolio.js");
/* harmony import */ var _components_resume_resume__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/resume/resume */ "./src/components/resume/resume.js");
/* harmony import */ var _components_skills_skills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/skills/skills */ "./src/components/skills/skills.js");
/* harmony import */ var _resumeData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resumeData */ "./src/resumeData.js");
var _jsxFileName = "/Users/zahinhasanprangon/Projects/Zahin-Hasan-Prangon/src/App.js";











const App = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/test",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Test, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    resumeData: _resumeData__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
    animateIn: "fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about_about__WEBPACK_IMPORTED_MODULE_3__["default"], {
    resumeData: _resumeData__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
    animateIn: "fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_resume_resume__WEBPACK_IMPORTED_MODULE_7__["default"], {
    resumeData: _resumeData__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resumeData: _resumeData__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
    animateIn: "fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_skills_skills__WEBPACK_IMPORTED_MODULE_8__["default"], {
    resumeData: _resumeData__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resumeData: _resumeData__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })))));
};

function Test() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Test");
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/about/about.js":
/*!***************************************!*\
  !*** ./src/components/about/about.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/zahinhasanprangon/Projects/Zahin-Hasan-Prangon/src/components/about/about.js";

class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let resumeData = this.props.resumeData;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      id: "about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "12 columns main-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "About Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, resumeData.aboutme), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "columns contact-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Contact Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "address",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, resumeData.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, resumeData.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, resumeData.website), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, " ", resumeData.email, " "))))))));
  }

}

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/zahinhasanprangon/Projects/Zahin-Hasan-Prangon/src/components/footer/footer.js";

class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let resumeData = this.props.resumeData;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "twelve columns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "social-links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, resumeData.socialLinks && resumeData.socialLinks.map(item => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: item.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: item.className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })));
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "go-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "smoothscroll",
      title: "Back to Top",
      href: "#home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-up-open",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })))));
  }

}

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/zahinhasanprangon/Projects/Zahin-Hasan-Prangon/src/components/header/header.js";


class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let resumeData = this.props.resumeData;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      id: "home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      id: "nav-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "mobile-btn",
      href: "#nav-wrap",
      title: "Show navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Show navigation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "mobile-btn",
      href: "#!",
      title: "Hide navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Hide navigation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      id: "nav",
      className: "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "current",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "smoothscroll",
      href: "#home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "smoothscroll",
      href: "#about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "smoothscroll",
      href: "#resume",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Resume")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "smoothscroll",
      href: "#portfolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Works")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "smoothscroll",
      href: "#contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Skills")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row banner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "banner-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_css__WEBPACK_IMPORTED_MODULE_1__["Animated"], {
      animationIn: "zoomIn",
      isVisible: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "responsive-headline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "I am ", resumeData.name, ".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animated_css__WEBPACK_IMPORTED_MODULE_1__["Animated"], {
      animationIn: "fadeIn",
      isVisible: true,
      animationInDelay: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      style: {
        fontFamily: 'open'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, resumeData.role, resumeData.roleDescription)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, resumeData.socialLinks && resumeData.socialLinks.map(item => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: item.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: item.className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })));
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "scrolldown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "smoothscroll",
      href: "#about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-down-circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })))));
  }

}

/***/ }),

/***/ "./src/components/portfolio/portfolio.js":
/*!***********************************************!*\
  !*** ./src/components/portfolio/portfolio.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Porfolio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/zahinhasanprangon/Projects/Zahin-Hasan-Prangon/src/components/portfolio/portfolio.js";

class Porfolio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let resumeData = this.props.resumeData;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      id: "portfolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      style: {
        fontSize: "150%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Check Out Some of My Works.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "portfolio-wrapper",
      className: "bgrid-quarters s-bgrid-thirds cf",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, resumeData.portfolio && resumeData.portfolio.map(item => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns portfolio-item",
        id: "work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "".concat(item.link),
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-wrap",
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "".concat(item.imgurl),
        className: "item-img",
        id: "image",
        alt: "portfolio-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "portfolio-item-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, item.description))))));
    })));
  }

}

/***/ }),

/***/ "./src/components/resume/resume.js":
/*!*****************************************!*\
  !*** ./src/components/resume/resume.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resume; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/zahinhasanprangon/Projects/Zahin-Hasan-Prangon/src/components/resume/resume.js";

class Resume extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let resumeData = this.props.resumeData;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      id: "resume",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row education",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "three columns header-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Education"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "nine columns main-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, resumeData.education && resumeData.education.map(item => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "twelve columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, item.UniversityName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, item.specialization, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "\u2022"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, item.MonthOfPassing, " ", item.YearOfPassing)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Minor in ", item.minor))));
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row work",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "three columns header-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Work"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "nine columns main-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, resumeData.work && resumeData.work.map(item => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "twelve columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, item.CompanyName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, item.specialization, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\u2022"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " ", item.start, " to ", item.end))));
    }))));
  }

}

/***/ }),

/***/ "./src/components/skills/skills.js":
/*!*****************************************!*\
  !*** ./src/components/skills/skills.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_skillbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-skillbars */ "./node_modules/react-skillbars/build-module/index.js");
/* harmony import */ var react_skillbars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_skillbars__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/zahinhasanprangon/Projects/Zahin-Hasan-Prangon/src/components/skills/skills.js";


class Skills extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let skills = [{
      type: "Javascript",
      level: 85
    }, {
      type: "Python",
      level: 85
    }, {
      type: "Java",
      level: 70
    }, {
      type: "HTML/CSS",
      level: 90
    }, {
      type: "React",
      level: 80
    }, {
      type: "MongoDB",
      level: 75
    }, {
      type: "NodeJS",
      level: 70
    }];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      id: "contact",
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row section-head",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ten columns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "lead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Skills"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_skillbars__WEBPACK_IMPORTED_MODULE_1___default.a, {
      skills: skills,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })))));
  }

}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/zahinhasanprangon/Projects/Zahin-Hasan-Prangon/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), document.getElementById('root'));

/***/ }),

/***/ "./src/resumeData.js":
/*!***************************!*\
  !*** ./src/resumeData.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let resumeData = {
  imagebaseurl: "https://techonoeticsclub.github.io/",
  name: "Zahin Hasan Prangon",
  role: "",
  skypeid: "Your skypeid",
  roleDescription: "THINKER | DEVELOPER | STORYTELLER",
  socialLinks: [{
    name: "linkedin",
    url: "https://www.linkedin.com/in/zahin-hasan-88543613a/",
    className: "fa fa-linkedin"
  }, {
    name: "github",
    url: "https://github.com/Zahin430",
    className: "fa fa-github"
  }, {
    name: "twitter",
    url: "https://twitter.com/Zahin431",
    className: "fa fa-twitter"
  }],
  aboutme: "Currently working as a Software Engineer at Motorola Solutions with past experience from IBM, Memorial University of Newfoundland and University of Victoria(Bikemaps.org).Some of my main interests include Full-Stack development, Computer Security and Data Mining. In my free time, I like working on personal projects, learning about new technologies and keeping up to date with the latest trends in the tech sector. \n\n I like working on team projects and getting to know new people, as it gives me the opportunity to learn from other’s experience and also create valuable networks along the way. So feel free to send me a message about any interesting project collaborations or any interesting idea you might wanna discuss. Some of my specialties include software engineering (Python, Java, C#, C++), Full-Stack development (JavaScript, NodeJS, React, Angular, Django, ASP.NET), Databases (SQL, PostgreSQL), Mobile App Development (React Native) and much more.",
  address: "St John's, Newfoundland and Labredor, Canada",
  website: "",
  email: "zahinhasan43@gmail.com",
  education: [{
    UniversityName: "Memorial University of Newfoundland",
    specialization: "Bachelor of Science in Computer Science",
    minor: "Business Administration",
    MonthOfPassing: "Jan, 2017",
    YearOfPassing: " to April, 2021"
  }],
  work: [{
    CompanyName: "Motorola Solutions",
    specialization: "Software Engineer",
    start: "September, 2021",
    end: "Present",
    tasks: ["Using Nodejs to implement API Gateway for Avigilon Control Server and Client.", "Using Gulp to implement and automate streaming task runners for build processes"]
  }, {
    CompanyName: "Varian Medical Systems",
    specialization: "Software Developer",
    start: "May, 2021",
    end: "September, 2021",
    tasks: ["Added UI features on client side of the application using Angular/Typescript.", "Added and refactored web endpoints on the server side of the application using Micronaut/Java."]
  }, {
    CompanyName: "Bikemaps.org",
    specialization: "Full Stack Software Developer",
    start: "December, 2020",
    end: "July, 2021",
    tasks: ["Achieved 18% increase in loading speed by upgrading and optimizing current web application to use Python 3, Django 3. ", "Developing key features for the Bikemaps web application using Django, PostgreSQL, Leaftlet.", "Planning and integrating new features and web application architecture for MobilityAccess(BikeMaps pedestrian) using React, Django & PostgreSQL."]
  }, {
    CompanyName: "Department of Biology, Memorial University of Newfoundland.",
    specialization: "Software Developer",
    start: "September, 2020",
    end: "December, 2020",
    tasks: ["Achieved 18% increase in loading speed by upgrading and optimizing current web application to use Python 3, Django 3. ", "Developing key features for the Bikemaps web application using Django, PostgreSQL, Leaftlet.", "Planning and integrating new features and web application architecture for MobilityAccess(BikeMaps pedestrian) using React, Django & PostgreSQL."]
  }, {
    CompanyName: "IBM Canada Ltd.",
    specialization: "Software Developer (Cloud) Co-op",
    start: "January, 2020",
    end: "August, 2020",
    tasks: ["Achieved 18% increase in loading speed by upgrading and optimizing current web application to use Python 3, Django 3. ", "Developing key features for the Bikemaps web application using Django, PostgreSQL, Leaftlet.", "Planning and integrating new features and web application architecture for MobilityAccess(BikeMaps pedestrian) using React, Django & PostgreSQL."]
  }, {
    CompanyName: "Neurofog Laboratory, Memorial University of Newfoundland",
    specialization: "Full Stack Developer",
    start: "June, 2019",
    end: "August, 2020",
    tasks: ["Achieved 18% increase in loading speed by upgrading and optimizing current web application to use Python 3, Django 3. ", "Developing key features for the Bikemaps web application using Django, PostgreSQL, Leaftlet.", "Planning and integrating new features and web application architecture for MobilityAccess(BikeMaps pedestrian) using React, Django & PostgreSQL."]
  }, {
    CompanyName: "Department of Chemistry, Memorial University of Newfoundland",
    specialization: "Web Application Developer",
    start: "January, 2019",
    end: "April, 2019",
    tasks: ["Achieved 18% increase in loading speed by upgrading and optimizing current web application to use Python 3, Django 3. ", "Developing key features for the Bikemaps web application using Django, PostgreSQL, Leaftlet.", "Planning and integrating new features and web application architecture for MobilityAccess(BikeMaps pedestrian) using React, Django & PostgreSQL."]
  }, {
    CompanyName: "Office of the Alumni Affairs, Memorial University of Newfoundland",
    specialization: "Database Assistant",
    start: "January, 2018",
    end: "April, 2018",
    tasks: ["Achieved 18% increase in loading speed by upgrading and optimizing current web application to use Python 3, Django 3. ", "Developing key features for the Bikemaps web application using Django, PostgreSQL, Leaftlet.", "Planning and integrating new features and web application architecture for MobilityAccess(BikeMaps pedestrian) using React, Django & PostgreSQL."]
  }],
  portfolio: [{
    name: "ACTIVITY TRACKER",
    description: "A Java Desktop Application built using the Swing library as a school project.",
    imgurl: "images/running.jpeg",
    link: "https://github.com/Zahin430/cs2005"
  }, {
    name: "VISITNL",
    description: "A NodeJS Web Application serves as a social media platform. Built using NodeJS and MongoDB",
    imgurl: "images/portfolio/project2.jpg",
    link: "https://github.com/Zahin430/VISITNL"
  }, {
    name: "RecipeBook",
    description: "An Angular Web Application that keeps a track of recipes being bought and sold.",
    imgurl: "images/angular.png",
    link: "https://github.com/Zahin430/RecipeBook"
  }, {
    name: "Neurofog Website",
    description: "A React application built for the Neurofog Laboratory at Memorial University of Newfoundland",
    imgurl: "images/logo.png",
    link: "http://neurofog.ca/"
  }],
  contact: [{
    image: "images/logo.png"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (resumeData);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/zahinhasanprangon/Projects/Zahin-Hasan-Prangon/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/zahinhasanprangon/Projects/Zahin-Hasan-Prangon/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map