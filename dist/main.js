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

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar container = document.getElementById('content');\nvar footer = document.createElement('footer');\nfooter.classList.add('footer');\nvar wrapper = document.createElement('div');\nwrapper.classList.add('footer-wrapper');\nvar today = new Date();\nvar year = today.getFullYear();\nwrapper.innerHTML = '&copy; ' + year + ' Uzbek Kitchen Designed by  <a href=\"https://github.com/Murodjon000\"> Murodjon Tursunpulatov</a>';\n\nvar myFooter = function myFooter() {\n  container.appendChild(footer);\n  footer.appendChild(wrapper);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myFooter);\n\n//# sourceURL=webpack://restaurant/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar container = document.getElementById('content');\nvar header = document.createElement('header');\nheader.classList.add('header');\nvar wrapper = document.createElement('div');\nwrapper.classList.add('header-wrapper');\nvar text = document.createElement('h1');\ntext.classList.add('header-text');\ntext.textContent = 'Uzbek Kitchen';\n\nvar myHeader = function myHeader() {\n  container.appendChild(header);\n  header.appendChild(wrapper);\n  wrapper.appendChild(text);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myHeader);\n\n//# sourceURL=webpack://restaurant/./src/components/header.js?");

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar container = document.getElementById('content');\nvar main = document.createElement('div');\nmain.classList.add('main');\nvar mainWrapper = document.createElement('div');\nmainWrapper.classList.add('main-wrapper');\nvar mainText = document.createElement('h1');\nmainText.innerText = 'Delicious Uzbek Foods';\nvar mainTextP = document.createElement('p');\nmainTextP.innerText = 'Popular with its variety of dishes';\n\nvar mainPage = function mainPage() {\n  container.appendChild(main);\n  main.appendChild(mainWrapper);\n  mainWrapper.appendChild(mainText);\n  mainWrapper.appendChild(mainTextP);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);\n\n//# sourceURL=webpack://restaurant/./src/components/main.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_plov_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/plov.jpg */ \"./src/assets/plov.jpg\");\n/* harmony import */ var _assets_main_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/main-1.jpg */ \"./src/assets/main-1.jpg\");\n/* harmony import */ var _assets_main_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/main-2.jpg */ \"./src/assets/main-2.jpg\");\n/* harmony import */ var _assets_main_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/main-3.jpg */ \"./src/assets/main-3.jpg\");\n/* harmony import */ var _assets_main_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/main-4.jpg */ \"./src/assets/main-4.jpg\");\n/* harmony import */ var _assets_main_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/main-5.jpg */ \"./src/assets/main-5.jpg\");\n/* harmony import */ var _assets_main_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/main-6.jpg */ \"./src/assets/main-6.jpg\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar container = document.getElementById('content');\nvar menu = document.createElement('div');\nmenu.classList.add('menu');\n\nvar menuTab = function menuTab(dataId, text) {\n  var tab = document.createElement('div');\n  tab.classList.add('menu-tab');\n  tab.setAttribute('data-id', dataId);\n  tab.textContent = text;\n  return tab;\n};\n\nvar menuTabs = document.createElement('div');\nmenuTabs.classList.add('menu-tabs-box');\nvar mainTab = menuTab('main', 'Menu');\nmainTab.setAttribute('id', 'default-open');\nvar aboutTab = menuTab('about', 'About');\nvar contactTab = menuTab('contact', 'Contact');\nmenuTabs.innerHTML += mainTab.outerHTML + aboutTab.outerHTML + contactTab.outerHTML;\n\nvar menuItem = function menuItem(id, title) {\n  var item = document.createElement('div');\n  item.classList.add('menu-item');\n  item.setAttribute('id', id);\n  var heading = document.createElement('h2');\n  heading.classList.add('item-title');\n  heading.textContent = title;\n  var content = document.createElement('div');\n  content.classList.add('menu-item-content');\n  item.appendChild(heading);\n  item.appendChild(content);\n  return [item, content];\n};\n\nvar menuContent = document.createElement('div');\nmenuContent.classList.add('menu-content');\n\nvar _menuItem = menuItem('about', 'About us'),\n    _menuItem2 = _slicedToArray(_menuItem, 2),\n    aboutItem = _menuItem2[0],\n    aboutContent = _menuItem2[1];\n\nvar max75 = document.createElement('div');\nmax75.classList.add('max-75');\nvar aboutImg = document.createElement('img');\naboutImg.src = _assets_plov_jpg__WEBPACK_IMPORTED_MODULE_0__;\naboutImg.classList.add('about-image');\nvar aboutPara = document.createElement('p');\naboutPara.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam exercitationem debitis ipsam temporibus doloremque laboriosam fugiat dicta iste. Asperiores laudantium fugit ut maiores omnis quos perspiciatis eaque sequi architecto commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.';\naboutPara.classList.add('about-para');\nmax75.innerHTML += aboutImg.outerHTML + aboutPara.outerHTML;\naboutContent.appendChild(max75);\nmenuContent.appendChild(aboutItem);\n\nvar _menuItem3 = menuItem('contact', 'Contact us'),\n    _menuItem4 = _slicedToArray(_menuItem3, 2),\n    contactItem = _menuItem4[0],\n    contactContent = _menuItem4[1];\n\nvar contactPara = document.createElement('p');\ncontactPara.textContent = 'Feel free contact us:';\ncontactPara.classList.add('contact-para');\nvar contactTel = document.createElement('h2');\ncontactTel.classList.add('contact-tel');\ncontactTel.textContent = '+99897-777-77';\ncontactContent.innerHTML += contactPara.outerHTML + contactTel.outerHTML;\nmenuContent.appendChild(contactItem);\n\nvar mainWrapper = function mainWrapper(image, text) {\n  var mainWrapperBox = document.createElement('div');\n  mainWrapperBox.classList.add('main-wrapper');\n  var mainImage = document.createElement('img');\n  mainImage.src = image;\n  mainImage.classList.add('main-image');\n  var mainPara = document.createElement('span');\n  mainPara.textContent = text;\n  mainPara.classList.add('main-para');\n  mainWrapperBox.appendChild(mainImage);\n  mainWrapperBox.appendChild(mainPara);\n  return mainWrapperBox;\n};\n\nvar _menuItem5 = menuItem('main', 'Menu'),\n    _menuItem6 = _slicedToArray(_menuItem5, 2),\n    mainItem = _menuItem6[0],\n    mainContent = _menuItem6[1];\n\nvar gridBox = document.createElement('div');\ngridBox.classList.add('grid-box');\nvar mainList = mainWrapper(_assets_main_1_jpg__WEBPACK_IMPORTED_MODULE_1__, 'PLOV WITH RISE 20$');\nvar mainList2 = mainWrapper(_assets_main_2_jpg__WEBPACK_IMPORTED_MODULE_2__, 'MEAT DUMPLINGS 10$');\nvar mainList3 = mainWrapper(_assets_main_3_jpg__WEBPACK_IMPORTED_MODULE_3__, 'MEAT KEBAB 15$');\nvar mainList4 = mainWrapper(_assets_main_4_jpg__WEBPACK_IMPORTED_MODULE_4__, 'MEAT SOMSA 13$');\nvar mainList5 = mainWrapper(_assets_main_5_jpg__WEBPACK_IMPORTED_MODULE_5__, 'UZBEK LAGMAN 9$');\nvar mainList6 = mainWrapper(_assets_main_6_jpg__WEBPACK_IMPORTED_MODULE_6__, 'SOFT MEAT 13$');\ngridBox.innerHTML += mainList.outerHTML + mainList2.outerHTML + mainList3.outerHTML;\ngridBox.innerHTML += mainList4.outerHTML + mainList5.outerHTML + mainList6.outerHTML;\nmainContent.appendChild(gridBox);\nmenuContent.appendChild(mainItem);\n\nvar menuPage = function menuPage() {\n  container.appendChild(menu);\n  menu.appendChild(menuTabs);\n  menu.appendChild(menuContent);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant/./src/components/menu.js?");

/***/ }),

/***/ "./src/components/tab.js":
/*!*******************************!*\
  !*** ./src/components/tab.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar openTab = function openTab(id) {\n  document.querySelectorAll('.menu-tab').forEach(function (tab) {\n    tab.classList.remove('active');\n  });\n  document.querySelectorAll('.menu-item').forEach(function (item) {\n    item.classList.remove('active');\n  });\n  document.getElementById(id).classList.add('active');\n  document.querySelector(\"div[data-id='\".concat(id, \"']\")).classList.add('active');\n};\n\nvar addTabEvent = function addTabEvent() {\n  document.querySelectorAll('.menu-tab').forEach(function (tab) {\n    tab.addEventListener('click', function (e) {\n      openTab(e.target.getAttribute('data-id'));\n    });\n  });\n  document.getElementById('default-open').click();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTabEvent);\n\n//# sourceURL=webpack://restaurant/./src/components/tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/index.scss */ \"./src/stylesheets/index.scss\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ \"./src/components/main.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tab */ \"./src/components/tab.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n\n\n\n\n\n\n(0,_components_header__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_components_main__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_components_menu__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_components_footer__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_components_tab__WEBPACK_IMPORTED_MODULE_4__.default)();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/stylesheets/index.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/stylesheets/index.scss ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_plov_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/plov.jpg */ \"./src/assets/plov.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_plov_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/**\\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\\n * A thin layer on top of normalize.css that provides a starting point more\\n * suitable for web applications.\\n */\\n/**\\n* Removes the default spacing and border for appropriate elements.\\n*/\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\n/**\\n       * Work around a Firefox/IE bug where the transparent `button` background\\n       * results in a loss of the default `button` focus styles.\\n       */\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/**\\n       * 1. Use the user's configured `sans` font-family (with Tailwind's default\\n       *    sans-serif font stack as a fallback) as a sane default.\\n       * 2. Use Tailwind's default \\\"normal\\\" line-height so the user isn't forced\\n       *    to override it to ensure consistency even when using the default theme.\\n       */\\nhtml {\\n  font-family: \\\"Vollkorn\\\", serif;\\n  /* 1 */\\n  line-height: 1.5;\\n  /* 2 */\\n}\\n\\n/**\\n       * Inherit font-family and line-height from `html` so users can set them as\\n       * a class directly on the `html` element.\\n       */\\nbody {\\n  font-family: inherit;\\n  line-height: inherit;\\n  margin: 0;\\n  min-height: 100vh;\\n  color: #18181b;\\n}\\n\\n/**\\n       * 1. Prevent padding and border from affecting element width.\\n       *\\n       *    We used to set this in the html element and inherit from\\n       *    the parent element for everything else. This caused issues\\n       *    in shadow-dom-enhanced elements like <details> where the content\\n       *    is wrapped by a div with box-sizing set to `content-box`.\\n       *\\n       *    https://github.com/mozdevs/cssremedy/issues/4\\n       *\\n       *\\n       * 2. Allow adding a border to an element by just adding a border-width.\\n       *\\n       *    By default, the way the browser specifies that an element should have no\\n       *    border is by setting it's border-style to `none` in the user-agent\\n       *    stylesheet.\\n       *\\n       *    In order to easily add borders to elements by just setting the `border-width`\\n       *    property, we change the default border-style for all elements to `solid`, and\\n       *    use border-width to hide them instead. This way our `border` utilities only\\n       *    need to set the `border-width` property instead of the entire `border`\\n       *    shorthand, making our border utilities much more straightforward to compose.\\n       *\\n       *    https://github.com/tailwindcss/tailwindcss/pull/116\\n       */\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box;\\n  /* 1 */\\n  border-width: 0;\\n  /* 2 */\\n  border-style: solid;\\n  /* 2 */\\n  border-color: #d4d4d8;\\n  /* 2 */\\n}\\n\\n/*\\n       * Ensure horizontal rules are visible by default\\n       */\\nhr {\\n  border-top-width: 1px;\\n  border-color: #d4d4d8;\\n}\\n\\n/**\\n       * Undo the `border-style: none` reset that Normalize applies to images so that\\n       * our `border-{width}` utilities have the expected effect.\\n       *\\n       * The Normalize reset is unnecessary for us since we default the border-width\\n       * to 0 on all elements.\\n       *\\n       * https://github.com/tailwindcss/tailwindcss/issues/362\\n       */\\nimg {\\n  border-style: solid;\\n}\\n\\n/**\\n       * Reset links to optimize for opt-in styling instead of\\n       * opt-out.\\n       */\\na {\\n  text-decoration: inherit;\\n  color: inherit;\\n}\\n\\n/**\\n       * Reset form element properties that are easy to forget to\\n       * style explicitly so you don't inadvertently introduce\\n       * styles that deviate from your design system. These styles\\n       * supplement a partial reset that is already applied by\\n       * normalize.css.\\n       */\\n/**\\n       * Use the configured 'mono' font family for elements that\\n       * are expected to be rendered with a monospace font, falling\\n       * back to the system monospace stack if there is no configured\\n       * 'mono' font family.\\n       */\\n/**\\n       * Make replaced elements `display: block` by default as that's\\n       * the behavior you want almost all of the time. Inspired by\\n       * CSS Remedy, with `svg` added as well.\\n       *\\n       * https://github.com/mozdevs/cssremedy/issues/14\\n       */\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block;\\n}\\n\\n/**\\n       * Constrain images and videos to the parent width and preserve\\n       * their instrinsic aspect ratio.\\n       *\\n       * https://github.com/mozdevs/cssremedy/issues/14\\n       */\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: center;\\n  border-bottom: 1px solid #d4d4d8;\\n  padding: 0.3rem 0;\\n}\\n.header .wrapper {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.header .wrapper .header-text {\\n  font-size: 30px;\\n  color: #000;\\n}\\n\\n.main {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: center;\\n  background-size: cover;\\n  height: 30rem;\\n  position: relative;\\n}\\n.main .main-wrapper {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  color: white;\\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(5, 4, 4, 0.6) 20%, black 110%);\\n  width: 100%;\\n  position: absolute;\\n  height: 100%;\\n}\\n.main .main-wrapper > h1 {\\n  color: white;\\n  text-align: center;\\n  font-size: 45px;\\n  text-transform: uppercase;\\n}\\n.main .main-wrapper > p {\\n  font-size: 25px;\\n}\\n\\n.menu {\\n  max-width: 75rem;\\n  display: flex;\\n  justify-content: center;\\n  flex-direction: column;\\n  margin: 0 auto;\\n}\\n.menu .menu-tabs-box {\\n  display: flex;\\n  justify-content: center;\\n}\\n.menu .menu-tabs-box .menu-tab {\\n  font-size: 30px;\\n  padding: 20px;\\n  width: 390px;\\n  cursor: pointer;\\n  text-align: center;\\n  transition: all 0.3s ease;\\n}\\n.menu .menu-tabs-box .menu-tab:hover {\\n  background: slateblue;\\n  color: white;\\n}\\n.menu .menu-tabs-box .menu-tab.active {\\n  color: slateblue;\\n  border-bottom: 1px solid slateblue;\\n}\\n.menu .menu-tabs-box .menu-tab.active:hover {\\n  border-color: transparent;\\n  background: slateblue;\\n  color: white;\\n}\\n.menu .menu-item {\\n  display: none;\\n}\\n.menu .menu-item.active {\\n  display: block;\\n}\\n.menu .menu-content .item-title {\\n  text-align: center;\\n  margin-top: 15px;\\n  margin-bottom: 15px;\\n}\\n.menu .menu-content .menu-item-content {\\n  padding: 15px;\\n  margin: 0 auto;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n}\\n.menu .menu-content .menu-item-content .contact-para {\\n  margin-bottom: 15px;\\n  font-size: 17px;\\n}\\n.menu .menu-content .menu-item-content .contact-tel {\\n  font-size: 60px;\\n}\\n.menu .menu-content .menu-item-content .grid-box .main-wrapper {\\n  display: flex;\\n  justify-content: center;\\n  flex-direction: column;\\n}\\n.menu .menu-content .menu-item-content .grid-box .main-wrapper .main-para {\\n  text-align: center;\\n  color: #3f3f46;\\n  font-weight: 600;\\n  font-size: 20px;\\n}\\n@media only screen and (min-width: 768px) {\\n  .menu .menu-content .menu-item-content .grid-box {\\n    display: grid;\\n    grid-template-columns: repeat(3, minmax(0, 1fr));\\n    gap: 20px;\\n  }\\n}\\n.menu .max-75 {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  max-width: 55rem;\\n}\\n.menu .max-75 .about-image {\\n  width: 800px;\\n  height: 450px;\\n}\\n.menu .max-75 .about-para {\\n  margin-top: 15px;\\n  text-align: center;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-content: center;\\n  padding: 0.5rem 0;\\n  border-top: 1px solid #d4d4d8;\\n}\\n.footer .footer-wrapper {\\n  display: flex;\\n  justify-content: center;\\n}\\n.footer .footer-wrapper > a {\\n  margin-left: 5px;\\n  color: #71717a;\\n}\\n.footer .footer-wrapper > a:hover {\\n  text-decoration: underline;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/stylesheets/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/stylesheets/index.scss":
/*!************************************!*\
  !*** ./src/stylesheets/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/stylesheets/index.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant/./src/stylesheets/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/main-1.jpg":
/*!*******************************!*\
  !*** ./src/assets/main-1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"08f88cb0c67b4b38abc0.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/main-1.jpg?");

/***/ }),

/***/ "./src/assets/main-2.jpg":
/*!*******************************!*\
  !*** ./src/assets/main-2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6be509f09166cffc7262.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/main-2.jpg?");

/***/ }),

/***/ "./src/assets/main-3.jpg":
/*!*******************************!*\
  !*** ./src/assets/main-3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f3e2e095c177dd3386c.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/main-3.jpg?");

/***/ }),

/***/ "./src/assets/main-4.jpg":
/*!*******************************!*\
  !*** ./src/assets/main-4.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"12d1ea7ecce94754b1a4.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/main-4.jpg?");

/***/ }),

/***/ "./src/assets/main-5.jpg":
/*!*******************************!*\
  !*** ./src/assets/main-5.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41e01e0fe96c8f076578.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/main-5.jpg?");

/***/ }),

/***/ "./src/assets/main-6.jpg":
/*!*******************************!*\
  !*** ./src/assets/main-6.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f43aaa6e0905ee209c70.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/main-6.jpg?");

/***/ }),

/***/ "./src/assets/plov.jpg":
/*!*****************************!*\
  !*** ./src/assets/plov.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f0107a1159c3715ce8fd.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/plov.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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