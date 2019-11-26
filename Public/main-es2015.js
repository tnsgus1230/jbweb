(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n\r\n<div class=\"container-fluid main\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet> </router-outlet>\r\n  <div class=\"bground\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-striped table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th>제목</th>\r\n      <th>작성자</th>\r\n      <th>날짜</th>\r\n      <th>내용</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let boards of boards\">\r\n      <td\r\n        class=\"PM_CL_btnServiceMore an_btn_more an_fold\"\r\n        data-toggle=\"collapse\"\r\n        href=\"#multiCollapseExample1\"\r\n        role=\"button\"\r\n        aria-expanded=\"true\"\r\n        aria-controls=\"multiCollapseExample1\"\r\n      >\r\n        {{ boards.title }}\r\n      </td>\r\n      <td\r\n        class=\"PM_CL_btnServiceMore an_btn_more an_fold\"\r\n        data-toggle=\"collapse\"\r\n        href=\"#multiCollapseExample1\"\r\n        role=\"button\"\r\n        aria-expanded=\"true\"\r\n        aria-controls=\"multiCollapseExample1\"\r\n      >\r\n        {{ boards.writer }}\r\n      </td>\r\n\r\n      <td\r\n        class=\"PM_CL_btnServiceMore an_btn_more an_fold\"\r\n        data-toggle=\"collapse\"\r\n        href=\"#multiCollapseExample1\"\r\n        role=\"button\"\r\n        aria-expanded=\"true\"\r\n        aria-controls=\"multiCollapseExample1\"\r\n      >\r\n        {{ boards.date }}\r\n      </td>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">\r\n            <div class=\"card card-body\">\r\n              {{ boards.context }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<a\r\n  href=\"writeboard\"\r\n  style=\"\r\n  color: black;\r\n  font-size: 2.0em;\r\n  font-weight: bold;\r\n  \"\r\n>\r\n  글쓰기\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/community/community.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/community/community.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("&nbsp;\r\n\r\n<div class=\"row no-gutters bg-light position-relative\">\r\n  <div class=\"col-md-6 mb-md-0 p-md-4\">\r\n    <img src=\"../../../assets/1.jpg\" class=\"w-100\" />\r\n  </div>\r\n  <div class=\"col-md-6 position-static p-4 pl-md-0\">\r\n    <h5 class=\"font-weight-bold\">Minecraft는 무엇인가요?</h5>\r\n    <p>\r\n      블록을 배치하고 모험을 떠나는 게임입니다.\r\n    </p>\r\n    <p>\r\n      얼음산,늪지대,광개한 목초지와 같이 무한으로 생성되는 완전히 열린 지형의\r\n      세계는 비밀,경이로움과 모험으로 가득 차 있습니다!\r\n    </p>\r\n    <p>\r\n      친구들과 온라인으로 모여서 자신들만의 규칙을 만들 수 있습니다.\r\n    </p>\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-secondary\"\r\n      text=\"기본적으로 제공되는 모드 '크리에이티브 모드' , '서바이벌 모드\"\r\n    >\r\n      플레이</button\r\n    >&nbsp;\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-secondary\"\r\n      text=\"Minecraft 세계의 모든 블록은 마이닝\r\n    으로 분리하여 수집 하고 조합하여 새로운 것을 만들어낼 수 있습니다.\"\r\n    >\r\n      시작하기</button\r\n    >&nbsp;\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-secondary\"\r\n      data-toggle=\"tooltip\"\r\n      data-placement=\"right\"\r\n      text=\"친구들과 플레이하기 위해 저희가 운영하는 서버를 구입하여 여럿이서 새로운 규칙을 가지는 세상을 만들어보세요!\r\n      물론 안전하기도 하답니다.\"\r\n    >\r\n      멀티플레이\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div\r\n    class=\"alert alert-success text-center\"\r\n    role=\"alert\"\r\n    onclick=\"location.href='/'\"\r\n    style=\"cursor:pointer\"\r\n  >\r\n    MINECRAFT 구매\r\n    <p class=\"trash text-center\">JAVA EDITION (PC & MAC) - $30</p>\r\n  </div>\r\n  <div class=\"card mb-3\" style=\"max-width: 525px; max-height: 999px;\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-md-4\">\r\n        <img src=\"../../../assets/중단베너.jpg\" class=\"card-img\" />\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">마인크래프트 마인크래프트</h5>\r\n          <p class=\"card-text\">\r\n            마인크래프트 마 인크래프트 마인크래프트 ABCDEF ~@##%\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bd-example\">\r\n  <button type=\"button\" class=\"subtitle btn-secondary\">\r\n    <h2 class=\"abcd\">\r\n      게임 스크린샷 <span class=\"badge badge-light\">PC</span>\r\n    </h2>\r\n  </button>\r\n  <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li\r\n        data-target=\"#carouselExampleCaptions\"\r\n        data-slide-to=\"0\"\r\n        class=\"active\"\r\n      ></li>\r\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img src=\"../../../assets/인게임2.jpg\" class=\"d-block w-100\" alt=\"M1\" />\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h5>플레이 스크린샷</h5>\r\n          <p>자신만의 집을 만들어 보세요!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"../../../assets/인게임3.jpg\" class=\"d-block w-100\" alt=\"M2\" />\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h5>플레이 스크린샷</h5>\r\n          <p>모험을 떠나세요!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img\r\n          src=\"../../../assets/인게임4.jpg \"\r\n          class=\"d-block w-100\"\r\n          alt=\"M3\"\r\n        />\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h5>플레이 스크린샷</h5>\r\n          <p>\r\n            위협이 되는 적들을 조심하세요!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <a\r\n      class=\"carousel-control-prev\"\r\n      href=\"#carouselExampleCaptions\"\r\n      role=\"button\"\r\n      data-slide=\"prev\"\r\n    >\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a\r\n      class=\"carousel-control-next\"\r\n      href=\"#carouselExampleCaptions\"\r\n      role=\"button\"\r\n      data-slide=\"next\"\r\n    >\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container text-center\">\r\n  <div class=\"ppap\">\r\n    &nbsp;\r\n    <div class=\"logindiv\">\r\n      <h2 class=\"page-header text-center\">로그인</h2>\r\n\r\n      <p>minecraft 서버를 이용하시려면 계정을 사용하세요.</p>\r\n\r\n      <form (ngSubmit)=\"onLoginSubmit()\">\r\n        <div class=\"form-group text-left\">\r\n          <label>닉네임</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            name=\"username\"\r\n            [(ngModel)]=\"username\"\r\n          />\r\n        </div>\r\n        &nbsp;\r\n        <div class=\"form-group text-left\">\r\n          <label>비밀번호</label>\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            [(ngModel)]=\"password\"\r\n          />\r\n        </div>\r\n        <p></p>\r\n        &nbsp;\r\n        <button type=\"submit\" class=\"btn btn-block btn-primary btn-lg \">\r\n          로그인\r\n        </button>\r\n        &nbsp;\r\n        <p class=\"already\">\r\n          계정이 없으신가요?\r\n          <a class=\"alink\" routerLink=\"/register\"\r\n            >여기에서 계정을 등록하세요!</a\r\n          >\r\n        </p>\r\n        &nbsp;\r\n        <!--input type=\"submit\" class=\"btn btn-primary\" value=\"Login\"/!-->\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"contactus\">\r\n      <div>&nbsp;</div>\r\n      혹시 귀하의 계정에 문제가 발생했다면 저희에게 연락해주세요!\r\n      <p>minecraft7777@google.com</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maindiv\">\r\n  &nbsp;\r\n  <ul class=\"nav justify-content-center\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link  text-white\" href=\"/\">메뉴1 </a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link text-white\" href=\"/\">메뉴2</a>\r\n    </li>\r\n\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle text-white\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" href=\"#\"\r\n        data-toggle=\"dropdown\">게시판</a>\r\n      <div class=\"dropdown-menu\"\r\n        style=\"left: 0px; top: 1px; position: absolute; transform: translate3d(-36px, 34px, 0px);\"\r\n        x-placement=\"bottom-start\">\r\n        <a class=\"dropdown-item text-success\" routerLink=\"/community\">자유게시판</a>\r\n      </div>\r\n    </li>\r\n\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n    <img src=\"../../../assets//Minecraft-Logo-500x281.jpg\" class=\"img\" onclick=\"location.href='/'\" />\r\n\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link  text-white\" href=\"/payshop\">&nbsp;&nbsp;&nbsp;Payshop</a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link text-white\" href=\"/\">메뉴5</a>\r\n    </li>\r\n\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle text-white\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" href=\"#\"\r\n        data-toggle=\"dropdown\">계정메뉴</a>\r\n      <div class=\"dropdown-menu\"\r\n        style=\"left: 0px; top: 1px; position: absolute; transform: translate3d(-27px, 34px, 0px);\"\r\n        x-placement=\"bottom-start\">\r\n        <a class=\"dropdown-item text-success\" routerLink=\"/register\">회원가입</a>\r\n        &nbsp;\r\n        <a class=\"dropdown-item text-success\" routerLink=\"/login\">로그인</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  &nbsp;\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payinfo/payinfo.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payinfo/payinfo.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onProceedSubmit()\">\n    <div class=\"form-group text-left\">\n        <label class=\"left\"> 이름 </label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"name\" />\n\n    </div>\n    <div class=\"form-group text-left\">\n        <label class=\"left\"> 마크닉네임(서버에 접속할 아이디) </label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"nickname\" />\n    </div>\n\n    <div class=\"form-group text-left\">\n        <label class=\"left\"> 이메일 </label>\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"email\" />\n    </div>\n\n\n\n    &nbsp;\n\n    <div class=\"form-group text-left\">\n        <label class=\"left\"> 카드번호 </label>\n        <input type=\"text\" [(ngModel)]=\"cardnumber\" name=\"cardnumber\" class=\"form-control\" placeholder=\"card-number\" />\n\n    </div>\n    <div class=\"form-group text-left\">\n        <label class=\"left\"> 유효기간 </label>\n        <input type=\"text\" [(ngModel)]=\"expire\" name=\"expire\" class=\"form-control\" placeholder=\"expire\" />\n    </div>\n\n    <div class=\"form-group text-left\">\n        <label class=\"left\"> 보안코드 </label>\n        <input type=\"number\" [(ngModel)]=\"secretnum\" name=\"secretnum\" class=\"form-control\" placeholder=\"secure code\" />\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-block btn-primary btn-lg \">\n        결제하기\n    </button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payshop/payshop.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payshop/payshop.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"UTF-8\">\n    <title> Payshop </title>\n\n    <script src=\"//developers.kakao.com/sdk/js/kakao.min.js\"></script>\n</head>\n\n<body>\n\n    <h1> kakaoPay api 이용하기 </h1>\n\n    <input type=\"button\" value=\"카카오페이로 결제하기\" ng-click=\"kakaopayready()\">\n\n\n\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/paysuccess/paysuccess.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/paysuccess/paysuccess.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>paysuccess works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"name\">\r\n  <h2 class=\"page-header\">{{ name }}</h2>\r\n  <ul class=\"iist-group\">\r\n    <li class=\"list-group-item\">Username:{{ username }}</li>\r\n    <li class=\"list-group-item\">Email:{{ email }}</li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/refundinfo/refundinfo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/refundinfo/refundinfo.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>refundinfo works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/refundsuccess/refundsuccess.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/refundsuccess/refundsuccess.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>refundsuccess works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--공백-->\r\n<div class=\"container text-center \">\r\n  <div class=\"ppap\">\r\n    <h2 class=\"view-title\">계정 만들기</h2>\r\n    &nbsp;\r\n    <p class=\"already\">\r\n      이미 계정이 있다면, <a class=\"alink\" routerLink=\"/login\">로그인하세요!</a>\r\n    </p>\r\n    <form (ngSubmit)=\"onRegisterSubmit()\">\r\n      <div class=\"form-group text-left\">\r\n        <label class=\"left\"> 아이디 </label>\r\n        <input\r\n          type=\"text\"\r\n          [(ngModel)]=\"name\"\r\n          name=\"name\"\r\n          class=\"form-control\"\r\n          placeholder=\"아이디를 입력해주세요\"\r\n        />\r\n        &nbsp;\r\n      </div>\r\n      <div class=\"form-group text-left\">\r\n        <label class=\"left\"> 닉네임(로그인에 사용될 아이디) </label>\r\n        <input\r\n          type=\"text\"\r\n          [(ngModel)]=\"username\"\r\n          name=\"username\"\r\n          class=\"form-control\"\r\n          placeholder=\"불건전한 닉네임은 사용할수 없습니다.\"\r\n        />\r\n      </div>\r\n      &nbsp;\r\n      <div class=\"form-group text-left\">\r\n        <label class=\"left\"> 이메일주소 </label>\r\n        <input\r\n          type=\"text\"\r\n          [(ngModel)]=\"email\"\r\n          name=\"email\"\r\n          class=\"form-control\"\r\n          placeholder=\"ex:) Hong5540@naver.com\"\r\n        />\r\n      </div>\r\n      &nbsp;\r\n      <div class=\"form-group text-left\">\r\n        <label class=\"left\"> 패스워드 </label>\r\n        <input\r\n          type=\"password\"\r\n          [(ngModel)]=\"password\"\r\n          name=\"password\"\r\n          class=\"form-control\"\r\n          placeholder=\"영대소문자 및 숫자, 특수기호 조합\"\r\n        />\r\n      </div>\r\n      &nbsp;\r\n\r\n      <div class=\"form-group text-left\">\r\n        <label> 패스워드 확인</label>\r\n        <input\r\n          type=\"password\"\r\n          [(ngModel)]=\"password2\"\r\n          name=\"password2\"\r\n          class=\"form-control\"\r\n        />\r\n\r\n        <div class=\"inputdate\">\r\n          <p>생년월일</p>\r\n          <label class=\"sr-only\">년</label>\r\n          <select name=\"year\" aria-required=\"true\">\r\n            <option value=\"0\">년</option>\r\n            <option value=\"2019\">2019</option>\r\n            <option value=\"2018\">2018</option>\r\n            <option value=\"2017\">2017</option>\r\n            <option value=\"2016\">2016</option>\r\n            <option value=\"2015\">2015</option>\r\n            <option value=\"2014\">2014</option>\r\n            <option value=\"2013\">2013</option>\r\n            <option value=\"2012\">2012</option>\r\n            <option value=\"2011\">2011</option>\r\n            <option value=\"2010\">2010</option>\r\n            <option value=\"2009\">2009</option>\r\n            <option value=\"2008\">2008</option>\r\n            <option value=\"2007\">2007</option>\r\n            <option value=\"2006\">2006</option>\r\n            <option value=\"2005\">2005</option>\r\n            <option value=\"2004\">2004</option>\r\n            <option value=\"2003\">2003</option>\r\n            <option value=\"2002\">2002</option>\r\n            <option value=\"2001\">2001</option>\r\n            <option value=\"2000\">2000</option>\r\n            <option value=\"1999\">1999</option>\r\n            <option value=\"1998\">1998</option>\r\n            <option value=\"1997\">1997</option>\r\n            <option value=\"1996\">1996</option>\r\n            <option value=\"1995\">1995</option>\r\n            <option value=\"1994\">1994</option>\r\n            <option value=\"1993\">1993</option>\r\n            <option value=\"1992\">1992</option>\r\n            <option value=\"1991\">1991</option>\r\n            <option value=\"1990\">1990</option>\r\n            <option value=\"1989\">1989</option>\r\n            <option value=\"1988\">1988</option>\r\n            <option value=\"1987\">1987</option>\r\n            <option value=\"1986\">1986</option>\r\n            <option value=\"1985\">1985</option>\r\n            <option value=\"1984\">1984</option>\r\n            <option value=\"1983\">1983</option>\r\n            <option value=\"1982\">1982</option>\r\n            <option value=\"1981\">1981</option>\r\n            <option value=\"1980\">1980</option>\r\n            <option value=\"1979\">1979</option>\r\n            <option value=\"1978\">1978</option>\r\n            <option value=\"1977\">1977</option>\r\n            <option value=\"1976\">1976</option>\r\n            <option value=\"1975\">1975</option>\r\n            <option value=\"1974\">1974</option>\r\n            <option value=\"1973\">1973</option>\r\n            <option value=\"1972\">1972</option>\r\n            <option value=\"1971\">1971</option>\r\n            <option value=\"1970\">1970</option>\r\n          </select>\r\n          &nbsp;\r\n          <label class=\"sr-only\">일</label>\r\n          <select name=\"day\" aria-required=\"true\" data-stickit-bind-bal=\"true\">\r\n            <option value=\"0\">일</option>\r\n            <option value=\"1\">1</option>\r\n            <option value=\"2\">2</option>\r\n            <option value=\"3\">3</option>\r\n            <option value=\"4\">4</option>\r\n            <option value=\"5\">5</option>\r\n            <option value=\"6\">6</option>\r\n            <option value=\"7\">7</option>\r\n            <option value=\"8\">8</option>\r\n            <option value=\"9\">9</option>\r\n            <option value=\"10\">10</option>\r\n            <option value=\"11\">11</option>\r\n            <option value=\"12\">12</option>\r\n            <option value=\"13\">13</option>\r\n            <option value=\"14\">14</option>\r\n            <option value=\"15\">15</option>\r\n            <option value=\"16\">16</option>\r\n            <option value=\"17\">17</option>\r\n            <option value=\"18\">18</option>\r\n            <option value=\"19\">19</option>\r\n            <option value=\"20\">20</option>\r\n            <option value=\"21\">21</option>\r\n            <option value=\"22\">22</option>\r\n            <option value=\"23\">23</option>\r\n            <option value=\"24\">24</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"26\">26</option>\r\n            <option value=\"27\">27</option>\r\n            <option value=\"28\">28</option>\r\n            <option value=\"29\">29</option>\r\n            <option value=\"30\">30</option>\r\n            <option value=\"31\">31</option>\r\n          </select>\r\n          &nbsp;\r\n          <label class=\"sr-only\">월</label>\r\n          <select name=\"month\" aria-required=\"true\">\r\n            <option value=\"0\">월</option>\r\n            <option value=\"1\">1월</option>\r\n            <option value=\"2\">2월</option>\r\n            <option value=\"3\">3월</option>\r\n            <option value=\"4\">4월</option>\r\n            <option value=\"5\">5월</option>\r\n            <option value=\"6\">6월</option>\r\n            <option value=\"7\">7월</option>\r\n            <option value=\"8\">8월</option>\r\n            <option value=\"9\">9월</option>\r\n            <option value=\"10\">10월</option>\r\n            <option value=\"11\">11월</option>\r\n            <option value=\"12\">12월</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"checkbox\">\r\n          <input type=\"checkbox\" class=\"plusdata\" />\r\n          <label class=\"plusdata\"\r\n            >&nbsp; 본인은 사용 데이터 수집에 동의합니다.\r\n          </label>\r\n          &nbsp;\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-block btn-primary btn-lg \">\r\n        계정 만들기\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"empty\">&nbsp;</div>\r\n<!--공백-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/writeboard/writeboard.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/writeboard/writeboard.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onWriteBoard()\">\r\n  <input\r\n    class=\"form-control\"\r\n    type=\"text\"\r\n    [(ngModel)]=\"title\"\r\n    title=\"제목을 입력해 주세요!\"\r\n    maxlength=\"29\"\r\n    id=\"title\"\r\n    name=\"title\"\r\n    value=\"\"\r\n  />\r\n  <input\r\n    type=\"text\"\r\n    [(ngModel)]=\"context\"\r\n    name=\"context\"\r\n    class=\"form-control\"\r\n    style=\"height: 284px; font-family: Gulim, sans-serif; font-size: 10pt; background: darkgray;\"\r\n    onfocus=\"if (parent.mwCore) {parent.mwCore.focusOnEditor();}\"\r\n    contenteditable=\"true\"\r\n  />\r\n\r\n  <p><br /></p>\r\n\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"작성완료\" />\r\n</form>\r\n\r\n<!--\r\n  <input\r\n  type=\"text\"\r\n  title=\"제목을 입력해 주세요!\"\r\n  maxlength=\"29\"\r\n  id=\"m_txtTitle\"\r\n  name=\"m_txtTitle\"\r\n  value=\"\"\r\n/>\r\n<body\r\n  class=\"se2_inputarea\"\r\n  style=\"height: 284px; font-family: Gulim, sans-serif; font-size: 10pt; background: darkgray;\"\r\n  onfocus=\"if (parent.mwCore) {parent.mwCore.focusOnEditor();}\"\r\n  contenteditable=\"true\"\r\n>\r\n  <p><br /></p>\r\n</body>\r\n<button\r\n  type=\"button\"\r\n  id=\"sendBtn\"\r\n  class=\"b do_send _c1(mwCore|sendMail) _ccr(wrt.send) _stopDefault save_mail\"\r\n>\r\n  x\r\n</button>\r\n--->\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_writeboard_writeboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/writeboard/writeboard.component */ "./src/app/components/writeboard/writeboard.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guards */ "./src/app/guards/auth.guards.ts");
/* harmony import */ var _components_payshop_payshop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/payshop/payshop.component */ "./src/app/components/payshop/payshop.component.ts");
/* harmony import */ var _components_payinfo_payinfo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/payinfo/payinfo.component */ "./src/app/components/payinfo/payinfo.component.ts");
/* harmony import */ var _components_paysuccess_paysuccess_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/paysuccess/paysuccess.component */ "./src/app/components/paysuccess/paysuccess.component.ts");
/* harmony import */ var _components_refundinfo_refundinfo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/refundinfo/refundinfo.component */ "./src/app/components/refundinfo/refundinfo.component.ts");
/* harmony import */ var _components_refundsuccess_refundsuccess_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/refundsuccess/refundsuccess.component */ "./src/app/components/refundsuccess/refundsuccess.component.ts");

















const routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: "navbar", component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    {
        path: "dashboard",
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: "board", component: _components_board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"] },
    { path: "writeboard", component: _components_writeboard_writeboard_component__WEBPACK_IMPORTED_MODULE_8__["WriteboardComponent"] },
    { path: "payshop", component: _components_payshop_payshop_component__WEBPACK_IMPORTED_MODULE_12__["PayshopComponent"] },
    { path: "payinfo", component: _components_payinfo_payinfo_component__WEBPACK_IMPORTED_MODULE_13__["PayinfoComponent"] },
    { path: "paysuccess", component: _components_paysuccess_paysuccess_component__WEBPACK_IMPORTED_MODULE_14__["PaysuccessComponent"] },
    { path: "refundinfo", component: _components_refundinfo_refundinfo_component__WEBPACK_IMPORTED_MODULE_15__["RefundinfoComponent"] },
    { path: "refundsuccess", component: _components_refundsuccess_refundsuccess_component__WEBPACK_IMPORTED_MODULE_16__["RefundsuccessComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bground {\n  background-color: black;\n  position: relative;\n  margin-top: 150px;\n  max-width: 62800px;\n  height: 140px;\n  margin-left: -1000px;\n  opacity: 0.9;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXHN0dWR5XFwz7ZWZ64WEIDLtlZnquLBcXOybueyVoO2UjOumrOy8gOydtOyFmOuztOyViFxcZm9yd2FyZFxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA2MjgwMHB4O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMDAwcHg7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiIsIi5iZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIG1heC13aWR0aDogNjI4MDBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMDAwcHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "TITLE";
        this.hello = "hello world";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guards */ "./src/app/guards/auth.guards.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _components_community_community_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/community/community.component */ "./src/app/components/community/community.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_writeboard_writeboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/writeboard/writeboard.component */ "./src/app/components/writeboard/writeboard.component.ts");
/* harmony import */ var _components_payshop_payshop_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/payshop/payshop.component */ "./src/app/components/payshop/payshop.component.ts");
/* harmony import */ var _components_paysuccess_paysuccess_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/paysuccess/paysuccess.component */ "./src/app/components/paysuccess/paysuccess.component.ts");
/* harmony import */ var _components_refundinfo_refundinfo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/refundinfo/refundinfo.component */ "./src/app/components/refundinfo/refundinfo.component.ts");
/* harmony import */ var _components_payinfo_payinfo_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/payinfo/payinfo.component */ "./src/app/components/payinfo/payinfo.component.ts");
/* harmony import */ var _components_refundsuccess_refundsuccess_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/refundsuccess/refundsuccess.component */ "./src/app/components/refundsuccess/refundsuccess.component.ts");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _components_community_community_component__WEBPACK_IMPORTED_MODULE_18__["CommunityComponent"],
            _components_board_board_component__WEBPACK_IMPORTED_MODULE_19__["BoardComponent"],
            _components_writeboard_writeboard_component__WEBPACK_IMPORTED_MODULE_20__["WriteboardComponent"],
            _components_payshop_payshop_component__WEBPACK_IMPORTED_MODULE_21__["PayshopComponent"],
            _components_paysuccess_paysuccess_component__WEBPACK_IMPORTED_MODULE_22__["PaysuccessComponent"],
            _components_refundinfo_refundinfo_component__WEBPACK_IMPORTED_MODULE_23__["RefundinfoComponent"],
            _components_payinfo_payinfo_component__WEBPACK_IMPORTED_MODULE_24__["PayinfoComponent"],
            _components_refundsuccess_refundsuccess_component__WEBPACK_IMPORTED_MODULE_25__["RefundsuccessComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__["FlashMessagesModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__["JwtModule"].forRoot({
                config: {
                    tokenGetter: () => {
                        return localStorage.getItem("id_token");
                    }
                }
            })
        ],
        providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__["FlashMessagesService"], _guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/board/board.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let BoardComponent = class BoardComponent {
    constructor(authservice) {
        this.authservice = authservice;
    }
    ngOnInit() {
        this.authservice.getBoard().subscribe(boards => {
            this.boards = boards;
        });
    }
};
BoardComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-board",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board.component.scss */ "./src/app/components/board/board.component.scss")).default]
    })
], BoardComponent);



/***/ }),

/***/ "./src/app/components/community/community.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/community/community.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbXVuaXR5L2NvbW11bml0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/community/community.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/community/community.component.ts ***!
  \*************************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommunityComponent = class CommunityComponent {
    constructor() { }
    ngOnInit() {
    }
};
CommunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-community',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./community.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/community/community.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./community.component.scss */ "./src/app/components/community/community.component.scss")).default]
    })
], CommunityComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
        this.userString = localStorage.getItem("user");
        this.user = JSON.parse(this.userString);
        this.name = this.user.name;
        this.token = localStorage.getItem("id_token");
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  width: 1500px;\n  height: 267px;\n  margin-left: 125px;\n}\n\n.btn:hover {\n  position: relative;\n  opacity: 0.8;\n}\n\n.btn:after {\n  background-color: rgba(0, 0, 0, 0.8);\n  box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);\n  border-radius: 5px;\n  transition: bottom 0.5s ease, opacity 0.5s ease;\n  color: #181212;\n  font-size: 12px;\n  padding: 7px 12px;\n  position: absolute;\n  margin-bottom: 10px;\n  width: 250px;\n  min-width: 50px;\n  max-width: 300px;\n  word-wrap: break-word;\n  color: white;\n  z-index: 9999;\n  opacity: 0;\n  left: -9999px;\n  top: 90%;\n  content: attr(text);\n}\n\n.btn:hover::after {\n  top: 130%;\n  left: 0;\n  opacity: 1;\n}\n\n.alert {\n  margin-top: 100px;\n  margin-left: -150px;\n  text-align: center;\n  width: 380px;\n  height: 110px;\n  border-radius: 15px;\n  padding: 1.5em 0.6em 0.3em;\n  font-size: 20px;\n  font-weight: bolder;\n  box-shadow: 1px 1px 3px 1px rgba(50, 50, 50, 0.4);\n  background: #5ccf61;\n  color: white;\n}\n\n.alert:hover {\n  text-align: center;\n  background-color: dimgray !important;\n  opacity: 0.8;\n  transition: background-color 0.7s ease, font-size 0.7s linear;\n  border-radius: 15px;\n  color: white;\n  transition: color 0.7s ease, font-size 0.7 linear;\n  width: 390px;\n  height: 115px;\n  transition: width 0.9s ease, font-size 0.9 linear;\n  transition: height 0.9s ease, font-size 0.9 linear;\n  box-shadow: 1px 1px 3px 1px rgba(50, 50, 50, 0.4);\n}\n\n.trash {\n  font-size: 14px;\n  font-weight: bolder;\n}\n\n.card {\n  height: 26 5px;\n  right: 0;\n  position: absolute;\n  margin-top: -155px;\n  margin-right: 525px;\n}\n\n.col-md-8 {\n  margin-left: 420px !important;\n  margin-top: -205px;\n}\n\n.bd-example {\n  margin-top: 250px;\n  margin-left: 750px;\n}\n\n.w-100 {\n  height: 220px;\n}\n\n.w-100:hover {\n  box-shadow: 2px 2px 3px 2px rgba(50, 50, 50, 0.4);\n  transition: box-shadow 0.5;\n  transition-delay: 0.5s;\n  transition: box-shadow 0.5s;\n  -moz-box-shadow-delay: 0.5s;\n  -webkit-box-shadow-delay: 0.5s;\n}\n\n.card-img {\n  width: -1000px;\n  height: 250px;\n  margin-left: -120px;\n}\n\n.col-md-4 {\n  margin-top: 8.5px;\n  margin-left: 6.5px;\n}\n\n.card:hover {\n  box-shadow: 2px 2px 3px 2px rgba(50, 50, 50, 0.4);\n  transition: box-shadow 0.5;\n  transition-delay: 0.5s;\n  transition: box-shadow 0.5s;\n  -moz-box-shadow-delay: 0.5s;\n  -webkit-box-shadow-delay: 0.5s;\n}\n\n.carousel {\n  margin-left: -370px;\n  width: 1000px;\n}\n\n.d-block {\n  height: 600px;\n  margin-top: 110px;\n}\n\n.abcd {\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  margin-top: 9px;\n}\n\n.subtitle {\n  margin-top: 140px;\n}\n\n.carousel-caption {\n  height: 570px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0U6XFxzdHVkeVxcM+2VmeuFhCAy7ZWZ6riwXFzsm7nslaDtlIzrpqzsvIDsnbTshZjrs7TslYhcXGZvcndhcmRcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVBO0VBQ0Usb0NBQUE7RUFJQSxpREFBQTtFQUlBLGtCQUFBO0VBSUEsK0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURLQTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBR0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURJQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7RUFHQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxrREFBQTtFQUdBLGlEQUFBO0FDREY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FEREE7RUFHRSxpREFBQTtFQUNBLDBCQUFBO0VBR0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNHRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QUREQTtFQUdFLGlEQUFBO0VBQ0EsMEJBQUE7RUFHQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURGQTtFQUNFLHNFQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhBO0VBQ0UsaUJBQUE7QUNNRjs7QURIQTtFQUNFLGFBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgLy/spJHqsIQg7IOB64uoICBkaXZcclxuICB3aWR0aDogMTUwMHB4O1xyXG4gIGhlaWdodDogMjY3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5idG46YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuXHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xyXG5cclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm90dG9tIDAuNXMgZWFzZSwgb3BhY2l0eSAwLjVzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBib3R0b20gMC41cyBlYXNlLCBvcGFjaXR5IDAuNXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBib3R0b20gMC41cyBlYXNlLCBvcGFjaXR5IDAuNXMgZWFzZTtcclxuICBjb2xvcjogIzE4MTIxMjtcclxuICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gIHBhZGRpbmc6IDdweCAxMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgb3BhY2l0eTogMDtcclxuICBsZWZ0OiAtOTk5OXB4O1xyXG4gIHRvcDogOTAlO1xyXG4gIGNvbnRlbnQ6IGF0dHIodGV4dCk7XHJcbn1cclxuLmJ0bjpob3Zlcjo6YWZ0ZXIge1xyXG4gIHRvcDogMTMwJTtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDM4MHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiAxLjVlbSAwLjZlbSAwLjNlbTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgYmFja2dyb3VuZDogcmdiKDkyLCAyMDcsIDk3KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmFsZXJ0OmhvdmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC43cyBlYXNlLCBmb250LXNpemUgMC43cyBsaW5lYXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC43cyBlYXNlLCBmb250LXNpemUgMC43IGxpbmVhcjtcclxuICB3aWR0aDogMzkwcHg7XHJcbiAgaGVpZ2h0OiAxMTVweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjlzIGVhc2UsIGZvbnQtc2l6ZSAwLjkgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjlzIGVhc2UsIGZvbnQtc2l6ZSAwLjkgbGluZWFyO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcclxufVxyXG4udHJhc2gge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5jYXJkIHtcclxuICBoZWlnaHQ6IDI2IDVweDtcclxuICByaWdodDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogLTE1NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNTI1cHg7XHJcbn1cclxuLmNvbC1tZC04IHtcclxuICBtYXJnaW4tbGVmdDogNDIwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAtMjA1cHg7XHJcbn1cclxuLmJkLWV4YW1wbGUge1xyXG4gIG1hcmdpbi10b3A6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NTBweDtcclxufVxyXG5cclxuLnctMTAwIHtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG59XHJcbi53LTEwMDpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDNweCAycHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAzcHggMnB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAycHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41O1xyXG5cclxuICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XHJcbiAgLW1vei1ib3gtc2hhZG93LWRlbGF5OiAwLjVzO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdy1kZWxheTogMC41cztcclxufVxyXG5cclxuLmNhcmQtaW1nIHtcclxuICB3aWR0aDogLTEwMDBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTIwcHg7XHJcbn1cclxuLmNvbC1tZC00IHtcclxuICBtYXJnaW4tdG9wOiA4LjVweDtcclxuICBtYXJnaW4tbGVmdDogNi41cHg7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggM3B4IDJweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDNweCAycHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDJweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjU7XHJcblxyXG4gIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC41cztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcclxuICAtbW96LWJveC1zaGFkb3ctZGVsYXk6IDAuNXM7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93LWRlbGF5OiAwLjVzO1xyXG59XHJcbi5jYXJvdXNlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zNzBweDtcclxuICB3aWR0aDogMTAwMHB4O1xyXG59XHJcbi5kLWJsb2NrIHtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDExMHB4O1xyXG59XHJcblxyXG4uYWJjZCB7XHJcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgXCJBcmlhbCBOYXJyb3cgQm9sZFwiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi10b3A6IDlweDtcclxufVxyXG4uc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDE0MHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgaGVpZ2h0OiA1NzBweDtcclxufVxyXG4iLCIucm93IHtcbiAgd2lkdGg6IDE1MDBweDtcbiAgaGVpZ2h0OiAyNjdweDtcbiAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5idG46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3R0b20gMC41cyBlYXNlLCBvcGFjaXR5IDAuNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBib3R0b20gMC41cyBlYXNlLCBvcGFjaXR5IDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuNXMgZWFzZSwgb3BhY2l0eSAwLjVzIGVhc2U7XG4gIGNvbG9yOiAjMTgxMjEyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDdweCAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogLTk5OTlweDtcbiAgdG9wOiA5MCU7XG4gIGNvbnRlbnQ6IGF0dHIodGV4dCk7XG59XG5cbi5idG46aG92ZXI6OmFmdGVyIHtcbiAgdG9wOiAxMzAlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYWxlcnQge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzgwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDEuNWVtIDAuNmVtIDAuM2VtO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiAjNWNjZjYxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbGVydDpob3ZlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC43cyBlYXNlLCBmb250LXNpemUgMC43cyBsaW5lYXI7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjdzIGVhc2UsIGZvbnQtc2l6ZSAwLjcgbGluZWFyO1xuICB3aWR0aDogMzkwcHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuOXMgZWFzZSwgZm9udC1zaXplIDAuOSBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjlzIGVhc2UsIGZvbnQtc2l6ZSAwLjkgbGluZWFyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcbn1cblxuLnRyYXNoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMjYgNXB4O1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTU1cHg7XG4gIG1hcmdpbi1yaWdodDogNTI1cHg7XG59XG5cbi5jb2wtbWQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA0MjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMjA1cHg7XG59XG5cbi5iZC1leGFtcGxlIHtcbiAgbWFyZ2luLXRvcDogMjUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3NTBweDtcbn1cblxuLnctMTAwIHtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuLnctMTAwOmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDNweCAycHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggM3B4IDJweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDJweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41O1xuICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcbiAgLW1vei1ib3gtc2hhZG93LWRlbGF5OiAwLjVzO1xuICAtd2Via2l0LWJveC1zaGFkb3ctZGVsYXk6IDAuNXM7XG59XG5cbi5jYXJkLWltZyB7XG4gIHdpZHRoOiAtMTAwMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW4tbGVmdDogLTEyMHB4O1xufVxuXG4uY29sLW1kLTQge1xuICBtYXJnaW4tdG9wOiA4LjVweDtcbiAgbWFyZ2luLWxlZnQ6IDYuNXB4O1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAzcHggMnB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDNweCAycHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAycHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNTtcbiAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XG4gIC1tb3otYm94LXNoYWRvdy1kZWxheTogMC41cztcbiAgLXdlYmtpdC1ib3gtc2hhZG93LWRlbGF5OiAwLjVzO1xufVxuXG4uY2Fyb3VzZWwge1xuICBtYXJnaW4tbGVmdDogLTM3MHB4O1xuICB3aWR0aDogMTAwMHB4O1xufVxuXG4uZC1ibG9jayB7XG4gIGhlaWdodDogNjAwcHg7XG4gIG1hcmdpbi10b3A6IDExMHB4O1xufVxuXG4uYWJjZCB7XG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFwiQXJpYWwgTmFycm93IEJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogOXB4O1xufVxuXG4uc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNDBweDtcbn1cblxuLmNhcm91c2VsLWNhcHRpb24ge1xuICBoZWlnaHQ6IDU3MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
        this.image1 = "../../../assets/1.jpg";
        this.image2 = "../../../assets/2.jpg";
        this.image3 = "../../../assets/3.jpg";
        this.image4 = "../../../assets/4.jpg";
        this.image5 = "../../../assets/5.jpg";
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  font-family: \"Noto Sans KR\", sans-serif;\n  max-width: 350px;\n  height: 50px;\n  font-size: 16px;\n  box-shadow: 1px 1px 3px 1px rgba(50, 50, 50, 0.4);\n  background: #008542;\n  color: white;\n  margin: 0 auto;\n}\n\n.btn:hover {\n  background-color: #201f1f !important;\n  opacity: 0.8;\n  transition: background-color 0.7s ease, font-size 0.7s linear;\n  color: white;\n  transition: color 0.7s ease, font-size 0.7 linear;\n  transition: width 0.9s ease, font-size 0.9 linear;\n  transition: height 0.9s ease, font-size 0.9 linear;\n  box-shadow: 1px 1px 3px 1px rgba(50, 50, 50, 0.4);\n}\n\n.page-header {\n  font-family: \"Noto Sans KR\", sans-serif;\n}\n\n.form-group {\n  width: 350px;\n  color: gray;\n  margin: 0 auto;\n}\n\n.container {\n  max-width: 99999px;\n  margin-top: 0px;\n  background: sandybrown;\n}\n\n.contactus {\n  background: black;\n  opacity: 0.8;\n  color: white;\n  text-align: center;\n  height: 85px;\n  width: 490px;\n}\n\n.already {\n  font-family: monospace;\n  font-weight: bold;\n}\n\n.alink:hover {\n  color: green;\n}\n\n.ppap {\n  background: white;\n  margin-top: 200px;\n  display: inline-block;\n  max-width: 2000px;\n  margin-bottom: 89px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9FOlxcc3R1ZHlcXDPtlZnrhYQgMu2Vmeq4sFxc7Ju57JWg7ZSM66as7LyA7J207IWY67O07JWIXFxmb3J3YXJkXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBR0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtFQUVBLFlBQUE7RUFDQSxpREFBQTtFQUNBLGlEQUFBO0VBQ0Esa0RBQUE7RUFHQSxpREFBQTtBQ0RGOztBREdBO0VBQ0UsdUNBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBRUEsY0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEtSXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgYmFja2dyb3VuZDogIzAwODU0MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzEsIDMxKSAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuN3MgZWFzZSwgZm9udC1zaXplIDAuN3MgbGluZWFyO1xyXG5cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC43cyBlYXNlLCBmb250LXNpemUgMC43IGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjlzIGVhc2UsIGZvbnQtc2l6ZSAwLjkgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjlzIGVhc2UsIGZvbnQtc2l6ZSAwLjkgbGluZWFyO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcclxufVxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBLUlwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgLy9mbG9hdDogbm9uZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA5OTk5OXB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kOiBzYW5keWJyb3duO1xyXG59XHJcbi5jb250YWN0dXMge1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDg1cHg7XHJcbiAgd2lkdGg6IDQ5MHB4O1xyXG59XHJcbi5hbHJlYWR5IHtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5hbGluazpob3ZlciB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5wcGFwIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvL+uniOynhC3tg5HsnLzroZwg7IOd6ri0IOqzteuwsSDssYTsmrDquLBcclxuICBtYXgtd2lkdGg6IDIwMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4OXB4O1xyXG59XHJcbiIsIi5idG4ge1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgS1JcIiwgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiAjMDA4NTQyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMWYxZiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC43cyBlYXNlLCBmb250LXNpemUgMC43cyBsaW5lYXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC43cyBlYXNlLCBmb250LXNpemUgMC43IGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC45cyBlYXNlLCBmb250LXNpemUgMC45IGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuOXMgZWFzZSwgZm9udC1zaXplIDAuOSBsaW5lYXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgS1JcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMzUwcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTk5OTlweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiBzYW5keWJyb3duO1xufVxuXG4uY29udGFjdHVzIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuODtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogODVweDtcbiAgd2lkdGg6IDQ5MHB4O1xufVxuXG4uYWxyZWFkeSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWxpbms6aG92ZXIge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wcGFwIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMjAwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4OXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let LoginComponent = class LoginComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() { }
    onLoginSubmit() {
        const login = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(login).subscribe(data => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.flashMessage.show("You are now logged in", {
                    cssClass: "alert-success",
                    timeout: 5000
                });
                this.router.navigate(["dashboard"]);
            }
            else {
                this.flashMessage.show(data.msg, {
                    cssClass: "alert-danger",
                    timeout: 5000
                });
                this.router.navigate(["login"]);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown:hover .dropdown-menu {\n  display: block;\n  opacity: 0.8;\n  padding: 0 0px;\n  line-height: 7px;\n  font-size: 13px;\n  text-align: center;\n  position: relative;\n  margin-top: 5px;\n}\n\n.img-responsive {\n  max-width: 100%;\n  height: auto;\n}\n\n.nav-link:hover {\n  color: #43bb2b !important;\n  opacity: 0.8;\n  transition: color 0.3s ease, font-size 0.3s linear;\n}\n\n.dropdown-item:hover {\n  background-color: rgba(106, 122, 209, 0) !important;\n  color: #1b1bc7 !important;\n  font-family: \"Noto Sans TC\", sans-serif;\n  font-weight: bold;\n}\n\n.dropdown-item {\n  margin-top: 6px;\n}\n\n.nav-item {\n  font-size: 20px;\n  margin-left: 45px;\n  margin-right: 45px;\n  font-family: \"Noto Sans TC\", sans-serif;\n}\n\n.img {\n  margin-top: -11px;\n  height: 80px;\n}\n\n.maindiv {\n  background: #1f201f;\n  max-height: 93px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvRTpcXHN0dWR5XFwz7ZWZ64WEIDLtlZnquLBcXOybueyVoO2UjOumrOy8gOydtOyFmOuztOyViFxcZm9yd2FyZFxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBRElBO0VBRUUsZUFBQTtFQUNBLFlBQUE7QUNGRjs7QURVQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0FDUEY7O0FEV0E7RUFDRSxtREFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtBQ1JGOztBRFVBO0VBQ0UsZUFBQTtBQ1BGOztBRFNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQ05GOztBRFNBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDTkY7O0FEUUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gIC8v65Oc656N64uk7Jq0IOyekOuPme2OvOy5mOq4sFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICAvL2hlaWdodDogMTlweDsg64aS7J206rOg7KCVXHJcbiAgcGFkZGluZzogMCAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDdweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmltZy1yZXNwb25zaXZlIHtcclxuICAvL+yggeydke2YlSDsnbTrr7jsp4BcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vLy5uYXYtaXRlbSB7XHJcbi8v66mU64m067CUXHJcbi8vbGluZS1oZWlnaHQ6IDE7XHJcbi8vfVxyXG5cclxuLm5hdi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDY3LCAxODcsIDQzKSAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIGZvbnQtc2l6ZSAwLjNzIGxpbmVhcjtcclxufVxyXG4vLyFpbXBvcnRhbnQg64qUIOq4sOyhtCDrtoDtirjsiqTtirjrnqnsl5Ag7KCV7J2Y65CcIGNzc+uztOuLpCDsmrDshKDsiJzsnITroZwg7KCB7Jqp7Iuc7YKk64qUIOqyg1xyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA2LCAxMjIsIDIwOSwgMCkgIWltcG9ydGFudDtcclxuICBjb2xvcjogcmdiKDI3LCAyNywgMTk5KSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBUQ1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLm5hdi1pdGVtIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBUQ1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBtYXJnaW4tdG9wOiAtMTFweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLm1haW5kaXYge1xyXG4gIGJhY2tncm91bmQ6IHJnYigzMSwgMzIsIDMxKTtcclxuICBtYXgtaGVpZ2h0OiA5M3B4O1xyXG59XHJcbiIsIi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmc6IDAgMHB4O1xuICBsaW5lLWhlaWdodDogN3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pbWctcmVzcG9uc2l2ZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzQzYmIyYiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSwgZm9udC1zaXplIDAuM3MgbGluZWFyO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA2LCAxMjIsIDIwOSwgMCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxYjFiYzcgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIFRDXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgVENcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmltZyB7XG4gIG1hcmdpbi10b3A6IC0xMXB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5tYWluZGl2IHtcbiAgYmFja2dyb3VuZDogIzFmMjAxZjtcbiAgbWF4LWhlaWdodDogOTNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let NavbarComponent = class NavbarComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() { }
    onLogoutClick() {
        this.authService.logout();
        this.flashMessage.show("Logout", {
            cssClass: "alert-success",
            timeout: 3000
        });
        this.router.navigate([""]);
        return false;
    }
    checkLoggedIn() {
        return this.authService.loggedIn();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/payinfo/payinfo.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/payinfo/payinfo.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5aW5mby9wYXlpbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/payinfo/payinfo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/payinfo/payinfo.component.ts ***!
  \*********************************************************/
/*! exports provided: PayinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayinfoComponent", function() { return PayinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");






let PayinfoComponent = class PayinfoComponent {
    constructor(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onProceedSubmit() {
        const user = {
            name: this.name,
            username: this.username,
            email: this.email
        };
        const card = {
            cardnumber: this.cardnumber,
            expire: this.expire,
            secretnum: this.secretnum
        };
        if (!this.validateService.validateProceed(user, card)) {
            this.flashMessage.show("모든 필드를 채워주세요", {
                cssClass: "alert-danger text-center",
                timeout: 3000
            });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("유효한 이메일 주소를 입력하세요", {
                cssClass: "alert-danger text-center",
                timeout: 3000
            });
            return false;
        }
    }
};
PayinfoComponent.ctorParameters = () => [
    { type: src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PayinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payinfo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payinfo/payinfo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payinfo.component.scss */ "./src/app/components/payinfo/payinfo.component.scss")).default]
    })
], PayinfoComponent);



/***/ }),

/***/ "./src/app/components/payshop/payshop.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/payshop/payshop.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5c2hvcC9wYXlzaG9wLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/payshop/payshop.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/payshop/payshop.component.ts ***!
  \*********************************************************/
/*! exports provided: PayshopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayshopComponent", function() { return PayshopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const HOST = "https://kapi.kakao.com";
let PayshopComponent = class PayshopComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        const httpheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Authorization": "0af0f3ff44cc213354ef88e1ab3d3494",
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        });
        let options = {
            headers: httpheader
        };
        let params = {
            "cid": "TC0ONETIME",
            "partner_order_id": "9999",
            "partner_user_id": "slackid",
            "item_name": "serverpass",
            "quantity": "1",
            "total_amount": "900",
            "tax_free_amount": "90",
            "approval_url": "http://localhost:4200/paymentsuccess",
            "cancel_url": "http://localhost:4200/paymentcancel",
            "fail_url": "http://localhost:4200/paymentfail"
        };
        console.log(this.http.post(HOST + "/v1/payment/ready", params, options));
        this.response = this.http.post(HOST + "/v1/payment/ready", params, options);
        let nexturl = this.response["next_redirect_pc_url"];
        console.log(this.response);
        return nexturl;
    }
    kakaopayprocess() {
    }
    kakaopayready() {
        const httpheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Authorization": "0af0f3ff44cc213354ef88e1ab3d3494",
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        });
        let options = {
            headers: httpheader
        };
        let params = {
            "cid": "TC0ONETIME",
            "partner_order_id": "9999",
            "partner_user_id": "slackid",
            "item_name": "serverpass",
            "quantity": "1",
            "total_amount": "900",
            "tax_free_amount": "90",
            "approval_url": "http://localhost:4200/paymentsuccess",
            "cancel_url": "http://localhost:4200/paymentcancel",
            "fail_url": "http://localhost:4200/paymentfail"
        };
        this.response = this.http.post(HOST + "/v1/payment/ready", params, options);
        let nexturl = this.response["next_redirect_pc_url"];
        console.log(nexturl);
        return nexturl;
    }
};
PayshopComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PayshopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payshop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payshop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payshop/payshop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payshop.component.scss */ "./src/app/components/payshop/payshop.component.scss")).default]
    })
], PayshopComponent);



/***/ }),

/***/ "./src/app/components/paysuccess/paysuccess.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/paysuccess/paysuccess.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5c3VjY2Vzcy9wYXlzdWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/paysuccess/paysuccess.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/paysuccess/paysuccess.component.ts ***!
  \***************************************************************/
/*! exports provided: PaysuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaysuccessComponent", function() { return PaysuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaysuccessComponent = class PaysuccessComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaysuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paysuccess',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paysuccess.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/paysuccess/paysuccess.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paysuccess.component.scss */ "./src/app/components/paysuccess/paysuccess.component.scss")).default]
    })
], PaysuccessComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.name = profile.user.name;
            this.username = profile.user.username;
            this.email = profile.user.email;
        }, err => {
            console.log(err);
            return false;
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/refundinfo/refundinfo.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/refundinfo/refundinfo.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVmdW5kaW5mby9yZWZ1bmRpbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/refundinfo/refundinfo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/refundinfo/refundinfo.component.ts ***!
  \***************************************************************/
/*! exports provided: RefundinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundinfoComponent", function() { return RefundinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RefundinfoComponent = class RefundinfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
RefundinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-refundinfo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./refundinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/refundinfo/refundinfo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./refundinfo.component.scss */ "./src/app/components/refundinfo/refundinfo.component.scss")).default]
    })
], RefundinfoComponent);



/***/ }),

/***/ "./src/app/components/refundsuccess/refundsuccess.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/refundsuccess/refundsuccess.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVmdW5kc3VjY2Vzcy9yZWZ1bmRzdWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/refundsuccess/refundsuccess.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/refundsuccess/refundsuccess.component.ts ***!
  \*********************************************************************/
/*! exports provided: RefundsuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundsuccessComponent", function() { return RefundsuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RefundsuccessComponent = class RefundsuccessComponent {
    constructor() { }
    ngOnInit() {
    }
};
RefundsuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-refundsuccess',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./refundsuccess.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/refundsuccess/refundsuccess.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./refundsuccess.component.scss */ "./src/app/components/refundsuccess/refundsuccess.component.scss")).default]
    })
], RefundsuccessComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".view-title {\n  font-family: \"Noto Sans KR\", sans-serif;\n}\n\n.form-group {\n  width: 550px;\n  color: gray;\n  margin: 0 auto;\n}\n\n.btn {\n  font-family: \"Noto Sans KR\", sans-serif;\n  height: 80px;\n  max-width: 650px;\n  font-size: 25px;\n  box-shadow: 1px 1px 3px 1px rgba(50, 50, 50, 0.4);\n  background: #008542;\n  color: white;\n  margin: 0 auto;\n}\n\n.btn:hover {\n  background-color: #201f1f !important;\n  opacity: 0.8;\n  transition: background-color 0.7s ease, font-size 0.7s linear;\n  color: white;\n  transition: color 0.7s ease, font-size 0.7 linear;\n  transition: width 0.9s ease, font-size 0.9 linear;\n  transition: height 0.9s ease, font-size 0.9 linear;\n  box-shadow: 1px 1px 3px 1px rgba(50, 50, 50, 0.4);\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 100%;\n  height: 1000px;\n  background: rgba(233, 230, 212, 0.233);\n}\n\n.plusdata {\n  margin-top: 40px;\n}\n\n.inputdate {\n  margin-top: 15px;\n}\n\n.already {\n  font-family: monospace;\n  font-weight: bold;\n}\n\n.alink:hover {\n  color: green;\n}\n\n.empty {\n  background: rgba(233, 230, 212, 0.233);\n}\n\n.empty2 {\n  background: rgba(233, 230, 212, 0.233);\n}\n\n.ppap {\n  margin-top: 200px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9FOlxcc3R1ZHlcXDPtlZnrhYQgMu2Vmeq4sFxc7Ju57JWg7ZSM66as7LyA7J207IWY67O07JWIXFxmb3J3YXJkXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxcY29tcG9uZW50c1xccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UsdUNBQUE7RUFJQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBR0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtFQUVBLFlBQUE7RUFDQSxpREFBQTtFQUNBLGlEQUFBO0VBQ0Esa0RBQUE7RUFHQSxpREFBQTtBQ0ZGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0Esc0NBQUE7QUNGRjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0Usc0NBQUE7QUNHRjs7QURBQTtFQUNFLHNDQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXctdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBLUlwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICB3aWR0aDogNTUwcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luOiAwIGF1dG87IC8v6rCA7Jq0642wIOygleugrFxyXG59XHJcblxyXG4uYnRuIHtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgS1JcIiwgc2Fucy1zZXJpZjtcclxuICAvL21hcmdpbi10b3A6IDcwcHg7XHJcbiAgLy9tYXJnaW4tbGVmdDogLTQwcHg7XHJcblxyXG4gIGhlaWdodDogODBweDtcclxuICBtYXgtd2lkdGg6IDY1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgYmFja2dyb3VuZDogIzAwODU0MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzEsIDMxKSAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuN3MgZWFzZSwgZm9udC1zaXplIDAuN3MgbGluZWFyO1xyXG5cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC43cyBlYXNlLCBmb250LXNpemUgMC43IGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjlzIGVhc2UsIGZvbnQtc2l6ZSAwLjkgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjlzIGVhc2UsIGZvbnQtc2l6ZSAwLjkgbGluZWFyO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNCk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gIGhlaWdodDogMTAwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMzAsIDIxMiwgMC4yMzMpO1xyXG59XHJcbi5wbHVzZGF0YSB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uaW5wdXRkYXRlIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5hbHJlYWR5IHtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5hbGluazpob3ZlciB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5lbXB0eSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDIzMCwgMjEyLCAwLjIzMyk7XHJcbn1cclxuXHJcbi5lbXB0eTIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMzAsIDIxMiwgMC4yMzMpO1xyXG59XHJcbi5wcGFwIHtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8v66eI7KeELe2DkeycvOuhnCDsg53quLQg6rO167CxIOyxhOyasOq4sFxyXG59XHJcbiIsIi52aWV3LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEtSXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDU1MHB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5idG4ge1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgS1JcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiAjMDA4NTQyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMWYxZiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC43cyBlYXNlLCBmb250LXNpemUgMC43cyBsaW5lYXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC43cyBlYXNlLCBmb250LXNpemUgMC43IGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC45cyBlYXNlLCBmb250LXNpemUgMC45IGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuOXMgZWFzZSwgZm9udC1zaXplIDAuOSBsaW5lYXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC40KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMzAsIDIxMiwgMC4yMzMpO1xufVxuXG4ucGx1c2RhdGEge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uaW5wdXRkYXRlIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmFscmVhZHkge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFsaW5rOmhvdmVyIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZW1wdHkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjMwLCAyMTIsIDAuMjMzKTtcbn1cblxuLmVtcHR5MiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMzAsIDIxMiwgMC4yMzMpO1xufVxuXG4ucHBhcCB7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegisterComponent = class RegisterComponent {
    constructor(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    onRegisterSubmit() {
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            password2: this.password2
        };
        //Require Fileds
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("모든 필드를 채워주세요", {
                cssClass: "alert-danger text-center",
                timeout: 3000
            });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("유효한 이메일 주소를 입력하세요", {
                cssClass: "alert-danger text-center",
                timeout: 3000
            });
            return false;
        }
        //비밀번호 가 다를시
        if (this.password != this.password2) {
            this.flashMessage.show("두 비밀번호가 일치하지 않습니다. ", {
                cssClass: "alert-danger text-center",
                timeout: 3000
            });
        }
        //Register User
        this.authService.registerUser(user).subscribe(data => {
            if (data.success) {
                if (this.password == this.password2) {
                    this.flashMessage.show("가입에 성공하셨습니다 정상적으로 서비스 이용이 가능합니다. ", {
                        cssClass: "alert-success text-center",
                        timeout: 3000
                    });
                    this.router.navigate(["/login"]);
                }
            }
            else {
                this.flashMessage.show("동일한 아이디가 존재합니다.", {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
                this.router.navigate(["/register"]);
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/writeboard/writeboard.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/writeboard/writeboard.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd3JpdGVib2FyZC93cml0ZWJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/writeboard/writeboard.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/writeboard/writeboard.component.ts ***!
  \***************************************************************/
/*! exports provided: WriteboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteboardComponent", function() { return WriteboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






let WriteboardComponent = class WriteboardComponent {
    constructor(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        //TODO today Date format 맞추기
        this.today = Date.now();
    }
    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.userwriter = profile.user.username;
        }, err => {
            console.log(err);
            return false;
        });
    }
    onWriteBoard() {
        const board = {
            title: this.title,
            context: this.context,
            writer: this.userwriter,
            date: this.today
        };
        if (!this.validateService.vaildateBoard(board)) {
            this.flashMessage.show("모든 필드를 채워주세요", {
                cssClass: "alert-danger",
                timeout: 3000
            });
            return false;
        }
        this.authService.writeboard(board).subscribe(data => {
            if (data.success) {
                this.flashMessage.show("글쓰기 완료", {
                    cssClass: "alert-success",
                    timeout: 3000
                });
                this.router.navigate["/board"];
            }
        });
    }
};
WriteboardComponent.ctorParameters = () => [
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
WriteboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-writeboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./writeboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/writeboard/writeboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./writeboard.component.scss */ "./src/app/components/writeboard/writeboard.component.scss")).default]
    })
], WriteboardComponent);



/***/ }),

/***/ "./src/app/guards/auth.guards.ts":
/*!***************************************!*\
  !*** ./src/app/guards/auth.guards.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["login"]);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
let AuthService = class AuthService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    prepEndpoint(ep) {
        // 1. localhost에 포팅시
        return "http://localhost:3000/" + ep;
        // 2. Heroku 클라우드 서버에 포팅시
        // return ep;
    }
    registerUser(user) {
        const registerUrl = this.prepEndpoint("users/register");
        return this.http.post(registerUrl, user, httpOptions);
    }
    writeboard(board) {
        const boardurl = this.prepEndpoint("addbor/addborcontext");
        return this.http.post(boardurl, board, httpOptions);
    }
    authenticateUser(login) {
        const loginUrl = this.prepEndpoint("users/authenticate");
        return this.http.post(loginUrl, login, httpOptions);
    }
    getProfile() {
        this.authToken = localStorage.getItem("id_token");
        const httpOptions1 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: this.authToken
            })
        };
        const profileUrl = this.prepEndpoint("users/profile");
        return this.http.get(profileUrl, httpOptions1);
    }
    getboradtitle() {
        const httpOptions2 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
        const boardurl = this.prepEndpoint("addbor/board");
        return this.http.get(boardurl, httpOptions2);
    }
    storeUserData(token, user) {
        localStorage.setItem("id_token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
    loggedIn() {
        return !this.jwtHelper.isTokenExpired(this.authToken);
    }
    getBoard() {
        const bbord = this.prepEndpoint("addbor/board");
        return this.http.get(bbord, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidateService = class ValidateService {
    constructor() { }
    validateRegister(user) {
        if (user.name == undefined ||
            user.email == undefined ||
            user.username == undefined ||
            user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateProceed(user, card) {
        if (user.name == undefined ||
            user.email == undefined ||
            user.username == undefined ||
            card.cardnumber == undefined ||
            card.expire == undefined ||
            card.secretnum == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    vaildateBoard(board) {
        if (board.title == undefined || board.context == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
};
ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ValidateService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\study\3학년 2학기\웹애플리케이션보안\forward\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map