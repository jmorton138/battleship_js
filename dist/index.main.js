/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    /* border: 1px solid red; */\\n}\\nhtml, body {\\n    margin: 0;\\n    height: 100%;\\n}\\nheader {\\n    /* background: linear-gradient(#2b2828, #424040, #2b2828); */\\n    background: #47422A;\\n    color: white;\\n    margin-bottom: 150px;\\n}\\n\\nh1 {\\n    font-family: 'Allerta Stencil';\\n    font-weight: 100;\\n    text-align: center;\\n    font-size: 70px;\\n    margin: 0;\\n    padding: 100px;\\n\\n}\\n\\n.game-over {\\n    text-align: center;\\n    font-family: 'Allerta Stencil';\\n    margin-top: 0;\\n    margin-bottom: 100px;\\n}\\n\\n.board-container {\\n    width: 100%;\\n    margin: auto;\\n\\n    display: grid;\\n    grid-template-columns: repeat(10, 62px) ;\\n    grid-gap: 2px;\\n    justify-self: center;\\n    justify-content: center;\\n}\\n\\n.cell {\\n    height: 60px;\\n    width: 60px;\\n    margin: auto;\\n    background: cadetblue;\\n}\\n\\n.place-ship-hover {\\n    background-color: red;\\n\\n}\\n\\n#comp-board .cell:hover {\\n    background-color: crimson;\\n}\\n\\n\\n\\n.boards-wrapper {\\n    display: grid;\\n    grid-template-columns: repeat(2, 1fr);\\n    grid-gap: 20px;\\n}\\n\\nfooter {\\n    height: 200px;\\n    margin-bottom: 0;\\n    margin-top: 200px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship_js/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship_js/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship_js/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship_js/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship_js/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship_js/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship_js/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship_js/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship_js/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship_js/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/CompPlayer.js":
/*!***************************!*\
  !*** ./src/CompPlayer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst CompPlayer = () => {\n    const type = \"comp\";\n\n    const getCoords = () => {\n        let x;\n        let y;\n        x = Math.floor(Math.random() * 10);\n        y = Math.floor(Math.random() * 10);\n        const array = [x, y];\n        return array;\n    }\n\n\n    return {getCoords, type}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompPlayer);\n\n//# sourceURL=webpack://battleship_js/./src/CompPlayer.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _CompPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompPlayer */ \"./src/CompPlayer.js\");\n/* harmony import */ var _playerBoardView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerBoardView */ \"./src/playerBoardView.js\");\n/* harmony import */ var _gameOverView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameOverView */ \"./src/gameOverView.js\");\n/* harmony import */ var _displayCellView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayCellView */ \"./src/displayCellView.js\");\n\n\n\n\n\n\n\n\nconst Game = () => {\n    //initialize gameboards\n    const p1Board = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const p2Board = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    //initialize players\n    const p1 = (0,_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, p2Board);\n    const p2 = (0,_CompPlayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    //place ships\n\n    // const object = {\n    //     board1: Gameboard(),\n    //     board2: Gameboard(),\n    //     p1: Player(1, p2Board),\n    //     p2: Player(2, p1Board)\n    // }\n\n\n    const gameLoop = (coords) => {\n        //game over?\n        if (p2Board.allShipsSunk() || p1Board.allShipsSunk()) {\n            return \"game over\";\n        }\n        //comp receives attack\n        const x = coords[0];\n        const y = coords[1];\n        if(p2Board.validateCoords(coords) === false) {\n            return;\n        }\n        const attackReceived = p2Board.receiveAttack(coords);\n\n        if (attackReceived === \"hit\") {\n            (0,_displayCellView__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(coords, \"hit\");\n            const ship = p2Board.shipGrid[x][y];\n            if (ship.isSunk());\n                //updates scores\n        }\n        //game over?\n        if (p2Board.allShipsSunk()) {\n            const message = \"You win.\"\n            ;(0,_gameOverView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(message);\n            return \"game over\";\n        }\n        //comp attack until valid\n        let compAttack = p2.getCoords();\n        while(p1Board.validateCoords(compAttack) === false) {\n            compAttack = p2.getCoords();\n        }\n        p1Board.receiveAttack(compAttack);\n        (0,_playerBoardView__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(p1Board);\n        //gameover?\n        if (p1Board.allShipsSunk()) {\n            const message = \"Game over man! You lose.\";\n            (0,_gameOverView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(message);\n            return \"game over\";\n\n        }\n        \n\n\n        \n    }\n    return {gameLoop, p1Board, p2Board, p1, p2};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://battleship_js/./src/Game.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n\n\nconst Gameboard = (size = 10) => {\n\n    const createGrid = (size) => {\n        let grid;\n        let array = []\n        for (let i = 0; i < size; i++) {\n            let xArray = []\n            for (let j = 0; j < size; j++) {\n                xArray.push(j);\n            }\n            array.push(xArray);\n        }\n        grid = array;\n        return grid\n    }\n\n    const placeShip = (ship) => {\n        const shipCoord = ship.coordinates;\n        for (let i=0; i < shipCoord.length; i++) {\n            let x = shipCoord[i][0];\n            let y = shipCoord[i][1];\n            //updates controller grid\n            grid[x][y] = \"ship\";\n            //stores instance of ship in seperate grid\n            shipGrid[x][y] = ship;\n        }\n    }\n\n    const placeAllShips = () => {\n        const array1 = [[0,1],[0,2],[0,3]];\n        const ship1 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array1);\n        const ship2 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([[3,2], [3,3]]);\n        // placeShip(ship1);\n        placeShip(ship2);\n        \n    }\n\n\n    const receiveAttack = (coords) => {\n        const x = coords[0];\n        const y = coords[1];\n\n        //hit successful?\n        if (grid[x][y] === \"ship\") {\n            grid[x][y] = \"hit\";\n            //hit to correct ship\n            shipGrid[x][y].hit([x, y]);\n            return \"hit\";\n        } else {\n            // mark a miss\n            grid[x][y] = \"miss\";\n            return \"miss\";\n        }\n        \n    }\n\n    const allShipsSunk = () => {\n        for(let i=0; i <  grid.length; i++) {\n            if(grid[i].includes(\"ship\")) {\n                return false;\n            }            \n        }\n        return true;\n    }\n\n\n    const validateCoords = (coords) => {\n        for(let i=0; i < playedMoves.length; i++) {\n                if (playedMoves[i][0] === coords[0] && playedMoves[i][1] === coords[1]) {\n                    return false;\n                }\n            \n        }\n        playedMoves.push(coords);\n        return true;\n    }\n\n    let grid = createGrid(size);\n    let shipGrid = createGrid(size);\n    placeAllShips();\n    let playedMoves = [];\n\n    return {grid, placeShip, receiveAttack, allShipsSunk, shipGrid, validateCoords}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship_js/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = (gameboard) => {\n    const board = gameboard;\n    let playedMoves  = [];\n    const type = \"human\";\n\n    const getCoords = (coords) => {\n        let x;\n        let y;\n        x = coords[0]; \n        y = coords[1];\n        const array = [x, y];\n        return array;\n    }\n\n\n    \n    return {getCoords, type}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship_js/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (array) => {\n    \n    const coordinates = array;\n    // Make sure the array is structured properly as nested arrays\n    let hitCoords = [];\n    const shipLength = array.length;\n\n    const hit = (position) => {\n        hitCoords.push(position);\n    }\n\n\n    const isSunk = () => {\n        let counter = 0;\n        if(coordinates.length === hitCoords.length) {\n            for (let i = 0; i < coordinates.length; i++) {\n                for(let j = 0; j < hitCoords.length; j++) {\n                    if (coordinates[i][0] === hitCoords[j][0] && coordinates[i][1] === hitCoords[j][1]) {\n                        counter ++;\n         \n                    }\n                }\n            }\n            if (counter === (coordinates.length)) {\n                return true;\n                \n            } else {\n                return false;\n            }\n        } else if (coordinates.length !== hitCoords.length){\n            return false;\n        }\n\n    }\n\n    return {shipLength, coordinates, hit, isSunk, hitCoords}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship_js/./src/Ship.js?");

/***/ }),

/***/ "./src/compBoardView.js":
/*!******************************!*\
  !*** ./src/compBoardView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _displayCellView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayCellView */ \"./src/displayCellView.js\");\n\n\n\nconst compBoardView = (game) => {\n    const content = document.querySelector(\"#comp-board\");\n    content.innerHTML = \"\";\n    game.p2Board.grid.forEach((row, x) => {\n        row.forEach((item, y) => {\n            const div = document.createElement('div');\n            const coords = [x, y];\n            div.id = coords;\n            div.className = \"cell\";\n            div.addEventListener('click', function() {\n                if(game.gameLoop(coords) === \"game over\") {\n                    return;\n                } else {\n                    compBoardView(game);\n                }\n            });\n            //remove onclick after firing\n            content.appendChild(div);\n            (0,_displayCellView__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(coords, item);\n\n        }\n\n        )\n    })\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compBoardView);\n\n//# sourceURL=webpack://battleship_js/./src/compBoardView.js?");

/***/ }),

/***/ "./src/displayCellView.js":
/*!********************************!*\
  !*** ./src/displayCellView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayCellView = (coords, item) => {\n    const cell = document.getElementById(coords);\n    if (item === \"hit\") {\n        cell.textContent = \"hit\";\n        return \"hit\";\n    } else if (item === \"miss\") {\n        cell.textContent = \"miss\";\n        return \"miss\";\n    } else {\n        cell.textContent = \"\";\n        return \" \";\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCellView);\n\n//# sourceURL=webpack://battleship_js/./src/displayCellView.js?");

/***/ }),

/***/ "./src/gameOverView.js":
/*!*****************************!*\
  !*** ./src/gameOverView.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gameOverView = (message) => {\n    const gameover = document.querySelector('.game-over');\n    const h2 = document.createElement('h2');\n    h2.textContent = message;\n    gameover.appendChild(h2);\n\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameOverView);\n\n//# sourceURL=webpack://battleship_js/./src/gameOverView.js?");

/***/ }),

/***/ "./src/getShipArray.js":
/*!*****************************!*\
  !*** ./src/getShipArray.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getShipArray = (len, id) => {\n    let i = id[1];\n    len = i + len;\n    let array = [];\n    if (len > 10) {\n        return false;\n    }\n    for(i; i < len; i++) {\n        let coords = [];\n        coords[0] = id[0];\n        coords[1] = i;\n        const cell = document.getElementById(`p1:${coords}`);\n        if (cell.textContent === \"ship\") {\n            return false\n        } else {\n            array.push(coords);\n        }\n    }\n    return array;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShipArray);\n\n//# sourceURL=webpack://battleship_js/./src/getShipArray.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _compBoardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compBoardView */ \"./src/compBoardView.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _playerBoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playerBoardView */ \"./src/playerBoardView.js\");\n/* harmony import */ var _placeShipsView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeShipsView */ \"./src/placeShipsView.js\");\n\n\n\n\n\n\n\nfunction main() {\n    const game = (0,_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    document.addEventListener('DOMContentLoaded', () => {\n\n        (0,_playerBoardView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(game.p1Board);\n        (0,_placeShipsView__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(game);\n        const reset = document.querySelector('#reset');\n        reset.onclick = () => {\n            const newGame = (0,_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            document.querySelector('.game-over').innerHTML =\"\";\n            const compboard = document.querySelector(\"#comp-board\");\n            compboard.innerHTML =\"\";\n            (0,_playerBoardView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(newGame.p1Board);\n            (0,_placeShipsView__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(newGame);\n\n        };\n\n            \n    });\n\n    return{reset};\n}\n\n\nmain();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n\n\n\n\n//# sourceURL=webpack://battleship_js/./src/index.js?");

/***/ }),

/***/ "./src/mouseOutHoriz.js":
/*!******************************!*\
  !*** ./src/mouseOutHoriz.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mouseOutHoriz = (len, id) => {\n    let i = id[1];\n    len = i + len;\n    for(i; i < len; i++) {\n        let coords = [];\n        coords[0] = id[0];\n        coords[1] = i;\n        document.getElementById(`p1:${coords}`).classList.remove(\"place-ship-hover\");\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouseOutHoriz);\n\n//# sourceURL=webpack://battleship_js/./src/mouseOutHoriz.js?");

/***/ }),

/***/ "./src/mouseOverHoriz.js":
/*!*******************************!*\
  !*** ./src/mouseOverHoriz.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mouseOverHoriz = (len, id) => {\n    let i = id[1];\n    len = i + len;\n    for(i; i < len; i++) {\n        let coords = [];\n        coords[0] = id[0];\n        coords[1] = i;\n        document.getElementById(`p1:${coords}`).classList.add(\"place-ship-hover\");\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouseOverHoriz);\n\n\n//# sourceURL=webpack://battleship_js/./src/mouseOverHoriz.js?");

/***/ }),

/***/ "./src/placeShipsView.js":
/*!*******************************!*\
  !*** ./src/placeShipsView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mouseOverHoriz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouseOverHoriz */ \"./src/mouseOverHoriz.js\");\n/* harmony import */ var _mouseOutHoriz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouseOutHoriz */ \"./src/mouseOutHoriz.js\");\n/* harmony import */ var _getShipArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getShipArray */ \"./src/getShipArray.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _playerBoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playerBoardView */ \"./src/playerBoardView.js\");\n/* harmony import */ var _compBoardView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compBoardView */ \"./src/compBoardView.js\");\n\n\n\n\n\n\n\n\nconst placeShipsView = (game, i = 0) => {\n    if (i > 4) {\n        (0,_compBoardView__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(game);\n        return;\n    }\n    let shipLen = [5, 4, 3, 3, 2];\n    //create grid and add mouse over event to each cell\n    game.p1Board.grid.forEach((row, x) => {\n        row.forEach((item, y) => {\n            const coords = [x, y];\n            const div = document.getElementById(`p1:${coords}`);\n            div.onmouseover = () => (0,_mouseOverHoriz__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipLen[i], coords);\n            div.onmouseout = () => (0,_mouseOutHoriz__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shipLen[i], coords);\n            div.onclick = function() {\n                const array = (0,_getShipArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shipLen[i], coords)\n                if (array !== false) {\n                    const ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(array);\n                    game.p1Board.placeShip(ship);\n                    (0,_playerBoardView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(game.p1Board);\n                    i++;\n                }\n                placeShipsView(game, i);\n\n \n            } \n        })\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeShipsView);\n\n//# sourceURL=webpack://battleship_js/./src/placeShipsView.js?");

/***/ }),

/***/ "./src/playerBoardView.js":
/*!********************************!*\
  !*** ./src/playerBoardView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\nconst PlayerBoardView = (gameboard) => {\n    const content = document.querySelector(\"#player-board\");\n    content.innerHTML = \"\";\n    gameboard.grid.forEach((row, x) => {\n        row.forEach((item, y) => {\n            const div = document.createElement('div');\n            if (item === \"ship\" || item === \"miss\" || item === \"hit\") {\n                div.textContent = item;\n            } else {\n                div.textContent = \" \";\n            }\n            div.className = \"cell\";\n            const coords = [x, y];\n            div.id = `p1:${coords}`;\n            content.appendChild(div);\n        }\n\n        )\n    })\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerBoardView);\n\n//# sourceURL=webpack://battleship_js/./src/playerBoardView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;