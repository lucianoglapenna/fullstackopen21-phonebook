(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r=t(17),c=t.n(r),a=t(18),o=t(5),i=t(6),u=t(2),s=t(4),l=t.n(s),d="/api/persons",j={getAll:function(){return l.a.get(d).then((function(e){return e.data}))},create:function(e){return l.a.post(d,e).then((function(e){return e.data}))},update:function(e,n){return l.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return l.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))}},h=(t(41),t(0)),b=function(e){var n=e.text;return Object(h.jsx)("h2",{children:n})},f=function(e){var n=e.value,t=e.handleChange;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{onChange:function(e){t((function(n){return Object(i.a)(Object(i.a)({},n),{},{name:e.target.value})}))},value:n.name})]}),Object(h.jsxs)("div",{children:["phone: ",Object(h.jsx)("input",{onChange:function(e){t((function(n){return Object(i.a)(Object(i.a)({},n),{},{number:e.target.value})}))},value:n.number})]})]})},m=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})},O=function(e){var n=e.newPerson,t=e.handleSubmit,r=e.handleChange;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{text:"Add new Person"}),Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsx)(f,{handleChange:r,value:n}),Object(h.jsx)(m,{})]})]})},x=function(e){var n=e.person,t=e.refresh,r=e.handleError,c=e.handleNotification;return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{style:{paddingRight:"15px"},children:[n.name,":"]}),Object(h.jsx)("td",{children:n.number}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){window.confirm("Do you really want to delete ".concat(n.name,"?"))&&j.remove(n.id).then((function(){c("".concat(n.name," deleted successfully.")),t()})).catch((function(e){r("".concat(n.name," has already been deleted from server")),t()}))},children:"Delete"})})]})},p=function(e){var n=e.persons,t=e.filter,r=e.refresh,c=e.handleError,a=e.handleNotification,o=""===t?n:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{text:"Numbers"}),Object(h.jsx)("table",{children:Object(h.jsx)("tbody",{children:o.map((function(e){return Object(h.jsx)(x,{person:e,refresh:r,handleError:c,handleNotification:a},"".concat(e.id))}))})})]})},v=function(e){var n=e.value,t=e.handleChangeFilter;return Object(h.jsxs)("div",{children:["Search: ",Object(h.jsx)("input",{value:n,onChange:t})]})},g=function(e){var n=e.notification;return""!==n.message?Object(h.jsx)("div",{className:n.error?"error":"success",children:n.message}):null},C=function(){var e={name:"",number:""},n=Object(u.useState)([e]),t=Object(o.a)(n,2),r=t[0],c=t[1],i=Object(u.useState)(e),s=Object(o.a)(i,2),l=s[0],d=s[1],f=Object(u.useState)(""),m=Object(o.a)(f,2),x=m[0],C=m[1],w=Object(u.useState)({message:"",error:!0}),y=Object(o.a)(w,2),k=y[0],S=y[1],E=function(e){S({message:e,error:!0}),P()},N=function(e){S({message:e,error:!1}),P()},P=function(){setTimeout((function(){return S({message:"",error:!1})}),5e3)},F=function(){j.getAll().then((function(e){return c(e)})).catch((function(e){E("Error while requesting all entries.")}))};return Object(u.useEffect)(F,[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{text:"Phonebook"}),Object(h.jsx)(g,{notification:k}),Object(h.jsx)(v,{value:x,handleChangeFilter:function(e){C(e.target.value)}}),Object(h.jsx)(O,{newPerson:l,handleSubmit:function(e){if(e.preventDefault(),-1===r.findIndex((function(e){return e.name===l.name})))j.create(l).then((function(e){c([].concat(Object(a.a)(r),[e])),N("Phonebook entry created successfully")})).catch((function(e){E("Cannot create phonebook entry.")})),d({name:"",number:""});else if(window.confirm("".concat(l.name," is already in the phonebook, replace the old number?"))){var n=r.filter((function(e){return e.name===l.name}))[0].id;j.update(n,l).then((function(){N("".concat(l.name,"'s number updated successfully.")),F()})).catch((function(e){return E("Cannot update ".concat(l.name,"'s number."))}))}},handleChange:d}),Object(h.jsx)(p,{filter:x,persons:r,refresh:F,handleError:E,handleNotification:N})]})};c.a.render(Object(h.jsx)(C,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.95222e85.chunk.js.map