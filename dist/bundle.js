/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/App.js":
/*!******************************!*\
  !*** ./src/component/App.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DiscussionContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscussionContainer */ \"./src/component/DiscussionContainer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar appDom = document.querySelector(\".app\");\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.discussionContainer = new _DiscussionContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // initiated app\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      appDom.innerHTML = \"\\n            <div class=\\\"add-discussion\\\" ></div>\\n            <div class=\\\"discussion-main\\\" ></div>\\n        \";\n      this.discussionContainer.render();\n    }\n  }]);\n\n  return App;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/component/App.js?");

/***/ }),

/***/ "./src/component/Discussion.js":
/*!*************************************!*\
  !*** ./src/component/Discussion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ \"./src/utils/helper.js\");\n/* harmony import */ var _icons_arrow_up_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/arrow-up.svg */ \"./src/icons/arrow-up.svg\");\n/* harmony import */ var _icons_arrow_up_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icons_arrow_up_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_arrow_down_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/arrow-down.svg */ \"./src/icons/arrow-down.svg\");\n/* harmony import */ var _icons_arrow_down_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icons_arrow_down_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_comment_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/comment.svg */ \"./src/icons/comment.svg\");\n/* harmony import */ var _icons_comment_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_comment_svg__WEBPACK_IMPORTED_MODULE_3__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar comment = new Comment();\n\nvar Discussion =\n/*#__PURE__*/\nfunction () {\n  function Discussion() {\n    _classCallCheck(this, Discussion);\n  }\n\n  _createClass(Discussion, [{\n    key: \"render\",\n    //Render discussion\n    value: function render(parentDom, discussion) {\n      var discussionDiv = document.createElement(\"div\"); //Check if its a discussion or comment\n\n      if (discussion.type === 'comment') {\n        discussionDiv.setAttribute('class', 'discussion comment-container');\n      } else {\n        discussionDiv.setAttribute('class', 'discussion');\n      }\n\n      discussionDiv.setAttribute('data-discussion-id', discussion.id);\n      parentDom.appendChild(discussionDiv);\n      discussionDiv.innerHTML = \"\\n                <span class=\\\"discussion-heading\\\">\\n                    \".concat(discussion.topic, \"\\n                </span>\\n                <br/>\\n                <span class=\\\"discussion-created-by\\\" >\\n                    \").concat(discussion.createdBy, \" (\").concat(Object(_utils_helper__WEBPACK_IMPORTED_MODULE_0__[\"dateParse\"])(discussion.createdAt), \")\\n                </span><br/>\\n                <span \\n                    id=\\\"upVote-\").concat(discussion.id, \"\\\" \\n                    class=\\\"discussion-action\\\" >\\n                    \").concat(discussion.upVote, \"\\n                </span>\\n                <img \\n                    class=\\\"discussion-up action_icons\\\" \\n                    data-id=\").concat(discussion.id, \" \\n                    src=\\\"\").concat(_icons_arrow_up_svg__WEBPACK_IMPORTED_MODULE_1___default.a, \"\\\" \\n                />\\n                <span \\n                    id=\\\"downVote-\").concat(discussion.id, \"\\\" \\n                    class=\\\"discussion-action\\\"\\n                >\\n                    \").concat(discussion.downVote, \"\\n                </span>\\n                <img \\n                    class=\\\"discussion-down action_icons\\\" \\n                    data-id=\").concat(discussion.id, \" \\n                    src=\\\"\").concat(_icons_arrow_down_svg__WEBPACK_IMPORTED_MODULE_2___default.a, \"\\\" \\n                />\\n                <img \\n                    class=\\\"enable-comment action_icons\\\" \\n                    data-id=\").concat(discussion.id, \" \\n                    src=\\\"\").concat(_icons_comment_svg__WEBPACK_IMPORTED_MODULE_3___default.a, \"\\\" \\n                />\\n                <div \\n                    class=\\\"comment\\\" \\n                    id=\\\"add-comment-\").concat(discussion.id, \"\\\" \\n                >\\n                    <input \\n                        placeholder=\\\"Add a comment\\\" \\n                        class=\\\"comment_textField textField\\\" \\n                        type=\\\"text\\\" \\n                        id=\\\"comment-\").concat(discussion.id, \"\\\" \\n                        name=\\\"comment\\\"\\n                    />\\n                </div>\\n                <div id=\\\"comments-\").concat(discussion.id, \"\\\" ></div>\\n        \");\n    }\n  }]);\n\n  return Discussion;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Discussion);\n\n//# sourceURL=webpack:///./src/component/Discussion.js?");

/***/ }),

/***/ "./src/component/DiscussionContainer.js":
/*!**********************************************!*\
  !*** ./src/component/DiscussionContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_UsenameService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/UsenameService */ \"./src/service/UsenameService.js\");\n/* harmony import */ var _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/DiscussionService */ \"./src/service/DiscussionService.js\");\n/* harmony import */ var _Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Discussion */ \"./src/component/Discussion.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar discussion = new _Discussion__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nvar DiscussionContainer =\n/*#__PURE__*/\nfunction () {\n  function DiscussionContainer() {\n    _classCallCheck(this, DiscussionContainer);\n\n    this.discussions = _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchDiscussion(); // Fetch all discussions\n\n    this.comments = _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchComments(); // Fetch all comments\n  }\n\n  _createClass(DiscussionContainer, [{\n    key: \"render\",\n    value: function render() {\n      var discussionMainDom = document.querySelector(\".discussion-main\");\n      var addDiscussionDom = document.querySelector(\".add-discussion\");\n      addDiscussionDom.innerHTML = \"\\n            <input \\n                placeholder=\\\"Create a new discussion\\\" \\n                class=\\\"add-discussion_textField textField\\\" \\n                type=\\\"text\\\" \\n                id=\\\"topic\\\" \\n                name=\\\"lname\\\" \\n            />\"; //Rendering all discussions\n\n      this.discussions.forEach(function (element) {\n        discussion.render(discussionMainDom, element);\n      }); //Rendering all comments to there respective discussions\n\n      this.comments.forEach(function (element) {\n        var commentsDiv = document.querySelector(\"#comments-\".concat(element.parentId));\n        discussion.render(commentsDiv, element);\n      }); //adding event listner\n\n      this.addDiscussionListeners();\n      this.addVoteListeners();\n      this.addCommentListner();\n      this.addEnableCommentListener();\n    } //listner for add new discussion\n\n  }, {\n    key: \"addDiscussionListeners\",\n    value: function addDiscussionListeners() {\n      var _this = this;\n\n      var discussionMainDom = document.querySelector(\".discussion-main\");\n      var newTopicDom = document.querySelector('#topic');\n      newTopicDom.addEventListener('keypress', function (event) {\n        if (event.key === 'Enter') {\n          if (newTopicDom.value !== \"\") {\n            var newDiscussion = _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startDiscussion(\"discussion\", null, newTopicDom.value);\n\n            _this.discussions.push(newDiscussion);\n\n            discussion.render(discussionMainDom, newDiscussion);\n            var upBtn = Array.from(document.querySelectorAll(\".discussion-up\")).filter(function (btn) {\n              return parseInt(btn.dataset.id) === newDiscussion.id;\n            })[0];\n\n            _this.updateVote(upBtn, newDiscussion.id, \"upVote\");\n\n            var downBtn = Array.from(document.querySelectorAll(\".discussion-down\")).filter(function (btn) {\n              return parseInt(btn.dataset.id) === newDiscussion.id;\n            })[0];\n\n            _this.updateVote(downBtn, newDiscussion.id, \"downVote\");\n\n            _this.addComment(newDiscussion.id);\n\n            var enableCommentBtnDom = Array.from(document.querySelectorAll(\".enable-comment\")).filter(function (btn) {\n              return parseInt(btn.dataset.id) === newDiscussion.id;\n            })[0];\n\n            _this.enableCommentBtn(enableCommentBtnDom, newDiscussion.id);\n\n            newTopicDom.value = \"\";\n          }\n        }\n      });\n    }\n  }, {\n    key: \"addVoteListeners\",\n    //listner for up vote and down vote\n    value: function addVoteListeners() {\n      var _this2 = this;\n\n      var upVoteBtns = document.querySelectorAll(\".discussion-up\");\n      upVoteBtns.forEach(function (btn) {\n        var id = parseInt(btn.dataset.id);\n\n        _this2.updateVote(btn, id, \"upVote\");\n      });\n      var downVoteBtns = document.querySelectorAll(\".discussion-down\");\n      downVoteBtns.forEach(function (btn) {\n        var id = parseInt(btn.dataset.id);\n        btn.addEventListener(\"click\", function () {\n          _this2.updateVote(btn, id, \"downVote\");\n        });\n      });\n    }\n  }, {\n    key: \"addCommentListner\",\n    //listner for add new comment\n    value: function addCommentListner() {\n      var _this3 = this;\n\n      var commentInputs = document.querySelectorAll(\".comment_textField\");\n      commentInputs.forEach(function (input) {\n        var id = parseInt(input.id.split('-')[1]);\n\n        _this3.addComment(id);\n      });\n    } //listner for to show/hide comment section\n\n  }, {\n    key: \"addEnableCommentListener\",\n    value: function addEnableCommentListener() {\n      var _this4 = this;\n\n      var enableComment = document.querySelectorAll(\".enable-comment\");\n      enableComment.forEach(function (btn) {\n        var id = parseInt(btn.dataset.id);\n\n        _this4.enableCommentBtn(btn, id);\n      });\n    } //Adding new comment on discussion with id\n\n  }, {\n    key: \"addComment\",\n    value: function addComment(id) {\n      var _this5 = this;\n\n      var commentDom = document.getElementById(\"comment-\".concat(id));\n      commentDom.addEventListener('keypress', function (event) {\n        if (event.key === 'Enter') {\n          if (commentDom.value !== \"\") {\n            var commentsDiv = document.querySelector(\"#comments-\".concat(id));\n            var newDiscussion = _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startDiscussion(\"comment\", id, commentDom.value);\n            discussion.render(commentsDiv, newDiscussion);\n            var upBtn = Array.from(document.querySelectorAll(\".discussion-up\")).filter(function (btn) {\n              return parseInt(btn.dataset.id) === newDiscussion.id;\n            })[0];\n\n            _this5.updateVote(upBtn, newDiscussion.id, \"upVote\");\n\n            var downBtn = Array.from(document.querySelectorAll(\".discussion-down\")).filter(function (btn) {\n              return parseInt(btn.dataset.id) === newDiscussion.id;\n            })[0];\n\n            _this5.updateVote(downBtn, newDiscussion.id, \"downVote\");\n\n            var enableCommentBtn = Array.from(document.querySelectorAll(\".enable-comment\")).filter(function (btn) {\n              return parseInt(btn.dataset.id) === newDiscussion.id;\n            })[0];\n\n            _this5.enableCommentBtn(enableCommentBtn, newDiscussion.id);\n\n            _this5.addComment(newDiscussion.id);\n\n            document.getElementById(\"add-comment-\".concat(id)).style.display = 'none';\n            commentDom.value = \"\";\n          }\n        }\n      });\n    } // Updating vote in storage\n\n  }, {\n    key: \"updateVote\",\n    value: function updateVote(btn, id, task) {\n      btn.addEventListener(\"click\", function () {\n        var vote = _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateVote(id, task);\n        var voteSpan = document.querySelector(\"#\".concat(task, \"-\").concat(id));\n        voteSpan.innerHTML = vote;\n      });\n    }\n  }, {\n    key: \"enableCommentBtn\",\n    value: function enableCommentBtn(enablceCommentDom, id) {\n      enablceCommentDom.addEventListener(\"click\", function () {\n        var displayProp = document.getElementById(\"add-comment-\".concat(id)).style.display;\n\n        if (displayProp === 'unset') {\n          document.getElementById(\"add-comment-\".concat(id)).style.display = 'none';\n        } else {\n          document.getElementById(\"add-comment-\".concat(id)).style.display = 'unset';\n        }\n      });\n    }\n  }]);\n\n  return DiscussionContainer;\n}();\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiscussionContainer);\n\n//# sourceURL=webpack:///./src/component/DiscussionContainer.js?");

/***/ }),

/***/ "./src/icons/arrow-down.svg":
/*!**********************************!*\
  !*** ./src/icons/arrow-down.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z' /%3E%3C/svg%3E\"\n\n//# sourceURL=webpack:///./src/icons/arrow-down.svg?");

/***/ }),

/***/ "./src/icons/arrow-up.svg":
/*!********************************!*\
  !*** ./src/icons/arrow-up.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z' /%3E%3C/svg%3E\"\n\n//# sourceURL=webpack:///./src/icons/arrow-up.svg?");

/***/ }),

/***/ "./src/icons/comment.svg":
/*!*******************************!*\
  !*** ./src/icons/comment.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z' /%3E%3C/svg%3E\"\n\n//# sourceURL=webpack:///./src/icons/comment.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/App */ \"./src/component/App.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var app = new _component_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  app.render(); //render app\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/service/DiscussionService.js":
/*!******************************************!*\
  !*** ./src/service/DiscussionService.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_UsenameService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/UsenameService */ \"./src/service/UsenameService.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar DiscussionService =\n/*#__PURE__*/\nfunction () {\n  function DiscussionService() {\n    _classCallCheck(this, DiscussionService);\n  }\n\n  _createClass(DiscussionService, null, [{\n    key: \"startDiscussion\",\n    //create new discussion\n    value: function startDiscussion(type, parentId, topic) {\n      var discussions = JSON.parse(localStorage.getItem('discussions')) || [];\n      var newDiscussion = {\n        id: discussions.length ? discussions.length : 0,\n        createdBy: _service_UsenameService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchUsername(),\n        createdAt: new Date(),\n        upVote: 0,\n        downVote: 0,\n        type: type,\n        parentId: parentId,\n        topic: topic\n      };\n      localStorage.setItem('discussions', JSON.stringify([].concat(_toConsumableArray(discussions), [newDiscussion])));\n      return newDiscussion;\n    } //fetch all discussions\n\n  }, {\n    key: \"fetchDiscussion\",\n    value: function fetchDiscussion() {\n      var discussions = JSON.parse(localStorage.getItem('discussions')) || [];\n      return discussions.filter(function (discussion) {\n        return discussion.type === \"discussion\";\n      });\n    } //fetch all comments\n\n  }, {\n    key: \"fetchComments\",\n    value: function fetchComments() {\n      var discussions = JSON.parse(localStorage.getItem('discussions')) || [];\n      return discussions.filter(function (discussion) {\n        return discussion.type === \"comment\";\n      });\n    } //updateing vote\n\n  }, {\n    key: \"updateVote\",\n    value: function updateVote(id, type) {\n      var discussions = JSON.parse(localStorage.getItem('discussions')) || [];\n\n      if (discussions.length > id) {\n        var updateDiscussion = {\n          id: id,\n          createdBy: discussions[id].createdBy,\n          createdAt: discussions[id].createdAt,\n          upVote: type === \"upVote\" ? discussions[id].upVote + 1 : discussions[id].upVote,\n          downVote: type === \"downVote\" ? discussions[id].downVote + 1 : discussions[id].downVote,\n          type: discussions[id].type,\n          comments: discussions[id].comments,\n          parentId: discussions[id].parentId,\n          topic: discussions[id].topic\n        };\n        localStorage.setItem('discussions', JSON.stringify([].concat(_toConsumableArray(discussions.slice(0, id)), [updateDiscussion], _toConsumableArray(discussions.slice(id + 1)))));\n        return type === \"upVote\" ? updateDiscussion.upVote : updateDiscussion.downVote;\n      }\n    } // adding comment to discussion\n\n  }, {\n    key: \"addComment\",\n    value: function addComment(id) {\n      return this.startDiscussion('comment', id);\n    }\n  }]);\n\n  return DiscussionService;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiscussionService);\n\n//# sourceURL=webpack:///./src/service/DiscussionService.js?");

/***/ }),

/***/ "./src/service/UsenameService.js":
/*!***************************************!*\
  !*** ./src/service/UsenameService.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar UsernameService =\n/*#__PURE__*/\nfunction () {\n  function UsernameService() {\n    _classCallCheck(this, UsernameService);\n  }\n\n  _createClass(UsernameService, null, [{\n    key: \"fetchUsername\",\n    //Genrate random name from list in constants\n    value: function fetchUsername() {\n      return _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"USERNAMES\"][Math.floor(Math.random() * _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"USERNAMES\"].length)];\n    }\n  }]);\n\n  return UsernameService;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsernameService);\n\n//# sourceURL=webpack:///./src/service/UsenameService.js?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/main.scss?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: USERNAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USERNAMES\", function() { return USERNAMES; });\nvar USERNAMES = ['Arpit', 'Torres', 'Hazard', 'Lampard', 'Terry', 'Cech', 'Drogba', 'Neymar', 'Muller'];\n\n//# sourceURL=webpack:///./src/utils/constants.js?");

/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/*! exports provided: dateParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateParse\", function() { return dateParse; });\n//Function parse discussion date.\nvar dateParse = function dateParse(date) {\n  var presentDate = new Date();\n  var timeStamp = new Date(date);\n  var secondsPast = (presentDate.getTime() - timeStamp.getTime()) / 1000;\n\n  if (secondsPast < 60) {\n    return parseInt(secondsPast) + 's';\n  }\n\n  if (secondsPast < 3600) {\n    return parseInt(secondsPast / 60) + 'm';\n  }\n\n  if (secondsPast <= 86400) {\n    return parseInt(secondsPast / 3600) + 'h';\n  }\n\n  if (secondsPast > 86400) {\n    var day = timeStamp.getDate();\n    var month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(\" \", \"\");\n    var year = timeStamp.getFullYear() == presentDate.getFullYear() ? \"\" : \" \" + timeStamp.getFullYear();\n    return \"\".concat(day, \" \").concat(month, \",\").concat(year);\n  }\n};\n\n//# sourceURL=webpack:///./src/utils/helper.js?");

/***/ })

/******/ });