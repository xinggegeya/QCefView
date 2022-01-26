"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[215],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,h=u["".concat(c,".").concat(f)]||u[f]||s[f]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7453:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},c="Load WebApp Resource",p={unversionedId:"guide/LoadWebResource",id:"guide/LoadWebResource",title:"Load WebApp Resource",description:"To load the web resource, QCefView provide 4 methods to achieve it.",source:"@site/docs/guide/LoadWebResource.md",sourceDirName:"guide",slug:"/guide/LoadWebResource",permalink:"/QCefView/docs/guide/LoadWebResource",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"default",previous:{title:"First Project",permalink:"/QCefView/docs/guide/FirstProject"},next:{title:"Interoperability",permalink:"/QCefView/docs/guide/Interoperability"}},d=[{value:"1. Load Online Web Resource",id:"1-load-online-web-resource",children:[],level:3},{value:"2. Load Local File With File Path",id:"2-load-local-file-with-file-path",children:[],level:3},{value:"3. Add Local Folder Mapping",id:"3-add-local-folder-mapping",children:[],level:3},{value:"4. Add Local Archive Mapping",id:"4-add-local-archive-mapping",children:[],level:3},{value:"Use Cases",id:"use-cases",children:[],level:3}],s={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"load-webapp-resource"},"Load WebApp Resource"),(0,a.kt)("p",null,"To load the web resource, QCefView provide 4 methods to achieve it."),(0,a.kt)("h3",{id:"1-load-online-web-resource"},"1. Load Online Web Resource"),(0,a.kt)("p",null,"You can pass the full URL of the webpage to the constructor of QCefView."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'  // build settings for per QCefView\n  QCefSetting setting;\n\n  // create the QCefView widget and add it to the layout container\n  QCefView* cefView = new QCefView("https://google.com", &setting, nullptr);\n')),(0,a.kt)("h3",{id:"2-load-local-file-with-file-path"},"2. Load Local File With File Path"),(0,a.kt)("p",null,'Pass the absolute file path of the web resource file to the constructor of QCefView. Note the file path must be started by "file://" schema.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'  // build the path to the web resource\n  QDir dir = QCoreApplication::applicationDirPath();\n  QString webResourceDir = QString("file://") + QDir::toNativeSeparators(dir.filePath("webres/index.html"));\n\n  // build settings for per QCefView\n  QCefSetting setting;\n\n  // create the QCefView widget and add it to the layout container\n  QCefView* cefView = new QCefView(INDEX_URL, &setting, nullptr);\n')),(0,a.kt)("h3",{id:"3-add-local-folder-mapping"},"3. Add Local Folder Mapping"),(0,a.kt)("p",null,"If you need to load the entire WebApp output folder, you can choose to add a local folder mapping item with the following method:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"public void "),(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454"},(0,a.kt)("inlineCode",{parentName:"a"},"addLocalFolderResource")),(0,a.kt)("inlineCode",{parentName:"p"},"(const QString & path,const QString & url,int priority)")),(0,a.kt)("p",null,"For example, you build the WebApp project and get the output folder ",(0,a.kt)("inlineCode",{parentName:"p"},"webres"),", the folder structure is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"full\\path\\to\\webres\n                \u2502   index.html\n                \u251c\u2500\u2500\u2500assets\n                \u251c\u2500\u2500\u2500docs\n                \u251c\u2500\u2500\u2500img\n")),(0,a.kt)("p",null,"You can add a mapping item with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},' // add a local folder to URL map\n  QCefContext::instance()->addLocalFolderResource(\n      "full\\\\path\\\\to\\\\webres", \n      "https://domainname"              // This could be any URL you need\n      );\n\n  // build settings for per QCefView\n  QCefSetting setting;\n\n  // create the QCefView widget and add it to the layout container\n  QCefView* cefView = new QCefView(\n      "https://domainname/index.html", \n      &setting, \n      this\n      );\n')),(0,a.kt)("p",null,"After added the mapping item, you can access all the resource with the URL root appended by the resource relative path."),(0,a.kt)("h3",{id:"4-add-local-archive-mapping"},"4. Add Local Archive Mapping"),(0,a.kt)("p",null,"The resource mapping can also be URL to archive file, add it with the following method:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"public void "),(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext#class_q_cef_context_1a007272d5df4016143f6b9e221a3b0eb1"},(0,a.kt)("inlineCode",{parentName:"a"},"addArchiveResource")),(0,a.kt)("inlineCode",{parentName:"p"},"(const QString & path,const QString & url,const QString & password)")),(0,a.kt)("p",null,"You need to keep the folder structure in the archive file, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"full\\path\\to\\webres.zip\n                \u2502   index.html\n                \u251c\u2500\u2500\u2500assets\n                \u251c\u2500\u2500\u2500docs\n                \u251c\u2500\u2500\u2500img\n")),(0,a.kt)("p",null,"You can add a mapping item with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},' // add a local zip file to URL map\n QCefContext::instance()->addArchiveResource(\n     "full\\\\path\\\\to\\\\webres.zip", \n     "https://domainname",\n     "password"                 // pass the password of the zip file if needed\n     );\n\n  // build settings for per QCefView\n  QCefSetting setting;\n\n  // create the QCefView widget and add it to the layout container\n  QCefView* cefView = new QCefView(\n      "https://domainname/index.html", \n      &setting, \n      this\n      );\n')),(0,a.kt)("h3",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"The above 3 & 4 are very useful when you develop your WebApp with the popular framework like React, Vue or some others, especially you are building SAP WebApp."))}u.isMDXComponent=!0}}]);