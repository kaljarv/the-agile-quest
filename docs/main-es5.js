(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkthe_data_imperative_game"] = self["webpackChunkthe_data_imperative_game"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _pages_title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages/title-screen/title-screen.component */
      74526);
      /* harmony import */


      var _pages_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/game */
      51342);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _pages_title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_0__.TitleScreenComponent
      }, {
        path: 'start',
        component: _pages_title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_0__.TitleScreenComponent
      }, {
        path: 'game',
        component: _pages_game__WEBPACK_IMPORTED_MODULE_1__.GameComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var _shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/shared.service */
      77420);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      function AppComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
        }
      }

      function AppComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
        }
      }

      var _AppComponent = function _AppComponent(shared) {
        var _this = this;

        _classCallCheck(this, _AppComponent);

        this.shared = shared;
        this.isLoading = true;
        this.shared.ready.subscribe(function (value) {
          _this.isLoading = !value;
        });
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 2,
        consts: [["class", "loading", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "loading"], [1, "content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 1, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
        styles: [".loading[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 0.5rem;\n  top: calc(50vh - 0.5rem);\n  left: 25vw;\n  right: 25vw;\n  bottom: calc(50vh - 0.5rem);\n  background: linear-gradient(270deg, rgba(220, 202, 88, 0.25), #dcca58, rgba(220, 202, 88, 0.25));\n  background-size: 200% 100%;\n  background-repeat: no-repeat;\n  animation: DataFlow 2s linear reverse infinite;\n}\n@-webkit-keyframes DataFlow {\n  0% {\n    background-position: 200% 0%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n@keyframes DataFlow {\n  0% {\n    background-position: 200% 0%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRkEsbUJBQUE7QUFtRkEsV0FBQTtBQ2pLQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxnR0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtBQUFGO0FBRUE7RUFDRTtJQUNFLDRCQUFBO0VBQ0Y7RUFBQTtJQUNFLDBCQUFBO0VBRUY7QUFDRjtBQVBBO0VBQ0U7SUFDRSw0QkFBQTtFQUNGO0VBQUE7SUFDRSwwQkFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2Fzczpjb2xvcic7XG5AdXNlICd+QGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcblxuJGZvbnRJbmNyZW1lbnQtTTogICAxMjAlO1xuXG4kZm9udEZhbWlseS1wcmltYXJ5OiAnWWFudHJhbWFuYXYnLCBzYW5zLXNlcmlmO1xuXG4kY29sb3ItcHJpbWFyeTogICAgIHdoaXRlO1xuJGNvbG9yLW9uUHJpbWFyeTogICBibGFjaztcbiRjb2xvci1wcmltYXJ5Qmc6ICAgYmxhY2s7XG4kY29sb3ItcHJpbWFyeUJnRmFkZWQ6ICBjb2xvci5jaGFuZ2UoJGNvbG9yLXByaW1hcnlCZywgJGFscGhhOiAwLjUpO1xuJGNvbG9yLWFjY2VudDogICAgICAjZGNjYTU4O1xuJGNvbG9yLWFjY2VudERhcmtlcjogY29sb3IuY2hhbmdlKCRjb2xvci1hY2NlbnQsICRsaWdodG5lc3M6IDQwJSk7XG4kY29sb3Itc2Vjb25kYXJ5OiAgIGNvbG9yLm1peCgkY29sb3Itb25QcmltYXJ5LCAkY29sb3ItcHJpbWFyeSwgNjAlKTtcblxuJGFscGhhLW92ZXJsYXk6IDAuODtcbiRhbHBoYS1idXR0b25CZzogMC4xNTtcbiRhbHBoYS1mYWRlZDogMC4zO1xuJG9wYWNpdHktZGlzYWJsZWQ6IDAuNTtcblxuJGZvbnRTaXplLVhTOiAwLjcycmVtO1xuJGZvbnRTaXplLVM6ICAwLjhyZW07XG4kZm9udFNpemUtTTogIDFyZW07XG4kZm9udFNpemUtTDogIDEuMnJlbTtcbiRmb250U2l6ZS1YTDogMS41cmVtO1xuJGZvbnRTaXplLVhYTDogMy41cmVtO1xuXG4kZm9udFdlaWdodC1NOiA1MDA7XG4kZm9udFdlaWdodC1MOiA5MDA7XG5cbiRmb250U2l6ZS1pY29uTDogMzJweDtcblxuJGxpbmVIZWlnaHQtUzogMS4xO1xuJGxpbmVIZWlnaHQtTTogMS4zO1xuXG4kYm9yZGVyV2lkdGgtUzogMXB4O1xuJGJvcmRlcldpZHRoLU06IDJweDtcbiRib3JkZXJXaWR0aC1MOiAzcHg7XG5cbiRib3JkZXItUzogJGJvcmRlcldpZHRoLVMgc29saWQgJGNvbG9yLXByaW1hcnk7XG4kYm9yZGVyLU06ICRib3JkZXJXaWR0aC1NIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuJGJvcmRlci1MOiAkYm9yZGVyV2lkdGgtTCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcblxuJGJvcmRlclJhZGl1cy1NOiA0cHg7XG4kYm9yZGVyUmFkaXVzLVhMOiAxLjVyZW07XG5cbiRib3hTaGFkb3ctTTogMCA2cHggMnB4IC00cHggcmdiYSgwLDAsMCwuMiksIDAgNHB4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcblxuJG1hcmdpbi1YUzogIDAuMjVyZW07XG4kbWFyZ2luLVM6ICAgMC41cmVtO1xuJG1hcmdpbi1NOiAgIDFyZW07XG4kbWFyZ2luLUw6ICAgMS41cmVtO1xuJG1hcmdpbi1YTDogIDNyZW07XG4kbWFyZ2luLVhYTDogNnJlbTtcblxuJG1heFdpZHRoLVM6IDI1cmVtO1xuJG1heFdpZHRoLU06IDM4cmVtO1xuJG1heFdpZHRoLUw6IDQwcmVtO1xuJG1heFdpZHRoLVhMOiA2MHJlbTsgXG5cbiRhbmltYXRpb25FYXNpbmc6IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4kYW5pbWF0aW9uRHVyYXRpb24tTTogMjI1bXM7XG4kYW5pbWF0aW9uRHVyYXRpb24tWEw6IDcwMG1zO1xuJGFuaW1hdGlvblRpbWluZy1NOiAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuJGFuaW1hdGlvblRpbWluZy1YTDogJGFuaW1hdGlvbkR1cmF0aW9uLVhMICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LU06ICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LVhMOiAkYW5pbWF0aW9uRHVyYXRpb24tWEwgJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcblxuJHpJbmRleC0xMDogMTAwMDtcbiR6SW5kZXgtOTogOTAwOyAvLyBQb3B1cHNcbiR6SW5kZXgtODogODAwOyAvLyBcbiR6SW5kZXgtNzogNzAwOyAvLyBcbiR6SW5kZXgtNjogNjAwOyAvLyBcbiR6SW5kZXgtNTogNTAwOyAvLyBDYXJkc1xuJHpJbmRleC00OiA0MDA7IC8vIFxuJHpJbmRleC0zOiAzMDA7IC8vIFxuJHpJbmRleC0yOiAyMDA7IC8vXG4kekluZGV4LTE6IDEwMDsgLy9cbiR6SW5kZXgtMDogMDtcblxuXG4vKiBNYXRlcmlhbCB0aGVtZSAqL1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvdHlwb2dyYXBoeVxuLy8gVXNhZ2U6IEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkYXBwLXR5cG9ncmFwaHksIHRpdGxlKVxuJGFwcC10eXBvZ3JhcGh5OiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICRmb250RmFtaWx5LXByaW1hcnlcbik7XG5cbi8vIEN1c3RvbSBwYWxldHRlcyBhbmQgdGhlbWVcbi8vIFNlZSBodHRwOi8vbWNnLm1iaXRzb24uY29tL1xuXG4vLyBCYXNlIGNvbG91cjogJGNvbG9yLXByaW1hcnkgLyAjZmZmXG4kcGFsZXR0ZS1wcmltYXJ5OiBtYXQuZGVmaW5lLXBhbGV0dGUoKFxuICAgIDUwIDogI2ZmZmZmZixcbiAgICAxMDAgOiAjZmZmZmZmLFxuICAgIDIwMCA6ICNmZmZmZmYsXG4gICAgMzAwIDogI2ZmZmZmZixcbiAgICA0MDAgOiAjZmZmZmZmLFxuICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgNjAwIDogI2ZmZmZmZixcbiAgICA3MDAgOiAjZmZmZmZmLFxuICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgOTAwIDogI2ZmZmZmZixcbiAgICBBMTAwIDogI2ZmZmZmZixcbiAgICBBMjAwIDogI2ZmZmZmZixcbiAgICBBNDAwIDogI2ZmZmZmZixcbiAgICBBNzAwIDogI2ZmZmZmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICAgIDYwMCA6ICMwMDAwMDAsXG4gICAgICAgIDcwMCA6ICMwMDAwMDAsXG4gICAgICAgIDgwMCA6ICMwMDAwMDAsXG4gICAgICAgIDkwMCA6ICMwMDAwMDAsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbikpO1xuXG4vLyBCYXNlIGNvbG91cjogJGNvbG9yLWFjY2VudCAvICNkY2NhNThcbiRwYWxldHRlLWFjY2VudDogbWF0LmRlZmluZS1wYWxldHRlKChcbiAgNTAgOiAjZmJmOWViLFxuICAxMDAgOiAjZjVlZmNkLFxuICAyMDAgOiAjZWVlNWFjLFxuICAzMDAgOiAjZTdkYThhLFxuICA0MDAgOiAjZTFkMjcxLFxuICA1MDAgOiAjZGNjYTU4LFxuICA2MDAgOiAjZDhjNTUwLFxuICA3MDAgOiAjZDNiZDQ3LFxuICA4MDAgOiAjY2ViNzNkLFxuICA5MDAgOiAjYzVhYjJkLFxuICBBMTAwIDogI2ZmZmZmZixcbiAgQTIwMCA6ICNmZmY3ZDQsXG4gIEE0MDAgOiAjZmZlZWExLFxuICBBNzAwIDogI2ZmZTk4NyxcbiAgY29udHJhc3Q6IChcbiAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgNjAwIDogIzAwMDAwMCxcbiAgICAgIDcwMCA6ICMwMDAwMDAsXG4gICAgICA4MDAgOiAjMDAwMDAwLFxuICAgICAgOTAwIDogIzAwMDAwMCxcbiAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICApXG4pKTtcblxuJHBhbGV0dGUtd2FybjogbWF0LmRlZmluZS1wYWxldHRlKG1hdC4kcmVkLXBhbGV0dGUsIEEyMDApO1xuJGFwcC10aGVtZTogbWF0LmRlZmluZS1saWdodC10aGVtZSgkcGFsZXR0ZS1wcmltYXJ5LCAkcGFsZXR0ZS1hY2NlbnQsICRwYWxldHRlLXdhcm4pO1xuXG4vKiBNaXhpbnMgKi9cblxuQG1peGluIGFsbENhcHMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xufVxuXG5AbWl4aW4gYnV0dG9uT25XaGl0ZSB7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLmNoYW5nZSgkY29sb3ItcHJpbWFyeSwgJGFscGhhOiAwLjUgKiAkYWxwaGEtYnV0dG9uQmcpO1xuICB9IFxufVxuXG5AbWl4aW4gYnV0dG9uT25Db2xvciB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn0iLCJAdXNlICdzYXNzOmNvbG9yJ1xuQGltcG9ydCAndmFyaWFibGVzLnNjc3MnXG5cbi5sb2FkaW5nXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICBib3JkZXItcmFkaXVzOiAwLjVyZW1cbiAgdG9wOiBjYWxjKDUwdmggLSAwLjVyZW0pXG4gIGxlZnQ6IDI1dndcbiAgcmlnaHQ6IDI1dndcbiAgYm90dG9tOiBjYWxjKDUwdmggLSAwLjVyZW0pXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICN7Y29sb3IuY2hhbmdlKCRjb2xvci1hY2NlbnQsICRhbHBoYTowLjI1KX0sICN7JGNvbG9yLWFjY2VudH0sICN7Y29sb3IuY2hhbmdlKCRjb2xvci1hY2NlbnQsICRhbHBoYTowLjI1KX0pXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgYW5pbWF0aW9uOiBEYXRhRmxvdyAycyBsaW5lYXIgcmV2ZXJzZSBpbmZpbml0ZVxuXG5Aa2V5ZnJhbWVzIERhdGFGbG93XG4gIDAlXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwJVxuICAxMDAlXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCUiXX0= */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fadeInOut', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 0
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 1
          }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 1
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 0
          }))])])]
        }
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _pages_title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/title-screen/title-screen.component */
      74526);
      /* harmony import */


      var _pages_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/game */
      51342);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared */
      51679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [_shared__WEBPACK_IMPORTED_MODULE_4__.SharedService, _shared__WEBPACK_IMPORTED_MODULE_4__.D3Service],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _pages_game__WEBPACK_IMPORTED_MODULE_3__.GameModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_2__.TitleScreenComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _pages_game__WEBPACK_IMPORTED_MODULE_3__.GameModule]
        });
      })();
      /***/

    },

    /***/
    50270:
    /*!**********************************************!*\
      !*** ./src/app/pages/game/game.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GameComponent": function GameComponent() {
          return (
            /* binding */
            _GameComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _value_gauge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./value-gauge.component */
      39967);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _strategy_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./strategy-card.component */
      38269);
      /* harmony import */


      var _ribbon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ribbon.component */
      17471);

      function GameComponent_app_value_gauge_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-value-gauge", 19);
        }

        if (rf & 2) {
          var indicator_r8 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", indicator_r8.value)("previousValue", indicator_r8.previousValue)("titleBottom", indicator_r8.titleBottom)("titleTop", indicator_r8.titleTop)("min", indicator_r8.minValue)("max", indicator_r8.maxValue)("matTooltip", ctx_r0.t(indicator_r8.toolTip));
        }
      }

      function GameComponent_section_3_app_strategy_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-strategy-card", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cardLocked", function GameComponent_section_3_app_strategy_card_1_Template_app_strategy_card_cardLocked_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var card_r10 = restoredCtx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r11.onCardLocked(card_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var card_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", card_r10.title)("description", card_r10.description)("descriptionBack", card_r10.feedback)("flipped", card_r10.flipped)("locked", card_r10.locked)("disabled", true);
        }
      }

      function GameComponent_section_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameComponent_section_3_Template_section_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13.goToPreviousRound($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GameComponent_section_3_app_strategy_card_1_Template, 1, 6, "app-strategy-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@previousCards", undefined)("@previousCardsFade", ctx_r1.showLoadStrategyCardsDialog ? "faded" : "normal");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.previousStrategyCards);
        }
      }

      function GameComponent_section_4_app_strategy_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-strategy-card", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cardLocked", function GameComponent_section_4_app_strategy_card_1_Template_app_strategy_card_cardLocked_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var card_r16 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r17.onCardLocked(card_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var card_r16 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", card_r16.title)("description", card_r16.description)("descriptionBack", card_r16.feedback)("flipped", card_r16.flipped)("locked", card_r16.locked)("disabled", ctx_r15.inFeedbackPhase);
        }
      }

      function GameComponent_section_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GameComponent_section_4_app_strategy_card_1_Template, 1, 6, "app-strategy-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@currentCards", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.strategyCards);
        }
      }

      function GameComponent_section_5_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameComponent_section_5_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r21.loadStrategyCards();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r19.t("Show Available Strategies"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        }
      }

      function GameComponent_section_5_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameComponent_section_5_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r23.startOver();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r20.t("Start a New Game"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        }
      }

      function GameComponent_section_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GameComponent_section_5_button_1_Template, 1, 1, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameComponent_section_5_button_2_Template, 1, 1, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.gameOver);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.gameOver);
        }
      }

      function GameComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "h1", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@scenario", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r4.t(ctx_r4.scenario.title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r4.t(ctx_r4.scenario.description), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        }
      }

      function GameComponent_app_value_gauge_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-value-gauge", 30);
        }

        if (rf & 2) {
          var indicator_r25 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", indicator_r25.value)("previousValue", indicator_r25.previousValue)("titleBottom", indicator_r25.titleBottom)("titleTop", indicator_r25.titleTop)("min", indicator_r25.minValue)("max", indicator_r25.maxValue)("matTooltip", ctx_r5.t(indicator_r25.toolTip));
        }
      }

      function GameComponent_app_ribbon_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-ribbon", 31);
        }

        if (rf & 2) {
          var ribbon_r26 = ctx.$implicit;
          var i_r27 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r6.getRibbonTop(i_r27));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ribbon_r26.title)("matTooltip", ctx_r6.t(ribbon_r26.description))("@ribbon", undefined);
        }
      }

      function GameComponent_section_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameComponent_section_21_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r28.bottomDialog.confirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r7.t(ctx_r7.bottomDialog.text), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        }
      }

      var DATA_KEY_VERSION = 'v';
      var DATA_KEY_SHOWREPORT = 'r';
      var DATA_SEPARATOR = ',';
      var DATA_KEY_STRATEGIES = 's';
      var ROUND_BASE = 1;
      var ANIMATION_DURATION_PREVIOUS_CARDS_MS = 450;
      var ANIMATION_TIMING_PREVIOUS_CARDS_MS = "".concat(ANIMATION_DURATION_PREVIOUS_CARDS_MS, "ms ").concat(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_EASING);
      var ROUND_START_SCHEDULE_MS = {
        hidePreviousStrategies: 225,
        initIndicators: 700
      };
      ROUND_START_SCHEDULE_MS.showPreviousStrategies = ROUND_START_SCHEDULE_MS.hidePreviousStrategies + ANIMATION_DURATION_PREVIOUS_CARDS_MS;
      ROUND_START_SCHEDULE_MS.hideScenario = ROUND_START_SCHEDULE_MS.showPreviousStrategies + ANIMATION_DURATION_PREVIOUS_CARDS_MS - 125;
      ROUND_START_SCHEDULE_MS.showScenario = ROUND_START_SCHEDULE_MS.hideScenario + ANIMATION_DURATION_PREVIOUS_CARDS_MS;
      ROUND_START_SCHEDULE_MS.showLoadStrategies = ROUND_START_SCHEDULE_MS.showScenario + 2000;
      ROUND_START_SCHEDULE_MS.fadeOutIndicators = ROUND_START_SCHEDULE_MS.showLoadStrategies;
      /*
       * For convenience
       */

      function sum(arr) {
        return arr.reduce(function (a, b) {
          return a + b;
        }, 0);
      }

      function clamp(num) {
        var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return num <= min ? min : num >= max ? max : num;
      }

      var _GameComponent = /*#__PURE__*/function () {
        function _GameComponent(route, router, shared) {
          _classCallCheck(this, _GameComponent);

          this.route = route;
          this.router = router;
          this.shared = shared;
          this.inFeedbackPhase = false;
          this.performanceIndicators = [];
          this.organisationalAttributes = [];
          this.playedScenarios = [];
          this.playedStrategies = [];
          this.previousStrategyCards = [];
          this.ribbons = [];
          this.roundStarting = false;
          this.showLoadStrategyCardsDialog = false;
          this.showPreviousStrategyCards = false;
          this.showReport = false;
          this.showScenario = false;
          this.showStrategyCards = false;
          this.strategyCards = [];
          this._subscriptions = new Array();
          this.resetState();
        }

        _createClass(_GameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.readParams(); // We need to explicitly read the params whenever navigating
            // as onInit won't be called while we stay on the same page

            this._subscriptions.push(this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (evt) {
              return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd;
            })).subscribe(function () {
              return _this2.readParams();
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
          /**************************************
           * GETTERS                            *
           **************************************/

          /*
           * Note that round is ROUND_BASE-based (= 1)
           */

        }, {
          key: "round",
          get: function get() {
            return this.rawRound + ROUND_BASE;
          }
        }, {
          key: "lastRound",
          get: function get() {
            return this.shared.settings.rounds;
          }
          /*
           * The absolute round without ROUND_BASE
           */

        }, {
          key: "rawRound",
          get: function get() {
            return this.playedStrategies.length;
          }
        }, {
          key: "isFirstRound",
          get: function get() {
            return this.rawRound === 0;
          }
        }, {
          key: "roundsLeft",
          get: function get() {
            return this.shared.settings.rounds - this.rawRound;
          }
        }, {
          key: "roundsUsedPercentage",
          get: function get() {
            return (this.rawRound + 1) / this.shared.settings.rounds * 100;
          }
        }, {
          key: "gameOver",
          get: function get() {
            return (this.roundsLeft <= 0 || !this.scenario.strategies || this.scenario.strategies.length === 0) && !this.showReport;
          }
        }, {
          key: "latestStrategy",
          get: function get() {
            if (this.playedStrategies.length === 0) return null;
            return this.playedStrategies[this.playedStrategies.length - 1];
          }
        }, {
          key: "previousScenario",
          get: function get() {
            return this.playedScenarios.length > 1 ? this.playedScenarios[this.playedScenarios.length - 2] : null;
          }
        }, {
          key: "scenario",
          get: function get() {
            return this.playedScenarios[this.playedScenarios.length - 1];
          }
          /*
           * Get the top position of the ribbon at the given index
           */

        }, {
          key: "getRibbonTop",
          value: function getRibbonTop(index) {
            if (this.ribbons.length === 0) return '0%'; // NB. Match last measurement to ribbon height

            return "calc(".concat(index, " / ").concat(this.ribbons.length, " * (100% - 11.6979592rem))");
          }
          /**************************************
           * VALUE INITIALISATION               *
           **************************************/

        }, {
          key: "startRound",
          value: function startRound() {
            var _this3 = this;

            this.resetState(); // Init different data

            this.initScenarios();
            this.initRibbons(); // This sets a class of the same name, which highlights indicators

            this.roundStarting = true; // Coordinate entry, exit and update of differenet elements

            setTimeout(function () {
              return _this3.initIndicators();
            }, ROUND_START_SCHEDULE_MS.initIndicators);
            setTimeout(function () {
              return _this3.showPreviousStrategyCards = false;
            }, ROUND_START_SCHEDULE_MS.hidePreviousStrategies);
            setTimeout(function () {
              return _this3.initPreviousStrategyCards();
            }, ROUND_START_SCHEDULE_MS.showPreviousStrategies);
            setTimeout(function () {
              return _this3.showScenario = false;
            }, ROUND_START_SCHEDULE_MS.hideScenario);
            setTimeout(function () {
              return _this3.showScenario = true;
            }, ROUND_START_SCHEDULE_MS.showScenario);
            setTimeout(function () {
              return _this3.showLoadStrategyCardsDialog = true;
            }, ROUND_START_SCHEDULE_MS.showLoadStrategies);
            setTimeout(function () {
              return _this3.roundStarting = false;
            }, ROUND_START_SCHEDULE_MS.fadeOutIndicators);
          }
        }, {
          key: "resetState",
          value: function resetState() {
            this.bottomDialog = undefined;
            this.inFeedbackPhase = false;
            this.roundStarting = false;
            this.showLoadStrategyCardsDialog = false;
            this.showScenario = false;
            this.showReport = false; // Set the correct flipped/locked states for strategies

            for (var sid in this.shared.strategies) {
              var s = this.shared.strategies[sid];

              if (!this.playedStrategies.includes(s)) {
                s.locked = false;
                s.flipped = false;
              } else {
                s.locked = true;
                s.flipped = true;
              }
            }
          }
        }, {
          key: "initScenarios",
          value: function initScenarios() {
            var _this4 = this;

            var scenarios = [this.shared.firstScenario];
            this.playedStrategies.map(function (s) {
              return scenarios.push(_this4.shared.scenarios[s.scenario]);
            });
            this.playedScenarios = scenarios;
          }
        }, {
          key: "initIndicators",
          value: function initIndicators() {
            var _this5 = this;

            var _a, _b;

            var _loop = function _loop(iid) {
              // Calc values based on the effects of all played scenarios and strategies
              var indicator = _this5.shared.indicators[iid];
              var value = (_a = indicator.initialValue) !== null && _a !== void 0 ? _a : 0,
                  previousValue = (_b = indicator.initialValue) !== null && _b !== void 0 ? _b : 0;

              _this5.playedScenarios.forEach(function (s, i) {
                var _a, _b;

                var effect = (_b = (_a = s.effects) === null || _a === void 0 ? void 0 : _a[iid]) !== null && _b !== void 0 ? _b : 0;
                value += effect;
                if (i < _this5.playedScenarios.length - 1) previousValue += effect;
              });

              _this5.playedStrategies.forEach(function (s, i) {
                var _a, _b;

                var effect = (_b = (_a = s.effects) === null || _a === void 0 ? void 0 : _a[iid]) !== null && _b !== void 0 ? _b : 0;
                value += effect;
                if (i < _this5.playedStrategies.length - 1) previousValue += effect;
              });

              indicator.value = value;
              indicator.previousValue = previousValue;
            };

            for (var iid in this.shared.indicators) {
              _loop(iid);
            }

            this.performanceIndicators = Object.values(this.shared.indicators).filter(function (i) {
              return i.type === 'performance';
            });
            this.organisationalAttributes = Object.values(this.shared.indicators).filter(function (i) {
              return i.type === 'organisation';
            });
          }
        }, {
          key: "initRibbons",
          value: function initRibbons() {
            var _this6 = this;

            var ribbons = [];
            this.playedStrategies.filter(function (s) {
              var _a;

              return ((_a = s.ribbons) === null || _a === void 0 ? void 0 : _a.length) > 0;
            }).forEach(function (s) {
              return s.ribbons.forEach(function (r) {
                return ribbons.push(_this6.shared.ribbons[r]);
              });
            });
            this.ribbons = ribbons;
          }
        }, {
          key: "initPreviousStrategyCards",
          value: function initPreviousStrategyCards() {
            var _this7 = this;

            var _a, _b;

            this.previousStrategyCards = ((_b = (_a = this.previousScenario) === null || _a === void 0 ? void 0 : _a.strategies) !== null && _b !== void 0 ? _b : []).map(function (s) {
              return _this7.shared.strategies[s];
            });
            this.showPreviousStrategyCards = true;
            this.showStrategyCards = false;
          }
        }, {
          key: "initStrategyCards",
          value: function initStrategyCards() {
            var _this8 = this;

            var _a;

            this.strategyCards = ((_a = this.scenario.strategies) !== null && _a !== void 0 ? _a : []).map(function (s) {
              return _this8.shared.strategies[s];
            });
            this.showLoadStrategyCardsDialog = false;
            this.showStrategyCards = true;
          }
          /**************************************
           * USER ACTIONS                       *
           **************************************/

        }, {
          key: "goToPreviousRound",
          value: function goToPreviousRound(event) {
            this.playedStrategies.pop();
            this.updateUrl();
          }
        }, {
          key: "loadStrategyCards",
          value: function loadStrategyCards() {
            var _this9 = this;

            setTimeout(function () {
              return _this9.initStrategyCards();
            }, _shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS);
          }
          /*
           * Selecting a strategy goes in three steps:
           * 1. Lock the card => onCardLocked
           * 2. Confirm => showStrategyFeedback
           * 3. Go to next round => executeStrategy => startRound
           */

        }, {
          key: "onCardLocked",
          value: function onCardLocked(strategy) {
            var _this10 = this;

            if (this.inFeedbackPhase) return;

            if (!strategy.locked) {
              // Only one strategy can be locked at the same time
              this.strategyCards.forEach(function (s) {
                return s.locked = false;
              });
              strategy.locked = true;
              this.bottomDialog = {
                text: this.t('Execute selected strategy'),
                confirm: function confirm() {
                  return _this10.showStrategyFeedback(strategy);
                }
              };
            } else {
              strategy.locked = false;
              this.bottomDialog = undefined;
            }
          }
        }, {
          key: "showStrategyFeedback",
          value: function showStrategyFeedback(strategy) {
            var _this11 = this;

            strategy.flipped = true; // This disabled further selection of strategies

            this.inFeedbackPhase = true;
            this.bottomDialog = {
              text: this.t('Start next round'),
              confirm: function confirm() {
                return _this11.executeStrategy(strategy);
              }
            };
          }
        }, {
          key: "executeStrategy",
          value: function executeStrategy(strategy) {
            this.playedStrategies.push(strategy);
            this.updateUrl();
          }
        }, {
          key: "modalClick",
          value: function modalClick(event) {
            this.startOver(event);
          }
        }, {
          key: "startOver",
          value: function startOver(event) {
            // We are just navigating to the title screen
            this.router.navigate(['/']); // To disable background click

            event === null || event === void 0 ? void 0 : event.stopPropagation();
          } // public resetClick(event?: Event): void {
          //   this.hideOthers(ShowableTopic.ResetConfirmation);
          //   this.showStartOverConfirmation = true;
          //   // To disable background click
          //   if (event)
          //     event.stopPropagation();
          // }
          // public cancelReset(event?: Event): void {
          //   this.showStartOverConfirmation = false;
          //   // To disable background click
          //   if (event)
          //     event.stopPropagation();
          // }
          // public startOverClick(event?: Event): void {
          //   this.hideOthers(ShowableTopic.ResetConfirmation);
          //   setTimeout(() => this.startOver(event), this.options.purchaseDelay);
          // }

          /**************************************
           * URL PARAMS                         *
           **************************************/

        }, {
          key: "updateUrl",
          value: function updateUrl() {
            var _ref;

            // We use router to save the game data between sessions
            this.router.navigate([(_ref = {}, _defineProperty(_ref, DATA_KEY_VERSION, this.shared.settings.version), _defineProperty(_ref, DATA_KEY_STRATEGIES, this._encodeIds(this.playedStrategies)), _defineProperty(_ref, DATA_KEY_SHOWREPORT, this.showReport ? 1 : 0), _ref)]);
          }
        }, {
          key: "readParams",
          value: function readParams() {
            var _a; // Only load purchases from route data if the application versions match
            // Otherwise reset the state to handle the going back to an url without params


            if (((_a = this.route.snapshot.params) === null || _a === void 0 ? void 0 : _a[DATA_KEY_VERSION]) && this.route.snapshot.params[DATA_KEY_VERSION] == this.shared.settings.version) {
              if (this.route.snapshot.params[DATA_KEY_STRATEGIES]) this.playedStrategies = this._decodeIds(this.route.snapshot.params[DATA_KEY_STRATEGIES]);else this.playedStrategies = [];
              if (this.route.snapshot.params[DATA_KEY_SHOWREPORT] && this.route.snapshot.params[DATA_KEY_SHOWREPORT] == 1) this.showReport = true;else this.showReport = false;
            } // This resets the screen


            this.startRound();
          }
        }, {
          key: "_encodeIds",
          value: function _encodeIds(list) {
            return list.map(function (s) {
              return s.id;
            }).join(DATA_SEPARATOR);
          }
        }, {
          key: "_decodeIds",
          value: function _decodeIds(text) {
            var _this12 = this;

            return text.split(DATA_SEPARATOR).map(function (s) {
              return _this12.shared.strategies[s];
            });
          }
          /**************************************
           * TEXT LOCALISATION                  *
           **************************************/

          /*
           * Localize a string or LocalizedString object
           * See SharedService
           */

        }, {
          key: "t",
          value: function t(text) {
            return this.shared.getText(text);
          }
        }]);

        return _GameComponent;
      }();

      _GameComponent.ɵfac = function GameComponent_Factory(t) {
        return new (t || _GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _GameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _GameComponent,
        selectors: [["app-game"]],
        decls: 22,
        vars: 14,
        consts: [["id", "grid"], ["id", "performanceIndicators"], ["type", "bar", 3, "value", "previousValue", "titleBottom", "titleTop", "min", "max", "matTooltip", 4, "ngFor", "ngForOf"], ["id", "previousStrategyCards", 3, "click", 4, "ngIf"], ["id", "strategyCards", 4, "ngIf"], ["id", "loadStrategyCardsDialog", 4, "ngIf"], ["id", "scenario"], ["id", "roundIndicator"], ["color", "white", "mode", "determinate", 3, "value"], [1, "roundText"], [1, "roundText-current"], [1, "roundText-slash"], [1, "roundText-last"], ["id", "scenarioContent", 4, "ngIf"], ["id", "organisationalAttributes"], ["type", "dot", 3, "value", "previousValue", "titleBottom", "titleTop", "min", "max", "matTooltip", 4, "ngFor", "ngForOf"], ["id", "ribbons"], [3, "title", "matTooltip", "top", 4, "ngFor", "ngForOf"], ["id", "bottomDialog", 4, "ngIf"], ["type", "bar", 3, "value", "previousValue", "titleBottom", "titleTop", "min", "max", "matTooltip"], ["id", "previousStrategyCards", 3, "click"], [3, "title", "description", "descriptionBack", "flipped", "locked", "disabled", "cardLocked", 4, "ngFor", "ngForOf"], [3, "title", "description", "descriptionBack", "flipped", "locked", "disabled", "cardLocked"], ["id", "strategyCards"], ["id", "loadStrategyCardsDialog"], ["type", "button", 3, "innerHTML", "click", 4, "ngIf"], ["type", "button", 3, "innerHTML", "click"], ["id", "scenarioContent"], [3, "innerHTML"], [1, "description", 3, "innerHTML"], ["type", "dot", 3, "value", "previousValue", "titleBottom", "titleTop", "min", "max", "matTooltip"], [3, "title", "matTooltip"], ["id", "bottomDialog"]],
        template: function GameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameComponent_app_value_gauge_2_Template, 1, 7, "app-value-gauge", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GameComponent_section_3_Template, 2, 3, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GameComponent_section_4_Template, 2, 2, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, GameComponent_section_5_Template, 3, 3, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "section", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-progress-spinner", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "/");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, GameComponent_div_16_Template, 3, 3, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "section", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, GameComponent_app_value_gauge_18_Template, 1, 7, "app-value-gauge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "section", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, GameComponent_app_ribbon_20_Template, 1, 5, "app-ribbon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, GameComponent_section_21_Template, 2, 2, "section", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("roundStarting", ctx.roundStarting);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.performanceIndicators);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showPreviousStrategyCards);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showStrategyCards);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showStrategyCards && ctx.showLoadStrategyCardsDialog);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.roundsUsedPercentage);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.round);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.lastRound);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showScenario);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.organisationalAttributes);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.ribbons);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.bottomDialog);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _value_gauge_component__WEBPACK_IMPORTED_MODULE_1__.ValueGaugeComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _strategy_card_component__WEBPACK_IMPORTED_MODULE_2__.StrategyCardComponent, _ribbon_component__WEBPACK_IMPORTED_MODULE_3__.RibbonComponent],
        styles: ["button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  width: 100vw;\n}\n#grid[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 3rem;\n  min-height: 100vh;\n  max-height: 100vh;\n  width: 100%;\n  grid-template-columns: [col-1] 1fr [col-2] 1fr [col-3] 1fr [col-4] 1fr [col-5] 1fr [col-6] 1fr [right-edge];\n  grid-template-rows: [top] 4.5rem [mid] 1fr [main] max(28rem, 42vh) [bottom] 4.5rem [bottom-edge];\n  grid-gap: 1.5rem 1.5rem;\n  gap: 1.5rem 1.5rem;\n}\n#performanceIndicators[_ngcontent-%COMP%] {\n  grid-area: top/col-1/mid/right-edge;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 1.5rem;\n  -moz-column-gap: 1.5rem;\n       column-gap: 1.5rem;\n  justify-items: stretch;\n  position: relative;\n  z-index: 400;\n}\n#scenario[_ngcontent-%COMP%] {\n  grid-area: mid/col-1/main/right-edge;\n  padding: 0 calc(75px + 0.5rem);\n  position: relative;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  overflow: scroll;\n  z-index: 300;\n}\n#scenario[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#scenario[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  max-width: 60rem;\n  text-align: center;\n}\n#scenario[_ngcontent-%COMP%]   #roundIndicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  height: 75px;\n  width: 75px;\n}\n#scenario[_ngcontent-%COMP%]   #roundIndicator[_ngcontent-%COMP%]   mat-progress-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: scale(0.75);\n  transform-origin: top left;\n}\n#scenario[_ngcontent-%COMP%]   #roundIndicator[_ngcontent-%COMP%]   .roundText[_ngcontent-%COMP%] {\n  font-size: 22px;\n  letter-spacing: 4px;\n  text-align: center;\n}\n#scenario[_ngcontent-%COMP%]   #roundIndicator[_ngcontent-%COMP%]   .roundText[_ngcontent-%COMP%]   .roundText-current[_ngcontent-%COMP%] {\n  vertical-align: 6px;\n}\n#scenario[_ngcontent-%COMP%]   #roundIndicator[_ngcontent-%COMP%]   .roundText[_ngcontent-%COMP%]   .roundText-last[_ngcontent-%COMP%] {\n  vertical-align: -6px;\n}\n#strategyCards[_ngcontent-%COMP%], #previousStrategyCards[_ngcontent-%COMP%], #loadStrategyCardsDialog[_ngcontent-%COMP%] {\n  grid-area: main/col-1/bottom/right-edge;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 1rem;\n  position: relative;\n  z-index: 500;\n}\n#strategyCards[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n#strategyCards[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n#previousStrategyCards[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.3;\n  transform: translateY(-2.5rem) scale(0.9);\n  transform-origin: top center;\n  z-index: 100;\n  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n#previousStrategyCards[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n#loadStrategyCardsDialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 20rem;\n}\n#organisationalAttributes[_ngcontent-%COMP%] {\n  grid-area: bottom/col-2/bottom-edge/col-6;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-column-gap: 1.5rem;\n  -moz-column-gap: 1.5rem;\n       column-gap: 1.5rem;\n  justify-items: stretch;\n  position: relative;\n  z-index: 400;\n}\n#ribbons[_ngcontent-%COMP%] {\n  grid-area: main/col-6/bottom-edge/right-edge;\n  position: relative;\n  z-index: 300;\n}\n#ribbons[_ngcontent-%COMP%]   app-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  transform-origin: center center;\n}\n#ribbons[_ngcontent-%COMP%]   app-ribbon[_ngcontent-%COMP%]:nth-child(odd) {\n  right: 1rem;\n}\n#ribbons[_ngcontent-%COMP%]   app-ribbon[_ngcontent-%COMP%]:nth-child(even) {\n  left: 1rem;\n}\n#performanceIndicators[_ngcontent-%COMP%], #organisationalAttributes[_ngcontent-%COMP%], #ribbons[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n#performanceIndicators[_ngcontent-%COMP%]:hover, #organisationalAttributes[_ngcontent-%COMP%]:hover, #ribbons[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.roundStarting[_ngcontent-%COMP%]   #performanceIndicators[_ngcontent-%COMP%], .roundStarting[_ngcontent-%COMP%]   #organisationalAttributes[_ngcontent-%COMP%], .roundStarting[_ngcontent-%COMP%]   #ribbons[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n#bottomDialog[_ngcontent-%COMP%] {\n  grid-area: bottom/col-2/bottom-edge/col-6;\n  background-color: black;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  position: relative;\n  z-index: 900;\n}\n#bottomDialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 20rem;\n}\n.modal[_ngcontent-%COMP%] {\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsImdhbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZBLG1CQUFBO0FBbUZBLFdBQUE7QUN2SkE7RUFDRSxhQUFBO0FBVkY7QUFZQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVRGO0FBV0E7RUFDRSxhQUFBO0VBQ0EsYUQ2Qlc7RUM1QlgsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwyR0FBQTtFQUNBLGdHQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQVJGO0FBV0E7RUFDRSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLHVCRGVXO0VDZlgsdUJEZVc7T0NmWCxrQkRlVztFQ2RYLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZRG1DUztBQzNDWDtBQVdBO0VBQ0Usb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUR3QlM7QUNoQ1g7QUFVRTtFQUNFLGtCQUFBO0FBUko7QUFVRTtFQUNFLGlCRGxDVTtFQ21DVixnQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFVRTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUFUSjtBQVdJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFUTjtBQVdJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFUTjtBQVdNO0VBQ0UsbUJBQUE7QUFUUjtBQVdNO0VBQ0Usb0JBQUE7QUFUUjtBQVdBOzs7RUFHRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkQvQ1c7RUNnRFgsa0JBQUE7RUFDQSxZRDFCUztBQ2tCWDtBQVVBO0VBRUUsb0JBQUE7QUFSRjtBQVdFO0VBQ0UsbUJBQUE7QUFUSjtBQVdBO0VBQ0UsZUFBQTtFQUVBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUR0Q1M7RUN1Q1Qsc0RBQUE7QUFURjtBQVdFO0VBQ0Usb0JBQUE7QUFUSjtBQWFFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBVko7QUFZQTtFQUNFLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsdUJEaEZXO0VDZ0ZYLHVCRGhGVztPQ2dGWCxrQkRoRlc7RUNpRlgsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlENURTO0FDbURYO0FBV0E7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWURoRVM7QUN3RFg7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7QUFSSjtBQVVJO0VBQ0UsV0RoR087QUN3RmI7QUFVSTtFQUNFLFVEbkdPO0FDMkZiO0FBVUE7OztFQUdFLFlEeklZO0VDMElaLHNEQUFBO0FBUEY7QUFTRTs7O0VBQ0UsVUFBQTtBQUxKO0FBUUU7OztFQUdFLFVBQUE7QUFMSjtBQU9BO0VBQ0UseUNBQUE7RUFDQSx1QkQvSmtCO0VDZ0tsQixhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUQ1SFc7RUM2SFgsa0JBQUE7RUFDQSxZRDFHUztBQ3NHWDtBQU1FO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBSko7QUFNQTtFQUNFLGFEbEhVO0VDbUhWLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUhGIiwiZmlsZSI6ImdhbWUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ35AYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xuXG4kZm9udEluY3JlbWVudC1NOiAgIDEyMCU7XG5cbiRmb250RmFtaWx5LXByaW1hcnk6ICdZYW50cmFtYW5hdicsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiAgICAgd2hpdGU7XG4kY29sb3Itb25QcmltYXJ5OiAgIGJsYWNrO1xuJGNvbG9yLXByaW1hcnlCZzogICBibGFjaztcbiRjb2xvci1wcmltYXJ5QmdGYWRlZDogIGNvbG9yLmNoYW5nZSgkY29sb3ItcHJpbWFyeUJnLCAkYWxwaGE6IDAuNSk7XG4kY29sb3ItYWNjZW50OiAgICAgICNkY2NhNTg7XG4kY29sb3ItYWNjZW50RGFya2VyOiBjb2xvci5jaGFuZ2UoJGNvbG9yLWFjY2VudCwgJGxpZ2h0bmVzczogNDAlKTtcbiRjb2xvci1zZWNvbmRhcnk6ICAgY29sb3IubWl4KCRjb2xvci1vblByaW1hcnksICRjb2xvci1wcmltYXJ5LCA2MCUpO1xuXG4kYWxwaGEtb3ZlcmxheTogMC44O1xuJGFscGhhLWJ1dHRvbkJnOiAwLjE1O1xuJGFscGhhLWZhZGVkOiAwLjM7XG4kb3BhY2l0eS1kaXNhYmxlZDogMC41O1xuXG4kZm9udFNpemUtWFM6IDAuNzJyZW07XG4kZm9udFNpemUtUzogIDAuOHJlbTtcbiRmb250U2l6ZS1NOiAgMXJlbTtcbiRmb250U2l6ZS1MOiAgMS4ycmVtO1xuJGZvbnRTaXplLVhMOiAxLjVyZW07XG4kZm9udFNpemUtWFhMOiAzLjVyZW07XG5cbiRmb250V2VpZ2h0LU06IDUwMDtcbiRmb250V2VpZ2h0LUw6IDkwMDtcblxuJGZvbnRTaXplLWljb25MOiAzMnB4O1xuXG4kbGluZUhlaWdodC1TOiAxLjE7XG4kbGluZUhlaWdodC1NOiAxLjM7XG5cbiRib3JkZXJXaWR0aC1TOiAxcHg7XG4kYm9yZGVyV2lkdGgtTTogMnB4O1xuJGJvcmRlcldpZHRoLUw6IDNweDtcblxuJGJvcmRlci1TOiAkYm9yZGVyV2lkdGgtUyBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiRib3JkZXItTTogJGJvcmRlcldpZHRoLU0gc29saWQgJGNvbG9yLXByaW1hcnk7XG4kYm9yZGVyLUw6ICRib3JkZXJXaWR0aC1MIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuXG4kYm9yZGVyUmFkaXVzLU06IDRweDtcbiRib3JkZXJSYWRpdXMtWEw6IDEuNXJlbTtcblxuJGJveFNoYWRvdy1NOiAwIDZweCAycHggLTRweCByZ2JhKDAsMCwwLC4yKSwgMCA0cHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuXG4kbWFyZ2luLVhTOiAgMC4yNXJlbTtcbiRtYXJnaW4tUzogICAwLjVyZW07XG4kbWFyZ2luLU06ICAgMXJlbTtcbiRtYXJnaW4tTDogICAxLjVyZW07XG4kbWFyZ2luLVhMOiAgM3JlbTtcbiRtYXJnaW4tWFhMOiA2cmVtO1xuXG4kbWF4V2lkdGgtUzogMjVyZW07XG4kbWF4V2lkdGgtTTogMzhyZW07XG4kbWF4V2lkdGgtTDogNDByZW07XG4kbWF4V2lkdGgtWEw6IDYwcmVtOyBcblxuJGFuaW1hdGlvbkVhc2luZzogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiRhbmltYXRpb25EdXJhdGlvbi1NOiAyMjVtcztcbiRhbmltYXRpb25EdXJhdGlvbi1YTDogNzAwbXM7XG4kYW5pbWF0aW9uVGltaW5nLU06ICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nLVhMOiAkYW5pbWF0aW9uRHVyYXRpb24tWEwgJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktTTogJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktWEw6ICRhbmltYXRpb25EdXJhdGlvbi1YTCAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuXG4kekluZGV4LTEwOiAxMDAwO1xuJHpJbmRleC05OiA5MDA7IC8vIFBvcHVwc1xuJHpJbmRleC04OiA4MDA7IC8vIFxuJHpJbmRleC03OiA3MDA7IC8vIFxuJHpJbmRleC02OiA2MDA7IC8vIFxuJHpJbmRleC01OiA1MDA7IC8vIENhcmRzXG4kekluZGV4LTQ6IDQwMDsgLy8gXG4kekluZGV4LTM6IDMwMDsgLy8gXG4kekluZGV4LTI6IDIwMDsgLy9cbiR6SW5kZXgtMTogMTAwOyAvL1xuJHpJbmRleC0wOiAwO1xuXG5cbi8qIE1hdGVyaWFsIHRoZW1lICovXG5cbi8vIFR5cG9ncmFwaHlcbi8vIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS90eXBvZ3JhcGh5XG4vLyBVc2FnZTogQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRhcHAtdHlwb2dyYXBoeSwgdGl0bGUpXG4kYXBwLXR5cG9ncmFwaHk6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogJGZvbnRGYW1pbHktcHJpbWFyeVxuKTtcblxuLy8gQ3VzdG9tIHBhbGV0dGVzIGFuZCB0aGVtZVxuLy8gU2VlIGh0dHA6Ly9tY2cubWJpdHNvbi5jb20vXG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItcHJpbWFyeSAvICNmZmZcbiRwYWxldHRlLXByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZSgoXG4gICAgNTAgOiAjZmZmZmZmLFxuICAgIDEwMCA6ICNmZmZmZmYsXG4gICAgMjAwIDogI2ZmZmZmZixcbiAgICAzMDAgOiAjZmZmZmZmLFxuICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgNTAwIDogI2ZmZmZmZixcbiAgICA2MDAgOiAjZmZmZmZmLFxuICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgODAwIDogI2ZmZmZmZixcbiAgICA5MDAgOiAjZmZmZmZmLFxuICAgIEExMDAgOiAjZmZmZmZmLFxuICAgIEEyMDAgOiAjZmZmZmZmLFxuICAgIEE0MDAgOiAjZmZmZmZmLFxuICAgIEE3MDAgOiAjZmZmZmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgICAgNjAwIDogIzAwMDAwMCxcbiAgICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgICAgODAwIDogIzAwMDAwMCxcbiAgICAgICAgOTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKSk7XG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItYWNjZW50IC8gI2RjY2E1OFxuJHBhbGV0dGUtYWNjZW50OiBtYXQuZGVmaW5lLXBhbGV0dGUoKFxuICA1MCA6ICNmYmY5ZWIsXG4gIDEwMCA6ICNmNWVmY2QsXG4gIDIwMCA6ICNlZWU1YWMsXG4gIDMwMCA6ICNlN2RhOGEsXG4gIDQwMCA6ICNlMWQyNzEsXG4gIDUwMCA6ICNkY2NhNTgsXG4gIDYwMCA6ICNkOGM1NTAsXG4gIDcwMCA6ICNkM2JkNDcsXG4gIDgwMCA6ICNjZWI3M2QsXG4gIDkwMCA6ICNjNWFiMmQsXG4gIEExMDAgOiAjZmZmZmZmLFxuICBBMjAwIDogI2ZmZjdkNCxcbiAgQTQwMCA6ICNmZmVlYTEsXG4gIEE3MDAgOiAjZmZlOTg3LFxuICBjb250cmFzdDogKFxuICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICA2MDAgOiAjMDAwMDAwLFxuICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgIDgwMCA6ICMwMDAwMDAsXG4gICAgICA5MDAgOiAjMDAwMDAwLFxuICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gIClcbikpO1xuXG4kcGFsZXR0ZS13YXJuOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRyZWQtcGFsZXR0ZSwgQTIwMCk7XG4kYXBwLXRoZW1lOiBtYXQuZGVmaW5lLWxpZ2h0LXRoZW1lKCRwYWxldHRlLXByaW1hcnksICRwYWxldHRlLWFjY2VudCwgJHBhbGV0dGUtd2Fybik7XG5cbi8qIE1peGlucyAqL1xuXG5AbWl4aW4gYWxsQ2FwcyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbkBtaXhpbiBidXR0b25PbldoaXRlIHtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IuY2hhbmdlKCRjb2xvci1wcmltYXJ5LCAkYWxwaGE6IDAuNSAqICRhbHBoYS1idXR0b25CZyk7XG4gIH0gXG59XG5cbkBtaXhpbiBidXR0b25PbkNvbG9yIHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xufSIsIkB1c2UgJ3Nhc3M6Y29sb3InXG5AaW1wb3J0ICd2YXJpYWJsZXMuc2NzcydcblxuXG4vLyBWQVJJQUJMRVNcblxuLy8gQ29tbW9uIGdyaWQgZ2FwXG4kZ3JpZEdhcDogJG1hcmdpbi1MXG5cbi8vIFN0cmF0ZWd5IGNhcmQgcm93IG1pbiBoZWlnaHRcbiRtaW5IZWlnaHQtbWFpbjogbWF4KDI4cmVtLCA0MnZoKVxuICBcbi8vIFRoZSBvdXRsaW5lIG1lc3NlcyB1cCB0aGUgYm9yZGVyIGNoYW5nZXNcbmJ1dHRvbjpmb2N1c1xuICBvdXRsaW5lOiBub25lXG5cbjpob3N0XG4gIGRpc3BsYXk6IGJsb2NrXG4gIGhlaWdodDogMTAwdmhcbiAgd2lkdGg6IDEwMHZ3XG5cbiNncmlkXG4gIGRpc3BsYXk6IGdyaWRcbiAgcGFkZGluZzogJG1hcmdpbi1YTFxuICBtaW4taGVpZ2h0OiAxMDB2aFxuICBtYXgtaGVpZ2h0OiAxMDB2aFxuICB3aWR0aDogMTAwJVxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtjb2wtMV0gMWZyIFtjb2wtMl0gMWZyIFtjb2wtM10gMWZyIFtjb2wtNF0gMWZyIFtjb2wtNV0gMWZyIFtjb2wtNl0gMWZyIFtyaWdodC1lZGdlXVxuICBncmlkLXRlbXBsYXRlLXJvd3M6ICAgIFt0b3BdIDQuNXJlbSBbbWlkXSAxZnIgW21haW5dICRtaW5IZWlnaHQtbWFpbiBbYm90dG9tXSA0LjVyZW0gW2JvdHRvbS1lZGdlXVxuICBnYXA6ICRncmlkR2FwICRncmlkR2FwXG5cblxuI3BlcmZvcm1hbmNlSW5kaWNhdG9yc1xuICBncmlkLWFyZWE6IHRvcCAvIGNvbC0xIC8gbWlkIC8gcmlnaHQtZWRnZVxuICBkaXNwbGF5OiBncmlkXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnJcbiAgY29sdW1uLWdhcDogJGdyaWRHYXBcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaFxuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgei1pbmRleDogJHpJbmRleC00XG5cblxuI3NjZW5hcmlvXG4gIGdyaWQtYXJlYTogbWlkIC8gY29sLTEgLyBtYWluIC8gcmlnaHQtZWRnZVxuICBwYWRkaW5nOiAwIGNhbGMoNzVweCArICN7JG1hcmdpbi1TfSlcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIGRpc3BsYXk6IGZsZXhcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgb3ZlcmZsb3c6IHNjcm9sbFxuICB6LWluZGV4OiAkekluZGV4LTNcblxuICBoMVxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuXG4gIC5kZXNjcmlwdGlvblxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplLUxcbiAgICBtYXgtd2lkdGg6ICRtYXhXaWR0aC1YTFxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuXG4gICNyb3VuZEluZGljYXRvclxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGxlZnQ6IDBcbiAgICAvLyBXZSB1c2UgYWJzb2x1dGUgcHhzIGFzIHRoZSBzcGlubmVyIGlzIDEwMHgxMDBweCBieSBkZXNpZ25cbiAgICBoZWlnaHQ6IDc1cHhcbiAgICB3aWR0aDogNzVweFxuXG4gICAgbWF0LXByb2dyZXNzLXNwaW5uZXJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgdG9wOiAwXG4gICAgICBsZWZ0OiAwXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdFxuXG4gICAgLnJvdW5kVGV4dFxuICAgICAgZm9udC1zaXplOiAyMnB4XG4gICAgICBsZXR0ZXItc3BhY2luZzogNHB4XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuICAgICAgLnJvdW5kVGV4dC1jdXJyZW50XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiA2cHhcblxuICAgICAgLnJvdW5kVGV4dC1sYXN0XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiAtNnB4XG5cbiNzdHJhdGVneUNhcmRzLFxuI3ByZXZpb3VzU3RyYXRlZ3lDYXJkcyxcbiNsb2FkU3RyYXRlZ3lDYXJkc0RpYWxvZ1xuICBncmlkLWFyZWE6IG1haW4gLyBjb2wtMSAvIGJvdHRvbSAvIHJpZ2h0LWVkZ2VcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXBcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBwYWRkaW5nLWJvdHRvbTogJG1hcmdpbi1NXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxuICB6LWluZGV4OiAkekluZGV4LTVcblxuI3N0cmF0ZWd5Q2FyZHNcbiAgLy8gVG8gYWxsb3cgaG92ZXIgZm9yICNyaWJib25zXG4gIHBvaW50ZXItZXZlbnRzOiBub25lXG5cbiAgLy8gVG8gY291bnRlciAnbm9uZScgYWJvdmVcbiAgKlxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGxcblxuI3ByZXZpb3VzU3RyYXRlZ3lDYXJkc1xuICBjdXJzb3I6IHBvaW50ZXJcbiAgLy8gU2VlIGFuaW1hdGlvbnMgaW4gY29tcG9uZW50XG4gIG9wYWNpdHk6IDAuM1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXJlbSkgc2NhbGUoMC45KVxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyXG4gIHotaW5kZXg6ICR6SW5kZXgtMVxuICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRhbmltYXRpb25UaW1pbmctTVxuXG4gICpcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxuXG4jbG9hZFN0cmF0ZWd5Q2FyZHNEaWFsb2dcblxuICBidXR0b25cbiAgICBtYXJnaW46IDBcbiAgICBtYXgtd2lkdGg6IDIwcmVtXG5cbiNvcmdhbmlzYXRpb25hbEF0dHJpYnV0ZXNcbiAgZ3JpZC1hcmVhOiBib3R0b20gLyBjb2wtMiAvIGJvdHRvbS1lZGdlIC8gY29sLTZcbiAgZGlzcGxheTogZ3JpZFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmclxuICBjb2x1bW4tZ2FwOiAkZ3JpZEdhcFxuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxuICB6LWluZGV4OiAkekluZGV4LTRcblxuI3JpYmJvbnNcbiAgZ3JpZC1hcmVhOiBtYWluIC8gY29sLTYgLyBib3R0b20tZWRnZSAvIHJpZ2h0LWVkZ2VcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHotaW5kZXg6ICR6SW5kZXgtM1xuXG4gIGFwcC1yaWJib25cbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyXG5cbiAgICAmOm50aC1jaGlsZChvZGQpXG4gICAgICByaWdodDogJG1hcmdpbi1NXG5cbiAgICAmOm50aC1jaGlsZChldmVuKVxuICAgICAgbGVmdDogJG1hcmdpbi1NXG5cbiNwZXJmb3JtYW5jZUluZGljYXRvcnMsXG4jb3JnYW5pc2F0aW9uYWxBdHRyaWJ1dGVzLFxuI3JpYmJvbnNcbiAgb3BhY2l0eTogJGFscGhhLWZhZGVkXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgJGFuaW1hdGlvblRpbWluZy1NXG5cbiAgJjpob3ZlclxuICAgIG9wYWNpdHk6IDEuMFxuXG4ucm91bmRTdGFydGluZ1xuICAjcGVyZm9ybWFuY2VJbmRpY2F0b3JzLFxuICAjb3JnYW5pc2F0aW9uYWxBdHRyaWJ1dGVzLFxuICAjcmliYm9uc1xuICAgIG9wYWNpdHk6IDEuMFxuXG4jYm90dG9tRGlhbG9nXG4gIGdyaWQtYXJlYTogYm90dG9tIC8gY29sLTIgLyBib3R0b20tZWRnZSAvIGNvbC02XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5QmdcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICBwYWRkaW5nOiAkbWFyZ2luLVNcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHotaW5kZXg6ICR6SW5kZXgtOVxuXG4gIGJ1dHRvblxuICAgIG1hcmdpbjogMFxuICAgIG1heC13aWR0aDogMjByZW1cblxuLm1vZGFsXG4gIHotaW5kZXg6ICR6SW5kZXgtMTBcbiAgcG9zaXRpb246IGZpeGVkXG4gIHRvcDogMFxuICByaWdodDogMFxuICBsZWZ0OiAwXG4gIGJvdHRvbTogMFxuICBjdXJzb3I6IHBvaW50ZXIiXX0= */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('fadeInOut', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 1
          }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 1
          }), // We add a delay to allow for the :enter animation to finish first
          // when switching subcategories
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING_DELAYED, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0
          }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('currentCards', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0,
            transform: 'translateY(60vh)'
          }), // We add a delay to allow for the :leave animation to finish first
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(ANIMATION_TIMING_PREVIOUS_CARDS_MS, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 1,
            transform: 'none'
          }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('previousCards', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 1,
            transform: 'none'
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(ANIMATION_TIMING_PREVIOUS_CARDS_MS, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.3,
            transform: 'translateY(-2.5rem) scale(0.9)'
          }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.3,
            transform: 'translateY(-2.5rem) scale(0.9)'
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(ANIMATION_TIMING_PREVIOUS_CARDS_MS, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.0,
            transform: 'translateY(-5rem) scale(0.8)'
          }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('previousCardsFade', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('faded', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.15
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('normal', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.3
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('normal <=> faded', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(ANIMATION_TIMING_PREVIOUS_CARDS_MS)])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('ribbon', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            transform: 'scale(0)'
          }), // We add a delay to allow for the :leave animation to finish first
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            transform: 'scale(1)'
          }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            transform: 'scale(1)'
          }), // We add a delay to allow for the :leave animation to finish first
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            transform: 'scale(0)'
          }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('scenario', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0,
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " translate3d(0px, -25vh, 500px)")
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(ANIMATION_TIMING_PREVIOUS_CARDS_MS, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 1,
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE)
          }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 1,
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE)
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(ANIMATION_TIMING_PREVIOUS_CARDS_MS, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0,
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " translate3d(0px, 15vh, -400px)")
          }))])])]
        }
      });
      /***/
    },

    /***/
    61430:
    /*!*******************************************!*\
      !*** ./src/app/pages/game/game.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GameModule": function GameModule() {
          return (
            /* binding */
            _GameModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./game.component */
      50270);
      /* harmony import */


      var _ribbon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ribbon.component */
      17471);
      /* harmony import */


      var _strategy_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./strategy-card.component */
      38269);
      /* harmony import */


      var _value_gauge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./value-gauge.component */
      39967);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _GameModule = function _GameModule() {
        _classCallCheck(this, _GameModule);
      };

      _GameModule.ɵfac = function GameModule_Factory(t) {
        return new (t || _GameModule)();
      };

      _GameModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _GameModule
      });
      _GameModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_GameModule, {
          declarations: [_game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent, _ribbon_component__WEBPACK_IMPORTED_MODULE_1__.RibbonComponent, _strategy_card_component__WEBPACK_IMPORTED_MODULE_2__.StrategyCardComponent, _value_gauge_component__WEBPACK_IMPORTED_MODULE_3__.ValueGaugeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule],
          exports: [_game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent]
        });
      })();
      /***/

    },

    /***/
    51342:
    /*!*************************************!*\
      !*** ./src/app/pages/game/index.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GameComponent": function GameComponent() {
          return (
            /* reexport safe */
            _game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent
          );
        },

        /* harmony export */
        "GameModule": function GameModule() {
          return (
            /* reexport safe */
            _game_module__WEBPACK_IMPORTED_MODULE_1__.GameModule
          );
        },

        /* harmony export */
        "RibbonComponent": function RibbonComponent() {
          return (
            /* reexport safe */
            _ribbon_component__WEBPACK_IMPORTED_MODULE_2__.RibbonComponent
          );
        },

        /* harmony export */
        "StrategyCardComponent": function StrategyCardComponent() {
          return (
            /* reexport safe */
            _strategy_card_component__WEBPACK_IMPORTED_MODULE_3__.StrategyCardComponent
          );
        },

        /* harmony export */
        "ValueGaugeComponent": function ValueGaugeComponent() {
          return (
            /* reexport safe */
            _value_gauge_component__WEBPACK_IMPORTED_MODULE_4__.ValueGaugeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./game.component */
      50270);
      /* harmony import */


      var _game_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./game.module */
      61430);
      /* harmony import */


      var _ribbon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ribbon.component */
      17471);
      /* harmony import */


      var _strategy_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./strategy-card.component */
      38269);
      /* harmony import */


      var _value_gauge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./value-gauge.component */
      39967);
      /***/

    },

    /***/
    17471:
    /*!************************************************!*\
      !*** ./src/app/pages/game/ribbon.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RibbonComponent": function RibbonComponent() {
          return (
            /* binding */
            _RibbonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /*
       * Show a strategy card that can be flipped over to see the feedback.
       */


      var _RibbonComponent = /*#__PURE__*/function () {
        function _RibbonComponent(shared) {
          _classCallCheck(this, _RibbonComponent);

          this.shared = shared;
          this.title = '';
        }
        /*
         * Localize a string or LocalizedString object
         * See SharedService
         */


        _createClass(_RibbonComponent, [{
          key: "t",
          value: function t(text) {
            return this.shared.getText(text);
          }
        }]);

        return _RibbonComponent;
      }();

      _RibbonComponent.ɵfac = function RibbonComponent_Factory(t) {
        return new (t || _RibbonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _RibbonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _RibbonComponent,
        selectors: [["app-ribbon"]],
        inputs: {
          title: "title"
        },
        decls: 2,
        vars: 1,
        template: function RibbonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.t(ctx.title));
          }
        },
        styles: ["[_nghost-%COMP%] {\n  background: url('ribbon.svg') center/cover;\n  display: flex;\n  flex-flow: column nowrap;\n  height: 11.6979592rem;\n  width: 10rem;\n  justify-content: center;\n  align-items: flex-start;\n  padding-bottom: 1.6979592rem;\n}\nlabel[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 0.72rem;\n  max-width: 100%;\n  max-height: 100%;\n  padding: 1rem;\n  text-align: center;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsInJpYmJvbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRkEsbUJBQUE7QUFtRkEsV0FBQTtBQy9KQTtFQUNFLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBTk87RUFPUCxZQVJNO0VBU04sdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBRkY7QUFJQTtFQUNFLGtCQUFBO0VBQ0Esa0JER1k7RUNGWixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhRDhCVztFQzdCWCxrQkFBQTtFQUNBLG1CQUFBO0FBREYiLCJmaWxlIjoicmliYm9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2Fzczpjb2xvcic7XG5AdXNlICd+QGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcblxuJGZvbnRJbmNyZW1lbnQtTTogICAxMjAlO1xuXG4kZm9udEZhbWlseS1wcmltYXJ5OiAnWWFudHJhbWFuYXYnLCBzYW5zLXNlcmlmO1xuXG4kY29sb3ItcHJpbWFyeTogICAgIHdoaXRlO1xuJGNvbG9yLW9uUHJpbWFyeTogICBibGFjaztcbiRjb2xvci1wcmltYXJ5Qmc6ICAgYmxhY2s7XG4kY29sb3ItcHJpbWFyeUJnRmFkZWQ6ICBjb2xvci5jaGFuZ2UoJGNvbG9yLXByaW1hcnlCZywgJGFscGhhOiAwLjUpO1xuJGNvbG9yLWFjY2VudDogICAgICAjZGNjYTU4O1xuJGNvbG9yLWFjY2VudERhcmtlcjogY29sb3IuY2hhbmdlKCRjb2xvci1hY2NlbnQsICRsaWdodG5lc3M6IDQwJSk7XG4kY29sb3Itc2Vjb25kYXJ5OiAgIGNvbG9yLm1peCgkY29sb3Itb25QcmltYXJ5LCAkY29sb3ItcHJpbWFyeSwgNjAlKTtcblxuJGFscGhhLW92ZXJsYXk6IDAuODtcbiRhbHBoYS1idXR0b25CZzogMC4xNTtcbiRhbHBoYS1mYWRlZDogMC4zO1xuJG9wYWNpdHktZGlzYWJsZWQ6IDAuNTtcblxuJGZvbnRTaXplLVhTOiAwLjcycmVtO1xuJGZvbnRTaXplLVM6ICAwLjhyZW07XG4kZm9udFNpemUtTTogIDFyZW07XG4kZm9udFNpemUtTDogIDEuMnJlbTtcbiRmb250U2l6ZS1YTDogMS41cmVtO1xuJGZvbnRTaXplLVhYTDogMy41cmVtO1xuXG4kZm9udFdlaWdodC1NOiA1MDA7XG4kZm9udFdlaWdodC1MOiA5MDA7XG5cbiRmb250U2l6ZS1pY29uTDogMzJweDtcblxuJGxpbmVIZWlnaHQtUzogMS4xO1xuJGxpbmVIZWlnaHQtTTogMS4zO1xuXG4kYm9yZGVyV2lkdGgtUzogMXB4O1xuJGJvcmRlcldpZHRoLU06IDJweDtcbiRib3JkZXJXaWR0aC1MOiAzcHg7XG5cbiRib3JkZXItUzogJGJvcmRlcldpZHRoLVMgc29saWQgJGNvbG9yLXByaW1hcnk7XG4kYm9yZGVyLU06ICRib3JkZXJXaWR0aC1NIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuJGJvcmRlci1MOiAkYm9yZGVyV2lkdGgtTCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcblxuJGJvcmRlclJhZGl1cy1NOiA0cHg7XG4kYm9yZGVyUmFkaXVzLVhMOiAxLjVyZW07XG5cbiRib3hTaGFkb3ctTTogMCA2cHggMnB4IC00cHggcmdiYSgwLDAsMCwuMiksIDAgNHB4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcblxuJG1hcmdpbi1YUzogIDAuMjVyZW07XG4kbWFyZ2luLVM6ICAgMC41cmVtO1xuJG1hcmdpbi1NOiAgIDFyZW07XG4kbWFyZ2luLUw6ICAgMS41cmVtO1xuJG1hcmdpbi1YTDogIDNyZW07XG4kbWFyZ2luLVhYTDogNnJlbTtcblxuJG1heFdpZHRoLVM6IDI1cmVtO1xuJG1heFdpZHRoLU06IDM4cmVtO1xuJG1heFdpZHRoLUw6IDQwcmVtO1xuJG1heFdpZHRoLVhMOiA2MHJlbTsgXG5cbiRhbmltYXRpb25FYXNpbmc6IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4kYW5pbWF0aW9uRHVyYXRpb24tTTogMjI1bXM7XG4kYW5pbWF0aW9uRHVyYXRpb24tWEw6IDcwMG1zO1xuJGFuaW1hdGlvblRpbWluZy1NOiAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuJGFuaW1hdGlvblRpbWluZy1YTDogJGFuaW1hdGlvbkR1cmF0aW9uLVhMICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LU06ICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LVhMOiAkYW5pbWF0aW9uRHVyYXRpb24tWEwgJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcblxuJHpJbmRleC0xMDogMTAwMDtcbiR6SW5kZXgtOTogOTAwOyAvLyBQb3B1cHNcbiR6SW5kZXgtODogODAwOyAvLyBcbiR6SW5kZXgtNzogNzAwOyAvLyBcbiR6SW5kZXgtNjogNjAwOyAvLyBcbiR6SW5kZXgtNTogNTAwOyAvLyBDYXJkc1xuJHpJbmRleC00OiA0MDA7IC8vIFxuJHpJbmRleC0zOiAzMDA7IC8vIFxuJHpJbmRleC0yOiAyMDA7IC8vXG4kekluZGV4LTE6IDEwMDsgLy9cbiR6SW5kZXgtMDogMDtcblxuXG4vKiBNYXRlcmlhbCB0aGVtZSAqL1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvdHlwb2dyYXBoeVxuLy8gVXNhZ2U6IEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkYXBwLXR5cG9ncmFwaHksIHRpdGxlKVxuJGFwcC10eXBvZ3JhcGh5OiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICRmb250RmFtaWx5LXByaW1hcnlcbik7XG5cbi8vIEN1c3RvbSBwYWxldHRlcyBhbmQgdGhlbWVcbi8vIFNlZSBodHRwOi8vbWNnLm1iaXRzb24uY29tL1xuXG4vLyBCYXNlIGNvbG91cjogJGNvbG9yLXByaW1hcnkgLyAjZmZmXG4kcGFsZXR0ZS1wcmltYXJ5OiBtYXQuZGVmaW5lLXBhbGV0dGUoKFxuICAgIDUwIDogI2ZmZmZmZixcbiAgICAxMDAgOiAjZmZmZmZmLFxuICAgIDIwMCA6ICNmZmZmZmYsXG4gICAgMzAwIDogI2ZmZmZmZixcbiAgICA0MDAgOiAjZmZmZmZmLFxuICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgNjAwIDogI2ZmZmZmZixcbiAgICA3MDAgOiAjZmZmZmZmLFxuICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgOTAwIDogI2ZmZmZmZixcbiAgICBBMTAwIDogI2ZmZmZmZixcbiAgICBBMjAwIDogI2ZmZmZmZixcbiAgICBBNDAwIDogI2ZmZmZmZixcbiAgICBBNzAwIDogI2ZmZmZmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICAgIDYwMCA6ICMwMDAwMDAsXG4gICAgICAgIDcwMCA6ICMwMDAwMDAsXG4gICAgICAgIDgwMCA6ICMwMDAwMDAsXG4gICAgICAgIDkwMCA6ICMwMDAwMDAsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbikpO1xuXG4vLyBCYXNlIGNvbG91cjogJGNvbG9yLWFjY2VudCAvICNkY2NhNThcbiRwYWxldHRlLWFjY2VudDogbWF0LmRlZmluZS1wYWxldHRlKChcbiAgNTAgOiAjZmJmOWViLFxuICAxMDAgOiAjZjVlZmNkLFxuICAyMDAgOiAjZWVlNWFjLFxuICAzMDAgOiAjZTdkYThhLFxuICA0MDAgOiAjZTFkMjcxLFxuICA1MDAgOiAjZGNjYTU4LFxuICA2MDAgOiAjZDhjNTUwLFxuICA3MDAgOiAjZDNiZDQ3LFxuICA4MDAgOiAjY2ViNzNkLFxuICA5MDAgOiAjYzVhYjJkLFxuICBBMTAwIDogI2ZmZmZmZixcbiAgQTIwMCA6ICNmZmY3ZDQsXG4gIEE0MDAgOiAjZmZlZWExLFxuICBBNzAwIDogI2ZmZTk4NyxcbiAgY29udHJhc3Q6IChcbiAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgNjAwIDogIzAwMDAwMCxcbiAgICAgIDcwMCA6ICMwMDAwMDAsXG4gICAgICA4MDAgOiAjMDAwMDAwLFxuICAgICAgOTAwIDogIzAwMDAwMCxcbiAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICApXG4pKTtcblxuJHBhbGV0dGUtd2FybjogbWF0LmRlZmluZS1wYWxldHRlKG1hdC4kcmVkLXBhbGV0dGUsIEEyMDApO1xuJGFwcC10aGVtZTogbWF0LmRlZmluZS1saWdodC10aGVtZSgkcGFsZXR0ZS1wcmltYXJ5LCAkcGFsZXR0ZS1hY2NlbnQsICRwYWxldHRlLXdhcm4pO1xuXG4vKiBNaXhpbnMgKi9cblxuQG1peGluIGFsbENhcHMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xufVxuXG5AbWl4aW4gYnV0dG9uT25XaGl0ZSB7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLmNoYW5nZSgkY29sb3ItcHJpbWFyeSwgJGFscGhhOiAwLjUgKiAkYWxwaGEtYnV0dG9uQmcpO1xuICB9IFxufVxuXG5AbWl4aW4gYnV0dG9uT25Db2xvciB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMuc2NzcydcblxuJHdpZHRoOiAxMHJlbVxuJGhlaWdodDogJHdpZHRoICogMS4xNjk3OTU5MlxuXG46aG9zdFxuICBiYWNrZ3JvdW5kOiB1cmwoYXNzZXRzL2ltYWdlcy9yaWJib24uc3ZnKSBjZW50ZXIvY292ZXJcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXBcbiAgaGVpZ2h0OiAkaGVpZ2h0XG4gIHdpZHRoOiAkd2lkdGhcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcbiAgcGFkZGluZy1ib3R0b206ICRoZWlnaHQgLSAkd2lkdGhcblxubGFiZWxcbiAgYm9yZGVyLXJhZGl1czogNTAlXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplLVhTXG4gIG1heC13aWR0aDogMTAwJVxuICBtYXgtaGVpZ2h0OiAxMDAlXG4gIHBhZGRpbmc6ICRtYXJnaW4tTVxuICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCJdfQ== */"]
      });
      /***/
    },

    /***/
    38269:
    /*!*******************************************************!*\
      !*** ./src/app/pages/game/strategy-card.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StrategyCardComponent": function StrategyCardComponent() {
          return (
            /* binding */
            _StrategyCardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function StrategyCardComponent_section_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrategyCardComponent_section_0_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.toggleLocked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r0.disabled)("locked", ctx_r0.locked);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@frontFlip", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.t(ctx_r0.description), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.t(ctx_r0.title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.disabled)("innerHTML", ctx_r0.t(ctx_r0.locked ? ctx_r0.buttonLabelLocked : ctx_r0.buttonLabel), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function StrategyCardComponent_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@backFlip", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r1.t(ctx_r1.titleBack), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r1.t(ctx_r1.descriptionBack), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      var ANIMATION_DURATION_WITH_DELAY = "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS, "ms ").concat(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS, "ms");
      /*
       * Show a strategy card that can be flipped over to see the feedback.
       */

      var _StrategyCardComponent = /*#__PURE__*/function () {
        function _StrategyCardComponent(shared) {
          _classCallCheck(this, _StrategyCardComponent);

          this.shared = shared;
          this.id = null;
          this.title = '';
          this.description = '';
          this.buttonLabel = 'Lock This Strategy';
          this.buttonLabelLocked = 'Strategy Locked';
          this.titleBack = 'Feedback';
          this.descriptionBack = '';
          this.disabled = false;
          this.flipped = false;
          this.locked = false;
          this.cardLocked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_StrategyCardComponent, [{
          key: "toggleLocked",
          value: function toggleLocked() {
            this.cardLocked.emit(!this.locked);
          }
          /*
           * Localize a string or LocalizedString object
           * See SharedService
           */

        }, {
          key: "t",
          value: function t(text) {
            return this.shared.getText(text);
          }
        }]);

        return _StrategyCardComponent;
      }();

      _StrategyCardComponent.ɵfac = function StrategyCardComponent_Factory(t) {
        return new (t || _StrategyCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _StrategyCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _StrategyCardComponent,
        selectors: [["app-strategy-card"]],
        inputs: {
          id: "id",
          title: "title",
          description: "description",
          buttonLabel: "buttonLabel",
          buttonLabelLocked: "buttonLabelLocked",
          titleBack: "titleBack",
          descriptionBack: "descriptionBack",
          disabled: "disabled",
          flipped: "flipped",
          locked: "locked"
        },
        outputs: {
          cardLocked: "cardLocked"
        },
        decls: 2,
        vars: 2,
        consts: [["class", "card front", 3, "disabled", "locked", 4, "ngIf"], ["class", "card back", 4, "ngIf"], [1, "card", "front"], [1, "content"], [1, "description", 3, "innerHTML"], [1, "titleText", 3, "innerHTML"], ["type", "button", 1, "bottomButton", 3, "disabled", "innerHTML", "click"], [1, "card", "back"]],
        template: function StrategyCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StrategyCardComponent_section_0_Template, 6, 9, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StrategyCardComponent_section_1_Template, 5, 3, "section", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.flipped);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flipped);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  height: 24rem;\n  margin: 0 0.5rem;\n  position: relative;\n  width: min(16rem, 30vw);\n}\n.card[_ngcontent-%COMP%] {\n  background-color: black;\n  border-radius: 1rem;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: stretch;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0.5rem 1.65rem 0.5rem;\n  position: absolute;\n  transform-style: preserve-3d;\n}\n.content[_ngcontent-%COMP%] {\n  border: 2px solid white;\n  border-radius: 0.5rem;\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  position: relative;\n  text-align: center;\n}\n.back[_ngcontent-%COMP%] {\n  color: black;\n}\n.back[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: white;\n  font-style: italic;\n}\nlabel[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 0.5rem;\n  left: 0;\n  right: 0;\n  text-align: center;\n  white-space: normal;\n}\nlabel[_ngcontent-%COMP%]   .titleText[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 0px 0.5rem;\n}\nh3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid white;\n  border-bottom-color: black;\n  font-size: 0.8rem;\n  font-style: italic;\n  font-weight: 500;\n  text-align: center;\n}\n.bottomButton[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background-color: black;\n  border-radius: 50%;\n  font-size: 0.72rem;\n  max-height: 3.5rem;\n  min-height: 3.5rem;\n  overflow: hidden;\n  padding: 1rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 10rem;\n  position: absolute;\n  bottom: 0px;\n  left: calc(50% - 5rem);\n}\n.locked[_ngcontent-%COMP%]   .bottomButton[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsInN0cmF0ZWd5LWNhcmQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZBLG1CQUFBO0FBbUZBLFdBQUE7QUNoS0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUdBO0VBQ0UsdUJESGtCO0VDSWxCLG1CRHFDVztFQ3BDWCxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBREY7QUFHQTtFQUNFLHVCRGVTO0VDZFQscUJEdUJXO0VDdEJYLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZURpQlc7RUNoQlgsa0JBQUE7RUFDQSxrQkFBQTtBQUFGO0FBRUE7RUFDRSxZRDVCa0I7QUM2QnBCO0FBQ0U7RUFDRSx1QkRqQ2dCO0VDa0NoQixrQkFBQTtBQUNKO0FBQ0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXREdXO0VDRlgsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBRTtFQUNFLHVCRDVDZ0I7RUM2Q2hCLG1CQUFBO0FBRUo7QUFBQTtFRCtHRSx5QkFBQTtFQUNBLHNCQUFBO0VDOUdBLDhCRG5CUztFQ29CVCwwQkRsRGtCO0VDbURsQixpQkR2Q1k7RUN3Q1osa0JBQUE7RUFDQSxnQkRuQ2E7RUNvQ2Isa0JBQUE7QUFJRjtBQUZBO0VEc0dFLHlCQUFBO0VBQ0Esc0JBQUE7RUNyR0EsdUJEMURrQjtFQzJEbEIsa0JBQUE7RUFDQSxrQkRqRFk7RUNrRFosa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUR2Qlc7RUN3QlgsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQU1GO0FBSEU7RUFDRSx1QkQ1RWdCO0VDNkVoQixZRDNFZ0I7QUNpRnBCIiwiZmlsZSI6InN0cmF0ZWd5LWNhcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ35AYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xuXG4kZm9udEluY3JlbWVudC1NOiAgIDEyMCU7XG5cbiRmb250RmFtaWx5LXByaW1hcnk6ICdZYW50cmFtYW5hdicsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiAgICAgd2hpdGU7XG4kY29sb3Itb25QcmltYXJ5OiAgIGJsYWNrO1xuJGNvbG9yLXByaW1hcnlCZzogICBibGFjaztcbiRjb2xvci1wcmltYXJ5QmdGYWRlZDogIGNvbG9yLmNoYW5nZSgkY29sb3ItcHJpbWFyeUJnLCAkYWxwaGE6IDAuNSk7XG4kY29sb3ItYWNjZW50OiAgICAgICNkY2NhNTg7XG4kY29sb3ItYWNjZW50RGFya2VyOiBjb2xvci5jaGFuZ2UoJGNvbG9yLWFjY2VudCwgJGxpZ2h0bmVzczogNDAlKTtcbiRjb2xvci1zZWNvbmRhcnk6ICAgY29sb3IubWl4KCRjb2xvci1vblByaW1hcnksICRjb2xvci1wcmltYXJ5LCA2MCUpO1xuXG4kYWxwaGEtb3ZlcmxheTogMC44O1xuJGFscGhhLWJ1dHRvbkJnOiAwLjE1O1xuJGFscGhhLWZhZGVkOiAwLjM7XG4kb3BhY2l0eS1kaXNhYmxlZDogMC41O1xuXG4kZm9udFNpemUtWFM6IDAuNzJyZW07XG4kZm9udFNpemUtUzogIDAuOHJlbTtcbiRmb250U2l6ZS1NOiAgMXJlbTtcbiRmb250U2l6ZS1MOiAgMS4ycmVtO1xuJGZvbnRTaXplLVhMOiAxLjVyZW07XG4kZm9udFNpemUtWFhMOiAzLjVyZW07XG5cbiRmb250V2VpZ2h0LU06IDUwMDtcbiRmb250V2VpZ2h0LUw6IDkwMDtcblxuJGZvbnRTaXplLWljb25MOiAzMnB4O1xuXG4kbGluZUhlaWdodC1TOiAxLjE7XG4kbGluZUhlaWdodC1NOiAxLjM7XG5cbiRib3JkZXJXaWR0aC1TOiAxcHg7XG4kYm9yZGVyV2lkdGgtTTogMnB4O1xuJGJvcmRlcldpZHRoLUw6IDNweDtcblxuJGJvcmRlci1TOiAkYm9yZGVyV2lkdGgtUyBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiRib3JkZXItTTogJGJvcmRlcldpZHRoLU0gc29saWQgJGNvbG9yLXByaW1hcnk7XG4kYm9yZGVyLUw6ICRib3JkZXJXaWR0aC1MIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuXG4kYm9yZGVyUmFkaXVzLU06IDRweDtcbiRib3JkZXJSYWRpdXMtWEw6IDEuNXJlbTtcblxuJGJveFNoYWRvdy1NOiAwIDZweCAycHggLTRweCByZ2JhKDAsMCwwLC4yKSwgMCA0cHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuXG4kbWFyZ2luLVhTOiAgMC4yNXJlbTtcbiRtYXJnaW4tUzogICAwLjVyZW07XG4kbWFyZ2luLU06ICAgMXJlbTtcbiRtYXJnaW4tTDogICAxLjVyZW07XG4kbWFyZ2luLVhMOiAgM3JlbTtcbiRtYXJnaW4tWFhMOiA2cmVtO1xuXG4kbWF4V2lkdGgtUzogMjVyZW07XG4kbWF4V2lkdGgtTTogMzhyZW07XG4kbWF4V2lkdGgtTDogNDByZW07XG4kbWF4V2lkdGgtWEw6IDYwcmVtOyBcblxuJGFuaW1hdGlvbkVhc2luZzogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiRhbmltYXRpb25EdXJhdGlvbi1NOiAyMjVtcztcbiRhbmltYXRpb25EdXJhdGlvbi1YTDogNzAwbXM7XG4kYW5pbWF0aW9uVGltaW5nLU06ICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nLVhMOiAkYW5pbWF0aW9uRHVyYXRpb24tWEwgJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktTTogJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktWEw6ICRhbmltYXRpb25EdXJhdGlvbi1YTCAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuXG4kekluZGV4LTEwOiAxMDAwO1xuJHpJbmRleC05OiA5MDA7IC8vIFBvcHVwc1xuJHpJbmRleC04OiA4MDA7IC8vIFxuJHpJbmRleC03OiA3MDA7IC8vIFxuJHpJbmRleC02OiA2MDA7IC8vIFxuJHpJbmRleC01OiA1MDA7IC8vIENhcmRzXG4kekluZGV4LTQ6IDQwMDsgLy8gXG4kekluZGV4LTM6IDMwMDsgLy8gXG4kekluZGV4LTI6IDIwMDsgLy9cbiR6SW5kZXgtMTogMTAwOyAvL1xuJHpJbmRleC0wOiAwO1xuXG5cbi8qIE1hdGVyaWFsIHRoZW1lICovXG5cbi8vIFR5cG9ncmFwaHlcbi8vIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS90eXBvZ3JhcGh5XG4vLyBVc2FnZTogQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRhcHAtdHlwb2dyYXBoeSwgdGl0bGUpXG4kYXBwLXR5cG9ncmFwaHk6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogJGZvbnRGYW1pbHktcHJpbWFyeVxuKTtcblxuLy8gQ3VzdG9tIHBhbGV0dGVzIGFuZCB0aGVtZVxuLy8gU2VlIGh0dHA6Ly9tY2cubWJpdHNvbi5jb20vXG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItcHJpbWFyeSAvICNmZmZcbiRwYWxldHRlLXByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZSgoXG4gICAgNTAgOiAjZmZmZmZmLFxuICAgIDEwMCA6ICNmZmZmZmYsXG4gICAgMjAwIDogI2ZmZmZmZixcbiAgICAzMDAgOiAjZmZmZmZmLFxuICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgNTAwIDogI2ZmZmZmZixcbiAgICA2MDAgOiAjZmZmZmZmLFxuICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgODAwIDogI2ZmZmZmZixcbiAgICA5MDAgOiAjZmZmZmZmLFxuICAgIEExMDAgOiAjZmZmZmZmLFxuICAgIEEyMDAgOiAjZmZmZmZmLFxuICAgIEE0MDAgOiAjZmZmZmZmLFxuICAgIEE3MDAgOiAjZmZmZmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgICAgNjAwIDogIzAwMDAwMCxcbiAgICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgICAgODAwIDogIzAwMDAwMCxcbiAgICAgICAgOTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKSk7XG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItYWNjZW50IC8gI2RjY2E1OFxuJHBhbGV0dGUtYWNjZW50OiBtYXQuZGVmaW5lLXBhbGV0dGUoKFxuICA1MCA6ICNmYmY5ZWIsXG4gIDEwMCA6ICNmNWVmY2QsXG4gIDIwMCA6ICNlZWU1YWMsXG4gIDMwMCA6ICNlN2RhOGEsXG4gIDQwMCA6ICNlMWQyNzEsXG4gIDUwMCA6ICNkY2NhNTgsXG4gIDYwMCA6ICNkOGM1NTAsXG4gIDcwMCA6ICNkM2JkNDcsXG4gIDgwMCA6ICNjZWI3M2QsXG4gIDkwMCA6ICNjNWFiMmQsXG4gIEExMDAgOiAjZmZmZmZmLFxuICBBMjAwIDogI2ZmZjdkNCxcbiAgQTQwMCA6ICNmZmVlYTEsXG4gIEE3MDAgOiAjZmZlOTg3LFxuICBjb250cmFzdDogKFxuICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICA2MDAgOiAjMDAwMDAwLFxuICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgIDgwMCA6ICMwMDAwMDAsXG4gICAgICA5MDAgOiAjMDAwMDAwLFxuICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gIClcbikpO1xuXG4kcGFsZXR0ZS13YXJuOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRyZWQtcGFsZXR0ZSwgQTIwMCk7XG4kYXBwLXRoZW1lOiBtYXQuZGVmaW5lLWxpZ2h0LXRoZW1lKCRwYWxldHRlLXByaW1hcnksICRwYWxldHRlLWFjY2VudCwgJHBhbGV0dGUtd2Fybik7XG5cbi8qIE1peGlucyAqL1xuXG5AbWl4aW4gYWxsQ2FwcyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbkBtaXhpbiBidXR0b25PbldoaXRlIHtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IuY2hhbmdlKCRjb2xvci1wcmltYXJ5LCAkYWxwaGE6IDAuNSAqICRhbHBoYS1idXR0b25CZyk7XG4gIH0gXG59XG5cbkBtaXhpbiBidXR0b25PbkNvbG9yIHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcy5zY3NzJ1xuXG4kYm9yZGVyOiAkYm9yZGVyLU1cblxuOmhvc3RcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gIGhlaWdodDogMjRyZW1cbiAgbWFyZ2luOiAwICRtYXJnaW4tU1xuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgd2lkdGg6IG1pbigxNnJlbSwgMzB2dylcblxuLmNhcmRcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnlCZ1xuICBib3JkZXItcmFkaXVzOiAkbWFyZ2luLU1cbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXBcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoXG4gIGhlaWdodDogMTAwJVxuICB3aWR0aDogMTAwJVxuICAvLyBDaGVjayBib3R0b20gcGFkZGluZyB0byBmaXQgYnV0dG9uXG4gIHBhZGRpbmc6ICRtYXJnaW4tTSAkbWFyZ2luLVMgMS42NXJlbSAkbWFyZ2luLVNcbiAgcG9zaXRpb246IGFic29sdXRlXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2RcblxuLmNvbnRlbnRcbiAgYm9yZGVyOiAkYm9yZGVyXG4gIGJvcmRlci1yYWRpdXM6ICRtYXJnaW4tU1xuICBoZWlnaHQ6IDEwMCVcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICBwYWRkaW5nOiAkbWFyZ2luLVNcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHRleHQtYWxpZ246IGNlbnRlclxuXG4uYmFja1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnlCZ1xuXG4gIC5jb250ZW50XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnlcbiAgICBmb250LXN0eWxlOiBpdGFsaWNcblxubGFiZWxcbiAgbWFyZ2luOiAwXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB0b3A6ICRtYXJnaW4tU1xuICBsZWZ0OiAwXG4gIHJpZ2h0OiAwXG4gIHRleHQtYWxpZ246IGNlbnRlclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsXG5cbiAgLnRpdGxlVGV4dFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5QmdcbiAgICBwYWRkaW5nOiAwcHggJG1hcmdpbi1TXG5cbmgzXG4gIEBpbmNsdWRlIGFsbENhcHNcbiAgYm9yZGVyLWJvdHRvbTogJGJvcmRlci1TXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci1wcmltYXJ5QmdcbiAgZm9udC1zaXplOiAkZm9udFNpemUtU1xuICBmb250LXN0eWxlOiBpdGFsaWNcbiAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0LU1cbiAgdGV4dC1hbGlnbjogY2VudGVyXG5cbi5ib3R0b21CdXR0b25cbiAgQGluY2x1ZGUgYWxsQ2Fwc1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeUJnXG4gIGJvcmRlci1yYWRpdXM6IDUwJVxuICBmb250LXNpemU6ICRmb250U2l6ZS1YU1xuICBtYXgtaGVpZ2h0OiAzLjVyZW1cbiAgbWluLWhlaWdodDogMy41cmVtXG4gIG92ZXJmbG93OiBoaWRkZW5cbiAgcGFkZGluZzogJG1hcmdpbi1NXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzXG4gIHdoaXRlLXNwYWNlOiBub3dyYXBcbiAgd2lkdGg6IDEwcmVtXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICBib3R0b206IDBweFxuICBsZWZ0OiBjYWxjKDUwJSAtIDVyZW0pXG5cbi5sb2NrZWRcbiAgLmJvdHRvbUJ1dHRvblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5QmciXX0= */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('backFlip', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " rotateY(90deg)")
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(ANIMATION_DURATION_WITH_DELAY, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " rotateY(0deg)")
          }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " rotateY(0deg)")
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " rotateY(90deg)")
          }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('frontFlip', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " rotateY(0deg)")
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " rotateY(-90deg)")
          }))])])]
        }
      });
      /***/
    },

    /***/
    39967:
    /*!*****************************************************!*\
      !*** ./src/app/pages/game/value-gauge.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValueGaugeComponent": function ValueGaugeComponent() {
          return (
            /* binding */
            _ValueGaugeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ValueGaugeComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 7);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", ctx_r0.previousValueLeft);
        }
      }

      function ValueGaugeComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r1.valueBarWidth);
        }
      }

      function ValueGaugeComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 9);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", ctx_r2.valueDotLeft);
        }
      }

      function ValueGaugeComponent_label_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.t(ctx_r3.titleTop), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function ValueGaugeComponent_label_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r4.t(ctx_r4.titleBottom), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }
      /*
       * Show indicator values as either bars or dots on an axis.
       */


      var _ValueGaugeComponent = /*#__PURE__*/function () {
        function _ValueGaugeComponent(shared) {
          _classCallCheck(this, _ValueGaugeComponent);

          this.shared = shared;
          this.max = 10;
          this.min = 0;
          this.previousValue = undefined;
          this.type = 'bar';
          this.value = 0;
        }

        _createClass(_ValueGaugeComponent, [{
          key: "isDot",
          get: function get() {
            return this.type === 'dot';
          }
        }, {
          key: "isBar",
          get: function get() {
            return this.type === 'bar';
          }
        }, {
          key: "valueFraction",
          get: function get() {
            if (this.range === 0) return 0;
            return (this.value - this.min) / this.range;
          }
        }, {
          key: "previousValueFraction",
          get: function get() {
            if (this.range === 0) return 0;
            return (this.previousValue - this.min) / this.range;
          }
        }, {
          key: "range",
          get: function get() {
            return this.max - this.min;
          }
        }, {
          key: "valueBarWidth",
          get: function get() {
            return "".concat(this.valueFraction * 100, "%");
          }
        }, {
          key: "previousValueLeft",
          get: function get() {
            return this.isDot ? this._calcDotPercentage(this.previousValueFraction) : "".concat(this.previousValueFraction * 100, "%");
          } // get valueChange(): number {
          //   return this.valueFraction - this.previousValueFraction;
          // }
          // get valueChangeWidth(): string {
          //   return `${Math.abs(this.valueChange) * 100}%`;
          // }

        }, {
          key: "valueDotLeft",
          get: function get() {
            return this._calcDotPercentage(this.valueFraction);
          } // get previousValueDotLeft(): string {
          //   const margin = 10;
          //   return `${margin + this.valueFraction * (100 - 2 * margin)}%`;
          // }

        }, {
          key: "_calcDotPercentage",
          value: function _calcDotPercentage(fraction) {
            var margin = 10;
            return "".concat(margin + fraction * (100 - 2 * margin), "%");
          }
          /*
           * Localize a string or LocalizedString object
           * See SharedService
           */

        }, {
          key: "t",
          value: function t(text) {
            return this.shared.getText(text);
          }
        }]);

        return _ValueGaugeComponent;
      }();

      _ValueGaugeComponent.ɵfac = function ValueGaugeComponent_Factory(t) {
        return new (t || _ValueGaugeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _ValueGaugeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ValueGaugeComponent,
        selectors: [["app-value-gauge"]],
        inputs: {
          max: "max",
          min: "min",
          previousValue: "previousValue",
          type: "type",
          titleBottom: "titleBottom",
          titleTop: "titleTop",
          value: "value"
        },
        decls: 7,
        vars: 9,
        consts: [[1, "container"], [1, "content"], ["class", "previousValue", 3, "left", 4, "ngIf"], ["class", "valueBar", 3, "width", 4, "ngIf"], ["class", "valueDot", 3, "left", 4, "ngIf"], ["class", "titleTop", 4, "ngIf"], ["class", "titleBottom", 4, "ngIf"], [1, "previousValue"], [1, "valueBar"], [1, "valueDot"], [1, "titleTop"], [1, "titleText", 3, "innerHTML"], [1, "titleBottom"]],
        template: function ValueGaugeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ValueGaugeComponent_div_2_Template, 1, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ValueGaugeComponent_div_3_Template, 1, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ValueGaugeComponent_div_4_Template, 1, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ValueGaugeComponent_label_5_Template, 2, 1, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ValueGaugeComponent_label_6_Template, 2, 1, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bar", ctx.isBar)("dot", ctx.isDot);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.previousValue != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBar);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDot);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titleTop);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titleBottom);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: stretch;\n  height: 100%;\n  padding: 0.5rem 0px;\n  position: relative;\n}\n.content[_ngcontent-%COMP%] {\n  border: 2px solid white;\n  height: 100%;\n  position: relative;\n}\n.bar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-left-style: none;\n  border-right-style: none;\n}\n.dot[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]::before {\n  border-top: 2px solid white;\n  content: \"\";\n  display: block;\n  left: 0;\n  position: absolute;\n  top: calc(50% - 2px / 2);\n  width: 100%;\n}\n.previousValue[_ngcontent-%COMP%] {\n  background-color: #666666;\n  height: 2rem;\n  width: 2px;\n  position: absolute;\n  top: calc(50% - 1rem);\n  transform: translateX(-50%);\n  transition: all 225ms;\n}\n.valueBar[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 1rem;\n  position: absolute;\n  top: calc(50% - 0.5rem);\n  transition: all 700ms 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.valueDot[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 1.2rem;\n  width: 1.2rem;\n  border-radius: 0.6rem;\n  position: absolute;\n  top: calc(50% - 0.6rem);\n  transform: translateX(-50%);\n  transition: all 700ms 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.titleTop[_ngcontent-%COMP%], .titleBottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.titleTop[_ngcontent-%COMP%]   .titleText[_ngcontent-%COMP%], .titleBottom[_ngcontent-%COMP%]   .titleText[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 0px 0.5rem;\n}\n.titleTop[_ngcontent-%COMP%] {\n  top: 0px;\n}\n.titleBottom[_ngcontent-%COMP%] {\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsInZhbHVlLWdhdWdlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGQSxtQkFBQTtBQW1GQSxXQUFBO0FDL0pBO0VBQ0UsY0FBQTtBQUZGO0FBSUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREY7QUFHQTtFQUNFLHVCRHVCUztFQ3RCVCxZQUFBO0VBS0Esa0JBQUE7QUFKRjtBQU9FO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQUpKO0FBT0U7RUFDRSwyQkRRTztFQ1BQLFdBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBSko7QUFPQTtFQUNFLHlCRDdCa0I7RUM4QmxCLFlBQUE7RUFDQSxVRFJjO0VDU2Qsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUFKRjtBQU1BO0VBQ0UsdUJENUNrQjtFQzZDbEIsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3REFBQTtBQUhGO0FBWUE7RUFDRSx1QkQxRGtCO0VDMkRsQixjQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0RBQUE7QUFURjtBQWVBOztFQUVFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQVpGO0FBY0U7O0VBQ0UsdUJEN0VnQjtFQzhFaEIsbUJBQUE7QUFYSjtBQWFBO0VBQ0UsUUFBQTtBQVZGO0FBWUE7RUFDRSxXQUFBO0FBVEYiLCJmaWxlIjoidmFsdWUtZ2F1Z2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ35AYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xuXG4kZm9udEluY3JlbWVudC1NOiAgIDEyMCU7XG5cbiRmb250RmFtaWx5LXByaW1hcnk6ICdZYW50cmFtYW5hdicsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiAgICAgd2hpdGU7XG4kY29sb3Itb25QcmltYXJ5OiAgIGJsYWNrO1xuJGNvbG9yLXByaW1hcnlCZzogICBibGFjaztcbiRjb2xvci1wcmltYXJ5QmdGYWRlZDogIGNvbG9yLmNoYW5nZSgkY29sb3ItcHJpbWFyeUJnLCAkYWxwaGE6IDAuNSk7XG4kY29sb3ItYWNjZW50OiAgICAgICNkY2NhNTg7XG4kY29sb3ItYWNjZW50RGFya2VyOiBjb2xvci5jaGFuZ2UoJGNvbG9yLWFjY2VudCwgJGxpZ2h0bmVzczogNDAlKTtcbiRjb2xvci1zZWNvbmRhcnk6ICAgY29sb3IubWl4KCRjb2xvci1vblByaW1hcnksICRjb2xvci1wcmltYXJ5LCA2MCUpO1xuXG4kYWxwaGEtb3ZlcmxheTogMC44O1xuJGFscGhhLWJ1dHRvbkJnOiAwLjE1O1xuJGFscGhhLWZhZGVkOiAwLjM7XG4kb3BhY2l0eS1kaXNhYmxlZDogMC41O1xuXG4kZm9udFNpemUtWFM6IDAuNzJyZW07XG4kZm9udFNpemUtUzogIDAuOHJlbTtcbiRmb250U2l6ZS1NOiAgMXJlbTtcbiRmb250U2l6ZS1MOiAgMS4ycmVtO1xuJGZvbnRTaXplLVhMOiAxLjVyZW07XG4kZm9udFNpemUtWFhMOiAzLjVyZW07XG5cbiRmb250V2VpZ2h0LU06IDUwMDtcbiRmb250V2VpZ2h0LUw6IDkwMDtcblxuJGZvbnRTaXplLWljb25MOiAzMnB4O1xuXG4kbGluZUhlaWdodC1TOiAxLjE7XG4kbGluZUhlaWdodC1NOiAxLjM7XG5cbiRib3JkZXJXaWR0aC1TOiAxcHg7XG4kYm9yZGVyV2lkdGgtTTogMnB4O1xuJGJvcmRlcldpZHRoLUw6IDNweDtcblxuJGJvcmRlci1TOiAkYm9yZGVyV2lkdGgtUyBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiRib3JkZXItTTogJGJvcmRlcldpZHRoLU0gc29saWQgJGNvbG9yLXByaW1hcnk7XG4kYm9yZGVyLUw6ICRib3JkZXJXaWR0aC1MIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuXG4kYm9yZGVyUmFkaXVzLU06IDRweDtcbiRib3JkZXJSYWRpdXMtWEw6IDEuNXJlbTtcblxuJGJveFNoYWRvdy1NOiAwIDZweCAycHggLTRweCByZ2JhKDAsMCwwLC4yKSwgMCA0cHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuXG4kbWFyZ2luLVhTOiAgMC4yNXJlbTtcbiRtYXJnaW4tUzogICAwLjVyZW07XG4kbWFyZ2luLU06ICAgMXJlbTtcbiRtYXJnaW4tTDogICAxLjVyZW07XG4kbWFyZ2luLVhMOiAgM3JlbTtcbiRtYXJnaW4tWFhMOiA2cmVtO1xuXG4kbWF4V2lkdGgtUzogMjVyZW07XG4kbWF4V2lkdGgtTTogMzhyZW07XG4kbWF4V2lkdGgtTDogNDByZW07XG4kbWF4V2lkdGgtWEw6IDYwcmVtOyBcblxuJGFuaW1hdGlvbkVhc2luZzogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiRhbmltYXRpb25EdXJhdGlvbi1NOiAyMjVtcztcbiRhbmltYXRpb25EdXJhdGlvbi1YTDogNzAwbXM7XG4kYW5pbWF0aW9uVGltaW5nLU06ICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nLVhMOiAkYW5pbWF0aW9uRHVyYXRpb24tWEwgJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktTTogJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktWEw6ICRhbmltYXRpb25EdXJhdGlvbi1YTCAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuXG4kekluZGV4LTEwOiAxMDAwO1xuJHpJbmRleC05OiA5MDA7IC8vIFBvcHVwc1xuJHpJbmRleC04OiA4MDA7IC8vIFxuJHpJbmRleC03OiA3MDA7IC8vIFxuJHpJbmRleC02OiA2MDA7IC8vIFxuJHpJbmRleC01OiA1MDA7IC8vIENhcmRzXG4kekluZGV4LTQ6IDQwMDsgLy8gXG4kekluZGV4LTM6IDMwMDsgLy8gXG4kekluZGV4LTI6IDIwMDsgLy9cbiR6SW5kZXgtMTogMTAwOyAvL1xuJHpJbmRleC0wOiAwO1xuXG5cbi8qIE1hdGVyaWFsIHRoZW1lICovXG5cbi8vIFR5cG9ncmFwaHlcbi8vIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS90eXBvZ3JhcGh5XG4vLyBVc2FnZTogQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRhcHAtdHlwb2dyYXBoeSwgdGl0bGUpXG4kYXBwLXR5cG9ncmFwaHk6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogJGZvbnRGYW1pbHktcHJpbWFyeVxuKTtcblxuLy8gQ3VzdG9tIHBhbGV0dGVzIGFuZCB0aGVtZVxuLy8gU2VlIGh0dHA6Ly9tY2cubWJpdHNvbi5jb20vXG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItcHJpbWFyeSAvICNmZmZcbiRwYWxldHRlLXByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZSgoXG4gICAgNTAgOiAjZmZmZmZmLFxuICAgIDEwMCA6ICNmZmZmZmYsXG4gICAgMjAwIDogI2ZmZmZmZixcbiAgICAzMDAgOiAjZmZmZmZmLFxuICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgNTAwIDogI2ZmZmZmZixcbiAgICA2MDAgOiAjZmZmZmZmLFxuICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgODAwIDogI2ZmZmZmZixcbiAgICA5MDAgOiAjZmZmZmZmLFxuICAgIEExMDAgOiAjZmZmZmZmLFxuICAgIEEyMDAgOiAjZmZmZmZmLFxuICAgIEE0MDAgOiAjZmZmZmZmLFxuICAgIEE3MDAgOiAjZmZmZmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgICAgNjAwIDogIzAwMDAwMCxcbiAgICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgICAgODAwIDogIzAwMDAwMCxcbiAgICAgICAgOTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKSk7XG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItYWNjZW50IC8gI2RjY2E1OFxuJHBhbGV0dGUtYWNjZW50OiBtYXQuZGVmaW5lLXBhbGV0dGUoKFxuICA1MCA6ICNmYmY5ZWIsXG4gIDEwMCA6ICNmNWVmY2QsXG4gIDIwMCA6ICNlZWU1YWMsXG4gIDMwMCA6ICNlN2RhOGEsXG4gIDQwMCA6ICNlMWQyNzEsXG4gIDUwMCA6ICNkY2NhNTgsXG4gIDYwMCA6ICNkOGM1NTAsXG4gIDcwMCA6ICNkM2JkNDcsXG4gIDgwMCA6ICNjZWI3M2QsXG4gIDkwMCA6ICNjNWFiMmQsXG4gIEExMDAgOiAjZmZmZmZmLFxuICBBMjAwIDogI2ZmZjdkNCxcbiAgQTQwMCA6ICNmZmVlYTEsXG4gIEE3MDAgOiAjZmZlOTg3LFxuICBjb250cmFzdDogKFxuICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICA2MDAgOiAjMDAwMDAwLFxuICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgIDgwMCA6ICMwMDAwMDAsXG4gICAgICA5MDAgOiAjMDAwMDAwLFxuICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gIClcbikpO1xuXG4kcGFsZXR0ZS13YXJuOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRyZWQtcGFsZXR0ZSwgQTIwMCk7XG4kYXBwLXRoZW1lOiBtYXQuZGVmaW5lLWxpZ2h0LXRoZW1lKCRwYWxldHRlLXByaW1hcnksICRwYWxldHRlLWFjY2VudCwgJHBhbGV0dGUtd2Fybik7XG5cbi8qIE1peGlucyAqL1xuXG5AbWl4aW4gYWxsQ2FwcyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbkBtaXhpbiBidXR0b25PbldoaXRlIHtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IuY2hhbmdlKCRjb2xvci1wcmltYXJ5LCAkYWxwaGE6IDAuNSAqICRhbHBoYS1idXR0b25CZyk7XG4gIH0gXG59XG5cbkBtaXhpbiBidXR0b25PbkNvbG9yIHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcy5zY3NzJ1xuXG5cbiRib3JkZXI6ICRib3JkZXItTVxuXG46aG9zdFxuICBkaXNwbGF5OiBibG9ja1xuXG4uY29udGFpbmVyXG4gIGRpc3BsYXk6IGZsZXhcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaFxuICBoZWlnaHQ6IDEwMCVcbiAgcGFkZGluZzogJG1hcmdpbi1TIDBweFxuICBwb3NpdGlvbjogcmVsYXRpdmVcblxuLmNvbnRlbnRcbiAgYm9yZGVyOiAkYm9yZGVyXG4gIGhlaWdodDogMTAwJVxuICAvLyBkaXNwbGF5OiBmbGV4XG4gIC8vIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcFxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAvLyBhbGlnbi1pdGVtczogZmxleC1zdGFydFxuICBwb3NpdGlvbjogcmVsYXRpdmVcblxuLmJhclxuICAuY29udGVudFxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lXG5cbi5kb3RcbiAgLmNvbnRlbnQ6OmJlZm9yZVxuICAgIGJvcmRlci10b3A6ICRib3JkZXJcbiAgICBjb250ZW50OiAnJ1xuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgbGVmdDogMFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIHRvcDogY2FsYyg1MCUgLSAjeyRib3JkZXJXaWR0aC1NfSAvIDIpXG4gICAgd2lkdGg6IDEwMCVcblxuXG4ucHJldmlvdXNWYWx1ZVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5XG4gIGhlaWdodDogMnJlbVxuICB3aWR0aDogJGJvcmRlcldpZHRoLU1cbiAgcG9zaXRpb246IGFic29sdXRlXG4gIHRvcDogY2FsYyg1MCUgLSAxcmVtKVxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSlcbiAgdHJhbnNpdGlvbjogYWxsICRhbmltYXRpb25EdXJhdGlvbi1NXG5cbi52YWx1ZUJhclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeVxuICBoZWlnaHQ6IDFyZW1cbiAgcG9zaXRpb246IGFic29sdXRlXG4gIHRvcDogY2FsYyg1MCUgLSAwLjVyZW0pXG4gIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LVhMXG5cbi8vIC52YWx1ZUJhci52YWx1ZUNoYW5nZVxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeVxuLy8gICB0cmFuc2l0aW9uOiBhbGwgbm9uZVxuXG4vLyAgICYubmVnYXRpdmVcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5XG5cbi52YWx1ZURvdFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeVxuICBoZWlnaHQ6IDEuMnJlbVxuICB3aWR0aDogMS4ycmVtXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbVxuICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgdG9wOiBjYWxjKDUwJSAtIDAuNnJlbSlcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpXG4gIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LVhMXG5cbi8vIC52YWx1ZURvdC5wcmV2aW91c1ZhbHVlXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnlcbi8vICAgdHJhbnNpdGlvbjogYWxsIG5vbmVcblxuLnRpdGxlVG9wLFxuLnRpdGxlQm90dG9tXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICBsZWZ0OiAwXG4gIHJpZ2h0OiAwXG4gIHRleHQtYWxpZ246IGNlbnRlclxuXG4gIC50aXRsZVRleHRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeUJnXG4gICAgcGFkZGluZzogMHB4ICRtYXJnaW4tU1xuXG4udGl0bGVUb3BcbiAgdG9wOiAwcHhcblxuLnRpdGxlQm90dG9tXG4gIGJvdHRvbTogMHB4Il19 */"]
      });
      /***/
    },

    /***/
    74526:
    /*!**************************************************************!*\
      !*** ./src/app/pages/title-screen/title-screen.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TitleScreenComponent": function TitleScreenComponent() {
          return (
            /* binding */
            _TitleScreenComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _TitleScreenComponent = /*#__PURE__*/function () {
        function _TitleScreenComponent(shared) {
          _classCallCheck(this, _TitleScreenComponent);

          this.shared = shared;
        }

        _createClass(_TitleScreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "t",
          value: function t(text) {
            return this.shared.getText(text);
          }
        }]);

        return _TitleScreenComponent;
      }();

      _TitleScreenComponent.ɵfac = function TitleScreenComponent_Factory(t) {
        return new (t || _TitleScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _TitleScreenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TitleScreenComponent,
        selectors: [["app-title-screen"]],
        decls: 5,
        vars: 4,
        consts: [["id", "titleAndIntro"], [3, "innerHTML"], ["routerLink", "game", 3, "innerHTML"], ["id", "authors", 3, "innerHTML"]],
        template: function TitleScreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t("The Agile Quest Game"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t("Welcome to the corner office! You are the newly appointed CEO of Acme Bank Ltd., a venerable institution on the cusp of starting its second half-century. Alas, things are about to get stormy\u2026"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t("Start game"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t("AUTHORS"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
        styles: ["[_nghost-%COMP%] {\n  display: grid;\n  height: 100vh;\n  width: 100vw;\n  padding: 3rem;\n  grid-template-rows: 1fr 1em;\n  grid-template-columns: 1fr;\n}\n#titleAndIntro[_ngcontent-%COMP%] {\n  grid-area: 1/1;\n  align-self: center;\n  justify-self: center;\n  max-width: 40rem;\n  padding: 3rem;\n  text-align: center;\n}\n#titleAndIntro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 1.5rem;\n}\n#titleAndIntro[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n#titleAndIntro[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 4rem;\n  min-width: 20rem;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n}\n#authors[_ngcontent-%COMP%] {\n  grid-area: 2/1;\n  font-size: 0.72rem;\n  padding-right: 3rem;\n  text-align: center;\n}\n#authors[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit !important;\n  text-decoration: none !important;\n}\n#authors[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsInRpdGxlLXNjcmVlbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRkEsbUJBQUE7QUFtRkEsV0FBQTtBQ2pLQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFENkNXO0VDNUNYLDJCQUFBO0VBQ0EsMEJBQUE7QUFBRjtBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkQwQ1c7RUN6Q1gsYURvQ1c7RUNuQ1gsa0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJES1c7RUNKWCxxQkQ4QlM7QUM3QmI7QUFDRTtFQUNFLGlCRERVO0FDRWQ7QUFDRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLGlCRFRVO0VDVVYseUJBQUE7QUFBSjtBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCRGxCWTtFQ21CWixtQkRhVztFQ1pYLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUFJO0VBQ0UscUNBQUE7QUFFTiIsImZpbGUiOiJ0aXRsZS1zY3JlZW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ35AYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xuXG4kZm9udEluY3JlbWVudC1NOiAgIDEyMCU7XG5cbiRmb250RmFtaWx5LXByaW1hcnk6ICdZYW50cmFtYW5hdicsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiAgICAgd2hpdGU7XG4kY29sb3Itb25QcmltYXJ5OiAgIGJsYWNrO1xuJGNvbG9yLXByaW1hcnlCZzogICBibGFjaztcbiRjb2xvci1wcmltYXJ5QmdGYWRlZDogIGNvbG9yLmNoYW5nZSgkY29sb3ItcHJpbWFyeUJnLCAkYWxwaGE6IDAuNSk7XG4kY29sb3ItYWNjZW50OiAgICAgICNkY2NhNTg7XG4kY29sb3ItYWNjZW50RGFya2VyOiBjb2xvci5jaGFuZ2UoJGNvbG9yLWFjY2VudCwgJGxpZ2h0bmVzczogNDAlKTtcbiRjb2xvci1zZWNvbmRhcnk6ICAgY29sb3IubWl4KCRjb2xvci1vblByaW1hcnksICRjb2xvci1wcmltYXJ5LCA2MCUpO1xuXG4kYWxwaGEtb3ZlcmxheTogMC44O1xuJGFscGhhLWJ1dHRvbkJnOiAwLjE1O1xuJGFscGhhLWZhZGVkOiAwLjM7XG4kb3BhY2l0eS1kaXNhYmxlZDogMC41O1xuXG4kZm9udFNpemUtWFM6IDAuNzJyZW07XG4kZm9udFNpemUtUzogIDAuOHJlbTtcbiRmb250U2l6ZS1NOiAgMXJlbTtcbiRmb250U2l6ZS1MOiAgMS4ycmVtO1xuJGZvbnRTaXplLVhMOiAxLjVyZW07XG4kZm9udFNpemUtWFhMOiAzLjVyZW07XG5cbiRmb250V2VpZ2h0LU06IDUwMDtcbiRmb250V2VpZ2h0LUw6IDkwMDtcblxuJGZvbnRTaXplLWljb25MOiAzMnB4O1xuXG4kbGluZUhlaWdodC1TOiAxLjE7XG4kbGluZUhlaWdodC1NOiAxLjM7XG5cbiRib3JkZXJXaWR0aC1TOiAxcHg7XG4kYm9yZGVyV2lkdGgtTTogMnB4O1xuJGJvcmRlcldpZHRoLUw6IDNweDtcblxuJGJvcmRlci1TOiAkYm9yZGVyV2lkdGgtUyBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiRib3JkZXItTTogJGJvcmRlcldpZHRoLU0gc29saWQgJGNvbG9yLXByaW1hcnk7XG4kYm9yZGVyLUw6ICRib3JkZXJXaWR0aC1MIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuXG4kYm9yZGVyUmFkaXVzLU06IDRweDtcbiRib3JkZXJSYWRpdXMtWEw6IDEuNXJlbTtcblxuJGJveFNoYWRvdy1NOiAwIDZweCAycHggLTRweCByZ2JhKDAsMCwwLC4yKSwgMCA0cHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuXG4kbWFyZ2luLVhTOiAgMC4yNXJlbTtcbiRtYXJnaW4tUzogICAwLjVyZW07XG4kbWFyZ2luLU06ICAgMXJlbTtcbiRtYXJnaW4tTDogICAxLjVyZW07XG4kbWFyZ2luLVhMOiAgM3JlbTtcbiRtYXJnaW4tWFhMOiA2cmVtO1xuXG4kbWF4V2lkdGgtUzogMjVyZW07XG4kbWF4V2lkdGgtTTogMzhyZW07XG4kbWF4V2lkdGgtTDogNDByZW07XG4kbWF4V2lkdGgtWEw6IDYwcmVtOyBcblxuJGFuaW1hdGlvbkVhc2luZzogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiRhbmltYXRpb25EdXJhdGlvbi1NOiAyMjVtcztcbiRhbmltYXRpb25EdXJhdGlvbi1YTDogNzAwbXM7XG4kYW5pbWF0aW9uVGltaW5nLU06ICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nLVhMOiAkYW5pbWF0aW9uRHVyYXRpb24tWEwgJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktTTogJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktWEw6ICRhbmltYXRpb25EdXJhdGlvbi1YTCAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuXG4kekluZGV4LTEwOiAxMDAwO1xuJHpJbmRleC05OiA5MDA7IC8vIFBvcHVwc1xuJHpJbmRleC04OiA4MDA7IC8vIFxuJHpJbmRleC03OiA3MDA7IC8vIFxuJHpJbmRleC02OiA2MDA7IC8vIFxuJHpJbmRleC01OiA1MDA7IC8vIENhcmRzXG4kekluZGV4LTQ6IDQwMDsgLy8gXG4kekluZGV4LTM6IDMwMDsgLy8gXG4kekluZGV4LTI6IDIwMDsgLy9cbiR6SW5kZXgtMTogMTAwOyAvL1xuJHpJbmRleC0wOiAwO1xuXG5cbi8qIE1hdGVyaWFsIHRoZW1lICovXG5cbi8vIFR5cG9ncmFwaHlcbi8vIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS90eXBvZ3JhcGh5XG4vLyBVc2FnZTogQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRhcHAtdHlwb2dyYXBoeSwgdGl0bGUpXG4kYXBwLXR5cG9ncmFwaHk6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogJGZvbnRGYW1pbHktcHJpbWFyeVxuKTtcblxuLy8gQ3VzdG9tIHBhbGV0dGVzIGFuZCB0aGVtZVxuLy8gU2VlIGh0dHA6Ly9tY2cubWJpdHNvbi5jb20vXG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItcHJpbWFyeSAvICNmZmZcbiRwYWxldHRlLXByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZSgoXG4gICAgNTAgOiAjZmZmZmZmLFxuICAgIDEwMCA6ICNmZmZmZmYsXG4gICAgMjAwIDogI2ZmZmZmZixcbiAgICAzMDAgOiAjZmZmZmZmLFxuICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgNTAwIDogI2ZmZmZmZixcbiAgICA2MDAgOiAjZmZmZmZmLFxuICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgODAwIDogI2ZmZmZmZixcbiAgICA5MDAgOiAjZmZmZmZmLFxuICAgIEExMDAgOiAjZmZmZmZmLFxuICAgIEEyMDAgOiAjZmZmZmZmLFxuICAgIEE0MDAgOiAjZmZmZmZmLFxuICAgIEE3MDAgOiAjZmZmZmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgICAgNjAwIDogIzAwMDAwMCxcbiAgICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgICAgODAwIDogIzAwMDAwMCxcbiAgICAgICAgOTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKSk7XG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItYWNjZW50IC8gI2RjY2E1OFxuJHBhbGV0dGUtYWNjZW50OiBtYXQuZGVmaW5lLXBhbGV0dGUoKFxuICA1MCA6ICNmYmY5ZWIsXG4gIDEwMCA6ICNmNWVmY2QsXG4gIDIwMCA6ICNlZWU1YWMsXG4gIDMwMCA6ICNlN2RhOGEsXG4gIDQwMCA6ICNlMWQyNzEsXG4gIDUwMCA6ICNkY2NhNTgsXG4gIDYwMCA6ICNkOGM1NTAsXG4gIDcwMCA6ICNkM2JkNDcsXG4gIDgwMCA6ICNjZWI3M2QsXG4gIDkwMCA6ICNjNWFiMmQsXG4gIEExMDAgOiAjZmZmZmZmLFxuICBBMjAwIDogI2ZmZjdkNCxcbiAgQTQwMCA6ICNmZmVlYTEsXG4gIEE3MDAgOiAjZmZlOTg3LFxuICBjb250cmFzdDogKFxuICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICA2MDAgOiAjMDAwMDAwLFxuICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgIDgwMCA6ICMwMDAwMDAsXG4gICAgICA5MDAgOiAjMDAwMDAwLFxuICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gIClcbikpO1xuXG4kcGFsZXR0ZS13YXJuOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRyZWQtcGFsZXR0ZSwgQTIwMCk7XG4kYXBwLXRoZW1lOiBtYXQuZGVmaW5lLWxpZ2h0LXRoZW1lKCRwYWxldHRlLXByaW1hcnksICRwYWxldHRlLWFjY2VudCwgJHBhbGV0dGUtd2Fybik7XG5cbi8qIE1peGlucyAqL1xuXG5AbWl4aW4gYWxsQ2FwcyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbkBtaXhpbiBidXR0b25PbldoaXRlIHtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IuY2hhbmdlKCRjb2xvci1wcmltYXJ5LCAkYWxwaGE6IDAuNSAqICRhbHBoYS1idXR0b25CZyk7XG4gIH0gXG59XG5cbkBtaXhpbiBidXR0b25PbkNvbG9yIHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xufSIsIkB1c2UgJ3Nhc3M6Y29sb3InXG5AaW1wb3J0ICd2YXJpYWJsZXMuc2NzcydcblxuOmhvc3RcbiAgZGlzcGxheTogZ3JpZFxuICBoZWlnaHQ6IDEwMHZoXG4gIHdpZHRoOiAxMDB2d1xuICBwYWRkaW5nOiAkbWFyZ2luLVhMXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFlbVxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmclxuXG4jdGl0bGVBbmRJbnRyb1xuICBncmlkLWFyZWE6IDEgLyAxXG4gIGFsaWduLXNlbGY6IGNlbnRlclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxuICBtYXgtd2lkdGg6ICRtYXhXaWR0aC1MXG4gIHBhZGRpbmc6ICRtYXJnaW4tWExcbiAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgaDFcbiAgICBmb250LXNpemU6ICRmb250U2l6ZS1YWExcbiAgICBtYXJnaW4tYm90dG9tOiAkbWFyZ2luLUxcblxuICA+IGRpdlxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplLUxcblxuICBidXR0b25cbiAgICB3aWR0aDogYXV0b1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvXG4gICAgbWluLWhlaWdodDogNHJlbVxuICAgIG1pbi13aWR0aDogMjByZW1cbiAgICAvLyBmb250LWZhbWlseTogJGZvbnRGYW1pbHktYWNjZW50XG4gICAgZm9udC1zaXplOiAkZm9udFNpemUtWExcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG5cbiNhdXRob3JzXG4gIGdyaWQtYXJlYTogMiAvIDFcbiAgZm9udC1zaXplOiAkZm9udFNpemUtWFNcbiAgcGFkZGluZy1yaWdodDogJG1hcmdpbi1YTFxuICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuICBhXG4gICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50XG4gICAgJjpob3ZlclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudCJdfQ== */"]
      });
      /***/
    },

    /***/
    1743:
    /*!**************************************!*\
      !*** ./src/app/shared/d3.service.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "D3Service": function D3Service() {
          return (
            /* binding */
            _D3Service
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! d3 */
      78717);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /*
       * A basic wrapper around d3.js
       * To access the d3 namespace, use D3Service.d3
       */


      var _D3Service = function _D3Service() {
        _classCallCheck(this, _D3Service);

        this.d3 = d3__WEBPACK_IMPORTED_MODULE_0__;
      };

      _D3Service.ɵfac = function D3Service_Factory(t) {
        return new (t || _D3Service)();
      };

      _D3Service.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _D3Service,
        factory: _D3Service.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    51679:
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ANIMATION_DURATION": function ANIMATION_DURATION() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION
          );
        },

        /* harmony export */
        "ANIMATION_DURATION_MS": function ANIMATION_DURATION_MS() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS
          );
        },

        /* harmony export */
        "ANIMATION_EASING": function ANIMATION_EASING() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_EASING
          );
        },

        /* harmony export */
        "ANIMATION_TIMING": function ANIMATION_TIMING() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING
          );
        },

        /* harmony export */
        "ANIMATION_TIMING_DELAYED": function ANIMATION_TIMING_DELAYED() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING_DELAYED
          );
        },

        /* harmony export */
        "DEFAULT_LOCALE": function DEFAULT_LOCALE() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LOCALE
          );
        },

        /* harmony export */
        "PERSPECTIVE": function PERSPECTIVE() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE
          );
        },

        /* harmony export */
        "SharedService": function SharedService() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService
          );
        },

        /* harmony export */
        "D3Service": function D3Service() {
          return (
            /* reexport safe */
            _d3_service__WEBPACK_IMPORTED_MODULE_2__.D3Service
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared.service */
      77420);
      /* harmony import */


      var _shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared.types */
      17537);
      /* harmony import */


      var _d3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./d3.service */
      1743);
      /***/

    },

    /***/
    77420:
    /*!******************************************!*\
      !*** ./src/app/shared/shared.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ANIMATION_DURATION_MS": function ANIMATION_DURATION_MS() {
          return (
            /* binding */
            _ANIMATION_DURATION_MS
          );
        },

        /* harmony export */
        "ANIMATION_DURATION": function ANIMATION_DURATION() {
          return (
            /* binding */
            _ANIMATION_DURATION
          );
        },

        /* harmony export */
        "ANIMATION_EASING": function ANIMATION_EASING() {
          return (
            /* binding */
            _ANIMATION_EASING
          );
        },

        /* harmony export */
        "ANIMATION_TIMING": function ANIMATION_TIMING() {
          return (
            /* binding */
            _ANIMATION_TIMING
          );
        },

        /* harmony export */
        "ANIMATION_TIMING_DELAYED": function ANIMATION_TIMING_DELAYED() {
          return (
            /* binding */
            _ANIMATION_TIMING_DELAYED
          );
        },

        /* harmony export */
        "DEFAULT_LOCALE": function DEFAULT_LOCALE() {
          return (
            /* binding */
            _DEFAULT_LOCALE
          );
        },

        /* harmony export */
        "PERSPECTIVE": function PERSPECTIVE() {
          return (
            /* binding */
            _PERSPECTIVE
          );
        },

        /* harmony export */
        "SharedService": function SharedService() {
          return (
            /* binding */
            _SharedService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      35758);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _ANIMATION_DURATION_MS = 225;

      var _ANIMATION_DURATION = _ANIMATION_DURATION_MS + 'ms';

      var _ANIMATION_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

      var _ANIMATION_TIMING = "".concat(_ANIMATION_DURATION, " ").concat(_ANIMATION_EASING);

      var _ANIMATION_TIMING_DELAYED = "".concat(_ANIMATION_DURATION, " ").concat(_ANIMATION_DURATION, " ").concat(_ANIMATION_EASING);

      var _DEFAULT_LOCALE = 'en-US';
      var _PERSPECTIVE = 'perspective(1000px)';
      var SETTINGS_URL = 'assets/data/settings.json';
      var TEXTS_URL = 'assets/data/texts.json';

      var _SharedService = /*#__PURE__*/function () {
        function _SharedService(http, locale) {
          _classCallCheck(this, _SharedService);

          this.http = http;
          this.locale = locale;
          this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.indicators = {};
          this.ready = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
          this.ribbons = {};
          this.scenarios = {};
          this.strategies = {};
          this.loadData();
        }

        _createClass(_SharedService, [{
          key: "loadData",
          value: function loadData() {
            var _this13 = this;

            (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)([this.http.get(SETTINGS_URL).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (d) {
              _this13.processSettings(d);

              return true;
            })), this.http.get(TEXTS_URL).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (d) {
              _this13.texts = d;
              return true;
            }))]).subscribe(function (_) {
              return _this13.ready.next(true);
            });
          }
          /*
           * Process the whole settings json object
           */

        }, {
          key: "processSettings",
          value: function processSettings(settings) {
            this.settings = {
              version: settings.version,
              rounds: settings.rounds
            };

            for (var _i = 0, _arr = ['indicators', 'ribbons', 'scenarios', 'strategies']; _i < _arr.length; _i++) {
              var list = _arr[_i];
              this[list] = this.processJsonList(settings[list]);
            }

            this.firstScenario = settings.scenarios[0];
          }
          /*
           * Create proper objects from settings.json sublists
           */

        }, {
          key: "processJsonList",
          value: function processJsonList(data) {
            var dict = {};
            data.forEach(function (d) {
              return dict[d.id] = d;
            });
            return dict;
          }
          /*
           * Return the prompt text in current locale or the text itself if that's not available.
           * If text is a localized string, select the correct localized version or use the default.
           * Note that if the text is to contain any HTML markup, it should be used as a bound
           * property, i.e., <span [innerHTML]="shared.getText('Text')"></span>. It will be
           * sanitized by Angular but basic formatting and links are allowed, at least.
           */

        }, {
          key: "getText",
          value: function getText(text) {
            var _a, _b, _c;

            if (text == null) return "";else if (typeof text === "string") return (_b = (_a = this.texts[text]) === null || _a === void 0 ? void 0 : _a[this.locale]) !== null && _b !== void 0 ? _b : text;else return (_c = text[this.locale]) !== null && _c !== void 0 ? _c : text[_DEFAULT_LOCALE];
          }
        }]);

        return _SharedService;
      }();

      _SharedService.ɵfac = function SharedService_Factory(t) {
        return new (t || _SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
      };

      _SharedService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _SharedService,
        factory: _SharedService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    17537:
    /*!****************************************!*\
      !*** ./src/app/shared/shared.types.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map