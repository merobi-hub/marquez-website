"use strict";(self.webpackChunkmarquez_website=self.webpackChunkmarquez_website||[]).push([[959],{1642:function(e,t,r){var n=r(7294),a=r(5444),l=r(1496),o=r(7581);t.Z=function(e){var t,r=e.data,c=(0,n.useState)(!1);c[0],c[1];return n.createElement("div",{className:"blog-item w-full md:w-1/2 lg:w-1/3 p-4"},n.createElement(a.rU,{to:r.fields.slug,title:r.frontmatter.title},n.createElement("div",{className:"image"},r.frontmatter.image.publicURL.endsWith(".svg")?n.createElement("img",{src:r.frontmatter.image.publicURL,alt:r.frontmatter.title,className:"w-full"}):n.createElement(l.Z,{fluid:null===(t=r.frontmatter.image.childImageSharp)||void 0===t?void 0:t.fluid,alt:r.frontmatter.title,className:"w-full"})),n.createElement("div",{className:"p-4 py-3"},n.createElement("h4",{className:"text-color-1 text-3xl pt-1"},r.frontmatter.title),n.createElement("div",{className:"flex items-center text-secondary"},n.createElement(o.Z,{className:"stroke-current"}),n.createElement("p",{className:"pl-2 text-color-default font-sans"},r.frontmatter.date," by ",r.frontmatter.author)),n.createElement("p",{className:"pt-3 text-color-default"},r.frontmatter.description))))}},4238:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(7294),a=r(1598),l=r(1642),o=r(5444);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=(0,n.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,l=e.size,o=void 0===l?24:l,s=i(e,["color","size"]);return n.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("polyline",{points:"15 18 9 12 15 6"}))}));s.displayName="ChevronLeft";var u=s;function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=(0,n.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,l=e.size,o=void 0===l?24:l,c=f(e,["color","size"]);return n.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("polyline",{points:"9 18 15 12 9 6"}))}));p.displayName="ChevronRight";var g=p;function d(e){var t=e.pageContext,r=e.type;if(t.numPages>1){var a=Array.from({length:t.numPages}).map((function(e,a){return n.createElement(v,{type:r,currentPage:t.currentPage,page:a+1,key:"p-b-i-"+a})}));return n.createElement("div",{className:"pagination mt-8"},n.createElement("ul",{className:"text-center"},1!==t.currentPage&&n.createElement(v,{type:r,currentPage:t.currentPage,page:t.currentPage-1,icon:n.createElement(u,null),title:"Previous Page"}),a,t.currentPage!==t.numPages&&n.createElement(v,{type:r,currentPage:t.currentPage,page:t.currentPage+1,icon:n.createElement(g,null),title:"Next Page"})))}return n.createElement(n.Fragment,null)}var v=function(e){var t=e.type,r=e.currentPage,a=e.title,l=e.page,c=e.icon,i="/"+t+"/"+(1===l?"":l),s=!c&&l===r,u=a||""+t.charAt(0).toUpperCase()+t.slice(1)+" - Page "+l;return n.createElement("li",{className:"inline-block align-middle"},n.createElement(o.rU,{to:i,title:u,className:"rounded-full bg-bgalt flex items-center justify-center w-12 text-center h-12 m-3 transition-all duration-300 hover:shadow-2xl focus:shadow-2xl "+(s?"bg-gradient-primary text-white shadow-2xl":"")},n.createElement("span",null,c||l)))};function h(e){var t=e.data,r=e.pageContext,o=e.location,c=t.allMdx.edges.map((function(e){return n.createElement(l.Z,{data:e.node,key:e.node.id})}));return n.createElement(a.Z,{seo:{title:"Blog"},location:o},n.createElement("div",{className:"container mx-auto py-12"},n.createElement("div",{className:"title py-12 text-center"},n.createElement("h2",{className:"text-5xl text-color-1"},"Blog")),n.createElement("div",{className:"flex flex-wrap"},c),n.createElement(d,{pageContext:r,type:"blog"})))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-tsx-ea9b093179436a478287.js.map