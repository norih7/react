(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(151),o=n(160);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to your new Gatsby site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement(i.Link,{to:"/page-2/"},"Go to page 2"))}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(1),o=n.n(i),u=n(150),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(152),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},157:function(e,t,n){"use strict";n.r(t);n(25);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),u=n(52),c=n(3),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},159:function(e,t,n){},160:function(e,t,n){"use strict";var a=n(156),r=n(0),i=n.n(r),o=n(1),u=n.n(o),c=n(161),l=n.n(c),s=n(151),d=(n(51),n(162),n(82),n(83),n(8)),p=n.n(d),m=n(163);m.init({dsn:"https://567894280ac245f6b26219eddeef2ad8@sentry.io/1310571"});var f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={error:null},n}p()(t,e);var n=t.prototype;return n.componentDidCatch=function(e,t){this.setState({error:e}),m.withScope(function(n){Object.keys(t).forEach(function(e){n.setExtra(e,t[e])}),m.captureException(e)})},n.render=function(){return this.state.error?i.a.createElement("a",{onClick:function(){return m.showReportDialog()}},"Report feedback"):this.props.children},t}(i.a.Component),h=n(53),y=function(e){function t(){var t;return(t=e.call(this)||this).handleButtonClick=void 0,t}p()(t,e);var n=t.prototype;return n.handleButtonClick=function(e){e.preventDefault(),this.props.handleClick()},n.render=function(){var e=this;return i.a.createElement("div",null,i.a.createElement("button",{onClick:function(t){return e.handleButtonClick(t)}},"Make Popup"))},t}(i.a.Component);function g(){}var E=function(){return i.a.createElement("div",null,i.a.createElement("button",{onClick:g},"error"))},v=function(e){var t=e.siteTitle,n=e.increment;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement(E,null),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"},onClick:n},i.a.createElement(y,null),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},b=Object(h.b)(function(e){return{count:e.count}},function(e){return{increment:function(){return e({type:"INCREMENT"})}}})(v),k=(n(159),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"2924840780",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"ja"})),i.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t)))},data:a})});k.propTypes={children:u.a.node.isRequired};t.a=k}}]);
//# sourceMappingURL=component---src-pages-index-js-9b2792ead3ebe6188bc2.js.map