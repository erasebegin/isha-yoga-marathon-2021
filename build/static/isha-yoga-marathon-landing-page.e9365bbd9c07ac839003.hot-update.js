webpackHotUpdate("isha-yoga-marathon-landing-page",{

/***/ "./packages/yoga-landing-page/src/components/index.js":
/*!************************************************************!*\
  !*** ./packages/yoga-landing-page/src/components/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./packages/yoga-landing-page/src/components/Header.js\");\n/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Accordion */ \"./packages/yoga-landing-page/src/components/Accordion.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/global.css */ \"./packages/yoga-landing-page/src/styles/global.css\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}// COMPONENTS\n// STYLES\nconst Root=({state})=>{// fetch current url\nconst data=state.source.get(state.router.link);const guests=[{name:\"Elias Beck\",description:\"Forbes Magazine 30 under 30\",image:\"/Elias.png\"},{name:\"Debonita Deore\",description:\"Cosmopoliton Best Travel Blogger\",image:\"/Debonita.png\"},{name:\"Elisa Varoud\",description:\"Actress, This is Enchanting\",image:\"/Elisa.png\"}];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"link\",{rel:\"preconnect\",href:\"https://fonts.gstatic.com\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"link\",{href:\"https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,900;1,200;1,300&family=Merriweather:wght@300;400;700;900&display=swap\",rel:\"stylesheet\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Global\"],{styles:/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_styles_global_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], false?undefined:\";label:Root;\", false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxpc2hhXFx5b2dhLW1hcmF0aG9uLWxhbmRpbmctcGFnZVxccGFja2FnZXNcXHlvZ2EtbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDc0IiLCJmaWxlIjoiRDpcXENvZGVcXGlzaGFcXHlvZ2EtbWFyYXRob24tbGFuZGluZy1wYWdlXFxwYWNrYWdlc1xceW9nYS1sYW5kaW5nLXBhZ2VcXHNyY1xcY29tcG9uZW50c1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCI7XG5cbi8vIENPTVBPTkVOVFNcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vQWNjb3JkaW9uXCI7XG5cbi8vIFNUWUxFU1xuaW1wb3J0IGdsb2JhbCBmcm9tIFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcblxuY29uc3QgUm9vdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gZmV0Y2ggY3VycmVudCB1cmxcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIGNvbnN0IGd1ZXN0cyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkVsaWFzIEJlY2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZvcmJlcyBNYWdhemluZSAzMCB1bmRlciAzMFwiLFxuICAgICAgaW1hZ2U6IFwiL0VsaWFzLnBuZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkRlYm9uaXRhIERlb3JlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb3Ntb3BvbGl0b24gQmVzdCBUcmF2ZWwgQmxvZ2dlclwiLFxuICAgICAgaW1hZ2U6IFwiL0RlYm9uaXRhLnBuZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkVsaXNhIFZhcm91ZFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQWN0cmVzcywgVGhpcyBpcyBFbmNoYW50aW5nXCIsXG4gICAgICBpbWFnZTogXCIvRWxpc2EucG5nXCJcbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK1NhbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMjAwOzEsMzAwJmZhbWlseT1NZXJyaXdlYXRoZXI6d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtjc3MoZ2xvYmFsKX0gLz5cbiAgICAgIDxSb290Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8QWNjb3JkaW9uIGd1ZXN0PXtndWVzdHN9Lz5cbiAgICAgICAgICB7LyogXG4gICAgICAgIDxwPmN1cnJlbnQgdXJsOiB7c3RhdGUucm91dGVyLmxpbmt9PC9wPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9hYm91dC11c1wiPkFib3V0IFVzPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9hYm91dC15b3VcIj5BYm91dCBZb3U8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxkaXYgd2hlbj17ZGF0YS5pc0FyY2hpdmV9PkFycnJyY2hpdmU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHdoZW49e2RhdGEuaXNQb3N0fT5Qb3Nzc3NzdDwvZGl2PlxuICAgICAgICAgIDxkaXYgd2hlbj17ZGF0YS5pc1BhZ2V9PkxpaWlpaWlpc3Q8L2Rpdj5cbiAgICAgICAgPC9Td2l0Y2g+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUm9vdENvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFJvb3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuXG4gIC5pbm5lci1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFJvb3QpO1xuIl19 */\")}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(RootContainer,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"div\",{className:\"inner-container\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_Accordion__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{guest:guests})]})})]});};const RootContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1onuxrx0\",label:\"RootContainer\"})( false?undefined:{name:\"1doxljs\",styles:\"width:100%;margin:0;.inner-container{max-width:1200px;margin:auto;padding:1rem;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxpc2hhXFx5b2dhLW1hcmF0aG9uLWxhbmRpbmctcGFnZVxccGFja2FnZXNcXHlvZ2EtbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFZ0MiLCJmaWxlIjoiRDpcXENvZGVcXGlzaGFcXHlvZ2EtbWFyYXRob24tbGFuZGluZy1wYWdlXFxwYWNrYWdlc1xceW9nYS1sYW5kaW5nLXBhZ2VcXHNyY1xcY29tcG9uZW50c1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCI7XG5cbi8vIENPTVBPTkVOVFNcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vQWNjb3JkaW9uXCI7XG5cbi8vIFNUWUxFU1xuaW1wb3J0IGdsb2JhbCBmcm9tIFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcblxuY29uc3QgUm9vdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gZmV0Y2ggY3VycmVudCB1cmxcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIGNvbnN0IGd1ZXN0cyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkVsaWFzIEJlY2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZvcmJlcyBNYWdhemluZSAzMCB1bmRlciAzMFwiLFxuICAgICAgaW1hZ2U6IFwiL0VsaWFzLnBuZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkRlYm9uaXRhIERlb3JlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb3Ntb3BvbGl0b24gQmVzdCBUcmF2ZWwgQmxvZ2dlclwiLFxuICAgICAgaW1hZ2U6IFwiL0RlYm9uaXRhLnBuZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkVsaXNhIFZhcm91ZFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQWN0cmVzcywgVGhpcyBpcyBFbmNoYW50aW5nXCIsXG4gICAgICBpbWFnZTogXCIvRWxpc2EucG5nXCJcbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK1NhbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMjAwOzEsMzAwJmZhbWlseT1NZXJyaXdlYXRoZXI6d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtjc3MoZ2xvYmFsKX0gLz5cbiAgICAgIDxSb290Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8QWNjb3JkaW9uIGd1ZXN0PXtndWVzdHN9Lz5cbiAgICAgICAgICB7LyogXG4gICAgICAgIDxwPmN1cnJlbnQgdXJsOiB7c3RhdGUucm91dGVyLmxpbmt9PC9wPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9hYm91dC11c1wiPkFib3V0IFVzPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9hYm91dC15b3VcIj5BYm91dCBZb3U8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxkaXYgd2hlbj17ZGF0YS5pc0FyY2hpdmV9PkFycnJyY2hpdmU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHdoZW49e2RhdGEuaXNQb3N0fT5Qb3Nzc3NzdDwvZGl2PlxuICAgICAgICAgIDxkaXYgd2hlbj17ZGF0YS5pc1BhZ2V9PkxpaWlpaWlpc3Q8L2Rpdj5cbiAgICAgICAgPC9Td2l0Y2g+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUm9vdENvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFJvb3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuXG4gIC5pbm5lci1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFJvb3QpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Root));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy95b2dhLWxhbmRpbmctcGFnZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz84ZDA5Il0sIm5hbWVzIjpbIlJvb3QiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwiZ3Vlc3RzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJjc3MiLCJnbG9iYWwiLCJSb290Q29udGFpbmVyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7cVJBS0E7QUFLQTtBQUdBLEtBQU1BLEtBQUksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBQzFCO0FBQ0EsS0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FFQSxLQUFNQyxPQUFNLENBQUcsQ0FDYixDQUNFQyxJQUFJLENBQUUsWUFEUixDQUVFQyxXQUFXLENBQUUsNkJBRmYsQ0FHRUMsS0FBSyxDQUFFLFlBSFQsQ0FEYSxDQU1iLENBQ0VGLElBQUksQ0FBRSxnQkFEUixDQUVFQyxXQUFXLENBQUUsa0NBRmYsQ0FHRUMsS0FBSyxDQUFFLGVBSFQsQ0FOYSxDQVdiLENBQ0VGLElBQUksQ0FBRSxjQURSLENBRUVDLFdBQVcsQ0FBRSw2QkFGZixDQUdFQyxLQUFLLENBQUUsWUFIVCxDQVhhLENBQWYsQ0FrQkEsTUFDRSx3SkFDRSx3RUFBQyw2Q0FBRCxZQUNFLCtFQUFNLEdBQUcsQ0FBQyxZQUFWLENBQXVCLElBQUksQ0FBQywyQkFBNUIsRUFERixDQUVFLCtFQUNFLElBQUksQ0FBQywwS0FEUCxDQUVFLEdBQUcsQ0FBQyxZQUZOLEVBRkYsR0FERixDQVFFLHVFQUFDLCtDQUFELEVBQVEsTUFBTSxjQUFFQyxvREFBRyxDQUFDQywwREFBRCxvOEdBQW5CLEVBUkYsQ0FTRSx1RUFBQyxhQUFELFdBQ0UsK0VBQUssU0FBUyxDQUFDLGlCQUFmLFdBQ0UsdUVBQUMsK0NBQUQsSUFERixDQUVFLHVFQUFDLGtEQUFELEVBQVcsS0FBSyxDQUFFTCxNQUFsQixFQUZGLEdBREYsRUFURixHQURGLENBc0NELENBNURELENBOERBLEtBQU1NLGNBQWEsd3JIQUFuQixDQVdlQyx1SEFBTyxDQUFDZCxJQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMveW9nYS1sYW5kaW5nLXBhZ2Uvc3JjL2NvbXBvbmVudHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvbGlua1wiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCI7XG5cbi8vIENPTVBPTkVOVFNcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vQWNjb3JkaW9uXCI7XG5cbi8vIFNUWUxFU1xuaW1wb3J0IGdsb2JhbCBmcm9tIFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcblxuY29uc3QgUm9vdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gZmV0Y2ggY3VycmVudCB1cmxcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIGNvbnN0IGd1ZXN0cyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkVsaWFzIEJlY2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZvcmJlcyBNYWdhemluZSAzMCB1bmRlciAzMFwiLFxuICAgICAgaW1hZ2U6IFwiL0VsaWFzLnBuZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkRlYm9uaXRhIERlb3JlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb3Ntb3BvbGl0b24gQmVzdCBUcmF2ZWwgQmxvZ2dlclwiLFxuICAgICAgaW1hZ2U6IFwiL0RlYm9uaXRhLnBuZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkVsaXNhIFZhcm91ZFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQWN0cmVzcywgVGhpcyBpcyBFbmNoYW50aW5nXCIsXG4gICAgICBpbWFnZTogXCIvRWxpc2EucG5nXCJcbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK1NhbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMjAwOzEsMzAwJmZhbWlseT1NZXJyaXdlYXRoZXI6d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtjc3MoZ2xvYmFsKX0gLz5cbiAgICAgIDxSb290Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8QWNjb3JkaW9uIGd1ZXN0PXtndWVzdHN9Lz5cbiAgICAgICAgICB7LyogXG4gICAgICAgIDxwPmN1cnJlbnQgdXJsOiB7c3RhdGUucm91dGVyLmxpbmt9PC9wPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9hYm91dC11c1wiPkFib3V0IFVzPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9hYm91dC15b3VcIj5BYm91dCBZb3U8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxkaXYgd2hlbj17ZGF0YS5pc0FyY2hpdmV9PkFycnJyY2hpdmU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHdoZW49e2RhdGEuaXNQb3N0fT5Qb3Nzc3NzdDwvZGl2PlxuICAgICAgICAgIDxkaXYgd2hlbj17ZGF0YS5pc1BhZ2V9PkxpaWlpaWlpc3Q8L2Rpdj5cbiAgICAgICAgPC9Td2l0Y2g+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUm9vdENvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFJvb3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuXG4gIC5pbm5lci1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFJvb3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/yoga-landing-page/src/components/index.js\n");

/***/ })

})