"use strict";(self.webpackChunkseewhatiwilldo_spa=self.webpackChunkseewhatiwilldo_spa||[]).push([[678],{8771:function(e,t,l){var a=l(7294),n=l(1597);t.Z=function(){var e,t,l=(0,n.useStaticQuery)("3330994021"),o=null===(e=l.site.siteMetadata)||void 0===e?void 0:e.author,r=null===(t=l.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},(null==o?void 0:o.name)&&a.createElement("p",null,"Written by ",a.createElement("strong",null,o.name),a.createElement("br",null),a.createElement("a",{href:"https://www.facebook.com/"+(null==r?void 0:r.facebook)},"Follow our page on Facebook.")))}},6558:function(e,t,l){l.r(t);var a=l(7294),n=l(1597),o=l(8945),r=l(8771),i=l(2684),c=l(262);t.default=function(e){var t,l=e.data,s=e.location,m=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=l.allMarkdownRemark.nodes;return 0===u.length?a.createElement(i.Z,{location:s,title:m},a.createElement(c.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(i.Z,{location:s,title:m},a.createElement(c.Z,{title:"All posts"}),a.createElement("div",{class:"row gx-4 gx-lg-5 justify-content-center"},a.createElement("div",{class:"col-md-10 col-lg-8 col-xl-7"},u.map((function(e){var t=e.frontmatter.title||e.fields.slug,l=e.featuredImage;return console.log(e),a.createElement("div",{key:e.fields.slug},a.createElement("article",{className:"post-preview",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement(o.G,{image:l,alt:e.frontmatter.title}),a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ba324ab7c65ff961007a.js.map