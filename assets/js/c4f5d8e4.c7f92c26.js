(window.webpackJsonp=window.webpackJsonp||[]).push([[25,4],{117:function(e,n,a){"use strict";var r=a(0),c=a.n(r),t=a(114),s=a.n(t),o=a(105),i=a(22);n.a=function(e){var n=Object(r.useRef)(!1),t=Object(r.useRef)(null),u=Object(o.useHistory)(),l=Object(i.default)().siteConfig,d=(void 0===l?{}:l).baseUrl,h=function(){n.current||(Promise.all([fetch(d+"search-doc.json").then((function(e){return e.json()})),fetch(d+"lunr-index.json").then((function(e){return e.json()})),Promise.all([a.e(34),a.e(37)]).then(a.bind(null,125)),a.e(24).then(a.t.bind(null,124,7))]).then((function(e){!function(e,n,a){0!==e.length&&new a({searchDocs:e,searchIndex:n,inputSelector:"#search_input_react",handleSelected:function(e,n,a){var r=d+a.url;document.createElement("a").href=r,u.push(r)}})}(e[0],e[1],e[2].default)})),n.current=!0)},f=Object(r.useCallback)((function(n){t.current.contains(n.target)||t.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:f,onBlur:f,ref:t}))}},92:function(e,n,a){"use strict";a.r(n);var r=a(0),c=a.n(r),t=(a(103),a(116),a(108),a(22)),s=(a(109),a(93),a(105));n.default=function(){return Object(t.default)().siteConfig,c.a.createElement(s.Redirect,{to:"docs/"})}}}]);