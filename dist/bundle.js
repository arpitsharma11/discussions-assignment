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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DiscussionContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscussionContainer */ \"./src/component/DiscussionContainer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar appDom = document.querySelector(\".app\");\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  // const addDiscussion = new AddDiscussion();\n  function App() {\n    _classCallCheck(this, App);\n\n    this.discussionContainer = new _DiscussionContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  } // addDiscussion.render();\n\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      appDom.innerHTML = \"<div class=\\\"add-discussion\\\" ></div>\\n        <div class=\\\"discussion-container\\\" ></div>\";\n      this.discussionContainer.render();\n    }\n  }]);\n\n  return App;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/component/App.js?");

/***/ }),

/***/ "./src/component/Comment.js":
/*!**********************************!*\
  !*** ./src/component/Comment.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Comment =\n/*#__PURE__*/\nfunction () {\n  function Comment() {\n    _classCallCheck(this, Comment);\n  }\n\n  _createClass(Comment, [{\n    key: \"render\",\n    value: function render(parentDom, commentId) {\n      console.log(parentDom, commentId);\n    }\n  }]);\n\n  return Comment;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\n//# sourceURL=webpack:///./src/component/Comment.js?");

/***/ }),

/***/ "./src/component/Discussion.js":
/*!*************************************!*\
  !*** ./src/component/Discussion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment */ \"./src/component/Comment.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar comment = new _Comment__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nvar Discussion =\n/*#__PURE__*/\nfunction () {\n  function Discussion() {\n    _classCallCheck(this, Discussion);\n  }\n\n  _createClass(Discussion, [{\n    key: \"render\",\n    value: function render(parentDom, discussion) {\n      var discussionDiv = document.createElement(\"div\");\n      discussionDiv.setAttribute('class', 'discussion-content');\n      discussionDiv.setAttribute(\"data-discussion-\".concat(discussion.id), 'discussion-content');\n      parentDom.appendChild(discussionDiv);\n      discussionDiv.innerHTML = \"\\n            <div class=\\\"discussion-content\\\" style=\\\"\".concat(discussion.type === 'comment' && 'margin-left: 10px;', \"\\\" data-discussion=\").concat(discussion.id, \">\\n                \").concat(discussion.type === 'comment' ? \"Comments\" : \"\", \"  \").concat(discussion.topic, \" --- vote:<span id=\\\"vote-\").concat(discussion.id, \"\\\" >\").concat(discussion.vote, \"</span>\\n                <button class=\\\"discussion-up\\\" data-id=\").concat(discussion.id, \" >Up</button> <button class=\\\"discussion-down\\\" data-id=\").concat(discussion.id, \">Down</button><br/>\\n                <label for=\\\"comment\\\">Comment </label><input type=\\\"text\\\" id=\\\"comment-\").concat(discussion.id, \"\\\" name=\\\"comment\\\">\\n                <button class=\\\"discussion-comment\\\" data-id=\").concat(discussion.id, \" >Comment</button>\\n                <div id=\\\"comments-\").concat(discussion.id, \"\\\" ></div>\\n            </div>\\n        \");\n    }\n  }]);\n\n  return Discussion;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Discussion);\n\n//# sourceURL=webpack:///./src/component/Discussion.js?");

/***/ }),

/***/ "./src/component/DiscussionContainer.js":
/*!**********************************************!*\
  !*** ./src/component/DiscussionContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_UsenameService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/UsenameService */ \"./src/service/UsenameService.js\");\n/* harmony import */ var _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/DiscussionService */ \"./src/service/DiscussionService.js\");\n/* harmony import */ var _Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Discussion */ \"./src/component/Discussion.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar discussion = new _Discussion__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nvar DiscussionContainer =\n/*#__PURE__*/\nfunction () {\n  function DiscussionContainer() {\n    _classCallCheck(this, DiscussionContainer);\n\n    this.discussions = _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchDiscussion();\n    this.comments = _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchComments();\n  }\n\n  _createClass(DiscussionContainer, [{\n    key: \"render\",\n    value: function render() {\n      var discussionContainerDom = document.querySelector(\".discussion-container\");\n      var addDiscussionDom = document.querySelector(\".add-discussion\");\n      addDiscussionDom.innerHTML = \"\\n            <label for=\\\"lname\\\">Topic </label>\\n            <input type=\\\"text\\\" id=\\\"topic\\\" name=\\\"lname\\\" />\\n            <button class=\\\"addDiscussion\\\" >Start Convo</button>\";\n      this.discussions.forEach(function (element) {\n        discussion.render(discussionContainerDom, element);\n      });\n      this.comments.forEach(function (element) {\n        console.log(element);\n        var commentsDiv = document.querySelector(\"#comments-\".concat(element.parentId));\n        discussion.render(commentsDiv, element);\n      });\n      this.addDiscussionListeners();\n      this.addVoteListeners();\n      this.addCommentListner();\n    }\n  }, {\n    key: \"addDiscussionListeners\",\n    value: function addDiscussionListeners() {\n      var _this = this;\n\n      var addDiscussionBtn = document.querySelector(\".addDiscussion\");\n      var discussionContainerDom = document.querySelector(\".discussion-container\");\n      addDiscussionBtn.addEventListener(\"click\", function () {\n        var topic = document.getElementById(\"topic\").value;\n\n        if (topic !== \"\") {\n          var newDiscussion = _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startDiscussion(\"discussion\", null, topic);\n\n          _this.discussions.push(newDiscussion);\n\n          discussion.render(discussionContainerDom, newDiscussion);\n          var upBtn = Array.from(document.querySelectorAll(\".discussion-up\")).filter(function (btn) {\n            return parseInt(btn.dataset.id) === newDiscussion.id;\n          })[0];\n\n          _this.updateVote(upBtn, newDiscussion.id, \"UPVOTE\");\n\n          var downBtn = Array.from(document.querySelectorAll(\".discussion-down\")).filter(function (btn) {\n            return parseInt(btn.dataset.id) === newDiscussion.id;\n          })[0];\n\n          _this.updateVote(downBtn, newDiscussion.id, \"DOWNVOTE\");\n\n          var commentVoteBtn = Array.from(document.querySelectorAll(\".discussion-comment\")).filter(function (btn) {\n            return parseInt(btn.dataset.id) === newDiscussion.id;\n          })[0];\n\n          _this.addComment(commentVoteBtn, newDiscussion.id);\n        }\n\n        document.getElementById(\"topic\").value = \"\";\n      });\n    }\n  }, {\n    key: \"addVoteListeners\",\n    value: function addVoteListeners() {\n      var _this2 = this;\n\n      var upVoteBtns = document.querySelectorAll(\".discussion-up\");\n      upVoteBtns.forEach(function (btn) {\n        var id = parseInt(btn.dataset.id);\n\n        _this2.updateVote(btn, id, \"UPVOTE\");\n      });\n      var downVoteBtns = document.querySelectorAll(\".discussion-down\");\n      downVoteBtns.forEach(function (btn) {\n        var id = parseInt(btn.dataset.id);\n        btn.addEventListener(\"click\", function () {\n          _this2.updateVote(btn, id, \"DOWNVOTE\");\n        });\n      });\n    }\n  }, {\n    key: \"addCommentListner\",\n    value: function addCommentListner() {\n      var _this3 = this;\n\n      var commentVoteBtns = document.querySelectorAll(\".discussion-comment\");\n      commentVoteBtns.forEach(function (btn) {\n        var id = parseInt(btn.dataset.id);\n\n        _this3.addComment(btn, id);\n      });\n    }\n  }, {\n    key: \"addComment\",\n    value: function addComment(btn, id) {\n      var _this4 = this;\n\n      btn.addEventListener(\"click\", function () {\n        var comment = document.getElementById(\"comment-\".concat(id)).value;\n\n        if (comment !== \"\") {\n          // const comment = DiscussionService.addComment(id,\"comments\");\n          var commentsDiv = document.querySelector(\"#comments-\".concat(id));\n          var newDiscussion = _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startDiscussion(\"comment\", id, comment);\n          discussion.render(commentsDiv, newDiscussion);\n          var upBtn = Array.from(document.querySelectorAll(\".discussion-up\")).filter(function (btn) {\n            return parseInt(btn.dataset.id) === newDiscussion.id;\n          })[0];\n\n          _this4.updateVote(upBtn, newDiscussion.id, \"UPVOTE\");\n\n          var downBtn = Array.from(document.querySelectorAll(\".discussion-down\")).filter(function (btn) {\n            return parseInt(btn.dataset.id) === newDiscussion.id;\n          })[0];\n\n          _this4.updateVote(downBtn, newDiscussion.id, \"DOWNVOTE\");\n\n          var commentVoteBtn = Array.from(document.querySelectorAll(\".discussion-comment\")).filter(function (btn) {\n            return parseInt(btn.dataset.id) === newDiscussion.id;\n          })[0];\n\n          _this4.addComment(commentVoteBtn, newDiscussion.id);\n\n          document.getElementById(\"comment-\".concat(id)).value = \"\";\n        }\n      });\n    }\n  }, {\n    key: \"updateVote\",\n    value: function updateVote(btn, id, task) {\n      btn.addEventListener(\"click\", function () {\n        var vote = _service_DiscussionService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateVote(id, task);\n        var voteSpan = document.querySelector(\"#vote-\".concat(id));\n        voteSpan.innerHTML = vote;\n      });\n    }\n  }]);\n\n  return DiscussionContainer;\n}();\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiscussionContainer);\n\n//# sourceURL=webpack:///./src/component/DiscussionContainer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/App */ \"./src/component/App.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var app = new _component_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  app.render();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/service/DiscussionService.js":
/*!******************************************!*\
  !*** ./src/service/DiscussionService.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_UsenameService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/UsenameService */ \"./src/service/UsenameService.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar DiscussionService =\n/*#__PURE__*/\nfunction () {\n  function DiscussionService() {\n    _classCallCheck(this, DiscussionService);\n  }\n\n  _createClass(DiscussionService, null, [{\n    key: \"startDiscussion\",\n    value: function startDiscussion(type, parentId, topic) {\n      var discussions = JSON.parse(localStorage.getItem('discussions')) || [];\n      var newDiscussion = {\n        id: discussions.length ? discussions.length : 0,\n        createdBy: _service_UsenameService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchUsername(),\n        createdAt: new Date(),\n        vote: 0,\n        type: type,\n        parentId: parentId,\n        topic: topic\n      };\n      localStorage.setItem('discussions', JSON.stringify([].concat(_toConsumableArray(discussions), [newDiscussion])));\n      return newDiscussion;\n    }\n  }, {\n    key: \"fetchDiscussion\",\n    value: function fetchDiscussion() {\n      var discussions = JSON.parse(localStorage.getItem('discussions')) || [];\n      return discussions.filter(function (discussion) {\n        return discussion.type === \"discussion\";\n      });\n    }\n  }, {\n    key: \"fetchComments\",\n    value: function fetchComments() {\n      var discussions = JSON.parse(localStorage.getItem('discussions')) || [];\n      return discussions.filter(function (discussion) {\n        return discussion.type === \"comment\";\n      });\n    }\n  }, {\n    key: \"updateVote\",\n    value: function updateVote(id, type) {\n      var discussions = JSON.parse(localStorage.getItem('discussions')) || [];\n\n      if (discussions.length > id) {\n        var updateDiscussion = {\n          id: id,\n          createdBy: discussions[id].createdBy,\n          createdAt: discussions[id].createdAt,\n          vote: type === \"UPVOTE\" ? discussions[id].vote + 1 : discussions[id].vote && discussions[id].vote - 1,\n          type: discussions[id].type,\n          comments: discussions[id].comments\n        };\n        localStorage.setItem('discussions', JSON.stringify([].concat(_toConsumableArray(discussions.slice(0, id)), [updateDiscussion], _toConsumableArray(discussions.slice(id + 1)))));\n        return updateDiscussion.vote;\n      }\n    }\n  }, {\n    key: \"addComment\",\n    value: function addComment(id) {\n      var discussions = JSON.parse(localStorage.getItem('discussions')) || [];\n      return this.startDiscussion('comment', id); // const updateDiscussion = {\n      //     id: id,\n      //     createdBy: discussions[id].createdBy,\n      //     createdAt: discussions[id].createdAt,\n      //     vote: discussions[id].vote,\n      //     type: discussions[id].type,\n      // };\n      // const updatedDiscussions = JSON.parse(localStorage.getItem('discussions')) || [];\n      // localStorage.setItem(\n      //     'discussions',\n      //     JSON.stringify( \n      //         [...updatedDiscussions.slice(0,id),\n      //             updateDiscussion,\n      //             ...updatedDiscussions.slice(id+1)])\n      //     );\n      // return comment;\n    }\n  }, {\n    key: \"fetchComment\",\n    value: function fetchComment(id) {\n      var discussions = JSON.parse(localStorage.getItem('discussions')) || [];\n      return discussions[id];\n    }\n  }]);\n\n  return DiscussionService;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiscussionService);\n\n//# sourceURL=webpack:///./src/service/DiscussionService.js?");

/***/ }),

/***/ "./src/service/UsenameService.js":
/*!***************************************!*\
  !*** ./src/service/UsenameService.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar UsernameService =\n/*#__PURE__*/\nfunction () {\n  function UsernameService() {\n    _classCallCheck(this, UsernameService);\n  }\n\n  _createClass(UsernameService, null, [{\n    key: \"fetchUsername\",\n    value: function fetchUsername() {\n      return _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"USERNAMES\"][Math.floor(Math.random() * _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"USERNAMES\"].length)];\n    }\n  }]);\n\n  return UsernameService;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsernameService);\n\n//# sourceURL=webpack:///./src/service/UsenameService.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: USERNAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USERNAMES\", function() { return USERNAMES; });\nvar USERNAMES = ['TEST1', 'TEST3', 'TEST4', 'TEST5', 'TEST6', 'TEST7', 'TEST8', 'TEST9', 'TEST10'];\n\n//# sourceURL=webpack:///./src/utils/constants.js?");

/***/ })

/******/ });