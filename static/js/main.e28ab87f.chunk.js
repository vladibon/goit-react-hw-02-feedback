(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),s=n(4),i=n(5),d=n(6),u=n(8),b=n(7),l=n(0),j=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(l.jsx)("button",{className:e,type:"button",onClick:function(){return n(e)},children:e},e)}))},h=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:["Good: ",t]}),Object(l.jsxs)("div",{children:["Neutral: ",n]}),Object(l.jsxs)("div",{children:["Bad: ",c]}),Object(l.jsxs)("div",{children:["Total: ",a]}),Object(l.jsxs)("div",{children:["Positive feedback: ",r,"%"]})]})},v=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)||0},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"feedback",children:[Object(l.jsx)("h2",{children:"Please leave your feedback"}),Object(l.jsx)(j,{options:Object.keys(this.state),onLeaveFeedback:this.handleFeedback}),Object(l.jsx)("h2",{children:"Statistics"}),Object(l.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(c.Component),O=v;n(14),n(15);o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e28ab87f.chunk.js.map