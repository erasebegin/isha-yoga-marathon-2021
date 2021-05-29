webpackHotUpdate("isha-yoga-marathon-landing-page",{

/***/ "./packages/yoga-landing-page/src/components/Accordion.js":
/*!****************************************************************!*\
  !*** ./packages/yoga-landing-page/src/components/Accordion.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Accordion; });\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _GuestCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GuestCard */ \"./packages/yoga-landing-page/src/components/GuestCard.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}function AccordionSection({children,title}){const[isOpen,setIsOpen]=Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(SectionContainer,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"div\",{className:\"title-container\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"button\",{onClick:()=>setIsOpen(!isOpen),children:isOpen?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__[\"AiOutlineMinusCircle\"],{}):Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__[\"AiOutlinePlusCircle\"],{})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"h2\",{children:title})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{className:\"body-container\",style:{opacity:isOpen?1:0,maxHeight:isOpen?1000:0},children:isOpen&&children})]});}function Accordion({guests}){return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(AccordionContainer,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(AccordionSection,{title:\"Event details and highlights\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"p\",{className:\"event-details\",children:\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum similique, et hic tenetur tempora necessitatibus nam eaque tempore quis dicta excepturi perferendis vel incidunt, dolor optio? Praesentium, voluptatem? Quibusdam?\"})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(AccordionSection,{title:\"How do I join?\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"div\",{className:\"how-to-join\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"h2\",{className:\"accordion-section-title\",children:[\"Our featured guests on\",\" \",Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"b\",{children:[\"Saturday 19\",Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"sup\",{children:\"th\"})]})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"div\",{className:\"guest-cards\",children:guests.map((guest,index)=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_GuestCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{name:guest.name,description:guest.description,image:guest.image},index))})]})})]});}const SectionContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_4__[\"styled\"])(\"div\", false?undefined:{target:\"e18seg7x1\",label:\"SectionContainer\"})( false?undefined:{name:\"1hh0o7l\",styles:\"margin-bottom:1rem;.title-container{display:flex;align-items:center;padding:1rem;padding-bottom:0.5rem;button{display:flex;align-items:center;background:none;border:none;font-size:2.5rem;color:var(--mustard);padding:0;margin-right:1rem;cursor:pointer;}h2{font-weight:400;}}.body-container{transition:400ms;}.guest-cards{display:flex;justify-content:center;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxpc2hhXFx5b2dhLW1hcmF0aG9uLWxhbmRpbmctcGFnZVxccGFja2FnZXNcXHlvZ2EtbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXEFjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RG1DIiwiZmlsZSI6IkQ6XFxDb2RlXFxpc2hhXFx5b2dhLW1hcmF0aG9uLWxhbmRpbmctcGFnZVxccGFja2FnZXNcXHlvZ2EtbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXEFjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgeyBBaU91dGxpbmVQbHVzQ2lyY2xlLCBBaU91dGxpbmVNaW51c0NpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IEd1ZXN0Q2FyZCBmcm9tIFwiLi9HdWVzdENhcmRcIjtcblxuZnVuY3Rpb24gQWNjb3JkaW9uU2VjdGlvbih7IGNoaWxkcmVuLCB0aXRsZSB9KSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PlxuICAgICAgICAgIHtpc09wZW4gPyA8QWlPdXRsaW5lTWludXNDaXJjbGUgLz4gOiA8QWlPdXRsaW5lUGx1c0NpcmNsZSAvPn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJib2R5LWNvbnRhaW5lclwiXG4gICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IGlzT3BlbiA/IDEgOiAwLCBtYXhIZWlnaHQ6IGlzT3BlbiA/IDEwMDAgOiAwIH19XG4gICAgICA+XG4gICAgICAgIHtpc09wZW4gJiYgY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY29yZGlvbih7IGd1ZXN0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEFjY29yZGlvbkNvbnRhaW5lcj5cbiAgICAgIDxBY2NvcmRpb25TZWN0aW9uIHRpdGxlPVwiRXZlbnQgZGV0YWlscyBhbmQgaGlnaGxpZ2h0c1wiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJldmVudC1kZXRhaWxzXCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW52ZW50b3JlXG4gICAgICAgICAgaGFydW0gc2ltaWxpcXVlLCBldCBoaWMgdGVuZXR1ciB0ZW1wb3JhIG5lY2Vzc2l0YXRpYnVzIG5hbSBlYXF1ZVxuICAgICAgICAgIHRlbXBvcmUgcXVpcyBkaWN0YSBleGNlcHR1cmkgcGVyZmVyZW5kaXMgdmVsIGluY2lkdW50LCBkb2xvciBvcHRpbz9cbiAgICAgICAgICBQcmFlc2VudGl1bSwgdm9sdXB0YXRlbT8gUXVpYnVzZGFtP1xuICAgICAgICA8L3A+XG4gICAgICA8L0FjY29yZGlvblNlY3Rpb24+XG4gICAgICA8QWNjb3JkaW9uU2VjdGlvbiB0aXRsZT1cIkhvdyBkbyBJIGpvaW4/XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG93LXRvLWpvaW5cIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgIE91ciBmZWF0dXJlZCBndWVzdHMgb257XCIgXCJ9XG4gICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgU2F0dXJkYXkgMTk8c3VwPnRoPC9zdXA+XG4gICAgICAgICAgICA8L2I+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1ZXN0LWNhcmRzXCI+XG4gICAgICAgICAgICB7Z3Vlc3RzLm1hcCgoZ3Vlc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHdWVzdENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIG5hbWU9e2d1ZXN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2d1ZXN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGltYWdlPXtndWVzdC5pbWFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQWNjb3JkaW9uU2VjdGlvbj5cbiAgICA8L0FjY29yZGlvbkNvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIC50aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG5cbiAgICBidXR0b24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tbXVzdGFyZCk7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG5cbiAgLmJvZHktY29udGFpbmVyIHtcbiAgICB0cmFuc2l0aW9uOiA0MDBtcztcbiAgfVxuXG4gIC5ndWVzdC1jYXJkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuYDtcbmNvbnN0IEFjY29yZGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmV2ZW50LWRldGFpbHMsXG4gIC5ob3ctdG8tam9pbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDQuNXJlbTtcbiAgfVxuXG4gIC5ldmVudC1kZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cblxuICAuaG93LXRvLWpvaW4ge1xuICAgIC5hY2NvcmRpb24tc2VjdGlvbi10aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const AccordionContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_4__[\"styled\"])(\"div\", false?undefined:{target:\"e18seg7x0\",label:\"AccordionContainer\"})( false?undefined:{name:\"1ovafyu\",styles:\"margin-top:2rem;overflow:hidden;.event-details,.how-to-join{margin-left:4.5rem;}.event-details{font-size:2rem;font-weight:200;font-style:italic;}.how-to-join{.accordion-section-title{text-align:center;margin-bottom:1rem;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxpc2hhXFx5b2dhLW1hcmF0aG9uLWxhbmRpbmctcGFnZVxccGFja2FnZXNcXHlvZ2EtbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXEFjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRnFDIiwiZmlsZSI6IkQ6XFxDb2RlXFxpc2hhXFx5b2dhLW1hcmF0aG9uLWxhbmRpbmctcGFnZVxccGFja2FnZXNcXHlvZ2EtbGFuZGluZy1wYWdlXFxzcmNcXGNvbXBvbmVudHNcXEFjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgeyBBaU91dGxpbmVQbHVzQ2lyY2xlLCBBaU91dGxpbmVNaW51c0NpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IEd1ZXN0Q2FyZCBmcm9tIFwiLi9HdWVzdENhcmRcIjtcblxuZnVuY3Rpb24gQWNjb3JkaW9uU2VjdGlvbih7IGNoaWxkcmVuLCB0aXRsZSB9KSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PlxuICAgICAgICAgIHtpc09wZW4gPyA8QWlPdXRsaW5lTWludXNDaXJjbGUgLz4gOiA8QWlPdXRsaW5lUGx1c0NpcmNsZSAvPn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJib2R5LWNvbnRhaW5lclwiXG4gICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IGlzT3BlbiA/IDEgOiAwLCBtYXhIZWlnaHQ6IGlzT3BlbiA/IDEwMDAgOiAwIH19XG4gICAgICA+XG4gICAgICAgIHtpc09wZW4gJiYgY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY29yZGlvbih7IGd1ZXN0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEFjY29yZGlvbkNvbnRhaW5lcj5cbiAgICAgIDxBY2NvcmRpb25TZWN0aW9uIHRpdGxlPVwiRXZlbnQgZGV0YWlscyBhbmQgaGlnaGxpZ2h0c1wiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJldmVudC1kZXRhaWxzXCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW52ZW50b3JlXG4gICAgICAgICAgaGFydW0gc2ltaWxpcXVlLCBldCBoaWMgdGVuZXR1ciB0ZW1wb3JhIG5lY2Vzc2l0YXRpYnVzIG5hbSBlYXF1ZVxuICAgICAgICAgIHRlbXBvcmUgcXVpcyBkaWN0YSBleGNlcHR1cmkgcGVyZmVyZW5kaXMgdmVsIGluY2lkdW50LCBkb2xvciBvcHRpbz9cbiAgICAgICAgICBQcmFlc2VudGl1bSwgdm9sdXB0YXRlbT8gUXVpYnVzZGFtP1xuICAgICAgICA8L3A+XG4gICAgICA8L0FjY29yZGlvblNlY3Rpb24+XG4gICAgICA8QWNjb3JkaW9uU2VjdGlvbiB0aXRsZT1cIkhvdyBkbyBJIGpvaW4/XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG93LXRvLWpvaW5cIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgIE91ciBmZWF0dXJlZCBndWVzdHMgb257XCIgXCJ9XG4gICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgU2F0dXJkYXkgMTk8c3VwPnRoPC9zdXA+XG4gICAgICAgICAgICA8L2I+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1ZXN0LWNhcmRzXCI+XG4gICAgICAgICAgICB7Z3Vlc3RzLm1hcCgoZ3Vlc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHdWVzdENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIG5hbWU9e2d1ZXN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2d1ZXN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGltYWdlPXtndWVzdC5pbWFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQWNjb3JkaW9uU2VjdGlvbj5cbiAgICA8L0FjY29yZGlvbkNvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIC50aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG5cbiAgICBidXR0b24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tbXVzdGFyZCk7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG5cbiAgLmJvZHktY29udGFpbmVyIHtcbiAgICB0cmFuc2l0aW9uOiA0MDBtcztcbiAgfVxuXG4gIC5ndWVzdC1jYXJkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuYDtcbmNvbnN0IEFjY29yZGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmV2ZW50LWRldGFpbHMsXG4gIC5ob3ctdG8tam9pbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDQuNXJlbTtcbiAgfVxuXG4gIC5ldmVudC1kZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cblxuICAuaG93LXRvLWpvaW4ge1xuICAgIC5hY2NvcmRpb24tc2VjdGlvbi10aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy95b2dhLWxhbmRpbmctcGFnZS9zcmMvY29tcG9uZW50cy9BY2NvcmRpb24uanM/MTFlOSJdLCJuYW1lcyI6WyJBY2NvcmRpb25TZWN0aW9uIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwib3BhY2l0eSIsIm1heEhlaWdodCIsIkFjY29yZGlvbiIsImd1ZXN0cyIsIm1hcCIsImd1ZXN0IiwiaW5kZXgiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIlNlY3Rpb25Db250YWluZXIiLCJBY2NvcmRpb25Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztxUkFLQSxRQUFTQSxpQkFBVCxDQUEwQixDQUFFQyxRQUFGLENBQVlDLEtBQVosQ0FBMUIsQ0FBK0MsQ0FDN0MsS0FBTSxDQUFDQyxNQUFELENBQVNDLFNBQVQsRUFBc0JDLHNEQUFRLENBQUMsSUFBRCxDQUFwQyxDQUVBLE1BQ0UseUVBQUMsZ0JBQUQsWUFDRSwrRUFBSyxTQUFTLENBQUMsaUJBQWYsV0FDRSxpRkFBUSxPQUFPLENBQUUsSUFBTUQsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBaEMsVUFDR0EsTUFBTSxDQUFHLHVFQUFDLG1FQUFELElBQUgsQ0FBOEIsdUVBQUMsa0VBQUQsSUFEdkMsRUFERixDQUlFLHNGQUFLRCxLQUFMLEVBSkYsR0FERixDQU9FLDhFQUNFLFNBQVMsQ0FBQyxnQkFEWixDQUVFLEtBQUssQ0FBRSxDQUFFSSxPQUFPLENBQUVILE1BQU0sQ0FBRyxDQUFILENBQU8sQ0FBeEIsQ0FBMkJJLFNBQVMsQ0FBRUosTUFBTSxDQUFHLElBQUgsQ0FBVSxDQUF0RCxDQUZULFVBSUdBLE1BQU0sRUFBSUYsUUFKYixFQVBGLEdBREYsQ0FnQkQsQ0FFYyxRQUFTTyxVQUFULENBQW1CLENBQUVDLE1BQUYsQ0FBbkIsQ0FBK0IsQ0FDNUMsTUFDRSx5RUFBQyxrQkFBRCxZQUNFLHVFQUFDLGdCQUFELEVBQWtCLEtBQUssQ0FBQyw4QkFBeEIsVUFDRSw0RUFBRyxTQUFTLENBQUMsZUFBYix5UEFERixFQURGLENBU0UsdUVBQUMsZ0JBQUQsRUFBa0IsS0FBSyxDQUFDLGdCQUF4QixVQUNFLCtFQUFLLFNBQVMsQ0FBQyxhQUFmLFdBQ0UsOEVBQUksU0FBUyxDQUFDLHlCQUFkLG9DQUN5QixHQUR6QixDQUVFLHFHQUNhLDZGQURiLEdBRkYsR0FERixDQU9FLDhFQUFLLFNBQVMsQ0FBQyxhQUFmLFVBQ0dBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLENBQUNDLEtBQUQsQ0FBUUMsS0FBUixHQUNWLHVFQUFDLGtEQUFELEVBRUUsSUFBSSxDQUFFRCxLQUFLLENBQUNFLElBRmQsQ0FHRSxXQUFXLENBQUVGLEtBQUssQ0FBQ0csV0FIckIsQ0FJRSxLQUFLLENBQUVILEtBQUssQ0FBQ0ksS0FKZixFQUNPSCxLQURQLENBREQsQ0FESCxFQVBGLEdBREYsRUFURixHQURGLENBZ0NELENBRUQsS0FBTUksaUJBQWdCLDQySkFBdEIsQ0FrQ0EsS0FBTUMsbUJBQWtCLHV1SkFBeEIiLCJmaWxlIjoiLi9wYWNrYWdlcy95b2dhLWxhbmRpbmctcGFnZS9zcmMvY29tcG9uZW50cy9BY2NvcmRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IHsgQWlPdXRsaW5lUGx1c0NpcmNsZSwgQWlPdXRsaW5lTWludXNDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCBHdWVzdENhcmQgZnJvbSBcIi4vR3Vlc3RDYXJkXCI7XG5cbmZ1bmN0aW9uIEFjY29yZGlvblNlY3Rpb24oeyBjaGlsZHJlbiwgdGl0bGUgfSkge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAgICB7aXNPcGVuID8gPEFpT3V0bGluZU1pbnVzQ2lyY2xlIC8+IDogPEFpT3V0bGluZVBsdXNDaXJjbGUgLz59XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9keS1jb250YWluZXJcIlxuICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBpc09wZW4gPyAxIDogMCwgbWF4SGVpZ2h0OiBpc09wZW4gPyAxMDAwIDogMCB9fVxuICAgICAgPlxuICAgICAgICB7aXNPcGVuICYmIGNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvcmRpb24oeyBndWVzdHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBY2NvcmRpb25Db250YWluZXI+XG4gICAgICA8QWNjb3JkaW9uU2VjdGlvbiB0aXRsZT1cIkV2ZW50IGRldGFpbHMgYW5kIGhpZ2hsaWdodHNcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXZlbnQtZGV0YWlsc1wiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEludmVudG9yZVxuICAgICAgICAgIGhhcnVtIHNpbWlsaXF1ZSwgZXQgaGljIHRlbmV0dXIgdGVtcG9yYSBuZWNlc3NpdGF0aWJ1cyBuYW0gZWFxdWVcbiAgICAgICAgICB0ZW1wb3JlIHF1aXMgZGljdGEgZXhjZXB0dXJpIHBlcmZlcmVuZGlzIHZlbCBpbmNpZHVudCwgZG9sb3Igb3B0aW8/XG4gICAgICAgICAgUHJhZXNlbnRpdW0sIHZvbHVwdGF0ZW0/IFF1aWJ1c2RhbT9cbiAgICAgICAgPC9wPlxuICAgICAgPC9BY2NvcmRpb25TZWN0aW9uPlxuICAgICAgPEFjY29yZGlvblNlY3Rpb24gdGl0bGU9XCJIb3cgZG8gSSBqb2luP1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdy10by1qb2luXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFjY29yZGlvbi1zZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICBPdXIgZmVhdHVyZWQgZ3Vlc3RzIG9ue1wiIFwifVxuICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgIFNhdHVyZGF5IDE5PHN1cD50aDwvc3VwPlxuICAgICAgICAgICAgPC9iPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWVzdC1jYXJkc1wiPlxuICAgICAgICAgICAge2d1ZXN0cy5tYXAoKGd1ZXN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8R3Vlc3RDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBuYW1lPXtndWVzdC5uYW1lfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtndWVzdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpbWFnZT17Z3Vlc3QuaW1hZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0FjY29yZGlvblNlY3Rpb24+XG4gICAgPC9BY2NvcmRpb25Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IFNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAudGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgY29sb3I6IHZhcigtLW11c3RhcmQpO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgfVxuXG4gIC5ib2R5LWNvbnRhaW5lciB7XG4gICAgdHJhbnNpdGlvbjogNDAwbXM7XG4gIH1cblxuICAuZ3Vlc3QtY2FyZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbmA7XG5jb25zdCBBY2NvcmRpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAycmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5ldmVudC1kZXRhaWxzLFxuICAuaG93LXRvLWpvaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA0LjVyZW07XG4gIH1cblxuICAuZXZlbnQtZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgLmhvdy10by1qb2luIHtcbiAgICAuYWNjb3JkaW9uLXNlY3Rpb24tdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/yoga-landing-page/src/components/Accordion.js\n");

/***/ })

})