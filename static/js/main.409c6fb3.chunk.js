(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{38:function(e,t,i){e.exports={doneTask:"Todolist_doneTask__3AjOy",buttons:"Todolist_buttons__X86vo",title:"Todolist_title__1dF2V"}},65:function(e,t,i){},66:function(e,t,i){},73:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),a=i(9),l=i.n(a),r=(i(65),i(13)),s=i(27),o=i(24),d=i(17),j=(i(66),i(115)),u=i(105),b=i(106),O=i(5),f=function(e){var t=Object(n.useState)(""),i=Object(d.a)(t,2),c=i[0],a=i[1],l=Object(n.useState)(!1),r=Object(d.a)(l,2),s=r[0],o=r[1],f=function(){c.trim()?(e.callback(c.trim()),a("")):(o(!0),a(""))};return Object(O.jsxs)("div",{children:[Object(O.jsx)(j.a,{size:"small",id:"standard-size-small",label:"Title",variant:"outlined",value:c,onChange:function(e){a(e.currentTarget.value),o(!1)},onKeyPress:function(e){"Enter"===e.key&&f()},error:s,helperText:s&&"Title is required!",style:{marginBottom:"10px"}}),Object(O.jsx)(u.a,{size:"small",onClick:f,"aria-label":"delete",color:"primary",style:{margin:"5px"},children:Object(O.jsx)(b.a,{})})]})},h=i(38),m=i.n(h),x=function(e){var t=Object(n.useState)(!1),i=Object(d.a)(t,2),c=i[0],a=i[1],l=Object(n.useState)(e.title),r=Object(d.a)(l,2),s=r[0],o=r[1],u=function(){a(!1),e.changeTitle(s)};return Object(O.jsx)(O.Fragment,{children:c?Object(O.jsx)(j.a,{style:{width:"150px"},size:"small",id:"standard-size-small",label:"Title",autoFocus:!0,onBlur:u,value:s,onChange:function(e){o(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&u()}}):Object(O.jsx)("span",{onDoubleClick:function(){return a(!0)},children:e.title})})},T=i(108),v=i(117),g=i(107);function p(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:m.a.title,children:[Object(O.jsx)(u.a,{"aria-label":"delete",size:"small",onClick:function(){return e.removeTodoList(e.id)},children:Object(O.jsx)(g.a,{})}),Object(O.jsx)(x,{title:e.title,changeTitle:function(t){return e.changeTodoListTitle(t,e.id)}})]}),Object(O.jsx)("div",{children:Object(O.jsx)(f,{callback:function(t){return e.addTask(t,e.id)}})}),Object(O.jsxs)("div",{className:m.a.buttons,children:[Object(O.jsx)(T.a,{size:"small",onClick:function(){return e.changeTodoListFilter("all",e.id)},variant:"contained",color:"all"===e.filter?"secondary":"primary",children:"All"}),Object(O.jsx)(T.a,{size:"small",onClick:function(){return e.changeTodoListFilter("active",e.id)},variant:"contained",color:"active"===e.filter?"secondary":"primary",children:"Active"}),Object(O.jsx)(T.a,{size:"small",onClick:function(){return e.changeTodoListFilter("completed",e.id)},variant:"contained",color:"completed"===e.filter?"secondary":"primary",children:"Completed"})]}),Object(O.jsx)("ul",{children:e.tasks.map((function(t){return Object(O.jsxs)("li",{className:t.isDone?m.a.doneTask:"",children:[Object(O.jsx)(v.a,{checked:t.isDone,onChange:function(i){return e.changeTaskStatus(i.currentTarget.checked,t.id,e.id)},size:"small",color:"primary"}),Object(O.jsx)(x,{title:t.title,changeTitle:function(i){return e.changeTaskTitle(i,t.id,e.id)}}),Object(O.jsx)(u.a,{"aria-label":"delete",size:"small",onClick:function(){e.removeTask(t.id,e.id)},children:Object(O.jsx)(g.a,{})})]},t.id)}))})]})}var k=i(116),y=i(109),C=i(74),D=i(110),L=i(111),S=i(113),F=i(114),z=i(112);var _=function(){var e,t=Object(k.a)(),i=Object(k.a)(),c=Object(n.useState)([{id:t,title:"What to learn?",filter:"all"},{id:i,title:"What to buy?",filter:"all"}]),a=Object(d.a)(c,2),l=a[0],j=a[1],b=Object(n.useState)((e={},Object(o.a)(e,t,[{id:Object(k.a)(),title:"HTML&CSS",isDone:!0},{id:Object(k.a)(),title:"JS",isDone:!0},{id:Object(k.a)(),title:"ReactJS",isDone:!1},{id:Object(k.a)(),title:"Rest API",isDone:!1},{id:Object(k.a)(),title:"GraphQL",isDone:!1}]),Object(o.a)(e,i,[{id:Object(k.a)(),title:"Bear",isDone:!1},{id:Object(k.a)(),title:"Milk",isDone:!1}]),e)),h=Object(d.a)(b,2),m=h[0],x=h[1],v=function(e,t){var i={id:Object(k.a)(),title:e,isDone:!1};m[t]=[i].concat(Object(s.a)(m[t])),x(Object(r.a)({},m))},g=function(e,t){m[t]=m[t].filter((function(t){return t.id!==e})),x(Object(r.a)({},m))},_=function(e,t,i){m[i]=m[i].map((function(i){return i.id===t?Object(r.a)(Object(r.a)({},i),{},{isDone:e}):i})),x(Object(r.a)({},m))},N=function(e,t,i){m[i]=m[i].map((function(i){return i.id===t?Object(r.a)(Object(r.a)({},i),{},{title:e}):i})),x(Object(r.a)({},m))},B=function(e,t){l=l.map((function(i){return i.id===t?Object(r.a)(Object(r.a)({},i),{},{filter:e}):i})),j(Object(s.a)(l))},P=function(e){l=l.filter((function(t){return t.id!==e})),j(Object(s.a)(l)),delete m[e]},w=function(e,t){l=l.map((function(i){return i.id===t?Object(r.a)(Object(r.a)({},i),{},{title:e}):i})),j(Object(s.a)(l))},A=function(e){switch(e.filter){case"active":return m[e.id].filter((function(e){return!e.isDone}));case"completed":return m[e.id].filter((function(e){return e.isDone}));default:return m[e.id]}},J=l.map((function(e){return Object(O.jsx)(y.a,{item:!0,children:Object(O.jsx)(C.a,{elevation:5,className:"tdl",children:Object(O.jsx)(p,{id:e.id,title:e.title,filter:e.filter,tasks:A(e),removeTask:g,addTask:v,changeTaskStatus:_,changeTodoListFilter:B,removeTodoList:P,changeTodoListTitle:w,changeTaskTitle:N},e.id)})},e.id)}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(D.a,{position:"static",children:Object(O.jsxs)(L.a,{className:"appBar",children:[Object(O.jsx)(u.a,{color:"inherit","aria-label":"menu",children:Object(O.jsx)(z.a,{})}),Object(O.jsx)(S.a,{variant:"h6",children:"TodoLists"}),Object(O.jsx)(T.a,{variant:"outlined",color:"inherit",children:"Login"})]})}),Object(O.jsxs)(F.a,{fixed:!0,children:[Object(O.jsx)(y.a,{container:!0,className:"addTdlGrid",children:Object(O.jsx)(f,{callback:function(e){var t=Object(k.a)(),i={id:t,title:e,filter:"all"};j([].concat(Object(s.a)(l),[i])),x(Object(r.a)(Object(r.a)({},m),{},Object(o.a)({},t,[])))}})}),Object(O.jsx)(y.a,{container:!0,spacing:5,className:"tdlsGrid",children:J})]})]})},N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,119)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,l=t.getTTFB;i(e),n(e),c(e),a(e),l(e)}))};l.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root")),N()}},[[73,1,2]]]);
//# sourceMappingURL=main.409c6fb3.chunk.js.map