(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(3),s=c.n(a),i=c(4),o=c(5),d=c(6),j=c(8),b=c(7),l=c(0),u=function(e){var t=e.title,c=e.children;return Object(l.jsxs)("section",{children:[t&&Object(l.jsx)("h2",{children:t}),c]})},h=function(e){var t=e.options,c=e.onLeaveFeedback;return t.map((function(e){return Object(l.jsx)("button",{className:e,type:"button",onClick:function(){return c(e)},children:e},e)}))},O=function(e){var t=e.good,c=e.neutral,n=e.bad,r=e.total,a=e.positivePercentage;return Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Good"}),Object(l.jsx)("th",{children:"Neutral"}),Object(l.jsx)("th",{children:"Bad"}),Object(l.jsx)("th",{children:"Total"}),Object(l.jsx)("th",{children:"Positive feedback"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t}),Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:r}),Object(l.jsxs)("td",{children:[a,"%"]})]})})]})},x=function(e){var t=e.message;return Object(l.jsx)("div",{children:t})},f=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)||0},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{title:"Please leave your feedback",children:Object(l.jsx)(h,{options:Object.keys(this.state),onLeaveFeedback:this.handleFeedback})}),this.countTotalFeedback()?Object(l.jsx)(u,{title:"Statistics",children:Object(l.jsx)(O,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(l.jsx)(x,{message:"No feedback given"})]})}}]),c}(n.Component),v=f;c(14),c(15);s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7092b26a.chunk.js.map