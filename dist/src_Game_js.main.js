/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbattleship_js"] = self["webpackChunkbattleship_js"] || []).push([["src_Game_js"],{

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\nconst Player = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n\nconst Game = () => {\n    //initialize gameboards\n    const p1Board = Gameboard();\n    const p2Board = Gameboard();\n    //initialize players\n    const p1 = Player(1, p2Board);\n    const p2 = Player(2, p1Board);\n    //place ships\n\n    \n\n   \n\n    const isGameOver = () => {\n\n    }\n\n    const gameLoop = () => {\n\n        //player attack\n        //receive attack\n        //if receive attack\n            //issunk?\n            //updates scores\n        //game over?\n        //comp attack\n        //validate comp move\n        //gameover?\n        \n    }\n    return {gameLoop};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://battleship_js/./src/Game.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((module) => {

eval("const Player = (num, gameboard) => {\n    const board = gameboard;\n    let playedMoves  = [];\n\n    const assignType = (num) => {\n        if (num === 1) {  \n            return \"human\";\n        } else {\n            return \"comp\";\n        }\n        \n\n    }\n\n    const getCoords = (coords) => {\n        let x;\n        let y;\n        if (type === \"comp\") {\n            x = Math.floor(Math.random() * 10);\n            y = Math.floor(Math.random() * 10);\n            const array = [x, y];\n            return array\n        } else if (type === \"human\") {\n            x = coords[0]; \n            y = coords[1];\n            const array = [x, y];\n            return array;\n        }\n    }\n\n\n    const type = assignType(num);\n    \n    return {getCoords}\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack://battleship_js/./src/Player.js?");

/***/ })

}]);