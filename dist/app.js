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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/builder.js":
/*!************************!*\
  !*** ./src/builder.js ***!
  \************************/
/*! exports provided: Builder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Builder\", function() { return Builder; });\nclass Builder{\n\tstatic createNewElement(tag, innerContent=null, classStr=null, attr=null){\n\t\tvar el = document.createElement(tag);\n\t\tel.innerHTML = (innerContent)?innerContent:\"\";\n\t\tel.className = (classStr)?classStr:\"\";\n\t\n\t\tif(attr){\n\t\t\tattr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));\n\t\t}\n\t\n\t\treturn el;\n\t}\n\n\tstatic attachChilderToParent(html, array_el){\n\t\tarray_el.map((el)=>html.appendChild(el));\n\t\treturn html;\n\t}\n}\n\n//# sourceURL=webpack:///./src/builder.js?");

/***/ }),

/***/ "./src/catalog.js":
/*!************************!*\
  !*** ./src/catalog.js ***!
  \************************/
/*! exports provided: Catalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Catalog\", function() { return Catalog; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _page_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page_data */ \"./src/page_data.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination */ \"./src/pagination.js\");\n\n\n\n\n\nclass Catalog{\n\tconstructor(per_page){\n\t\tthis.element = document.getElementById(\"catalog\");\n\t\tthis.per_page = per_page;\n\t}\n\n\tcreateCard(product, index){\n\t\tlet link = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"a\", \"Add to cart\", \"btn btn-primary\",[{\"name\":\"href\", \"value\":\"#\"}]);\n\t\tlet show_more = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"a\", \"More\", \"btn btn-success product_more\",[{\"name\":\"href\", \"value\":\"#\"}, {\"name\":\"data-id\", \"value\":index}]);\n\t\tlet p = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"p\", product.description, \"card-text\");\n\t\tlet title = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"h5\", product.name, \"card-title\");\n\t\n\t\tlet cardBody = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"card-body\"), [title,p,link,show_more]);\n\t\n\t\tlet image = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"img\", null, \"card-img-top\", [{\"name\":\"src\", \"value\":\"images/\"+product.image},{\"name\":\"alt\", \"value\":product.name}]);\n\t\n\t\tlet card = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"card\"), [image,cardBody]);\n\t\n\t\tlet catalogItem = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"col-lg-3 col-md-6 mb-2 catalog-item\"), [card]);\n\t\n\t\treturn catalogItem;\n\t}\n\n\tstartFromFirstProducts(){\n\t\treturn this.current_page*this.per_page;\n\t}\n\n\tisLastProductInPage(i,array_products){\n\t\treturn i < this.current_page*this.per_page + this.per_page && i < array_products.length;\n\t}\n\n\trenderProducts(array_products, current_page){\n\t\tthis.current_page = current_page;\n\t\tthis.element.innerHTML = \"\";\n\t\tfor(let i = this.startFromFirstProducts(); this.isLastProductInPage(i,array_products); i++){\n\t\t\tthis.element.appendChild(this.createCard(array_products[i],i));\n\t\t}\n\t\tconst pagination = new _pagination__WEBPACK_IMPORTED_MODULE_3__[\"Pagination\"](this.per_page);\n\t\tpagination.createPagination(_data__WEBPACK_IMPORTED_MODULE_1__[\"Data\"].getProducts(), _page_data__WEBPACK_IMPORTED_MODULE_2__[\"PageData\"].getCurrentPage());\n\t}\n}\n\n//# sourceURL=webpack:///./src/catalog.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Data\", function() { return Data; });\nconst load_products = [\n\t{\"name\": \"Snikers #1\", \"price\": 103.50, \"image\": \"bg-01.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"Snikers #2\", \"price\": 152.14, \"image\": \"bg-02.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"Snikers #3\", \"price\": 202.22, \"image\": \"bg-03.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"Snikers #4\", \"price\": 240.00, \"image\": \"bg-04.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"Snikers #5\", \"price\": 180.30, \"image\": \"bg-05.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"Snikers #6\", \"price\": 186.50, \"image\": \"bg-06.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t\n\t{\"name\": \"Snikers #7\", \"price\": 111.60, \"image\": \"bg-07.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"Snikers #8\", \"price\": 169.64, \"image\": \"bg-08.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"LeBron 16 #9\", \"price\": 215.20, \"image\": \"bg-09.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"Nike Zoom KD11 #10\", \"price\": 245.00, \"image\": \"bg-10.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"Snikers #11\", \"price\": 109.30, \"image\": \"bg-05.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"Snikers #12\", \"price\": 198.50, \"image\": \"bg-06.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n  \n\t{\"name\": \"Snikers #13\", \"price\": 128.69, \"image\": \"bg-01.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"Snikers #14\", \"price\": 179.00, \"image\": \"bg-02.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n\t{\"name\": \"Snikers #15\", \"price\": 260.20, \"image\": \"bg-03.jpg\", \"description\": \"This is very cool snikers. Nice beautifull and quality\"},\n\t{\"name\": \"Snikers #16\", \"price\": 301.20, \"image\": \"bg-03.jpg\", \"description\": \"This is very cool snikers. Nice colorfull and quality\"},\n];\n\nlet products = [];\n\nclass Data{\n\n\tstatic loadProducts(){\n\t\treturn load_products;\n\t}\n\n\tstatic getProducts(){\n\t\treturn products;\n\t}\n\n\tstatic setProducts(data){\n\t\treturn products = data;\n\t}\n\t\n}\n\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _page_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page_data */ \"./src/page_data.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ \"./src/catalog.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination */ \"./src/pagination.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ \"./src/login.js\");\n\n\n\n\n\n\nif(localStorage.getItem(\"isLogin\")){\n\tconst per_page = 6;\n\n\tconst catalog = new _catalog__WEBPACK_IMPORTED_MODULE_2__[\"Catalog\"](per_page);\n\tcatalog.renderProducts(_data__WEBPACK_IMPORTED_MODULE_0__[\"Data\"].setProducts(_data__WEBPACK_IMPORTED_MODULE_0__[\"Data\"].loadProducts()), _page_data__WEBPACK_IMPORTED_MODULE_1__[\"PageData\"].getCurrentPage());\n\t\n\tconst pagination = new _pagination__WEBPACK_IMPORTED_MODULE_3__[\"Pagination\"](per_page);\n\tpagination.createPagination(_data__WEBPACK_IMPORTED_MODULE_0__[\"Data\"].getProducts(), _page_data__WEBPACK_IMPORTED_MODULE_1__[\"PageData\"].getCurrentPage());\n}else{\n\tconst login = new _login__WEBPACK_IMPORTED_MODULE_4__[\"Login\"]();\n\tlogin.createHtmlElement();\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n\n\nclass Login{\n\tconstructor(per_page){\n\t\tthis.element = document.getElementById(\"login_container\");\n\t}\n\n\tcreateHtmlElement(){\n\n\t\tconst labelEmail = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"label\", \"Email address\", null,[{\"name\":\"for\", \"value\":\"exampleInputEmail1\"}]);\n\t\tconst emailInput = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"input\", null, \"form-control\",[\n\t\t\t{\"name\":\"id\", \"value\":\"exampleInputEmail1\"},\n\t\t\t{\"name\":\"placeholder\", \"value\":\"Enter email\"}\n\t\t]);\n\t\tconst small = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"small\", \"We'll never share your email with anyone else.\", \"form-text text-muted\",[{\"name\":\"id\", \"value\":\"emailHelp\"}]);\n\n\t\tlet divEmail = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"form-group\"), [labelEmail,emailInput,small]);\n\n\n\t\tconst labelPass = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"label\", \"Password\", null,[{\"name\":\"for\", \"value\":\"exampleInputPassword1\"}]);\n\t\tconst passInput = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"input\", null, \"form-control\",[\n\t\t\t{\"name\":\"id\", \"value\":\"exampleInputPassword1\"},\n\t\t\t{\"name\":\"placeholder\", \"value\":\"Password\"},\n\t\t\t{\"name\":\"type\", \"value\":\"password\"},\n\t\t]);\n\n\t\tlet divPass = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"form-group\"), [labelPass,passInput]);\n\n\t\tconst button = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"button\", \"Login\", \"btn btn-primary\",[{\"name\":\"type\", \"value\":\"submit\"}]);\n\n\t\tlet form = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"form\", null, null, [{\"name\":\"id\", \"value\":\"login_form\"}]), [divEmail, divPass, button]);\n\n\t\tthis.element.appendChild(form);\n\n\t\tdocument.getElementById(\"login_form\").addEventListener(\"submit\", this.submit, false);\n\t}\n\n\tsubmit(){\n\t\tlocalStorage.setItem(\"isLogin\", true);\n\t}\n}\n\n//# sourceURL=webpack:///./src/login.js?");

/***/ }),

/***/ "./src/page_data.js":
/*!**************************!*\
  !*** ./src/page_data.js ***!
  \**************************/
/*! exports provided: PageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageData\", function() { return PageData; });\nlet current_page = 0;\n\nclass PageData{\n\tstatic getCurrentPage(){\n\t\treturn current_page;\n\t}\n\n\tstatic setCurrentPage(page){\n\t\treturn current_page = page;\n\t}\n}\n\n//# sourceURL=webpack:///./src/page_data.js?");

/***/ }),

/***/ "./src/pagination.js":
/*!***************************!*\
  !*** ./src/pagination.js ***!
  \***************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pagination\", function() { return Pagination; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _page_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page_data */ \"./src/page_data.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog */ \"./src/catalog.js\");\n\n\n\n\n\nclass Pagination{\n\tconstructor(per_page){\n\t\tthis.element = document.getElementById(\"pagination\");\n\t\tthis.pagination_buttons = document.getElementsByClassName(\"page-link\");\n\t\tthis.per_page = per_page;\n\t}\n\n\tcreatePagination(array_products, current_page){\n\t\tthis.element.innerHTML = \"\";\n\t\tconst ul = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"ul\", null, \"pagination\");\n\t\tfor(let i = 0; i < Math.ceil(array_products.length / this.per_page); i++){\n\t\t\tconst link = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"a\", i+1, \"page-link\",[{\"name\":\"data-link\", \"value\":i}]);\n\t\n\t\t\tconst classNameLi = (i == current_page)?\"page-item active\":\"page-item\";\n\t\t\tconst li = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"li\", null, classNameLi), [link]);\n\t\n\t\t\tul.appendChild(li);\n\t\t}\n\t\tthis.element.appendChild(ul);\n\t\n\t\tconst catalog = new _catalog__WEBPACK_IMPORTED_MODULE_3__[\"Catalog\"](this.per_page);\n\n\t\tArray.from(this.pagination_buttons).map((el)=>{\n\t\t\tel.addEventListener(\"click\", (e)=>{\n\t\t\t\t_page_data__WEBPACK_IMPORTED_MODULE_1__[\"PageData\"].setCurrentPage(e.target.dataset.link);\n\t\t\t\tcatalog.renderProducts(_data__WEBPACK_IMPORTED_MODULE_2__[\"Data\"].setProducts(_data__WEBPACK_IMPORTED_MODULE_2__[\"Data\"].loadProducts()), _page_data__WEBPACK_IMPORTED_MODULE_1__[\"PageData\"].getCurrentPage());\n\t\t\t});\n\t\t});\n\t\n\t\t// Array.from(document.getElementsByClassName(\"product_more\")).map((el)=>{\n\t\t// \tel.addEventListener(\"click\", eventHandle, false);\n\t\t// });\n\t}\n}\n\n//# sourceURL=webpack:///./src/pagination.js?");

/***/ })

/******/ });