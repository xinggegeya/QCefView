"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[789],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=d(n),f=r,u=m["".concat(s,".").concat(f)]||m[f]||p[f]||c;return n?a.createElement(u,l(l({ref:t},o),{},{components:n})):a.createElement(u,l({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<c;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9745:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return o},default:function(){return m}});var a=n(7462),r=n(3366),c=(n(7294),n(3905)),l=["components"],i={title:"class QCefEvent"},s='class `QCefEvent` <a class="anchor" id="class_q_cef_event"></a>',d={unversionedId:"reference/QCefEvent",id:"reference/QCefEvent",title:"class QCefEvent",description:"Represents the event sent from native context(C/C++ code) to the web context(javascript)",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/QCefEvent.md",sourceDirName:"reference",slug:"/reference/QCefEvent",permalink:"/QCefView/zh/docs/reference/QCefEvent",tags:[],version:"current",frontMatter:{title:"class QCefEvent"},sidebar:"default",previous:{title:"class QCefContext",permalink:"/QCefView/zh/docs/reference/QCefContext"},next:{title:"class QCefQuery",permalink:"/QCefView/zh/docs/reference/QCefQuery"}},o=[{value:"Summary",id:"summary",children:[],level:2},{value:"Members",id:"members",children:[{value:'<code>public  </code>QCefEvent<code>()</code> <a class="anchor" id="class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5"></a>',id:"public--qcefevent-",children:[],level:3},{value:'<code>public  </code>QCefEvent<code>(const QString &amp; name)</code> <a class="anchor" id="class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c"></a>',id:"public--qcefeventconst-qstring--name-",children:[{value:"Parameters",id:"parameters",children:[],level:4}],level:3},{value:'<code>public  </code>QCefEvent<code>(const </code>QCefEvent<code> &amp; other)</code> <a class="anchor" id="class_q_cef_event_1a357d5cb242977682523e69d501c673d4"></a>',id:"public--qcefeventconst-qcefevent--other-",children:[{value:"Parameters",id:"parameters-1",children:[],level:4}],level:3},{value:'<code>public </code>QCefEvent<code>&amp;</code>operator=<code>(const </code>QCefEvent<code> &amp; other)</code> <a class="anchor" id="class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee"></a>',id:"public-qcefeventoperatorconst-qcefevent--other-",children:[{value:"Parameters",id:"parameters-2",children:[],level:4}],level:3},{value:'<code>public  </code>~QCefEvent<code>()</code> <a class="anchor" id="class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c"></a>',id:"public--qcefevent--1",children:[],level:3},{value:'<code>public void </code>setEventName<code>(const QString &amp; name)</code> <a class="anchor" id="class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a"></a>',id:"public-void-seteventnameconst-qstring--name-",children:[{value:"Parameters",id:"parameters-3",children:[],level:4}],level:3},{value:'<code>public const QString </code>eventName<code>() const</code> <a class="anchor" id="class_q_cef_event_1a5a970c76a348788b15a040c8c405a103"></a>',id:"public-const-qstring-eventname-const-",children:[{value:"Returns",id:"returns",children:[],level:4}],level:3},{value:'<code>public void </code>setArguments<code>(const QVariantList &amp; args)</code> <a class="anchor" id="class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04"></a>',id:"public-void-setargumentsconst-qvariantlist--args-",children:[{value:"Parameters",id:"parameters-4",children:[],level:4}],level:3},{value:'<code>public QVariantList &amp; </code>arguments<code>()</code> <a class="anchor" id="class_q_cef_event_1a4cf70fa60235d723b9e578cded919327"></a>',id:"public-qvariantlist--arguments-",children:[{value:"Returns",id:"returns-1",children:[],level:4}],level:3}],level:2}],p={toc:o};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,c.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"class-qcefevent-"},"class ",(0,c.kt)("inlineCode",{parentName:"h1"},"QCefEvent")," ",(0,c.kt)("a",{class:"anchor",id:"class_q_cef_event"})),(0,c.kt)("p",null,"Represents the event sent from native context(C/C++ code) to the web context(javascript)"),(0,c.kt)("h2",{id:"summary"},"Summary"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Members"),(0,c.kt)("th",{parentName:"tr",align:null},"Descriptions"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public  "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"td"},"()")),(0,c.kt)("td",{parentName:"tr",align:null},"Constructs an event instance")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public  "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"td"},"(const QString & name)")),(0,c.kt)("td",{parentName:"tr",align:null},"Constructs an event instance with name")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public  "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a357d5cb242977682523e69d501c673d4"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"td"},"(const "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"td"}," & other)")),(0,c.kt)("td",{parentName:"tr",align:null},"Constructs an event instance from existing one")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"td"},"&"),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee"},(0,c.kt)("inlineCode",{parentName:"a"},"operator=")),(0,c.kt)("inlineCode",{parentName:"td"},"(const "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"td"}," & other)")),(0,c.kt)("td",{parentName:"tr",align:null},"Assigns an existing event instance to current")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public  "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c"},(0,c.kt)("inlineCode",{parentName:"a"},"~QCefEvent")),(0,c.kt)("inlineCode",{parentName:"td"},"()")),(0,c.kt)("td",{parentName:"tr",align:null},"Destructs the event instance")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public void "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a"},(0,c.kt)("inlineCode",{parentName:"a"},"setEventName")),(0,c.kt)("inlineCode",{parentName:"td"},"(const QString & name)")),(0,c.kt)("td",{parentName:"tr",align:null},"Sets the event name")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public const QString "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a5a970c76a348788b15a040c8c405a103"},(0,c.kt)("inlineCode",{parentName:"a"},"eventName")),(0,c.kt)("inlineCode",{parentName:"td"},"() const")),(0,c.kt)("td",{parentName:"tr",align:null},"Gets the event name")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public void "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04"},(0,c.kt)("inlineCode",{parentName:"a"},"setArguments")),(0,c.kt)("inlineCode",{parentName:"td"},"(const QVariantList & args)")),(0,c.kt)("td",{parentName:"tr",align:null},"Sets the argument list")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public QVariantList & "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a4cf70fa60235d723b9e578cded919327"},(0,c.kt)("inlineCode",{parentName:"a"},"arguments")),(0,c.kt)("inlineCode",{parentName:"td"},"()")),(0,c.kt)("td",{parentName:"tr",align:null},"Gets the argument list")))),(0,c.kt)("h2",{id:"members"},"Members"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public--qcefevent-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public  "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"h3"},"()")," ",(0,c.kt)("a",{class:"anchor",id:"class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5"})),(0,c.kt)("p",null,"Constructs an event instance"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public--qcefeventconst-qstring--name-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public  "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"h3"},"(const QString & name)")," ",(0,c.kt)("a",{class:"anchor",id:"class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c"})),(0,c.kt)("p",null,"Constructs an event instance with name"),(0,c.kt)("h4",{id:"parameters"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"name")," The event name")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public--qcefeventconst-qcefevent--other-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public  "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a357d5cb242977682523e69d501c673d4"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"h3"},"(const "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"h3"}," & other)")," ",(0,c.kt)("a",{class:"anchor",id:"class_q_cef_event_1a357d5cb242977682523e69d501c673d4"})),(0,c.kt)("p",null,"Constructs an event instance from existing one"),(0,c.kt)("h4",{id:"parameters-1"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"other")," The other event instance")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-qcefeventoperatorconst-qcefevent--other-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"h3"},"&"),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee"},(0,c.kt)("inlineCode",{parentName:"a"},"operator=")),(0,c.kt)("inlineCode",{parentName:"h3"},"(const "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,c.kt)("inlineCode",{parentName:"h3"}," & other)")," ",(0,c.kt)("a",{class:"anchor",id:"class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee"})),(0,c.kt)("p",null,"Assigns an existing event instance to current"),(0,c.kt)("h4",{id:"parameters-2"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"other")," The other event instance")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public--qcefevent--1"},(0,c.kt)("inlineCode",{parentName:"h3"},"public  "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c"},(0,c.kt)("inlineCode",{parentName:"a"},"~QCefEvent")),(0,c.kt)("inlineCode",{parentName:"h3"},"()")," ",(0,c.kt)("a",{class:"anchor",id:"class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c"})),(0,c.kt)("p",null,"Destructs the event instance"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-void-seteventnameconst-qstring--name-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public void "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a"},(0,c.kt)("inlineCode",{parentName:"a"},"setEventName")),(0,c.kt)("inlineCode",{parentName:"h3"},"(const QString & name)")," ",(0,c.kt)("a",{class:"anchor",id:"class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a"})),(0,c.kt)("p",null,"Sets the event name"),(0,c.kt)("h4",{id:"parameters-3"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"name")," The name to be set")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-const-qstring-eventname-const-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public const QString "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a5a970c76a348788b15a040c8c405a103"},(0,c.kt)("inlineCode",{parentName:"a"},"eventName")),(0,c.kt)("inlineCode",{parentName:"h3"},"() const")," ",(0,c.kt)("a",{class:"anchor",id:"class_q_cef_event_1a5a970c76a348788b15a040c8c405a103"})),(0,c.kt)("p",null,"Gets the event name"),(0,c.kt)("h4",{id:"returns"},"Returns"),(0,c.kt)("p",null,"The event name"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-void-setargumentsconst-qvariantlist--args-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public void "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04"},(0,c.kt)("inlineCode",{parentName:"a"},"setArguments")),(0,c.kt)("inlineCode",{parentName:"h3"},"(const QVariantList & args)")," ",(0,c.kt)("a",{class:"anchor",id:"class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04"})),(0,c.kt)("p",null,"Sets the argument list"),(0,c.kt)("h4",{id:"parameters-4"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"args")," The argument list")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-qvariantlist--arguments-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public QVariantList & "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a4cf70fa60235d723b9e578cded919327"},(0,c.kt)("inlineCode",{parentName:"a"},"arguments")),(0,c.kt)("inlineCode",{parentName:"h3"},"()")," ",(0,c.kt)("a",{class:"anchor",id:"class_q_cef_event_1a4cf70fa60235d723b9e578cded919327"})),(0,c.kt)("p",null,"Gets the argument list"),(0,c.kt)("h4",{id:"returns-1"},"Returns"),(0,c.kt)("p",null,"The argument list"))}m.isMDXComponent=!0}}]);